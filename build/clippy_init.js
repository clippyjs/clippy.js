/*
 * Logic to load ClippyJS while preserving global jQuery version 1.4.4.
 * @see https://github.com/smore-inc/clippy.js
 *
 * How to use:
 * Clippy will only activate on Apr 1, 2019. It first checks bandwidth (if it can),
 * and checks to make sure that "data saver" isn't enabled. It also checks to
 * make sure the viewport width is greater than 1000px.
 *
 * URL parameters:
 * You can pass in a 'debug' parameter into the URL to output console info on why Clippy is or
 * is not loading.
 * You can pass in a 'showmesomeclippy' parameter to show clippy no matter the date.
 *
 * Example: https://drupal.org?showmesomeclippy&debug
 *
 * Created by the contribution sprint at Florida DrupalCamp (www.fldrupal.camp) with
 * special thanks to Mike Herchel (mherchel), John Tucker, Mike Anello (ultimike), and Jordana Fung (jordana).
 * @see https://photos.app.goo.gl/QveFZvhDaY9KRnoj9
 */
(function() {
  debugMode('Original global jQuery version: ' + window.jQuery.fn.jquery);

  if (loadClippy()) {
    // Preserve jQuery 1.44.
    window.jQueryOld = window.jQuery;

    // If $ is used, preserve that up, too (similar to jQuery no conflict mode).
    if ('$' in window) {
      window.$old = window.$
    };

    // Download jQuery 1.7. This overwrites the window.jQuery namespace.
    jQuery.getScript('/sites/all/libraries/clippy.js/build/jquery-1.7.2.min.js', function() {

      // Once the new version of jQuery is downloaded. Move it over to jQueryNew, and restore the original.
      window.jQueryNew = window.jQuery;
      window.jQuery = window.jQueryOld;

      // Restore the $ if it was in use.
      if ('$old' in window) {
        window.$ = window.$old
      };

      // Load the Clippy script and then instantiate it! 😎
      jQueryNew.ajaxSetup({ cache: true });
      jQueryNew.getScript('/sites/all/libraries/clippy.js/build/clippy.js', function() {
        clippy.load('Clippy', runClippyRun);
        debugMode('Final global jQuery version: ' + window.jQuery.fn.jquery);
      });
    });
  }

  /*
   * Logic to determine if Clippy even load ¯\_(ツ)_/¯
   */
  function loadClippy() {

    // Abort if we don't support native JavaScript promises.
    var isAsyncSupported;
    try {
      isAsyncSupported = eval(`typeof Object.getPrototypeOf(async function() {}).constructor === 'function'`);
    }
    catch (exception) {
      isAsyncSupported = false;
    }

    // Look for a querystring to disable clippy.
    var clippyQuerystring = (new URL(document.location)).searchParams;
    if (clippyQuerystring.get('noclippy') != null) {
      disableClippy();
    }

    if (!isAsyncSupported) {
      debugMode('This browser doesn\'t support async/await.');
      return false;
    }

    if (clippyDisabled()) {
      debugMode('Clippy is disabled.');
      return false;
    }

    // Should we show Clippy no matter what?
    if (alwaysShowClippy()) {
      debugMode('"Always show Clippy" enabled.');
      return true;
    }

    // If we can detect the network speed, and we determine it's not fast, we do not load Clippy 😞.
    // We also check if Data Saver is enabled. If it is, we don't load Clippy.
    if (navigator && navigator.connection && navigator.connection.effectiveType) {
      if (navigator.connection.effectiveType != '4g' || navigator.connection.saveData) {
        debugMode('Connection speed not sufficient or data saver enabled.');
        return false;
      }
    }

    // If the window width is not at least 1000px, don't load Clippy 😞.
    if (!matchMedia('(min-width: 1000px)').matches) {
      debugMode('Viewport width to small to load Clippy.')
      return false;
    }

    // var date = 'April 01, 2019';
    var date = 'April 01, 2019';
    var startDate = new Date(date + ' 00:00:00');
    var endDate = new Date(date + ' 23:59:59');
    var CurrentDate = new Date();

    // If it's not April fools day, don't load Clippy 😞.
    if (CurrentDate < startDate || CurrentDate > endDate) {
      debugMode('Today\'s not the correct day to load Clippy. Try between\n' + startDate + ' and \n' + endDate + '\nRight now is\n' + CurrentDate);
      return false;
    }

    debugMode('We\'re loading Clippy!');
    return true; // Load Clippy! 😆
  }

  /*
   * Always Show Clippy -- no matter the date.
   *
   * To use, append a 'showmesomeclippy' parameter into the querystring.
   */
  function alwaysShowClippy() {
    var urlSearchParams = (new URL(document.location)).searchParams;
    return urlSearchParams.get('showmesomeclippy') != null;
  }

  function clippyDisabled() {
    return localStorage.getItem(noClippy) == 'noClippy';
  }

  function disableClippy() {
    localStorage.setItem('noClippy', 'noClippy');
  }

  /*
   * Are we in debug mode?
   *
   * This will also log any data passed into it.
   */
  function debugMode(params) {
    var urlSearchParams = (new URL(document.location)).searchParams;
    var debug = urlSearchParams.get('debug') != null;

    if (debug && params != 'undefined') {
      console.log(params);
    }

    return debug;
  }

  // Helper function for Clippy to pause in between saying things.
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Helper function to move Clippy around.
  function moveClippyTo(agent, selector) {
    el = document.querySelector(selector);
    elRect = el.getBoundingClientRect();

    if (elRect !== undefined) {
      agent.moveTo(elRect.x, elRect.y);
    }
  }

  /*
   * This is where we keep the logic to tell Clippy what to do, and when to do it.
   */
  function runClippyRun(agent) {
    var body = document.querySelector('body');
    agent.show();
    debugMode(agent.animations());

    if (body.classList.contains('front')) {
      // Front
      scriptViewFront(agent);
    }
    else if (body.classList.contains('node-type-project-issue')) {
      // Viewing an issue
      scriptViewIssue(agent);
    }
    else if (body.classList.contains('page-node-add-project-issue')) {
      scriptCreateIssue(agent);
    }
    else if (body.classList.contains('node-type-project-module')) {
      // Viewing a module/theme
      scriptViewProject(agent);
    }
    else if (body.classList.contains('page-project-issues')) {
      // Viewing list of issues
      scriptViewIssueList(agent);
    }
    else if (body.classList.contains('node-type-guide') || body.classList.contains('node-type-documentation')) {
      // Viewing documentation
      scriptViewDocs(agent);
    }
    else if (body.classList.contains('page-node-2995599')) {
      // Drupal Download page
      scriptViewDownload(agent);
    }
    else if (body.classList.contains('page-node-2918542')) {
      // Community page
      scriptViewCommunity(agent);
    }
    else {
      // Generic script
      scriptCatchAll(agent);
    }
  }

  async function scriptViewFront(agent) {
    debugMode('Clippy: viewing homepage');

    agent.play(`GetAttention`);
    agent.speak(`Hi undefined! Welcome to Drupal!`);
    await sleep(8000);
    agent.speak(`You're name is undefined, correct? Or is it NaN?`);
    await sleep(8000);
    agent.speak(`One thing's for sure... you're definitely not a function! 🤣`);
    await sleep(8000);
    agent.speak(`Anywho...`);
    await sleep(8000);
    agent.speak(`Drupal is a content management system`);
    await sleep(4000);
    agent.speak(`err...`);
    await sleep(4000);
    agent.speak(`I mean it's a content management <i>framework</i>`);
    await sleep(3000);
    agent.speak(`It kind of refers to the community, too...`);
    agent.animate();
    await sleep(8000);
    agent.speak(`Honestly, it's all of these. Anyway it's pretty awesome!`);
    await sleep(15000);
    agent.speak(`It's completely free open source! Which means it's free to download, and developed by volunteers`);
    await sleep(8000);
    agent.speak(`Are you registered for DrupalCon? DrupalCon is coming up in only one week in Seattle! You can register at https://events.drupal.org/seattle2019`);
    await sleep(15000);
    agent.speak(`Tell them Clippy sent you! I Hope to see you there! I’ll be the only sentient paper-clip attending AFAIK. Come say hi!`);
    await sleep(8000);
    agent.speak(`Can’t make it to DrupalCon North America? `);
    agent.animate();
    await sleep(8000);
    agent.speak(`DrupalCon Amsterdam is happening in October! `);
    await sleep(8000);
    agent.speak(`Learn all about it at https://events.drupal.org/amsterdam2019`);
    await sleep(15000);
    agent.speak(`Question: Is your cron running?`);
    await sleep(8000);
    agent.speak(`You better run and catch it! 😂`);
    await sleep(15000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(30000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(60000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(140000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(240000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(500000);
    agent.speak(`Have you tried clearing the cache?`);
  }

  async function scriptViewIssue(agent) {
    debugMode('Clippy: viewing issue');

    agent.play(`GetAttention`);
    agent.speak(`Hey undefined! It looks like you're having some trouble...`);
    await sleep(8000);
    agent.speak(`You're name is undefined, correct? Or is it NaN?`);
    await sleep(8000);
    agent.speak(`One thing's for sure... you're definitely not a function! 🤣`);
    await sleep(8000);
    agent.speak(`Anywho...`);
    agent.animate();
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(8000);
    agent.speak(`It's "drush cc all"...`);
    await sleep(4000);
    agent.speak(`Wait! I mean "drush cr"`);
    await sleep(4000);
    agent.speak(`...or is it "drupal cr"?`);
    await sleep(4000);
    agent.speak(`When in doubt, I just navigate to performance and hit the button there :)`);
    await sleep(15000);
    agent.animate();
    agent.speak(`Sometimes turning it off and turning it back on again helps 😎`);
    await sleep(15000);
    agent.speak(`PHP Fatal error: Call to undefined function drupal_load_clippy() in /var/www/dev/drupal.org/htdocs/sites/all/modules/clippy-js/build on line 45`);
    await sleep(15000);
    agent.speak(`Kidding! Did I get ya? 🤣`);
    await sleep(8000);
    agent.speak(`One more: Is your cron running?`);
    await sleep(8000);
    agent.speak(`You better run and catch it! 😂`);
    await sleep(15000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(60000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(140000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(240000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(500000);
    agent.speak(`Have you tried clearing the cache?`);
  }

  async function scriptCreateIssue(agent) {
    debugMode('Clippy: on create issue page');

    agent.play(`GetAttention`);
    agent.speak(`It looks like you’re creating an issue.`);
    await sleep(8000);
    agent.speak(`Have you tried clearing the cache? `);
    await sleep(8000);
    agent.speak(`Or turning it off and back on again?`);
    await sleep(8000);
    agent.speak(`For the sake of expediency, let’s just assume you have. `);
    await sleep(8000);
    agent.speak(`Before creating an issue, be sure to search through the issue queue to make sure it’s not a duplicate. `);
    await sleep(8000);
    agent.speak(`Also, make sure to include the exact steps needed to reproduce the problem. Try to isolate the issue as much as possible.`);
    await sleep(8000);
    agent.speak(`And while you’re here, look for issues that you might be able to help with. Sometimes asking clarifying questions (such as “what version are you using”) can help!`);
    await sleep(15000);
    agent.speak(`PHP Fatal error: Call to undefined function drupal_load_clippy() in /var/www/dev/drupal.org/htdocs/sites/all/modules/clippy-js/build on line 45`);
    await sleep(15000);
    agent.speak(`Kidding! Did I get ya? 🤣`);
    await sleep(8000);
    agent.speak(`Question: Is your cron running?`);
    await sleep(8000);
    agent.speak(`You better run and catch it! 😂`);
    await sleep(15000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(60000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(140000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(240000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(500000);
    agent.speak(`Have you tried clearing the cache?`);
  }

  async function scriptViewProject(agent) {
    debugMode('Clippy: on view project page');

    agent.play(`GetAttention`);
    agent.speak(`Hi! I’m Clippy!`);
    await sleep(8000);
    agent.speak(`It looks like you’re considering downloading module / theme. `);
    await sleep(8000);
    agent.speak(`When downloading projects, it’s important to take several criteria into account.`);
    await sleep(8000);
    agent.speak(`1) First see if the module has a stable release. `);
    await sleep(8000);
    agent.speak(`Stable releases indicate the module is stable.`);
    await sleep(8000);
    agent.speak(`But a lack of stable release doesn’t necessarily indicate the module is stable. But, you should definitely evaluate it more thoroughly.`);
    await sleep(8000);
    agent.speak(`2) Check to see if the module has opted into Drupal Security Team coverage. `);
    await sleep(8000);
    agent.speak(`3) Take a cursory look through the issue queue. Is the module maintainer active? Are RTBC patches being committed? Are there critical unresolved bugs?`);
    await sleep(8000);
    agent.speak(`4) Look at the project maintainer’s profile. Do they have experience maintaining various projects? How long have they been on Drupal.org?`);
    await sleep(8000);
    agent.speak(`5) Does the project have documentation? If so, at least one person cares about the project. `);
    await sleep(8000);
    agent.speak(`Good luck!`);
    await sleep(8000);
    agent.speak(`PHP Fatal error: Call to undefined function drupal_load_clippy() in /var/www/dev/drupal.org/htdocs/sites/all/modules/clippy-js/build on line 45`);
    await sleep(15000);
    agent.speak(`Kidding! Did I get ya? 🤣`);
    await sleep(15000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(30000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(60000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(140000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(240000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(500000);
    agent.speak(`Have you tried clearing the cache?`);
  }

  async function scriptViewIssueList(agent) {
    debugMode('Clippy: viewing issue list');

    agent.play(`GetAttention`);
    agent.speak(`Hi! I’m Clippy, and I’m here to help!`);
    await sleep(8000);
    agent.speak(`Did you know you can search the issue queue for specific text? `);
    moveClippyTo(agent, '#edit-text');
    await sleep(8000);
    agent.speak(`If you’re looking for support, be sure to search through all issues, not just open issues.`);
    moveClippyTo(agent, '#block-system-user-menu');
    await sleep(8000);
    agent.speak(`Don’t forget to pay it forward! Look through the queue, and answer a question or two!.`);
    await sleep(8000);
    agent.speak(`Sometimes helping out is as simple as asking clarifying questions such as, “What version are you running”, or “Have you tried turning it off and back on again?”`);
    await sleep(15000);
    agent.speak(`Anywho...`);
    agent.animate();
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(8000);
    agent.speak(`It's "drush cc all"...`);
    await sleep(4000);
    agent.speak(`Wait! I mean "drush cr"`);
    await sleep(4000);
    agent.speak(`...or is it "drupal cr"?`);
    await sleep(8000);
    agent.speak(`Good luck!`);
    await sleep(15000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(30000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(60000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(140000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(240000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(500000);
    agent.speak(`Have you tried clearing the cache?`);
  }

  async function scriptViewDocs(agent) {
    debugMode('Clippy: viewing docs');

    agent.play(`GetAttention`);
    agent.speak(`Hey there! You’re in the right place if you’re looking for documentation on Drupal!`);
    await sleep(8000);
    agent.speak(`But…`);
    await sleep(8000);
    agent.speak(`have you tried clearing the cache?`);
    await sleep(8000);
    agent.speak(`Don’t forget that you can add to documentation pages! They’re community sourced.`);
    await sleep(8000);
    agent.speak(`If you find something incorrect, or something missing, add it!`);
    await sleep(15000);
    agent.speak(`Question: Is your cron running?`);
    await sleep(8000);
    agent.speak(`You better run and catch it! 😂`);
    await sleep(15000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(30000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(60000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(140000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(240000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(500000);
    agent.speak(`Have you tried clearing the cache?`);
  }

  async function scriptViewDownload(agent) {
    debugMode('Clippy: viewing download page');

    agent.play(`GetAttention`);
    agent.speak(`Hey there! It looks like you're downloading Drupal! Good choice!`);
    await sleep(8000);
    agent.speak(`While you’re here, check out the community page!`);
    await sleep(8000);
    agent.speak(`Are you registered for DrupalCon? DrupalCon is coming up in only one week in Seattle! You can register at https://events.drupal.org/seattle2019`);
    await sleep(15000);
    agent.speak(`Tell them Clippy sent you!`);
    await sleep(8000);
    agent.speak(`Can’t make it to DrupalCon North America? `);
    await sleep(8000);
    agent.speak(`DrupalCon Amsterdam is happening in October! `);
    await sleep(8000);
    agent.speak(`Learn all about it at https://events.drupal.org/amsterdam2019`);
    await sleep(8000);
    agent.speak(`PHP Fatal error: Call to undefined function drupal_load_clippy() in /var/www/dev/drupal.org/htdocs/sites/all/modules/clippy-js/build on line 45`);
    await sleep(15000);
    agent.speak(`Kidding! Did I get ya? 🤣`);
    await sleep(8000);
  }

  async function scriptViewCommunity(agent) {
    debugMode('Clippy: viewing community pages');

    agent.play(`GetAttention`);
    agent.speak(`Welcome to the Drupal community homepage!`);
    await sleep(8000);
    agent.speak(`We’re an inclusive, vibrant, and diverse community of free open source software enthusiasts from around the world!`);
    await sleep(8000);
    agent.speak(`We welcome everyone! 💙 💚 💛 💜 ❤️ 🖤`);
    await sleep(8000);
    agent.speak(`Are you looking to attend an event and meet people in person?`);
    await sleep(8000);
    agent.speak(`DrupalCon is coming up in only one week in Seattle! You can register at https://events.drupal.org/seattle2019`);
    await sleep(8000);
    agent.speak(`Tell them Clippy sent you! I Hope to see you there! I’ll be the only sentient paper-clip attending AFAIK. Come say hi!`);
    await sleep(8000);
    agent.speak(`Can’t make it to DrupalCon North America? `);
    await sleep(8000);
    agent.speak(`DrupalCon Amsterdam is happening in October! `);
    await sleep(8000);
    agent.speak(`Learn all about it at https://events.drupal.org/amsterdam2019`);
    await sleep(8000);
    agent.speak(`Can’t make it to either of those? Attend a Drupal Camp! Drupalcamps are like mini-conferences with anywhere from 100-400 people (although some of the big camps get quite larger)`);
    await sleep(15000);
    agent.speak(`You can find a handy-dandy list of camps at https://www.drupical.com. Check it out!`);
    await sleep(8000);
    agent.speak(`PHP Fatal error: Call to undefined function drupal_load_clippy() in /var/www/dev/drupal.org/htdocs/sites/all/modules/clippy-js/build on line 45`);
    await sleep(15000);
    agent.speak(`Kidding! Did I get ya? 🤣`);
    await sleep(8000);
  }

  async function scriptCatchAll(agent) {
    debugMode('Clippy: Catch-all script');

    agent.play(`GetAttention`);
    agent.speak(`PHP Fatal error: Call to undefined function drupal_load_clippy() in /var/www/dev/drupal.org/htdocs/sites/all/modules/clippy-js/build on line 45`);
    await sleep(8000);
    agent.speak(`Kidding! Did I get ya? 🤣`);
    await sleep(8000);
    agent.speak(`Anywho… Hi! I’m Clippy, and I’m here to help!`);
    await sleep(8000);
    agent.speak(`Have you tried clearing the cache? `);
    await sleep(8000);
    agent.speak(`While you’re here, check out the community page!`);
    await sleep(8000);
    agent.speak(`Are you registered for DrupalCon? DrupalCon is coming up in only one week in Seattle! You can register at https://events.drupal.org/seattle2019`);
    await sleep(15000);
    agent.speak(`Tell them Clippy sent you!`);
    await sleep(8000);
    agent.speak(`Can’t make it to DrupalCon North America? `);
    await sleep(8000);
    agent.speak(`DrupalCon Amsterdam is happening in October! `);
    await sleep(8000);
    agent.speak(`Learn all about it at https://events.drupal.org/amsterdam2019`);
    await sleep(8000);
    agent.speak(`Hope to see you there! I’ll be the only sentient paper-clip attending AFAIK. Come say hi!`);
    await sleep(15000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(30000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(60000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(140000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(240000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(500000);
    agent.speak(`Have you tried clearing the cache?`);
  }
})();
