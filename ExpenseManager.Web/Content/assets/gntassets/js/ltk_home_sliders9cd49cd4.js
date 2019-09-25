jQuery(document).on('ready',function(){
    $j = jQuery.noConflict(); 
	
	$j('#ltk-lottoslider-v2').bxSlider({
		auto:true,
		autoHover:true,
	    maxSlides: 3,
		moveSlides: 1,
	    slideWidth: 294,
	    slideMargin: 14,
	    pager: false,
	    preloadImages: 'all',
	    onSliderLoad: function() {
	       $j('.section_box.simple_slider').css('visibility', 'visible');
	    },
	});

	$j('#ltk_testimonials').bxSlider({
	    controls:false,
	});
	$j('#main_banner').bxSlider({
	    controls:false,
		auto: ($j(".bxslider li.banner_bg").length > 1) ? true: false,
		mode: 'fade',
		speed: 4000,
		autoHover:true,
	    pager: false,
	    preloadImages: 'all',
	});
});
	