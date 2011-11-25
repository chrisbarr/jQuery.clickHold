# jQuery.clickHold #

Just a small jQuery plugin providing a `.clickHold()` function. The minified file is only 246 bytes.

In the following example the `counter` variable is incremented while `#element` is clicked.
The callback function is called continuously (every 100ms) until the click finishes, or the cursor moves off the element.

    $(document).ready(function(){
        var counter = 0;
        
        var callback = function(){
            counter++;
        }
        
        $('#element').clickHold(callback);
    });

A second callback that is executed when the click ends can be supplied as the second parameter to `.clickHold()` like so:

    $('#element').clickHold(callback, function(){
        alert('Click finished!');
    });

Include a version of the jQuery library as normal, then include the plugin:

    <script type="text/javascript" src="/path/to/jquery.min.js"></script>
    <script type="text/javascript" src="/path/to/jquery.clickhold.min.js"></script>

Have a look at the simple [demo here](https://chrisbarr.github.com/jQuery.clickHold/demo.html) to see the plugin in action.

_Made by Chris Barr chris.barr@ntlworld.com 2011_