"use strict";
(function ($) {
  /***************************************************************
   * Enables javascript support for theme
   ==============================================================*/
  app.initTheme({
    // Please update this options if you changes theme color scheme
    colorTheme: 'default',
    /** By default all svg icons are inlined at the beggining of
     * the <body> tag. If you would like to remove that inlined
     * data from the template, please set this to true.
     ==============================================================*/
    loadSvgWithAjax: false,
    //dir: 'rtl'
  });

  /***************************************************************
   * Enables "Scroll to top" button
   *
   * To disabled this just comment out and remove the corresponding
   * code from templates
   ==============================================================*/
  app.activateScrollToTopSpy();

  /***************************************************************
   * Panel useful for development, where you can
   * enable or disable various theme features.
   *
   * Usually, this should be disabled on live website.
   ==============================================================*/
  app.activateUIPanel();



  /***************************************************************
   * Common javascript code used on most of the pages
   * You can place here the code that is run on every page.
   * We do not advice to put here the code that runs only on
   * specific page, because we care (and you should) about
   * performance.
   ==============================================================*/
  (function () {
    app.plyr.setup();
    app.initMap('.js-map-canvas', window.demodata.contacts);
    app.initMap('.js-map-contact', window.demodata.contacts);
    initGalleryWide();
    initGallery('.js-gallery-item');
    initRangeSlider('#range_price');

    initSelect2('select.form-control');
    initParsley('.js-parsley');
    initParsley('.js-form-subscribe', 'You have been successfully subscribed!', 'Subscription failed! Please try again.');

    app.formControls('.form');

  })();


  function initGalleryWide() {
    if (!$('#gallery-wide').length) return;
    var $galleryWide = $('#gallery-wide');
    var width = $galleryWide.parent().width();
    var displayPieces = parseInt(width/300, 10);

    $galleryWide.width(width);
    var options = {
      $FillMode: 3,
      $AutoPlay: false,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
      $AutoPlayInterval: 4000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
      $PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1
      $ArrowKeyNavigation: false,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
      $SlideDuration: 160,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
      $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
      $SlideWidth: 300,                                   //[Optional] Width of every slide in pixels, default value is width of 'slides' container
      $SlideHeight: 350,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
      //$DisplayPieces: displayPieces+1,                               //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
      $ParkingPosition: 0,                              //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
      $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
      $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
      $DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
      $Cols: displayPieces

    };

    var galleryWide = new $JssorSlider$("gallery-wide", options);

    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizes
    function ScaleSlider() {
      var width = $galleryWide.parent().width();
      galleryWide.width = width;
      //if (bodyWidth)
      //  galleryWide.$ScaleWidth(bodyWidth);
      //else
      //  window.setTimeout(ScaleSlider, 30);
    }
    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    //responsive code end
  }

  function initGallery (container) {
    /**
     * Setup image popups with Photoswipe plugin
     * See documentation in http://photoswipe.com/documentation/options.html
     ==============================================================*/
    var $galleryItem = $(container);
    if (!$galleryItem.length) return;
    var gallery = app.createPhotoSwipe(container,
      {
        /*
         See here available options
         http://photoswipe.com/documentation/options.html
         */
      }
    );
  }

  function initRangeSlider(container) {

    var $range = $(container);
    if ($range.length ) {
      var $label = $range.closest('.form__ranges').next('label');
      $range.ionRangeSlider({
        type: "double",
        min: 0,
        max: 5000,
        hide_min_max: true,
        hide_from_to: false,
        grid: false,
        prefix: '$',
        force_edges: true,
        max_postfix: '+',
        // converts numbers like 4000000 to 4m, remove if you don't like it
        prettify: function (value) {
          return app.utils.abbreviateNumber(value)
        }
      });


      $range.on("change", function () {
        var $this = $(this),
          value = $this.prop("value").split(";");
        $label.text('Price: $' + value[0] + " - $" + value[1]);
      });
    }
  }
  function initSelect2 (container) {
    /**
     * Setup select form fields improved with Select2 plugin
     * See documentation in https://select2.github.io
     ==============================================================*/
    var $inSelect = $(container);
    var $inWidgetsSelect = $('.widget select');
    if ($inSelect.length) $inSelect.select2({width: '100%', dir: app.config.dir});
  }

  function initParsley (container, successMess, errorMess) {
    if (!$(container).length ) return ;
    $(container).each(function () {
      $(this)
        .parsley()
        .on('form:success', function (formInstance) {
          app.notifier.showSuccess(successMess);
          return false;
        })
        .on('form:error', function (formInstance) {
          app.notifier.showError(errorMess);
          return false;
        });
    });
  }

  function initFormSubmit (container) {
    /**
     * Form submit validation
     ==============================================================*/
    var $form = $(container);
    if (!$form.length) return;
    var $formSubmitBtn = $form.find(':submit');
    $form.parsley()
      .on('form:success', function (formInstance) {
        $formSubmitBtn.addClass('btn--loading');
        $formSubmitBtn.prop('disabled', true);
        $.post('php/contact.php', $form.serialize())
          .done(function () {
            app.notifier.showSuccess('The message was sent!');
            formInstance.reset();
            $form[0].reset();
          })
          .fail(function () {
            app.notifier.showError('Something went wrong!');
          })
          .always(function () {
            $formSubmitBtn.prop('disabled', false);
            $formSubmitBtn.removeClass('btn--loading');
          });

        formInstance.submitEvent.preventDefault();

      });

  }
})(jQuery);
