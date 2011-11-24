(function( $ ){
	
	$.fn.clickHold = function( callback ) {
		
		var intervalTimer;
		
		return this.mousedown(function(){
			callback();
			intervalTimer = setInterval(function(){ callback(); }, 100);
		}).bind('mouseup mouseout', function(){
			clearInterval(intervalTimer);
		});
		
	}
	
})( jQuery );