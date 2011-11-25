# jQuery.clickHold #

Just a small jQuery plugin providing a `.clickHold()` function.

With the following example:

    $(document).ready(function(){
        var counter = 0;
        
        var callback = function(){
            counter++;
        }
        
        $('#element').clickHold(callback);
    });

The `counter` variable is incremented while `#element` is clicked.
The callback function is called continuously (every 100ms) until the click finishes, or the cursor moves off the element.

A second callback that is executed when the click ends can be supplied as the second parameter to `.clickHold()` like so:

    $('#element').clickHold(callback, function(){
        alert('Click finished!');
    });

Including the script is as simple as:

    <script type="text/javascript" src="/path/to/jquery.min.js"></script>
    <script type="text/javascript" src="/path/to/jquery.clickhold.min.js"></script>

Have a look at the simple [demo here](https://chrisbarr.github.com/jQuery.clickHold/demo.html)

Credit?