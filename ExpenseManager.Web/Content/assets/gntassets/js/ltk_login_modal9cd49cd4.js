jQuery(document).on('ready',function(){
    $j = jQuery.noConflict();
    $j('.callLogin').on('click', function (e) {
        var modalId = $j(this).attr('href');
        var currentModal = $j(this).data('modal');
        e.preventDefault();
        $j('.modal_overlay').remove();
        $j('.login_box').hide();
        $j(modalId).show().parent('.cglbox_modal_wrap').show().before('<div class="modal_overlay"></div>');
        $j('#' + currentModal).show();
        e.stopPropagation();
    });

    $j('.internal-nav').on('click', function () {
        $j('.login_box').hide();
        var currentNav = $j(this).data('internal-nav');
        $j('#' + currentNav).show();
    });

	
    $j('.ltk-layer-close').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        loginCloseModal();
    });

    $j('.login_box').on('click', function (e) {
        e.stopPropagation();
    })

   // $j('html, body').on('click', function () {
//        loginCloseModal();
//    });

    function loginCloseModal() {
        $j('.cglbox_modal_wrap').hide();
        $j('.modal_overlay').remove();
    }
});
	