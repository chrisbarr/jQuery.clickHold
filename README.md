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