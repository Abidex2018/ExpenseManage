

$(window).load(function(){
    $('#loader').fadeOut("slow");
});

(function($) {
	"use strict";

			/* for Animation */

		new WOW().init();

			/* for Animation */

		if($(window).innerWidth() <= 760){
			$('.navbar-collapse a').on('click',function (e) {
		        $('.navbar-collapse').collapse('toggle');
		        //alert('j');
		    });	
		}	 	

		$(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });

			/* Main Slider */

		 var slider = new MasterSlider();
		 slider.setup('mainSlider' , {
			width:1170,
			height:650,
			autoplay:true,
			space:1,
			loop:true,
			dir:"v",
			fullwidth:true,
			centerControls:false,
			speed:60,
			preload:0,
			view:'scale'
		});
		slider.control('arrows');
		slider.control('timebar' , {color:"#e1730f"});
		
		/* Smooth-Scroll */

		$(".scroll").on('click',function(event){			
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 2000);
		});

		/* Smooth-Scroll */

		

		

		
})(jQuery);

		
			
			