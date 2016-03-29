$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('img').animate({left: "-=20px"},200);
				break;
			case 38:
				$('img').animate({top:'-=20px'},200);
				break;
			case 39:
			    $('img').animate({left:'+=20px'},200);
				break;
			// Down Arrow Pressed
			case 40:
			    $('img').animate({top:'+=20px'},200);
				break;
		    case 32:
		        $('img').animate({top:'-=50px'},200);
		        $('img').animate({top:'+=50px'},200);
				break;
		}
	});
});
