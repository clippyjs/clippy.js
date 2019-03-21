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
    jQuery.getScript('/sites/all/libraries/clippy-js/build/jquery-1.7.2.min.js', function() {

      // Once the new version of jQuery is downloaded. Move it over to jQueryNew, and restore the original.
      window.jQueryNew = window.jQuery;
      window.jQuery = window.jQueryOld;

      // Restore the $ if it was in use.
      if ('$old' in window) {
        window.$ = window.$old
      };

      // Load the Clippy script and then instantiate it! 😎
      jQueryNew.getScript('/sites/all/libraries/clippy-js/build/clippy.js', function() {
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

    if (!isAsyncSupported) {
      debugMode('This browser doesn\'t support async/await.');
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

  // var uid = 'uid' in Drupal.settings.clippy ? Drupal.settings.clippy.uid : false;
  var firstName = 'first_name' in Drupal.settings.clippy ? Drupal.settings.clippy.first_name : '';


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
    else if (body.classList.contains('list of issues')) {
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

  async function scriptViewFront() {
    debugMode('Clippy: viewing homepage');
    agent.speak(`Hi ${firstName}! Welcome to Drupal!`);
    await sleep(5000);
    agent.speak(`Drupal is a content management system`);
    await sleep(2000);
    agent.speak(`err...`);
    await sleep(2000);
    agent.speak(`I mean it's a content management <i>framework</i>`);
    await sleep(3000);
    agent.speak(`It kind of refers to the community, too...`);
    await sleep(5000);
    agent.speak(`Honestly, it's all of these. Anyway it's pretty awesome!`);
    await sleep(10000);
    agent.speak(`It's completely free open source! Which means it's free to download, and
      developed by volunteers`);
    await sleep(15000);
      agent.speak(`You're now subscribed to <i>Drupal Facts</i>!`);
  }

  async function scriptViewIssue(agent) {
    // const issueForm = document.querySelector('#edit-search-block-form--2').getClientRects()[0];

    await sleep(5000);
    agent.play(`GetAttention`);
    agent.speak(`Hey ${firstName}! It looks like you're having some trouble...`);
    await sleep(5000);
    agent.animate();
    await sleep(5000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(5000);
    agent.speak(`It's "drush cc all"...`);
    await sleep(2000);
    agent.speak(`Wait! I mean "drush cr"`);
    await sleep(2000);
    agent.speak(`...or is it "drupal cr"?`);
    await sleep(2000);
    agent.speak(`When in doubt, I just navigate to performance and hit the button there :)`);
    await sleep(10000);
    agent.animate();
    agent.speak(`Sometimes turning it off and turning it back on again helps 😎`);
    await sleep(15000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(30000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(60000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(120000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(240000);
    agent.speak(`Have you tried clearing the cache?`);
    await sleep(500000);
    agent.speak(`Have you tried clearing the cache?`);
    // await sleep(10000);
    // agent.moveTo(issueForm.x, issueForm.y);
    // agent.play(`GestureRight`);
    // agent.speak(`Here's the issue form. Make sure you follow the best practices when creating one 😉`);
    // await sleep(5000);
    // agent.speak(`What are those best practices? No clue. You'll have to search for that info.`);
    // await sleep(5000);
    // agent.speak(`Protip: Pay it forward! Answer someone else's question before posting your own!`);
  }

  async function scriptCreateIssue() {
    debugMode('Clippy: on create issue page');
  }

  async function scriptViewProject() {
    debugMode('Clippy: on view project page');
  }

  async function scriptViewIssueList() {
    debugMode('Clippy: viewing issue list');
  }

  async function scriptViewDocs() {
    debugMode('Clippy: viewing docs');
  }

  async function scriptViewDownload() {
    debugMode('Clippy: viewing download page');
  }

  async function scriptViewCommunity() {
    debugMode('Clippy: viewing community pages');
  }

  async function scriptCatchAll() {
    debugMode('Clippy: Catch-all script');
  }
})();
