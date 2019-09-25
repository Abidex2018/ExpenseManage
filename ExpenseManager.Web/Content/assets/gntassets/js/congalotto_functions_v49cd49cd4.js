jQuery(document).on('ready', function(){
	$j = jQuery.noConflict(); 

    // banner how it work open/close
	$j('#hiw_button').on('click',function(e){
	    $j('.banner_hiw').fadeToggle();
	    e.stopPropagation();
	});

	$j('#hiw_close').on('click', function(e) {
	    $j('.banner_hiw').fadeOut();
	    e.stopPropagation();
	});

    /* click outside the element */
	clickOutsideTheElement();
	function clickOutsideTheElement() {
	    $j('body, html').on('click', function () {
	        $j('.banner_hiw').fadeOut();
	    });
	}

    // first_time_arrow box close
	$j('#first_time_arrow .close').on('click', function () {
	    $j('#first_time_arrow').fadeOut();
	    $j('.top_green_bar').css('display','none');
	    $j('#header').removeClass("active_green_bar");
	    //$j.cookie("CGLFTGB", 1);
	    document.cookie = "CGLFTGB=1;";
	});

	$j('.main_menu li').on({
	    'mouseover': function () {
	        $j(this).find('.submenu.drop').show();
	        $j('#close_play_online, #close_lastest_results, #close_support, #close_promotions').on('click', function () {
	            $j('.main_menu li').find('.submenu.drop').hide();
	        });
	    },
	    'mouseout': function () {
	        $j(this).find('.submenu.drop').hide();
	    }
	});	
	
	
    // Show/hide rows on tables
    $j('#showHiddenLot').on('click', function (e) {
        e.preventDefault();
        $j('.table-1 .hideMe').slideToggle('fast');
        $j('#showHiddenLot').toggleClass('ltb_onlist');
    });
    
    $j('#showHiddenSyn').on('click', function (e) {
        e.preventDefault();
        $j('.table-2 .hideMe').slideToggle('fast');
        $j('#showHiddenSyn').toggleClass('ltb_onlist');
    });
    
    $j('#showHiddenRaffles').on('click', function (e) {
        e.preventDefault();
        $j('.table-3 .hideMe').slideToggle('fast');
        $j('#showHiddenRaffles').toggleClass('ltb_onlist');
    });
    
    $j('#showHiddenResults').on('click', function (e) {
        e.preventDefault();
        $j('.table-4 .hideMe').slideToggle('fast');
        $j('#showHiddenResults').toggleClass('ltb_onlist');
    });
    
    $j('.ajax2').on('click', function() {
        $j.colorbox({href: $j(this).attr('href'), className: 'cbstandard' });
        return false;
      });
      $j('body').on('click', '.btnClose', function(e){
          $j.colorbox.close();
      });
});