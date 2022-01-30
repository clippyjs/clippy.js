[Clippy.JS](http://smore.com/clippy-js)
=========
Add Clippy or his friends to any website for instant nostalgia.  
Read more about the project on [our homepage](http://smore.com/clippy-js).


Usage: Setup
------------
Add this code to you to your page to enable Clippy.js.

```html
<!-- Add the stylesheet to the head -->
<link rel="stylesheet" type="text/css" href="clippy.css" media="all">

...

<!-- Clippy.js CommonJS -->
<script src="main.js"></script>
<!-- OR -->
<!-- Clippy.js Module -->
<script type="module" src="module.js"></script>

<!-- Init script -->
<script type="text/javascript">
    initiateClippy(Agents.Clippy, { debug: true }).then(agent => {
        agent.show();
    });
</script>

```

Usage: Actions
--------------
All the agent actions are queued and executed by order, so you could stack them.

```javascript
// play a given animation
agent.play('Searching');

// play a random animation
agent.animate();

// get a list of all the animations
agent.animations();
// => ["MoveLeft", "Congratulate", "Hide", "Pleased", "Acknowledge", ...]

// Show text balloon
agent.speak('When all else fails, bind some paper together. My name is Clippy.');

// move to the given point, use animation if available
agent.moveTo(100,100);

// gesture at a given point (if gesture animation is available)
agent.gestureAt(200,200);

// stop the current action in the queue
agent.stopCurrent();

// stop all actions in the queue and go back to idle mode
agent.stop();
```

Special Thanks
--------------
* The awesome [Cinnamon Software](http://www.cinnamonsoftware.com/) for developing [Double Agent](http://doubleagent.sourceforge.net/)
the program we used to unpack Clippy and his friends!
* Microsoft, for creating clippy :)
