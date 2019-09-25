var app =
webpackJsonpapp([0],{

/***/ 0:
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var config = __webpack_require__(/*! ./module/config */ 5);

	/**
	 * @global
	 * @type {{init: Function, activateHeaderSpy: (*|exports|module.exports), activateScrollToTopSpy: (*|exports|module.exports), activateUIPanel: (*|exports|module.exports)}}
	 */
	module.exports = {
	  /**
	   * @param {Object} [options]
	   * @param {string} options[].urlPrefix - path that is appended to images,
	   */
	  initTheme: function (options) {

	    var _ = __webpack_require__(/*! lodash */ 6);
	    if (options) {
	      _.each(options, function (value, key) {
	        config[key] = value;
	      });
	    }

	    if (config.loadSvgWithAjax === true) {
	      $(document.body).prepend($('<div>').load('img/sprite-inline.svg'));
	    }


	    __webpack_require__(/*! ./module/detect-ie */ 8);

	    __webpack_require__(/*! jquery */ 1);
	    __webpack_require__(/*! lodash */ 6);
	    __webpack_require__(/*! smoothscroll-for-websites */ 9);
	    __webpack_require__(/*! bootstrap-sass */ 10);

	    __webpack_require__(/*! slick-carousel/slick/slick.js */ 11);

	    __webpack_require__(/*! ./module/parsley-bootstrap */ 12)();
	    __webpack_require__(/*! parsleyjs */ 13);

	    __webpack_require__(/*! jquery.countdown */ 14);

	    __webpack_require__(/*! jquery-knob */ 16);
	    __webpack_require__(/*! select2 */ 17);
	    __webpack_require__(/*! bootstrap-sass */ 10);
	    __webpack_require__(/*! ion-rangeslider */ 18);

	    __webpack_require__(/*! ./module/workarounds */ 19)();
	    __webpack_require__(/*! ./module/grid-size */ 20).watch();
	    __webpack_require__(/*! ./module/ui/nav */ 21).init();
	    __webpack_require__(/*! ./module/ui/auth-btn */ 22)();
	    __webpack_require__(/*! ./module/ui/switch-view */ 23)();
	    __webpack_require__(/*! ./module/data-api/slider */ 24)();
	    __webpack_require__(/*! ./module/data-api/knob */ 27)();
	    __webpack_require__(/*! ./module/ui/filters-search */ 28)();
	    __webpack_require__(/*! ./module/ui/tab */ 29)();
	    __webpack_require__(/*! ./module/ui/collapser */ 30)();
	    __webpack_require__(/*! ./module/ui/sermon */ 31)();
	    __webpack_require__(/*! ./module/ui/event */ 35)();
	    __webpack_require__(/*! ./module/ui/cart */ 40)();
	    __webpack_require__(/*! ./module/ui/isotope-products */ 41)();
	    __webpack_require__(/*! ./module/data-api/datetime */ 58)();
	    __webpack_require__(/*! ./module/data-api/fullcalendar */ 159)();
	    __webpack_require__(/*! ./module/data-api/isotope */ 161)();
	    __webpack_require__(/*! ./module/data-api/countdown */ 162).timer();
	    __webpack_require__(/*! ./module/data-api/countdown */ 162).circles();
	    __webpack_require__(/*! ./module/data-api/numberfield */ 163)();

	    __webpack_require__(/*! ./module/ui/animation */ 164);
	    __webpack_require__(/*! ./module/ui/common */ 166);


	  },
	  activateScrollToTopSpy: __webpack_require__(/*! ./module/ui/scrollup-spy */ 167),
	  activateUIPanel: __webpack_require__(/*! ./demo/ui-panel */ 168),
	  config: config,
	  gridSize: __webpack_require__(/*! ./module/grid-size */ 20).get(),
	  createMap: __webpack_require__(/*! ./module/map */ 36).create,
	  initMap: __webpack_require__(/*! ./module/map */ 36).init,
	  createGmapMarker: __webpack_require__(/*! ./module/gmap/marker */ 38).create,
	  createGmapInfoboxMarker: __webpack_require__(/*! ./module/gmap/infobox-marker */ 169).create,
	  notifier: __webpack_require__(/*! ./module/notifier */ 172),
	  plyr: __webpack_require__(/*! plyr */ 175),
	  utils: __webpack_require__(/*! ./module/utils */ 33),
	  createPhotoSwipe: __webpack_require__(/*! ./module/ui/photo-swipe */ 176).init,
	  formControls: __webpack_require__(/*! ./module/ui/form-controls */ 39)
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 1:
/*!********************************!*\
  !*** jquery (bower component) ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./dist/jquery.js */ 2);

/***/ },

/***/ 5:
/*!*****************************!*\
  !*** ./js/module/config.js ***!
  \*****************************/
/***/ function(module, exports) {

	module.exports = {
	  colorTheme: 'default',
	  assetsPathPrefix: '',
	  dir: 'ltr'
	};

/***/ },

/***/ 8:
/*!********************************!*\
  !*** ./js/module/detect-ie.js ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = function () {
	  // detect IE
	  var IEversion = detectIE();

	  var body = document.getElementsByTagName('body')[0];
	  if (IEversion !== false) {
	    body.className = body.className + ' ie ie--' + IEversion;
	    window.detectIE = true;
	    window.detectIEVersion = IEversion;
	  } else {
	    body.className = body.className + ' normal-browser';
	    window.detectIE = false;
	  }

	  /**
	   * detect IE
	   * returns version of IE or false, if browser is not Internet Explorer
	   */
	  function detectIE() {
	    var ua = window.navigator.userAgent;

	    // Test values; Uncomment to check result …

	    // IE 10
	    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

	    // IE 11
	    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

	    // IE 12 / Spartan
	    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

	    // Edge (IE 12+)
	    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

	    var msie = ua.indexOf('MSIE ');
	    if (msie > 0) {
	      // IE 10 or older => return version number
	      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	    }

	    var trident = ua.indexOf('Trident/');
	    if (trident > 0) {
	      // IE 11 => return version number
	      var rv = ua.indexOf('rv:');
	      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	    }

	    var edge = ua.indexOf('Edge/');
	    if (edge > 0) {
	      // Edge (IE 12+) => return version number
	      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	    }

	    // other browser
	    return false;
	  }

	}();

/***/ },

/***/ 12:
/*!****************************************!*\
  !*** ./js/module/parsley-bootstrap.js ***!
  \****************************************/
/***/ function(module, exports) {

	module.exports = function () {
	  window.ParsleyConfig = {
	    errorClass: 'has-error',
	    successClass: 'has-success',
	    classHandler: function (ParsleyField) {
	      return ParsleyField.$element.parents('.form-group');
	    },
	    errorsContainer: function (ParsleyField) {
	      return ParsleyField.$element.parents('.form-group');
	    },
	    errorsWrapper: '<div class="help-block">',
	    errorTemplate: '<div></div>'
	  };
	};


/***/ },

/***/ 14:
/*!******************************************!*\
  !*** jquery.countdown (bower component) ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./dist/jquery.countdown.js */ 15);

/***/ },

/***/ 19:
/*!**********************************!*\
  !*** ./js/module/workarounds.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	/***************************************************************
	 * Browser workarounds for providing a better experience
	 * on some browsers in certain edge cases
	 ==============================================================*/
	module.exports = function () {
	  $(function () {
	    var nua = navigator.userAgent;
	    var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1);
	    if (isAndroid) {
	      $('select.form-control').removeClass('form-control search__form-control search__form-control--select').css('width', '100%')
	    }
	  });

	  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	    var msViewportStyle = document.createElement('style')
	    msViewportStyle.appendChild(
	      document.createTextNode(
	        '@-ms-viewport{width:auto!important}'
	      )
	    )
	    document.querySelector('head').appendChild(msViewportStyle)
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 20:
/*!********************************!*\
  !*** ./js/module/grid-size.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/***************************************************************
	 * JS helper for improving responsive experience
	 ==============================================================*/
	var currentGridSize = null;

	exports.get = function () {
	  return currentGridSize;
	};

	exports.watch = function () {
	  var winWidth = window.innerWidth,
	    screenList = ['xs', 'sm', 'md', 'lg'],
	    $body = $('body');

	  function checkScreen(width) {
	    currentGridSize = screenList[0];

	    if (width < 767) currentGridSize = screenList[0];
	    if (width >= 767) currentGridSize = screenList[1];
	    if (width > 992) currentGridSize = screenList[2];
	    if (width > 1200) currentGridSize = screenList[3];

	    $body.removeClass(screenList.join(' '));
	    $body.addClass(currentGridSize);
	  }

	  checkScreen(winWidth);

	  $(window).resize(function () {
	    checkScreen(window.innerWidth);
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 21:
/*!*****************************!*\
  !*** ./js/module/ui/nav.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {exports.init = function () {
	  /*------------------------------------------------------------------
	   * More info docs_build/ui/nav.html
	   ==============================================================*/

	  var gridSize = __webpack_require__(/*! ../grid-size */ 20);
	  var $nav = $('.js-nav');
	  var $navOnClick = $('.js-nav-onclick');
	  var $navLinkDropdown = $('.has-children > a');
	  var $navItem = $('.nav__item');
	  var $navBtn = $('.js-menu-btn');

	  var navBtnChange = function (active) {
	    if(active) {
	      $navBtn.removeClass('active');
	      $nav.removeClass('opened');
	      $navBtn.find('.header__menu-svg').html('<span class="ti-menu"></span>');
	    } else {
	      $navBtn.addClass('active');
	      $nav.addClass('opened');
	      $navBtn.find('.header__menu-svg').html('<span class="ti-close"></span>');
	    }
	  };

	  $navBtn.on('click', function () {
	      navBtnChange($(this).hasClass('active'));
	  });

	  $navLinkDropdown.on('click', function () {
	    var openOnClick =  ['xs', 'sm', 'md'].indexOf(gridSize.get()) > -1 || !!$navOnClick.length;

	    if (!openOnClick) return;
	    var $link = $(this);
	    var $item = $link.closest('.nav__item');
	    if( $item.hasClass('opened') ) {
	      $item.removeClass('opened');
	    } else {
	      $navItem.removeClass('opened');
	      $item.parents('.has-children').addClass('opened');
	      $item.addClass('opened');
	    }
	    if ($item.hasClass('has-children')) return false;
	  });


	  $('.has-children').each(function (i, item) {
	    var $dropdown = $(item).find('.nav__sub');
	    var offsetLeft = $(item).offset().left;
	    var offsetRight = ($(window).width() - ($(item).offset().left + $(item).outerWidth()));
	    if (offsetLeft < $dropdown.width() ) {
	      $dropdown.removeClass('nav__sub--left').addClass('nav__sub--right');
	    } else if (offsetRight < $dropdown.width() ){
	      $dropdown.removeClass('nav__sub--right').addClass('nav__sub--left');
	    }
	  });

	  $(document).on('click', function (event) {
	    var isNav = !!$(event.target).closest('.js-nav').length;
	    var isNavBtn = $(event.target).hasClass('js-menu-btn') || $(event.target).closest('.js-menu-btn').length !== 0;
	    if (isNav || isNavBtn) return;

	    $nav.find('.nav__item').removeClass('opened');

	    navBtnChange(true);
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 22:
/*!**********************************!*\
  !*** ./js/module/ui/auth-btn.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	module.exports = function () {
	  $('.js-auth-register').on('click', function () {
	    $('.toolbar__auth-form').hide();
	    $('.js-auth-register-form').show();
	  });
	  $('.js-auth-restore').on('click', function () {
	    $('.toolbar__auth-form').hide();
	    $('.js-auth-restore-form').show();
	  });
	  $('.js-auth-login').on('click', function () {
	    $('.toolbar__auth-form').hide();
	    $('.js-auth-login-form').show();
	  });

	  $('.js-toolbar-search .form-control').on('input', function () {
	    var value = $(this).prop('value');
	    if (value) {
	      $(this).closest('.js-toolbar-search').addClass('active');
	    } else {
	      $(this).closest('.js-toolbar-search').removeClass('active');
	    }
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 23:
/*!*************************************!*\
  !*** ./js/module/ui/switch-view.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	module.exports = function () {
	  var $switchBtn = $('.js-switch-btn');
	  var $switchView = $('.js-switch-view');
	  var $switchListing = $('.js-switch-view > .listing');
	  if (!$switchBtn.length || !$switchView.length ) return;

	  $switchBtn.on('click', function () {
	    var mode = $(this).data('mode');
	    var view = $switchView.data('view');
	    console.log(view);
	    if (view === 'event') {
	      window.location.href = 'events_' + mode + '.html';
	      return;
	    } else if(view === 'sermon') {
	      window.location.href = 'sermons_' + mode + '.html';

	    }
	    var oldMode = mode === 'grid' ? 'list' : 'grid';
	    $switchView.removeClass(view + '--' + oldMode);
	    $switchView.addClass(view + '--' + mode);
	    $switchListing.removeClass('listing--' + oldMode);
	    $switchListing.addClass('listing--' + mode);
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 24:
/*!**************************************!*\
  !*** ./js/module/data-api/slider.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var _ = __webpack_require__(/*! lodash */ 6);
	var dataApiHelper = __webpack_require__(/*! ../data-api-helpers */ 25);
	var config = __webpack_require__(/*! ../config */ 5);

	function buildOptions($item) {
	  var data = dataApiHelper.getOptions($item,
	    [ ],
	    [ ],
	    {
	      dots: true,
	      infinite: true,
	      speed: 500,
	      slidesToShow: 1,
	      accessibility: true,
	      asNavFor: true,
	      arrows: true,
	      fade: false,
	      autoplay: false,
	      autoplaySpeed: 5000
	    });

	  return data;
	}


	module.exports = function () {
	  /***************************************************************
	   * Initialize sliders
	   * See http://kenwheeler.github.io/slick/ for more options
	   ==============================================================*/
	  $('.js-dapi-slider').each(function () {
	    var $container = $(this);
	    var options = buildOptions($container);
	    var $sliderSlick = $container.find('.js-slick-slider');
	    var $sliderNavSlick;
	    var configSlider = {
	      dots: options.dots,
	      infinite: options.infinite,
	      speed: options.speed,
	      slidesToShow: options.slidesToShow,
	      accessibility: options.accessibility,
	      rtl: config.dir === 'rtl',
	      fade: options.fade,
	      autoplay: options.autoplay,
	      autoplaySpeed: options.autoplaySpeed
	    };

	    if (options.asNavFor){
	      $sliderNavSlick = $container.next('.slider').find('.js-slick-slider');
	      configSlider.asNavFor = $sliderNavSlick;
	    }
	    if ($('body').hasClass('rtl')) configSlider.rtl = true;

	    if (options.arrows) {
	      configSlider.arrows = true;
	      configSlider.prevArrow = $container.find('.js-slider-prev');
	      configSlider.nextArrow = $container.find('.js-slider-next');
	    } else {
	      configSlider.arrows = false;

	    }
	    $sliderSlick.slick(configSlider);

	    var slidePlayVideo = function (slider, currentSlide, play) {
	      var slide = slider.$slides[currentSlide];
	      var $video = $(slide).find('.slider-video');

	      if ( !$video.length ) return;
	      if (play) {
	        $video[0].play();
	      } else {
	        $video[0].pause();
	      }
	    };

	    $sliderSlick
	      .on('afterChange', function (e, slider, currentSlide) {
	        slidePlayVideo(slider, currentSlide, true);
	      })
	      .on('beforeChange', function (e, slider, currentSlide) {
	        slidePlayVideo(slider, currentSlide, false);
	      });

	    slidePlayVideo($sliderSlick.slick('getSlick'), 0, true);

	    if (options.asNavFor) {
	      var $sliderNav = $container.next('.slider');

	      $sliderNavSlick
	        .slick({
	          slidesToShow: 3,
	          slidesToScroll: 1,
	          focusOnSelect: true,
	          arrows: false,
	          accessibility: false,
	          asNavFor: $sliderSlick
	        });

	      $sliderNavSlick.find('[data-slick-index="0"]').addClass('slick-current');

	      $sliderNavSlick
	        .on('afterChange', function (e, slider, currentSlide) {
	          $sliderNavSlick.find('.slick-slide').removeClass('slick-current');
	          $sliderNavSlick.find('[data-slick-index="' + currentSlide + '"]').addClass('slick-current');
	        });

	      $container
	        .on('mouseenter', '.js-slider-next', function () {
	          $sliderNav.addClass('slider--hover');
	        })
	        .on('mouseleave', '.js-slider-next', function () {
	          $sliderNav.removeClass('slider--hover');
	        })
	    }
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 25:
/*!***************************************!*\
  !*** ./js/module/data-api-helpers.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(/*! lodash */ 6);
	var errorHandler = __webpack_require__(/*! ./error-handler */ 26);

	/**
	 * @param {jQuery} $element
	 * @param {Array} requiredParams
	 * @param {Array} optionalParams
	 * @param {Object} optionalParamsWithDefaults
	 * @return {Object}
	 */
	exports.getOptions = function ($element, requiredParams, optionalParams, optionalParamsWithDefaults) {
	  requiredParams = requiredParams || [];
	  optionalParams = optionalParams || [];
	  optionalParamsWithDefaults = optionalParamsWithDefaults || {};

	  var dataValues = $element.data();

	  var optionWhitelist = _.union(
	    requiredParams,
	    optionalParams,
	    _.keys(optionalParamsWithDefaults)
	  );

	  dataValues = _.pick(dataValues, optionWhitelist);
	  dataValues = _.omit(dataValues, function (value) {
	    return value === "";
	  });

	  _.each(requiredParams, function (value) {
	    if (!dataValues.hasOwnProperty(value)) {
	      errorHandler.log('The object does not have the required "' + value + '" value');
	    }
	  });

	  return _.defaultsDeep(dataValues, optionalParamsWithDefaults);
	};

/***/ },

/***/ 26:
/*!************************************!*\
  !*** ./js/module/error-handler.js ***!
  \************************************/
/***/ function(module, exports) {

	exports.log = function (message) {
	  if (window.console && window.console.error){
	    window.console.error(message);
	  }
	};

/***/ },

/***/ 27:
/*!************************************!*\
  !*** ./js/module/data-api/knob.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var _ = __webpack_require__(/*! lodash */ 6);
	var dataApiHelper = __webpack_require__(/*! ../data-api-helpers */ 25);

	function buildOptions($item) {
	  return dataApiHelper.getOptions($item,
	    [],
	    [],
	    {
	      readOnly: true,
	      fgColor: "#ef5350",
	      bgColor: "#4d4d4d",
	      thickness: 0.07,
	      lineCap: 'round',
	      min: 0,
	      max: 100,
	      width: $item.parent().width(),
	      height: $item.parent().width(),
	      displayInput: false
	    });
	}


	module.exports = function () {
	  /***************************************************************
	   * Initialize sliders
	   * See http://kenwheeler.github.io/slick/ for more options
	   ==============================================================*/
	  $('.js-dapi-knob').each(function () {
	    var $container = $(this);
	    var options = buildOptions($container);

	    $container.knob(options);
	    console.log(options);

	    var updateKnob = _.debounce(function () {
	      var size = $container.parent().width();
	      $container.trigger('configure', {
	        width: size,
	        height: size
	      });
	    }, 100);

	    $(window).on('resize', updateKnob);

	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 28:
/*!****************************************!*\
  !*** ./js/module/ui/filters-search.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {module.exports = function () {
	  var gridSize = __webpack_require__(/*! ../grid-size */ 20);

	  $('.js-filters-btn').on('click', function () {
	    if (gridSize.get() === 'xs') {
	      $(this).closest('.js-filters').addClass('filters--opened');
	    }
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 29:
/*!*****************************!*\
  !*** ./js/module/ui/tab.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	module.exports = function () {
	  var $tabExpander = $('.js-tab-expander');
	  if (!$tabExpander.length ) return;

	  $tabExpander.on('click', function () {
	    $(this).closest('.js-tab').addClass('tab--expanded');
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 30:
/*!***********************************!*\
  !*** ./js/module/ui/collapser.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	module.exports = function () {
	  var $collapser = $('.js-collapser');
	  var $collapserWidget = $('.widget--collapser');
	  var $title = $('.js-collapser-title');
	  var $titleWidget = $collapserWidget.find('.js-widget-title');
	  if (!($collapser.length  || $collapserWidget.length)) return;
	  $title.on('click', function () {
	    $(this).closest('.js-collapser').toggleClass('collapser--expanded');
	  });

	  $titleWidget.on('click', function () {
	    $(this).closest('.js-widget').toggleClass('widget--expanded');
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 31:
/*!********************************!*\
  !*** ./js/module/ui/sermon.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	module.exports = function () {
	  var jssorslider = __webpack_require__(/*! jssorslider */ 32);
	  var utils = __webpack_require__(/*! ../utils */ 33);
	  var gridSize = __webpack_require__(/*! ../grid-size */ 20);
	  var $sermon = $('.js-sermon');
	  if (!$sermon.length) return;

	  var $sermonItem = $sermon.find('.js-sermon-item');
	  var $plyrVideo = $sermon.find('.js-plyr-video');
	  var $plyrAudio = $sermon.find('.js-plyr-audio');
	  var $btnVideo = $sermon.find('.js-sermon-video');
	  var $btnAudio = $sermon.find('.js-sermon-audio');
	  var modifier = $sermon.data('modifier');

	  var options = {
	    $AutoPlay: false,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
	    $PlayOrientation: 2,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
	    $DragOrientation: 2,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

	    $ArrowNavigatorOptions: {
	      $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
	      $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
	      $AutoCenter: 1,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
	      $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
	    }
	  };

	  function ScaleSlider() {
	    var parentWidth = $('#sermon-slider').parent().width();
	    if (parentWidth) {
	      sermonSlider.$ScaleWidth(parentWidth);
	    }
	    else
	      window.setTimeout(ScaleSlider, 30);
	  }

	  if (modifier === 'main') {
	    var sermonSlider = new $JssorSlider$("sermon-slider", options);
	    // responsive code begin
	    // you can remove responsive code if you don't want the slider scales
	    // while window resizing

	    //Scale slider after document ready
	    ScaleSlider();

	    //Scale slider while window load/resize/orientationchange.
	    $(window).bind("load", ScaleSlider);
	    $(window).bind("resize", ScaleSlider);
	    $(window).bind("orientationchange", ScaleSlider);
	    //responsive code end
	  }


	  var selector;
	  switch (modifier) {
	    case 'main':
	      selector = 'slider__item';
	      break;
	    case 'grid':
	      selector = 'sermon__media';
	      break;
	    default:
	      selector = 'sermon__item';

	  }

	  var $current;

	  var playMedia = function ($btn, type) {
	    var stopPlay = $btn.hasClass('active');
	    var $item = $btn.closest('.js-sermon-item');
	    $btnVideo.removeClass('active');
	    $btnAudio.removeClass('active');

	    if (gridSize.get() !== 'lg') {
	      window.location.href = $item.data('href');
	      return;
	    }

	    var player = $('.plyr--playing');

	    if (player) {
	      $.each(player, function () {
	        $(this)[0].plyr.pause();
	      })
	    }

	    $sermon.find('.' + selector)
	      .removeClass('sermon__item--audio')
	      .removeClass('sermon__item--video');

	    if (modifier !== 'main') {
	      $sermon.find('.sermon__video').slideUp(300);
	      $sermon.find('.sermon__audio').slideUp(300);
	    }

	    if (!stopPlay) {
	      if (modifier === 'main') {
	        $current = $sermon.find('.slider__item[debug-id="slide-' + $item.data('id') + '"]');

	        sermonSlider.$GoTo($item.data('id'));

	      } else if (modifier === 'grid') {
	        $current = $sermon.find('.sermon__media');

	        $plyrVideo[0].plyr.source({
	          type: 'video',
	          title: 'Example title',
	          sources: [
	            {
	              src: $item.data('video') + '.mp4',
	              type: 'video/mp4'
	            },
	            {
	              src:  $item.data('video') + '.webm',
	              type: 'video/webm'
	            }
	          ],
	          poster:  $item.data('poster')
	        });

	        $plyrAudio[0].plyr.source({
	          type: 'audio',
	          title: 'Example title',
	          sources: [
	            {
	              src: $item.data('audio') + '.mp3',
	              type:'audio/mp3'
	            }
	          ]
	        });
	        utils.centerElementInViewport($current);

	      } else {
	        $current = $item;
	      }
	      $current
	        .addClass('sermon__item--' + type);

	      if (modifier !== 'main') {
	        $current
	          .find('.sermon__' + type)
	          .slideDown(300);
	      }


	      $btn.addClass('active');

	    }
	  };

	  $btnVideo.on('click', function () {
	    var $btn = $(this);
	    playMedia($btn, 'video');

	  });

	  $btnAudio.on('click', function () {
	    var $btn = $(this);
	    playMedia($btn, 'audio');
	  });

	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 33:
/*!****************************!*\
  !*** ./js/module/utils.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	__webpack_require__(/*! jquery-smooth-scroll */ 34);
	exports.centerElementInViewport = function (DOMElement) {
	  var elementHeight,
	    elementOffset,
	    windowHeight,
	    offset,
	    $element;

	  if (!exports.isElementInViewport(DOMElement)) {
	    $element = $(DOMElement);
	    elementOffset = $element.offset().top;
	    elementHeight = $element.height();
	    windowHeight = $(window).height();

	    if (elementHeight < windowHeight) {
	      offset = elementOffset - ((windowHeight / 2) - (elementHeight / 2));
	    }
	    else {
	      offset = elementOffset;
	    }
	    $.smoothScroll({speed: 500}, offset);
	  }

	};

	exports.isElementInViewport = function (DOMElement) {
	  var rect = $(DOMElement)[0].getBoundingClientRect();
	  var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
	  var windowWidth = (window.innerWidth || document.documentElement.clientWidth);

	  return (
	    (rect.left >= 0)
	    && (rect.top >= 0)
	    && ((rect.left + rect.width) <= windowWidth)
	    && ((rect.top + rect.height) <= windowHeight)
	  );
	};

	exports.focusInputOnLoad = function (inputName) {
	  var element = document.getElementsByName(inputName)[0];
	  if (element) {
	    element.focus();
	    exports.centerElementInViewport(element);
	  }
	};

	exports.setFormProcessingState = function ($form, promise, noValidator) {
	  if (noValidator === undefined) {
	    noValidator = true;
	  }

	  exports.setProcessingState($form.find(':submit'), promise, $form);
	};

	exports.setProcessingState = function ($clickableElement, promise, $secondaryElement) {
	  var $htmlHelper = false;
	  if (!$clickableElement.hasClass('button--loading') && promise.state() === 'pending') {
	    $clickableElement.addClass('button__default--reset button--loading');

	    if ($secondaryElement) {
	      $secondaryElement.wrap('<div class="loading-overlay"></div>');
	      $htmlHelper = $('<div class="loading"></div>').appendTo($secondaryElement.parent());
	    }


	    $clickableElement.on('click.blocker', function (event) {
	      if (promise.state() === 'pending') {
	        event.stopImmediatePropagation();
	        alert('please wait');
	        return false;
	      } else {
	        $clickableElement.off('click.blocker');
	      }
	    });

	    promise.always(function () {
	      $clickableElement.removeClass('button__default--reset button--loading');
	      if ($secondaryElement) {
	        $secondaryElement.unwrap();
	        $htmlHelper.remove();
	      }
	      $clickableElement.off('click.blocker');
	    });
	  }
	};

	exports.closeOutside = function ($element, eventCallback) {
	  var notH = 1,
	    $pop = $element.on('hover', function () {
	      notH ^= 1;
	    });

	  $(document).on('mousedown keydown', function (e) {
	    if (notH || e.which == 27) {
	      eventCallback();
	    }
	  });
	};

	exports.abbreviateNumber = function (number) {
	  // 2 decimal places => 100, 3 => 1000, etc
	  var decPlaces = Math.pow(10, 0);

	  // Enumerate number abbreviations
	  var abbrev = ["k", "m", "b", "t"];

	  // Go through the array backwards, so we do the largest first
	  for (var i = abbrev.length - 1; i >= 0; i--) {

	    // Convert array index to "1000", "1000000", etc
	    var size = Math.pow(10, (i + 1) * 3);

	    // If the number is bigger or equal do the abbreviation
	    if (size <= number) {
	      // Here, we multiply by decPlaces, round, and then divide by decPlaces.
	      // This gives us nice rounding to a particular decimal place.
	      number = Math.round(number * decPlaces / size) / decPlaces;

	      // Handle special case where we round up to the next abbreviation
	      if ((number == 1000) && (i < abbrev.length - 1)) {
	        number = 1;
	        i++;
	      }

	      // Add the letter for the abbreviation
	      number += abbrev[i];

	      // We are done... stop
	      break;
	    }
	  }

	  return number;
	};

	exports.loadSvgWithAjax = function () {
	  var config = __webpack_require__(/*! ./config */ 5);
	  $(document.body).prepend($('<div>').load(config.assetsPathPrefix + 'img/sprite-inline.svg'));
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 35:
/*!*******************************!*\
  !*** ./js/module/ui/event.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	var htmlForm = function (modifier) {
	  return '\
	  <form action="#" class="form js-form-event form--event form--event-' + modifier + '">\
	    <div class="row">\
	      <div class="form-group form-group--text">\
	        <label for="comment-name" class="control-label">Your Name *</label>\
	        <input type="text" id="comment-name" required="required" class="form-control">\
	      </div>\
	      <div class="form-group form-group--text">\
	        <label for="comment-email" class="control-label">Your E-mail *</label>\
	        <input type="email" id="comment-email" required="required" class="form-control">\
	      </div>\
	      <div class="form-group form-group--text">\
	        <label for="comment-phone" class="control-label">Your telephone</label>\
	        <input type="text" id="comment-phone" required="required" class="form-control">\
	      </div>\
	    </div>\
	    <div class="row">\
	      <div class="form-group">\
	        <label for="comment-message" class="control-label">Message</label>\
	        <textarea id="comment-message" required="required" class="form-control"></textarea>\
	      </div>\
	    </div>\
	    <div class="form__buttons">\
	      <button type="submit" class="btn--flat form__btn">Submit</button>\
	    </div>\
	  </form>'
	};

	module.exports = function () {
	  var utils = __webpack_require__(/*! ../utils */ 33);
	  var map = __webpack_require__(/*! ../map */ 36);
	  var formControls = __webpack_require__(/*! ./form-controls */ 39);
	  var $event = $('.js-event');
	  if (!$event.length) return;
	  var $eventItem = $event.find('.js-event-item');
	  var modifier = $event.data('modifier');

	  var isFlipped = ['columns', 'split', 'grid'].indexOf(modifier) > -1;

	  var $btnLocation = $('.js-event-location');
	  var $btnMail = $('.js-event-mail');

	  var createForm = function ($item) {
	    if($item.data('form-init')) return;
	    $item.find('.js-form').html(htmlForm(modifier));
	    $item.find('.js-form-event').parsley();
	    formControls($item.find('.js-form-event'));
	    $item.data('form-init', true);
	  };

	  var createMap = function ($item) {
	    if($item.data('map-init')) return;
	    var $map = $item.find('.js-map');
	    setTimeout(function(){
	      map.init($map, window.demodata.contacts);
	    }, 400);
	    $item.data('map-init', true);
	  };

	  var changeActive = function ($btn, $item, type) {
	    $eventItem.removeClass('event__item--form').removeClass('event__item--map');
	    $eventItem.find('.js-form').slideUp(300);
	    $eventItem.find('.js-map').slideUp(300);
	    if (isFlipped) {
	      $eventItem.find('.flipper').removeClass('flipper--rotate');
	    }

	    if ($btn.hasClass('active')) {
	      $btn.removeClass('active');
	    } else {
	      $item.addClass('event__item--' + type);
	      $item.find('.js-' + type).slideDown(300);

	      $btnLocation.removeClass('active');
	      $btnMail.removeClass('active');
	      $btn.addClass('active');
	      if (isFlipped) {
	        $item.find('.flipper').addClass('flipper--rotate');
	      }
	    }

	  };

	  $btnLocation.on('click', function () {
	    var $btn = $(this);
	    var $item = $btn.closest('.js-event-item');
	    createMap($item);

	    changeActive($btn, $item, 'map')
	  });

	  $btnMail.on('click', function () {
	    var $btn = $(this);
	    var $item = $btn.closest('.js-event-item');
	    createForm($item);
	    changeActive($btn, $item, 'form');
	  });

	  $('.js-event-unflip').on('click', function () {
	    $btnLocation.removeClass('active');
	    $btnMail.removeClass('active');
	    $eventItem.removeClass('event__item--form').removeClass('event__item--map');
	    $eventItem.find('.flipper').removeClass('flipper--rotate');
	  });


	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 36:
/*!**************************!*\
  !*** ./js/module/map.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	exports.create = function ($mapContainer, $mobilePopupTrigger, onLoad) {
	  var mobilePopup = __webpack_require__(/*! ./mobile-popup */ 37);
	  var gridSize = __webpack_require__(/*! ./grid-size */ 20);
	  var _ = __webpack_require__(/*! lodash */ 6);

	  onLoad = onLoad || $.noop;

	  if ($mobilePopupTrigger) {
	    mobilePopup.wrapContainer($mapContainer, $mobilePopupTrigger, loadMap);
	  } else {
	    loadMap();
	  }

	  function loadMap() {

	    onLoad();
	  }

	  var initLgMap = _.debounce(function() {
	    if (gridSize.get() !== 'xs') {
	      $('.map__wrap').html($($mapContainer[0]).detach().css({
	        width: '100%',
	        height: 'auto'
	      }));

	      google.maps.event.trigger($mapContainer[0], 'resize');
	    }
	  }, 500);

	  $(window).resize(initLgMap);
	};

	exports.init = function (container, location) {
	  /**
	   * See more options
	   * https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	   */
	  var createGmapMarker = __webpack_require__(/*! ./gmap/marker */ 38);
	  var mapOptions = {
	    zoom: 10,
	    center: new google.maps.LatLng(location.latitude, location.longitude),
	    // Disable scrolling wheel for usability purposes
	    scrollwheel: false,
	    zoomControl: true,
	    mapTypeControl: true,
	    autocomplete: {
	      componentRestrictions: {'country': 'us'}
	    },
	    mapTypeControlOptions: {
	      position: google.maps.ControlPosition.LEFT_TOP
	    },
	    zoomControlOptions: {
	      position: google.maps.ControlPosition.RIGHT_CENTER
	    },
	    scaleControl: true,
	    scaleControlOptions: {
	      position: google.maps.ControlPosition.RIGHT_TOP
	    },
	    panControl: true,
	    panControlOptions: {
	      position: google.maps.ControlPosition.RIGHT_TOP
	    }
	  };
	  /**
	   * Google map initialization
	   ==============================================================*/

	  var $mapCanvas = $(container);
	  if (!$mapCanvas.length) return;

	  (function () {
	    // We're using here sample coordinates, please replace them with real ones
	    var coordinates = new google.maps.LatLng(location.latitude, location.longitude);
	    // Default map zoom
	    // jQuery object with map container

	    var $mapBtn = $('.js-map-btn');


	    /**
	     * This is a wrapper around original Google Maps object,
	     * which brings some user experience improvements for mobile users,
	     * So that, when user loads the map on small-screen device, it
	     * is replaced by a button, clicking on it will open full screen
	     * popup with the map in it.
	     *
	     * If you don't want/need that, you can call `google.maps.Map` contructor directly
	     *
	     * See https://developers.google.com/maps/documentation/javascript/
	     * for more examples and options
	     */
	    exports.create(
	      // Map container
	      $mapCanvas,

	      // A button, clicking on which will display the map in a fullscreen popup on small screens
	      $mapBtn,

	      /**
	       * This callback is executed when the Google Map is loaded
	       * As first agrument it receives the google map object
	       *
	       * Please place here all the code that needs the google map object
	       */
	      function () {
	        var map = new google.maps.Map($mapCanvas[0], _.merge(mapOptions, {zoom: 7, coordinates : coordinates }));

	        /**
	         * app.createMarker is a helper which contains
	         * preconfigured Marker object (see docs https://developers.google.com/maps/documentation/javascript/markers)
	         *
	         * If you want something more sophisticated, please use these libraries directly
	         */
	        createGmapMarker.create(
	          map,
	          coordinates,
	          location.address
	        );
	      });
	  })();
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 37:
/*!***********************************!*\
  !*** ./js/module/mobile-popup.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	/***************************************************************
	 * Helper for improved user experience with maps on devices
	 * with small screen.
	 *
	 * So that, when user loads the map on small-screen device, it
	 * is replaced by a button, clicking on it will open full screen
	 * popup with the map in it.
	 *
	 ==============================================================*/
	/**
	 * @param $mapContainer
	 * @param $triggerButton
	 * @param loadCallback
	 */
	exports.wrapContainer = function ($mapContainer, $triggerButton, loadCallback) {
	  var gridSize = __webpack_require__(/*! ./grid-size */ 20);
	  var $body = $('body');

	  //if (gridSize.get() == 'xs') {
	  //  $triggerButton.colorbox({
	  //    html: $mapContainer,
	  //    onLoad: function () {
	  //      var winWidth = $(window).width();
	  //      var winHeight = window.innerHeight;
	  //      $mapContainer.css({
	  //        width: winWidth,
	  //        height: winHeight
	  //      });
	  //    },
	  //    onComplete: function () {
	  //      loadCallback();
	  //      $body.css({overflow: 'hidden'});
	  //    },
	  //    onCleanup: function () {
	  //      $body.css({overflow: 'auto'});
	  //    }
	  //  });
	  //} else {
	  //  loadCallback();
	  //}
	  loadCallback();
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 38:
/*!**********************************!*\
  !*** ./js/module/gmap/marker.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 *
	 * @param {Map} map
	 * @param {LatLng} latlng
	 * @param {string} title
	 * @returns {Marker}
	 */
	var config = __webpack_require__(/*! ../config */ 5);
	var _ = __webpack_require__(/*! lodash */ 6);

	exports.create = function (map, latlng, title) {
	  return exports.createAdvanced({
	    position: latlng,
	    map: map,
	    title: title
	  });
	};

	exports.createAdvanced = function (options) {
	  options = _.defaults(options, {
	    animation: google.maps.Animation.DROP,
	    //icon: {
	    //  //url: config.assetsPathPrefix + 'img/marker/' + config.colorTheme + '.png',
	    //  //origin: new google.maps.Point(0, 0),
	    //  //anchor: new google.maps.Point(15, 47)
	    //}
	  });
	  return new google.maps.Marker(options);
	};


/***/ },

/***/ 39:
/*!***************************************!*\
  !*** ./js/module/ui/form-controls.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	module.exports = function (container) {
	  var $controls = $(container).find('.form-control');
	  if (!$controls.length ) return;
	  var $label = $(container).find('.control-label');

	  var checkState = function () {
	    $controls.each(function (){
	      var $control = $(this);
	      if ($control.val() !== '') {
	        $control.closest('.form-group').addClass('active');
	      } else {
	        $control.closest('.form-group').removeClass('active');
	      }

	      if ($control.attr('disabled') === 'disabled') $control.closest('.form-group').addClass('disabled')

	    });
	  };

	  $label.on('click', function () {
	    checkState();
	    $(this).closest('.form-group').addClass('active');
	  });

	  $controls.on('click focus input blur change', function () {
	    checkState();
	    $(this).closest('.form-group').addClass('active');
	  });

	  $(window).on('load', function () {
	    checkState();
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 40:
/*!******************************!*\
  !*** ./js/module/ui/cart.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	module.exports = function () {

	  $('.js-cart-remove').on('click', function () {
	    $(this).closest('.js-cart-item').slideUp();
	  });

	  $('.js-products-basket-add').on('click', function () {
	    $(this).toggleClass('active');
	  });

	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 41:
/*!******************************************!*\
  !*** ./js/module/ui/isotope-products.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/*** IMPORTS FROM imports-loader ***/
	var define = false;
	(function() {

	module.exports = function () {
	  var Isotope = __webpack_require__(/*! isotope-layout */ 42);
	  var gridSize = __webpack_require__(/*! ../grid-size */ 20);
	  var $isotopeProducts = $('.js-isotope-products');
	  if (!$isotopeProducts.length) return;
	  var iso = new Isotope( $isotopeProducts[0], {
	    itemSelector: '.products__item'
	  });

	  var page = 0;
	  var min = 0;
	  var max;
	  var total = $('.products__item').length - 2;
	  var rangeFilter = function () {
	    var offset = 5;
	    switch (gridSize.get()) {
	      case 'lg': offset = 5; break;
	      case 'md': offset = 4; break;
	      case 'sm': offset = 3; break;
	      case 'xs': offset = 1; break;
	    }

	    var limit = Math.round(total / offset);

	    if (page < 0) {
	      page = limit-1;
	    } else if (page == limit){
	      page = 0;
	    }
	    min = offset * page + 2;
	    max =  offset * page + offset + 2;

	    iso.arrange({
	      filter: function(i, itemElem ) {
	        return $(itemElem).index() === 0 ||  $(itemElem).index() === 1 || ($(itemElem).index() >= min && $(itemElem).index() < max );
	      }
	    });
	  };

	  rangeFilter(true);

	  $('.js-products-prev').on('click', function () {
	    --page;
	    rangeFilter();
	  });
	  $('.js-products-next').on('click', function () {
	    ++page;
	    rangeFilter();
	  });

	  $(window).on('load', function() {

	  });

	};

	}.call(window));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 58:
/*!****************************************!*\
  !*** ./js/module/data-api/datetime.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! bootstrap-daterangepicker */ 59);
	var _ = __webpack_require__(/*! lodash */ 6);

	var detectOpenDirection = function ($item) {
	  var opensDir;
	  var offsetLeft = $item.offset().left;
	  var offsetRight = ($(window).width() - ($item.offset().left + $item.outerWidth()));
	  if (offsetLeft < 600) {
	    opensDir = 'right';
	  } else if (offsetRight < 600) {
	    opensDir = 'left';
	  }
	  return opensDir;
	};

	var buildOptions  = function($item){
	  return _.defaultsDeep(
	    {
	      startDate: $item.data('start-date'),
	      endDate: $item.data('end-date'),
	      timePicker: $item.data('time-picker'),
	      singleDatePicker: $item.data('single-picker'),
	      timePicker24Hour: $item.data('24hr'),
	      locale: {
	        format: $item.data('locale-format')
	      }
	    },
	    {
	      locale: {
	        format: 'MM/DD/YYYY  h:mm A'
	      },
	      timePicker: false,
	      timePickerIncrement: 5,
	      opens: detectOpenDirection($item),
	      autoApply: false
	    }
	  );
	};

	module.exports = function () {
	  $('.js-datetimerange').each(function () {
	    var $fieldsDatetime = $(this);
	    $fieldsDatetime.daterangepicker(buildOptions($fieldsDatetime));
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 61:
/*!**************************************************************************************************************!*\
  !*** /home/chetzof/Work/wp_webelieve/webelieve.dev/web/app/themes/webelieve/assets/~/moment/locale ^\.\/.*$ ***!
  \**************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./af": 62,
		"./af.js": 62,
		"./ar": 63,
		"./ar-ma": 64,
		"./ar-ma.js": 64,
		"./ar-sa": 65,
		"./ar-sa.js": 65,
		"./ar-tn": 66,
		"./ar-tn.js": 66,
		"./ar.js": 63,
		"./az": 67,
		"./az.js": 67,
		"./be": 68,
		"./be.js": 68,
		"./bg": 69,
		"./bg.js": 69,
		"./bn": 70,
		"./bn.js": 70,
		"./bo": 71,
		"./bo.js": 71,
		"./br": 72,
		"./br.js": 72,
		"./bs": 73,
		"./bs.js": 73,
		"./ca": 74,
		"./ca.js": 74,
		"./cs": 75,
		"./cs.js": 75,
		"./cv": 76,
		"./cv.js": 76,
		"./cy": 77,
		"./cy.js": 77,
		"./da": 78,
		"./da.js": 78,
		"./de": 79,
		"./de-at": 80,
		"./de-at.js": 80,
		"./de.js": 79,
		"./dv": 81,
		"./dv.js": 81,
		"./el": 82,
		"./el.js": 82,
		"./en-au": 83,
		"./en-au.js": 83,
		"./en-ca": 84,
		"./en-ca.js": 84,
		"./en-gb": 85,
		"./en-gb.js": 85,
		"./en-ie": 86,
		"./en-ie.js": 86,
		"./en-nz": 87,
		"./en-nz.js": 87,
		"./eo": 88,
		"./eo.js": 88,
		"./es": 89,
		"./es.js": 89,
		"./et": 90,
		"./et.js": 90,
		"./eu": 91,
		"./eu.js": 91,
		"./fa": 92,
		"./fa.js": 92,
		"./fi": 93,
		"./fi.js": 93,
		"./fo": 94,
		"./fo.js": 94,
		"./fr": 95,
		"./fr-ca": 96,
		"./fr-ca.js": 96,
		"./fr-ch": 97,
		"./fr-ch.js": 97,
		"./fr.js": 95,
		"./fy": 98,
		"./fy.js": 98,
		"./gd": 99,
		"./gd.js": 99,
		"./gl": 100,
		"./gl.js": 100,
		"./he": 101,
		"./he.js": 101,
		"./hi": 102,
		"./hi.js": 102,
		"./hr": 103,
		"./hr.js": 103,
		"./hu": 104,
		"./hu.js": 104,
		"./hy-am": 105,
		"./hy-am.js": 105,
		"./id": 106,
		"./id.js": 106,
		"./is": 107,
		"./is.js": 107,
		"./it": 108,
		"./it.js": 108,
		"./ja": 109,
		"./ja.js": 109,
		"./jv": 110,
		"./jv.js": 110,
		"./ka": 111,
		"./ka.js": 111,
		"./kk": 112,
		"./kk.js": 112,
		"./km": 113,
		"./km.js": 113,
		"./ko": 114,
		"./ko.js": 114,
		"./lb": 115,
		"./lb.js": 115,
		"./lo": 116,
		"./lo.js": 116,
		"./lt": 117,
		"./lt.js": 117,
		"./lv": 118,
		"./lv.js": 118,
		"./me": 119,
		"./me.js": 119,
		"./mk": 120,
		"./mk.js": 120,
		"./ml": 121,
		"./ml.js": 121,
		"./mr": 122,
		"./mr.js": 122,
		"./ms": 123,
		"./ms-my": 124,
		"./ms-my.js": 124,
		"./ms.js": 123,
		"./my": 125,
		"./my.js": 125,
		"./nb": 126,
		"./nb.js": 126,
		"./ne": 127,
		"./ne.js": 127,
		"./nl": 128,
		"./nl.js": 128,
		"./nn": 129,
		"./nn.js": 129,
		"./pa-in": 130,
		"./pa-in.js": 130,
		"./pl": 131,
		"./pl.js": 131,
		"./pt": 132,
		"./pt-br": 133,
		"./pt-br.js": 133,
		"./pt.js": 132,
		"./ro": 134,
		"./ro.js": 134,
		"./ru": 135,
		"./ru.js": 135,
		"./se": 136,
		"./se.js": 136,
		"./si": 137,
		"./si.js": 137,
		"./sk": 138,
		"./sk.js": 138,
		"./sl": 139,
		"./sl.js": 139,
		"./sq": 140,
		"./sq.js": 140,
		"./sr": 141,
		"./sr-cyrl": 142,
		"./sr-cyrl.js": 142,
		"./sr.js": 141,
		"./sv": 143,
		"./sv.js": 143,
		"./sw": 144,
		"./sw.js": 144,
		"./ta": 145,
		"./ta.js": 145,
		"./te": 146,
		"./te.js": 146,
		"./th": 147,
		"./th.js": 147,
		"./tl-ph": 148,
		"./tl-ph.js": 148,
		"./tlh": 149,
		"./tlh.js": 149,
		"./tr": 150,
		"./tr.js": 150,
		"./tzl": 151,
		"./tzl.js": 151,
		"./tzm": 152,
		"./tzm-latn": 153,
		"./tzm-latn.js": 153,
		"./tzm.js": 152,
		"./uk": 154,
		"./uk.js": 154,
		"./uz": 155,
		"./uz.js": 155,
		"./vi": 156,
		"./vi.js": 156,
		"./zh-cn": 157,
		"./zh-cn.js": 157,
		"./zh-tw": 158,
		"./zh-tw.js": 158
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 61;


/***/ },

/***/ 159:
/*!********************************************!*\
  !*** ./js/module/data-api/fullcalendar.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! fullcalendar */ 160);

	module.exports = function () {
	  var gridSize = __webpack_require__(/*! ../grid-size */ 20);
	  $('.js-calendar').each(function () {
	    var $container = $(this);
	    var $fullCalendar = $container.find('.js-fullcalendar');
	    var $btnNextMonth = $container.find('.js-calendar-next');
	    var $btnPrevMonth = $container.find('.js-calendar-prev');
	    var $period = $container.find('.js-calendar-period');

	    $fullCalendar.fullCalendar({
	      columnFormat: gridSize.get() == 'xs' ? 'ddd' : 'dddd',
	      height: gridSize.get() == 'xs' ? 500 : 'auto',
	      header: false,
	      events: [
	        {
	          title: 'Event1',
	          start: '2016-03-04',
	          url: 'http://demo.codefactory47.com/webelieve/event_details.html'
	        },
	        {
	          title: 'Don’t miss out on Gateway’s new series, Jesus, as Pastor Robert and...',
	          start: '2016-03-05',
	          url: 'http://demo.codefactory47.com/webelieve/event_details.html'
	        },
	        {
	          title: 'A powerfull life-changing experience.',
	          start: '2016-03-15',
	          url: 'http://demo.codefactory47.com/webelieve/event_details.html'
	        },
	        {
	          title: 'Build a Foundation for Parenting.  Because The Brady Bunch made it look.',
	          start: '2016-03-16',
	          url: 'http://demo.codefactory47.com/webelieve/event_details.html'
	        },
	        {
	          title: 'Don’t miss out on Gateway’s new series, Jesus, as Pastor Robert  unpacks and explains who Jesus was, is and will be.',
	          start: '2016-03-27',
	          url: 'http://demo.codefactory47.com/webelieve/event_details.html'
	        }
	      ],
	      viewRender: function () {
	        var moment = $fullCalendar.fullCalendar('getDate');
	        $period.text(moment.format('MMMM YYYY'))
	      }
	    });

	    $btnPrevMonth.click(function() {
	      $fullCalendar.fullCalendar('prev');
	    });
	    $btnNextMonth.click(function() {
	      $fullCalendar.fullCalendar('next');
	    });
	    $(window).resize(function () {
	      console.log($fullCalendar);
	      $fullCalendar.fullCalendar('option', 'columnFormat', gridSize.get() == 'xs' ? 'ddd' : 'dddd');
	    });

	  });

	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 161:
/*!***************************************!*\
  !*** ./js/module/data-api/isotope.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {module.exports = function () {
	  var Isotope = __webpack_require__(/*! isotope-layout */ 42);
	  var $isotopeGrid = $('.js-isotope-grid');
	  var $gridSize = __webpack_require__(/*! ../grid-size */ 20);
	  if (!$isotopeGrid.length || $gridSize.get() === 'xs') return;
	  var $isotopeFilter = $('.js-isotope-filter');
	  var iso;

	  $(window).on('load', function() {
	    iso = new Isotope( $isotopeGrid[0], {
	      itemSelector: '.listing__item'
	    });

	  });

	  $isotopeFilter.on('click', function () {
	    var $this = $(this);
	    if ($this.hasClass('active')) return;
	    var filter = $this.data('filter');

	    iso.arrange({
	      filter: function(i, itemElem ) {
	        if (filter === '*') {
	          return true;
	        } else {
	          return $(itemElem).hasClass('listing__item--' + filter);
	        }
	      }
	    });
	    $isotopeFilter.removeClass('active');
	    $this.addClass('active');
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 162:
/*!*****************************************!*\
  !*** ./js/module/data-api/countdown.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var _ = __webpack_require__(/*! lodash */ 6);

	var buildOptions  = function($item){
	  return _.defaultsDeep(
	    {
	      endDate: $item.data('end-date')
	    },
	    {
	      endDate: '2016/05/04'
	    }
	  );
	};


	var gridSize = __webpack_require__(/*! ../grid-size */ 20);
	var template = '<div class="countdown__column">\
	                <div class="countdown__value">%D</div>\
	                <div class="countdown__label">Days</div>\
	              </div>\
	              <div class="countdown__delimiter"></div>\
	              <div class="countdown__column">\
	                <div class="countdown__value">%H</div>\
	                <div class="countdown__label">Hours</div>\
	              </div>\
	              <div class="countdown__delimiter"></div>\
	              <div class="countdown__column">\
	                <div class="countdown__value">%M</div>\
	                <div class="countdown__label">Minutes</div>\
	              </div>\
	              <div class="countdown__delimiter countdown__delimiter--seconds"></div>\
	              <div class="countdown__column">\
	                <div class="countdown__value">%S</div>\
	                <div class="countdown__label">Seconds</div>\
	              </div>';


	exports.timer = function () {
	  $('.js-counttimer').each(function () {
	    var $item = $(this);
	    $item.countdown(buildOptions($item).endDate, function(event) {
	      $(this).html(event.strftime(template));
	    });
	  });
	};

	exports.circles = function (id) {

	  $('.js-countcircles').each(function () {
	    var $item = $(this);

	    var $days = $item.find('.countdown-days');
	    var $hours = $item.find('.countdown-hours');
	    var $minutes = $item.find('.countdown-minutes');
	    var $seconds = $item.find('.countdown-seconds');
	    var config = {
	      readOnly: true,
	      fgColor: "#ef5350",
	      bgColor: "#fff",
	      thickness: 0.07,
	      lineCap: 'round',
	      min: 0,
	      font: 'Teko',
	      max: 60,
	      width: gridSize.get() === 'xs' ? 50 : 120,
	      height: gridSize.get() === 'xs' ? 50 : 120
	    };

	    $days.knob(_.defaults({max: 60}, config));
	    $hours.knob(_.defaults({max: 24}, config));
	    $minutes.knob(config);
	    $seconds.knob(config);

	    $item.countdown(buildOptions($item).endDate, function(event) {
	      $days.val(event.offset.totalDays).trigger('change');
	      $hours.val(event.offset.hours).trigger('change');
	      $minutes.val(event.offset.minutes).trigger('change');
	      $seconds.val(event.offset.seconds).trigger('change');
	    });

	    var updateKnob = _.debounce(function () {
	      var size = {
	        width: gridSize.get() === 'xs' ? 50 : 120,
	        height: gridSize.get() === 'xs' ? 50 : 120
	      };

	      $days.trigger('configure', size);
	      $hours.trigger('configure', size);
	      $minutes.trigger('configure', size);
	      $seconds.trigger('configure', size);
	    }, 100);

	    $(window).on('resize', updateKnob);
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 163:
/*!*******************************************!*\
  !*** ./js/module/data-api/numberfield.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/*------------------------------------------------------------------
	 * More info docs_build/ui/numberfield.html
	  ==============================================================*/
	var initNumberfield = function ($container) {
	  var $btnLess = $container.find('.numberfield__btn[data-type="less"]');
	  var $btnMore = $container.find('.numberfield__btn[data-type="more"]');
	  var $in = $container.find('.numberfield__in');

	  $btnLess.on('click', function () {
	    var value = parseFloat($in.val());
	    if (value === 1) {
	      $btnLess.prop('disabled', true);
	    } else {
	      $in.val(--value)
	    }
	  });

	  $btnMore.on('click', function () {
	    var value = parseFloat($in.val());
	    if (value === 1) $btnLess.prop('disabled', false);
	    $in.val(++value);
	  });
	};

	module.exports = function () {

	  $('.js-numberfield').each(function () {
	    initNumberfield($(this));
	  });

	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 164:
/*!***********************************!*\
  !*** ./js/module/ui/animation.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	var reveal = function (selector, options, delay) {
	  if(!$(selector).length) return;
	  sr.reveal(selector, options, delay);
	};

	module.exports = function () {
	  var ScrollReveal = __webpack_require__(/*! scrollreveal */ 165);

	  window.sr = ScrollReveal({
	    //reset: true,
	    viewFactor: 0.3,
	    duration: 800
	  });


	  var gridSize = __webpack_require__(/*! ../grid-size */ 20);
	  var $body = $('body');


	  if ($body.hasClass('scroll-animation') && gridSize.get() === 'lg') {

	    // widgets
	    reveal('.main .widget:not(.widget--sidebar) .widget__title', {
	      scale: 1.1
	    });

	    //nextevent--countcircles
	    var circlesReveal = {
	      easing: 'ease-in-out',
	      rotate: {z: 100},
	      scale: 1,
	      distance: '0px'
	    };

	    //reveal('.js-countcircles > div', circlesReveal, 100);
	    reveal('.nextevent--countcircles .nextevent__details', {
	      distance: '50px',
	      origin: 'bottom',
	      scale: 0.8,
	      opacity: 0.8
	    });


	    // about simple
	    reveal('.about--simple .about__details', {
	      distance: '90px',
	      origin: 'right'
	    });

	    // sermon main
	    reveal('.sermon--main .listing__item', {
	      distance: '30px',
	      origin: 'top'
	    }, 120);

	    reveal('.sermon--main .sermon__link-item', {
	      scale: 1.3
	    }, 20);

	    // sermon--ordered
	    reveal('.sermon--ordered .sermon__item', {
	      distance: '30px',
	      origin: 'bottom',
	      rotate: {z: 10},
	    }, 120);

	    reveal('.sermon--ordered .sermon__link-item', {
	      scale: 1.3
	    }, 20);


	    // event main
	    reveal('.event--main .listing__item', {
	      distance: '50px',
	      origin: 'bottom',
	      rotate: {x: 100}
	    }, 120);

	    // event--split
	    reveal('.event--split .event__item', {
	      distance: '50px',
	      origin: 'bottom',
	      rotate: {y: 100}
	    }, 120);


	    // post main
	    reveal('.post--main .post__item--0', {
	      distance: '150px',
	      origin: 'left'
	    });

	    reveal('.post--main .post__item--1', {
	      distance: '150px',
	      origin: 'top',
	      delay: 50
	    });

	    reveal('.post--main .post__item--2', {
	      distance: '150px',
	      origin: 'right',
	      delay: 100
	    });
	    // nextevent--countpanel
	    reveal('.nextevent--countpanel .countdown--panel', {
	      rotate: {x: 100}
	    });
	    reveal('.nextevent--countpanel .nextevent__preview', {
	      distance: '50%',
	      origin: 'left'
	    });
	    reveal('.nextevent--countpanel .nextevent__details', {
	      distance: '50%',
	      origin: 'right'
	    });

	    //  nextevent--counttimer
	    reveal('.nextevent--counttimer .nextevent__preview', {
	      distance: '50%',
	      origin: 'bottom'
	    });
	    reveal('.nextevent--counttimer .nextevent__details', {
	      distance: '50%',
	      origin: 'bottom'
	    });

	    //about--columns
	    reveal('.about--columns .about__item', {
	      distance: '50%',
	      origin: 'bottom'
	    }, 100);
	    //sermon--column
	    reveal('.sermon--column .sermon__item', {
	      rotate: {y: 100}
	    }, 150);


	    // cause--donation
	    reveal('.cause--donation .cause__details', {
	      distance: '50%',
	      origin: 'bottom'
	    });
	    reveal('.cause--donation .cause__counter', {
	      distance: '50%',
	      origin: 'left'
	    });
	    reveal('.cause--donation .cause__preview', {
	      distance: '50%',
	      origin: 'right'
	    });

	    //event--columns

	    reveal('.event--columns .event__item', {
	      scale: 1.3
	    }, 150);

	    //event--columns
	    reveal('.post--standart .post__item', {
	      distance: '50%',
	      origin: 'right'
	    }, 150);

	    //about--minimal
	    reveal('.about--minimal .about__item', {
	      distance: '50px',
	      origin: 'top',
	      scale: 1.2
	    }, 200);

	    //ministry--gallery
	    reveal('.ministry--gallery .ministry__gallery-item', {
	      distance: '150px',
	      origin: 'bottom',
	      scale: 1
	    }, 150);

	    //post--preview
	    reveal('.post--preview .post__item', {
	      distance: '150px',
	      origin: 'bottom',
	      scale: 1
	    }, 200);

	    //post--masonry
	    reveal('.post--masonry .post__item', {
	      distance: '50px',
	      origin: 'bottom',
	      scale: 1
	    });

	    // paralax effect for main slider
	    $(window).on('scroll', function () {
	      if(window.detectIE || $('.slider--wide').length === 0 ) return;
	      var scrollAmount = $(window).scrollTop() / 2;
	      scrollAmount = Math.round(scrollAmount);

	      if(scrollAmount > 500) return;
	      $('.slider--wide .slider__block').css('transform', 'translateY(' + scrollAmount + 'px)');
	    })
	  } else {
	    $body.removeClass('scroll-animation')
	  }
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 166:
/*!********************************!*\
  !*** ./js/module/ui/common.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {module.exports = function () {
	  var utils = __webpack_require__(/*! ../utils */ 33);
	  $('.js-event-register-btn').on('click', function () {
	    $('.js-event-register-form').slideDown();
	    utils.centerElementInViewport('.js-event-register-form');
	    return false;
	  });

	  $('.js-cause-donate-btn').on('click', function () {
	    $('.js-cause-donate-form').slideDown();
	    utils.centerElementInViewport($('.js-cause-donate-form'));
	    return false;
	  });
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 167:
/*!**************************************!*\
  !*** ./js/module/ui/scrollup-spy.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/***************************************************************
	 * "Scroll to top" button
	 ==============================================================*/
	var _ = __webpack_require__(/*! lodash */ 6);
	module.exports = function () {
	  var $scrollup = $('.js-scrollup'),
	    scrollupClass = '',
	    _cssClass = null;

	  var setScrollupClass = function () {
	    var offsetTop = $(window).scrollTop();
	    if (offsetTop > 400) {
	      scrollupClass = 'scrollup-show';
	    } else {
	      scrollupClass = '';
	    }

	    if (scrollupClass !== _cssClass) {
	      $scrollup.removeClass('scrollup-show');
	      $scrollup.addClass(scrollupClass);
	      _cssClass = scrollupClass;
	    }
	  };

	  $(window).on('scroll', _.debounce(setScrollupClass, 200));
	  $scrollup.on('click', function () {
	    $('html, body').animate({scrollTop: 0});
	  });

	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 168:
/*!*****************************!*\
  !*** ./js/demo/ui-panel.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/***************************************************************
	 * Panel useful for development, where you can
	 * enable or disable various theme features.
	 *
	 * Usually, this should be DISABLED on live website.
	 ==============================================================*/
	module.exports = function () {
	  var _ = __webpack_require__(/*! lodash */ 6);
	  var panels = ['pages', 'boxed', 'patterns', 'theme_colors', 'sidebar' ];
	  var options = {
	    pages: [
	      {url: 'about.html', name: 'About'},
	      {url: 'about--full.html', name: 'About full'},
	      {url: 'about--left.html', name: 'About sidebar left'},
	      {url: 'account.html', name: 'Account'},
	      {url: 'blog_details.html', name: 'Blog details'},
	      {url: 'blog_details--full.html', name: 'Blog details full'},
	      {url: 'blog_details--left.html', name: 'Blog details sidebar left'},
	      {url: 'blog_grid.html', name: 'Blog grid'},
	      {url: 'blog_grid--full.html', name: 'Blog grid full'},
	      {url: 'blog_grid--left.html', name: 'Blog grid sidebar left'},
	      {url: 'blog_list.html', name: 'Blog list'},
	      {url: 'blog_list--full.html', name: 'Blog list full'},
	      {url: 'blog_list--left.html', name: 'Blog list sidebar left'},
	      {url: 'blog_masonry.html', name: 'Blog masonry'},
	      {url: 'blog_masonry--full.html', name: 'Blog masonry full'},
	      {url: 'blog_masonry--left.html', name: 'Blog masonry sidebar left'},
	      {url: 'calendar.html', name: 'Calendar'},
	      {url: 'cart.html', name: 'Cart'},
	      {url: 'cause_details.html', name: 'Cause details'},
	      {url: 'cause_details--full.html', name: 'Cause details full'},
	      {url: 'cause_details--left.html', name: 'Cause details sidebar left'},
	      {url: 'causes_grid.html', name: 'Causes grid'},
	      {url: 'causes_grid--full.html', name: 'Causes grid full'},
	      {url: 'causes_grid--left.html', name: 'Causes grid sidebar left'},
	      {url: 'causes_list.html', name: 'Causes list'},
	      {url: 'causes_list--donate.html', name: 'Causes list donate'},
	      {url: 'causes_list--full.html', name: 'Causes list full'},
	      {url: 'causes_list--left.html', name: 'Causes list sidebar left'},
	      {url: 'checkout.html', name: 'Checkout'},
	      {url: 'community.html', name: 'Community'},
	      {url: 'community--full.html', name: 'Community full'},
	      {url: 'community--left.html', name: 'Community sidebar left'},
	      {url: 'community_member.html', name: 'Community member'},
	      {url: 'community_member--full.html', name: 'Community member full'},
	      {url: 'community_member--left.html', name: 'Community member sidebar left'},
	      {url: 'contacts.html', name: 'Contacts'},
	      {url: 'contacts_header_2.html', name: 'Contacts header 2'},
	      {url: 'contacts_header_3.html', name: 'Contacts header 3'},
	      {url: 'contacts_header_4.html', name: 'Contacts header 4'},
	      {url: 'contacts_header_5.html', name: 'Contacts header 5'},
	      {url: 'contacts_header_6.html', name: 'Contacts header 6'},
	      {url: 'donate.html', name: 'Donate'},
	      {url: 'email.html', name: 'Email'},
	      {url: 'error_404.html', name: 'Error 404'},
	      {url: 'event_details.html', name: 'Event details'},
	      {url: 'event_details--full.html', name: 'Event_details full'},
	      {url: 'event_details--left.html', name: 'Event details sidebar left'},
	      {url: 'events_grid.html', name: 'Events grid'},
	      {url: 'events_grid--full.html', name: 'Events grid full'},
	      {url: 'events_grid--left.html', name: 'Events grid sidebar left'},
	      {url: 'events_list.html', name: 'Events list'},
	      {url: 'events_list--full.html', name: 'Events list full'},
	      {url: 'events_list--left.html', name: 'Events list sidebar left'},
	      {url: 'faq.html', name: 'Faq'},
	      {url: 'feature_bootstrap.html', name: 'Feature bootstrap'},
	      {url: 'feature_boxed.html', name: 'Feature boxed'},
	      {url: 'feature_no_content.html', name: 'Feature no content'},
	      {url: 'feature_rtl.html', name: 'Feature rtl'},
	      {url: 'feature_typography.html', name: 'Feature typography'},
	      {url: 'feature_ui.html', name: 'Feature ui'},
	      {url: 'gallery.html', name: 'Gallery'},
	      {url: 'gallery--2.html', name: 'Gallery'},
	      {url: 'gallery--masonry.html', name: 'Gallery'},
	      {url: 'gallery--masonry-2.html', name: 'Gallery'},
	      {url: 'gallery_caption.html', name: 'Gallery caption'},
	      {url: 'gallery_caption--2.html', name: 'Gallery caption'},
	      {url: 'gallery_caption--masonry.html', name: 'Gallery caption masonry'},
	      {url: 'gallery_caption--masonry-2.html', name: 'Gallery caption masonry'},
	      {url: 'gallery_details.html', name: 'Gallery details'},
	      {url: 'index.html', name: 'Index'},
	      {url: 'index_2.html', name: 'Index 2'},
	      {url: 'index_3.html', name: 'Index 3'},
	      {url: 'index_auth.html', name: 'Index auth'},
	      {url: 'index_header_2.html', name: 'Index header 2'},
	      {url: 'index_header_3.html', name: 'Index header 3'},
	      {url: 'index_header_4.html', name: 'Index header 4'},
	      {url: 'index_header_5.html', name: 'Index header 5'},
	      {url: 'index_header_6.html', name: 'Index header 6'},
	      {url: 'product.html', name: 'Product'},
	      {url: 'sermon_details.html', name: 'Sermon details'},
	      {url: 'sermon_details--full.html', name: 'Sermon details full'},
	      {url: 'sermon_details--left.html', name: 'Sermon details sidebar left'},
	      {url: 'sermons_grid.html', name: 'Sermons grid'},
	      {url: 'sermons_grid--full.html', name: 'Sermons grid full'},
	      {url: 'sermons_grid--left.html', name: 'Sermons grid sidebar left'},
	      {url: 'sermons_list.html', name: 'Sermons list'},
	      {url: 'sermons_list--full.html', name: 'Sermons list full'},
	      {url: 'sermons_list--left.html', name: 'Sermons list sidebar left'},
	      {url: 'shop.html', name: 'Shop'},
	      {url: 'user_login.html', name: 'User login'},
	      {url: 'user_register.html', name: 'User register'},
	      {url: 'user_restore_pass.html', name: 'User restore pass'}
	    ],
	    boxed: false,
	    bg_patterns: ['brickwall', 'debut_light', 'diagonal_lines_01', 'diagonal-noise', 'dust_2X', 'groovepaper', 'little_pluses', 'p4', 'p5',
	      'retina_dust', 'ricepaper2', 'shl', 'squairy_light', 'stardust_2X', 'subtle_dots', 'subtle_dots_2X', 'white_brick_wall', 'worn_dots'],
	    theme_colors: ['default', 'beige', 'blue_dark', 'blue_light', 'brown', 'gray', 'yellow', 'violet'],
	    header_fixed: true,
	    header_colors: [],
	    dropdown_effects: ['default', 'bounce', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'flipInX', 'flipInY', 'lightSpeedIn', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp'],
	    slider_effects: ['default', 'bounce', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'flipInX', 'flipInY', 'lightSpeedIn', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp'],
	    hover_effects: ['default'],
	    sidebar: ['left', 'right', 'hide'],
	    rtl: false
	  };

	  var UIpanel = (function () {
	    var widget = {},
	      $body = $('body'),
	      $uiPanel,
	      $uiPanelToogle,
	      $linkStyles = document.querySelectorAll('link');

	    widget.ui = {
	      select: function (data, type, selected) {
	        var _this = this;
	        _this.getWrapper = function (type, options) {
	          return '<select class="form-control js-uipanel-control-' + type + '"><option value="">Choose option</option>' + options + '</select>';
	        };
	        _this.getOptions = function (data) {
	          return data.map(function (item) {
	            return '<option value="' + item.value + '" ' + (selected === item.value ? 'selected' : '') + '>' + item.title + '</option>';
	          });
	        };

	        return _this.getWrapper(type, _this.getOptions(data));
	      },
	      radio: function (value, title, type) {
	        return '<div class="checkbox">' +
	          '<input id="option_' + type + '_' + title + '" type="radio" name="' + type + '" class="in-radio js-uipanel-control-' + type + '" value="' + value + '">' +
	          '<label for="option_' + type + '_' + title + '" class="in-label">' + title + '</label>' +
	          '</div>';

	      },
	      formGroup: function (label, control) {
	        return '<div class="form-group">' +
	          '<label for="" class="control-label">' + label + '</label>' +
	          control +
	          '</div>';
	      }
	    };

	    widget.panels = {
	      pages: {
	        onChange: function (e) {
	          window.location.href = window.location.href.replace(/([a-z0-9_&\-]*\.html#?.*)$/i, e.currentTarget.value);
	        },
	        add: function () {
	          var data = options.pages.map(function (page) {
	            return {
	              value: page.url,
	              title: page.name
	            }
	          });

	          var url = window.location.pathname;
	          var filename = url.substring(url.lastIndexOf('/') + 1);
	          var control = widget.ui.select(data, 'pages', filename);
	          var formGroup = widget.ui.formGroup('Pages', control);
	          $uiPanel.append(formGroup);
	          widget.listeners.control('pages');
	        }
	      },
	      boxed: {
	        onChange: function (e) {
	          if (e.currentTarget.value == 'true') {
	            $body.addClass('boxed');
	          } else {
	            $body.removeClass('boxed');
	          }
	        },
	        add: function () {
	          var controls = widget.ui.radio(false, 'No', 'boxed');
	          controls += widget.ui.radio(true, 'Yes', 'boxed');
	          var formGroup = widget.ui.formGroup('Boxed', controls);
	          $uiPanel.append(formGroup);
	          widget.listeners.control('boxed');
	        }
	      },
	      rtl: {
	        onChange: function (e) {
	          if (e.currentTarget.value == 'true') {
	            $body.addClass('rtl');
	          } else {
	            $body.removeClass('rtl');
	          }
	        },
	        add: function () {
	          var controls = widget.ui.radio(false, 'No', 'rtl');
	          controls += widget.ui.radio(true, 'Yes', 'rtl');
	          var formGroup = widget.ui.formGroup('RTL', controls);
	          $uiPanel.append(formGroup);
	          widget.listeners.control('rtl');
	        }
	      },
	      patterns: {
	        onChange: function (e) {
	          $body[0].className = $body[0].className.replace(/bg-[a-zX0-9_\-&]*/, '');
	          $body.addClass('bg-' + e.currentTarget.value);
	        },
	        add: function () {
	          var data = options.bg_patterns.map(function (pattern) {
	            return {
	              value: pattern,
	              title: pattern
	            }
	          });

	          var control = widget.ui.select(data, 'patterns');
	          var formGroup = widget.ui.formGroup('Patterns', control);
	          $uiPanel.append(formGroup);
	          widget.listeners.control('patterns');
	        }
	      },
	      theme_colors: {
	        onChange: function (e) {
	          var themeId = e.currentTarget.value;
	          if (!themeId) return;
	          var config = __webpack_require__(/*! ../module/config */ 5);
	          [].forEach.call($linkStyles, function (link) {
	            if (/\/css\/theme\-/.test(link.href)) {
	              var xhr = new XMLHttpRequest();
	              xhr.open('GET', 'assets/css/theme-' + themeId + '.css');
	              xhr.send('');
	              xhr.addEventListener("load", function(e) {
	                console.log('loaded');
	                link.href = 'assets/css/theme-' + themeId + '.css';
	                config.colorTheme = themeId;
	              }, false);
	            }
	          });
	        },
	        add: function () {
	          var data = options.theme_colors.map(function (pattern) {
	            return {
	              value: pattern,
	              title: pattern
	            }
	          });

	          var control = widget.ui.select(data, 'theme_colors');
	          var formGroup = widget.ui.formGroup('Theme colors', control);
	          $uiPanel.append(formGroup);
	          widget.listeners.control('theme_colors');
	        }
	      },
	      dropdown_effects: {
	        onChange: function (e) {
	          $body[0].className = $body[0].className.replace(/menu-[a-zA-Z]*/, '');
	          $body.addClass('menu-' + e.currentTarget.value);
	        },
	        add: function () {
	          var data = options.dropdown_effects.map(function (effect) {
	            return {
	              value: effect,
	              title: effect
	            }
	          });

	          var control = widget.ui.select(data, 'dropdown_effects');
	          var formGroup = widget.ui.formGroup('Menu effects', control);
	          $uiPanel.append(formGroup);
	          widget.listeners.control('dropdown_effects');
	        }
	      },
	      slider_effects: {
	        onChange: function (e) {
	          $body[0].className = $body[0].className.replace(/slider\-\-[a-zA-Z]*/, '');
	          $body.addClass('slider--' + e.currentTarget.value);
	        },
	        add: function () {
	          var data = options.slider_effects.map(function (effect) {
	            return {
	              value: effect,
	              title: effect
	            }
	          });

	          var control = widget.ui.select(data, 'slider_effects');
	          var formGroup = widget.ui.formGroup('Slider effects', control);
	          $uiPanel.append(formGroup);
	          widget.listeners.control('slider_effects');
	        }
	      },
	      hover_effects: {
	        onChange: function (e) {
	          $body[0].className = $body[0].className.replace(/hover-[a-zA-Z]*/, '');
	          $body.addClass('hover-' + e.currentTarget.value);
	        },
	        add: function () {
	          var data = options.hover_effects.map(function (effect) {
	            return {
	              value: effect,
	              title: effect
	            }
	          });

	          var control = widget.ui.select(data, 'hover_effects');
	          var formGroup = widget.ui.formGroup('Hover effects', control);
	          $uiPanel.append(formGroup);
	          widget.listeners.control('hover_effects');
	        }
	      },
	      compact: {
	        onChange: function (e) {
	          if (e.currentTarget.value == 'true') {
	            $body.addClass('compact');
	          } else {
	            $body.removeClass('compact');
	          }
	        },
	        add: function () {
	          var controls = widget.ui.radio(false, 'No', 'compact');
	          controls += widget.ui.radio(true, 'Yes', 'compact');
	          var formGroup = widget.ui.formGroup('Header compact', controls);
	          $uiPanel.append(formGroup);
	          widget.listeners.control('compact');

	        }
	      },
	      header_colors: {
	        onChange: function (e) {
	          $body[0].className = $body[0].className.replace(/header_color_[a-zX0-9_\-&]*/, '');
	          $body.addClass(e.currentTarget.value);
	        },
	        add: function () {
	          var data = options.header_colors.map(function (style) {
	            return {
	              value: style[0],
	              title: style[1]
	            }
	          });

	          var control = widget.ui.select(data, 'header_colors');
	          var formGroup = widget.ui.formGroup('Header style', control);
	          $uiPanel.append(formGroup);
	          widget.listeners.control('header_colors');
	        }
	      },
	      sidebar: {
	        onChange: function (e) {
	          $body[0].className = $body[0].className.replace(/sidebar-[a-zX0-9_\-&]*/, '');
	          $body.addClass('sidebar-' + e.currentTarget.value);
	        },
	        add: function () {
	          var controls = options.sidebar.map(function (type) {
	            return widget.ui.radio(type, type, 'sidebar');
	          });

	          var formGroup = widget.ui.formGroup('Sidebar', controls);
	          $uiPanel.append(formGroup);
	          widget.listeners.control('sidebar');
	        }
	      },
	      listing_grid: {
	        onChange: function (e) {
	          $body[0].className = $body[0].className.replace(/listing-grid-[a-zX0-9_\-&]*/, '');
	          $body.addClass('listing-grid-' + e.currentTarget.value);
	        },
	        add: function () {
	          var controls = options.listing_grid.map(function (type) {
	            return widget.ui.radio(type, type, 'listing_grid');
	          });

	          var formGroup = widget.ui.formGroup('Listing grid', controls);
	          $uiPanel.append(formGroup);
	          widget.listeners.control('listing_grid');
	        }
	      }
	    };

	    widget.addPanels = function (_panels) {
	      _panels.forEach(function (panel) {
	        widget.panels[panel].add();
	      });
	    };

	    widget.listeners = {
	      panel: function () {
	        $uiPanel = $('.js-ui-panel');
	        $uiPanelToogle = $('.js-ui-panel-toggle');
	        $uiPanelToogle.on('click', function () {
	          if ($(this).hasClass('active')) {
	            $(this).removeClass('active');
	            $uiPanel.removeClass('opened');
	          } else {
	            $(this).addClass('active');
	            $uiPanel.addClass('opened');
	          }
	        });

	        var $uiPanelButtonScroll = $('.js-ui-panel-scroll');

	        $uiPanelButtonScroll.on('click', function () {
	          var delta = $(this).data('dir') == 'up' ? -500 : 500;
	          var offsetTop = $(window).scrollTop();
	          $('html, body').animate({scrollTop: offsetTop + delta}, 100);
	        });

	        var $uiPanelButtonNext = $('.js-ui-panel-next');

	        $uiPanelButtonNext.on('click', function () {
	          var $uiControlPages = $('.js-uipanel-control-pages');
	          var current = $uiControlPages.find('option:selected').index();
	          var $uiControlPagesNext = $uiControlPages.find('option')[current+1];
	          var url = $($uiControlPagesNext).attr('value');
	          if (url) window.location.href = window.location.href.replace(/([a-z0-9_&\-]*\.html#?.*)$/i, url);
	        });
	      },
	      control: function (type) {
	        $('.js-uipanel-control-' + type).on('change', function (e) {
	          widget.panels[type].onChange(e);
	        });
	      }
	    };


	    widget.init = function (_panels) {

	      $('<link>')
	        .appendTo('head')
	        .attr({type: 'text/css', rel: 'stylesheet'})
	        .attr('href', 'assets/css/ui-panel.css');

	      var htmlBlock = '<div class="ui-panel js-ui-panel">' +
	        '<button class="ui-panel__toggle js-ui-panel-toggle"></button>' +
	        '<button type="button" class="ui-panel__btn ui-panel__btn--up js-ui-panel-scroll" data-dir="up"></button>' +
	        '<button type="button" class="ui-panel__btn ui-panel__btn--down js-ui-panel-scroll" data-dir="down"></button>' +
	        '<button type="button" class="ui-panel__btn ui-panel__btn--next js-ui-panel-next"></button>' +
	        '</div>';
	      $body.append(htmlBlock);

	      widget.listeners.panel();
	      widget.addPanels(_panels);
	    };

	    return widget;
	  })();
	  setTimeout(function(){
	    UIpanel.init(panels);
	    return UIpanel;
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 169:
/*!******************************************!*\
  !*** ./js/module/gmap/infobox-marker.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function HashTable() {
	  var keys = [], values = [];

	  return {
	    put: function (key, value) {
	      var index = keys.indexOf(key);
	      if (index == -1) {
	        keys.push(key);
	        values.push(value);
	      }
	      else {
	        values[index] = value;
	      }
	    },
	    get: function (key) {
	      return values[keys.indexOf(key)];
	    }
	  };
	}

	var infoboxInstances = new HashTable();
	var markers = new HashTable();

	exports.create = function (map, latlng, title, infoboxHtml, infoboxTheme) {
	  var Infobox;
	  var config = __webpack_require__(/*! ../config */ 5);
	  var infoboxBuilder = __webpack_require__(/*! ./infobox */ 170);
	  var markerBuilder = __webpack_require__(/*! ./marker */ 38);

	  var marker = markerBuilder.create(map, latlng, title);
	  markers.put(marker, {content: infoboxHtml, theme: infoboxTheme});

	  Infobox = infoboxInstances.get(map);
	  if (!Infobox) {
	    Infobox = infoboxBuilder.create(infoboxHtml, infoboxTheme);
	    infoboxInstances.put(map, Infobox);
	  }

	  google.maps.event.addListener(marker, 'click', function () {
	    var infoboxData = markers.get(marker);
	    Infobox.close();
	    infoboxBuilder.setContent(Infobox, infoboxData.content, infoboxData.theme);
	    Infobox.open(map, marker);
	    Infobox.setVisible(true);
	  });

	  google.maps.event.addListener(map, 'click', function () {
	    if (Infobox) {
	      Infobox.setVisible(false);
	    }
	  });

	  return marker;
	};


/***/ },

/***/ 170:
/*!***********************************!*\
  !*** ./js/module/gmap/infobox.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Creates a infobox window for google maps
	 *
	 * @param {string} content
	 * @param {string} theme - "dark" or "white"
	 * @returns {InfoBox} Infobox object
	 */

	exports.create = function (content, theme) {
	  var config = __webpack_require__(/*! ../config */ 5);
	  var infoboxBuilder = __webpack_require__(/*! google-maps-infobox */ 171);
	  theme = theme || 'white';
	  return new infoboxBuilder({
	    content: generateContent(content, theme),
	    boxStyle: {
	      background: "none",
	      opacity: 1,
	      width: "355px"
	    },
	    pixelOffset: new google.maps.Size(-17, -77),
	    closeBoxMargin: "7px 7px 2px 2px",
	    closeBoxURL: "",
	    infoBoxClearance: new google.maps.Size(1, 1),
	    visible: true,
	    pane: "floatPane",
	    enableEventPropagation: false
	  });
	};

	exports.setContent = function (Infobox, content, theme) {
	  Infobox.setContent(generateContent(content, theme));
	};

	function generateContent(content, theme) {
	  return "<div class='map__infobox map__infobox--" + theme + "'>" + content + "</div>";
	}


/***/ },

/***/ 172:
/*!*******************************!*\
  !*** ./js/module/notifier.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/***************************************************************
	 * A helper for displaying notification at the top of the page
	 * Usually this is useful in AJAX requests, in order to provide
	 * a feedback to users over the request status
	 *
	 * You can use methods:
	 * - app.notifier.showError
	 * - app.notifier.showServerError
	 * - app.notifier.showSuccess
	 *
	 * Optionally you can pass a `message` as the first argument
	 * in order to provide custom text
	 *
	 * See https://github.com/sciactive/pnotify for documentation
	 ==============================================================*/
	var _ = __webpack_require__(/*! lodash */ 6);
	var PNotify = __webpack_require__(/*! pnotify */ 173);

	var conf = {
	  icon: false,
	  text: false,
	  title_escape: false,
	  addclass: "stack-bar-top",
	  cornerclass: "",
	  width: "100%",
	  stack: {"dir1": "down", "dir2": "right", "push": "top", "spacing1": 0, "spacing2": 0},
	  delay: 2000
	};

	var getTemplate = function (type, message) {
	  type = type == 'error' ? 'error' : 'valid';
	  var html = '<svg class="notify-icon"><use xlink:href="#icon-' + type + '"></use></svg>' + message;
	  return html;
	};
	exports.showError = function (message) {
	  message = message || 'An error occured, please see details below';
	  new PNotify(_.merge(conf, {
	    title: getTemplate('error', message),
	    type: 'error'
	  }));
	};

	exports.showServerError = function (message) {
	  message = message || 'Server error occured, please contact website administrator.';
	  new PNotify(_.merge(conf, {
	    title: getTemplate('error', message),
	    type: 'error'
	  }));
	};

	exports.showSuccess = function (message) {
	  message = message || 'You have been successfully submit';
	  new PNotify(_.merge(conf, {
	    title: getTemplate('success', message),
	    type: 'success'
	  }));
	};

	exports.watchNotifications = function (messages) {
	  _.each(messages, function (message) {
	    if (message.type === 'error') {
	      exports.showError(message.message);
	    } else {
	      exports.showSuccess(message.message);
	    }
	  });
	};

/***/ },

/***/ 173:
/*!*********************************!*\
  !*** pnotify (bower component) ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./pnotify.core.js */ 174);

/***/ },

/***/ 176:
/*!*************************************!*\
  !*** ./js/module/ui/photo-swipe.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	function getItems(cssSelector) {
	  var $items = $(cssSelector),
	    arrItems = [];

	  $items.each(function (i, item) {
	    var src = item.getAttribute('href') || item.getAttribute('data-img');
	    if (src) {
	      var size = item.getAttribute('data-size').split('x');
	      arrItems.push({
	        src: src,
	        w: parseInt(size[0], 10),
	        h: parseInt(size[1], 10)
	      });
	    } else {

	      arrItems.push({
	        html: item.getAttribute('data-html')
	      });
	    }

	  });

	  return arrItems;
	}

	function buildPopup() {

	  var htmlPswp =
	    '<div class="pswp js-pspw" tabindex="-1" role="dialog" aria-hidden="true">\
	      <div class="pswp__bg"></div>\
	      <div class="pswp__scroll-wrap">\
	        <div class="pswp__container">\
	          <div class="pswp__item"></div>\
	          <div class="pswp__item"></div>\
	          <div class="pswp__item"></div>\
	          <div class="pswp__item"></div>\
	        </div>\
	        <div class="pswp__ui pswp__ui--hidden">\
	          <div class="pswp__top-bar">\
	            <div class="pswp__counter"></div>\
	            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>\
	            <button class="pswp__button pswp__button--share" title="Share"></button>\
	            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>\
	            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>\
	            <div class="pswp__preloader">\
	              <div class="pswp__preloader__icn">\
	                <div class="pswp__preloader__cut">\
	                  <div class="pswp__preloader__donut"></div>\
	                </div>\
	              </div>\
	            </div>\
	          </div>\
	          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">\
	            <div class="pswp__share-tooltip"></div>\
	          </div>\
	          <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>\
	          <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>\
	          <div class="pswp__caption">\
	            <div class="pswp__caption__center"></div>\
	          </div>\
	        </div>\
	      </div>\
	    </div>';

	  return $(htmlPswp).appendTo('body')[0];
	}

	var _ = __webpack_require__(/*! lodash */ 6);
	exports.init = function (cssSelector, options) {


	  // define options (if needed)
	  options = _.defaults(options, {
	    // optionName: 'option value'
	    // for example:
	    shareEl: false,
	    index: 0,
	    history: false
	  });


	  // build items array
	  var items = getItems(cssSelector);
	  var PhotoSwipe = __webpack_require__(/*! photoswipe/dist/photoswipe */ 177);
	  var PhotoSwipeUI_Default = __webpack_require__(/*! photoswipe/dist/photoswipe-ui-default */ 178);
	  var galleryLinks = $(cssSelector);
	  var popup = buildPopup();

	  // listen events>
	  galleryLinks.on('click', function (e) {
	    var index = $(this).data('gallery-index') ? $(this).data('gallery-index') : galleryLinks.index(this);
	    // Initializes and opens PhotoSwipe
	    var gallery = new PhotoSwipe(popup, PhotoSwipeUI_Default, items, options);
	    gallery.init();
	    $('.pswp__item').show();
	    return false;
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ }

});