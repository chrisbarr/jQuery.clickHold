(function( $ ){
	
	$.fn.clickHold = function( callback, completeCallback ) {
		
		var intervalTimer;
		var active;
		
		return this.mousedown(function(){
			active = true;
			callback();
			intervalTimer = setInterval(function(){ callback(); }, 100);
		}).bind('mouseup mouseout', function(){
			if(active)
			{
				active = false;
				clearInterval(intervalTimer);
				
				if(typeof completeCallback !== 'undefined')
				{
					completeCallback();
				}
			}
		});
		
	}
	
})( jQuery );