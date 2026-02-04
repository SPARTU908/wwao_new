/***************************************************************************************************************
||||||||||||||||||||||||||||         CUSTOM SCRIPT FOR CHARITY HOME            ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************


2 galleryMasonaryLayout
3 LightBox / Fancybox
4 Gallery Filters
5 accrodion
6 pieChart RoundCircle
7 progressBarConfig
8 teamCarosule
9 testiCarosule
10 clientsCarosule
11 CounterNumberChanger
12 stickyHeader
14 event slider
15 selectInput
16 datePicker
17 gMap
18 mobileMenu

****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/
(function($) {

"use strict";

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.loader-wrap').length){
			$('.loader-wrap').delay(1000).fadeOut(500);
		}
		TweenMax.to($(".loader-wrap .overlay"), 1.2, {
            force3D: true,
            left: "100%",
            ease: Expo.easeInOut,
        });
	}

	if ($(".preloader-close").length) {
        $(".preloader-close").on("click", function(){
            $('.loader-wrap').delay(200).fadeOut(500);
        });
    }

	if ($('.search-btn').length) {
		$('.search-btn').on('click', function() {
			$('.search-form-area').fadeToggle(300);
		});
		$('.search-close-btn').on('click', function() {
			$('.search-form-area').fadeToggle(300);
		});
	}

	//Progress Bar / Levels
	if ($('.progress-levels .progress-box .bar-fill').length) {
		$(".progress-box .bar-fill").each(function() {
			var progressWidth = $(this).attr('data-percent');
			$(this).css('width', progressWidth + '%');
			$(this).children('.percent').html(progressWidth + '%');
		});
	}

	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos > 100) {
				scrollLink.fadeIn(300);
			} else {
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();


	//Submenu Dropdown Toggle
	if($('.mainmenu-area .navigation li.dropdown ul').length){
		$('.mainmenu-area .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>');
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		$('.mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = $('.mainmenu-area .navigation').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn,.scroll-nav li a').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}


// 2 galleryMasonaryLayout
function galleryMasonaryLayout () {
	if ($('.img-masonary').length) {
		$('.img-masonary').isotope({
			layoutMode:'masonry'
		});
	}
}

// 3 LightBox / Fancybox
if($('.lightbox-image').length) {
	$('.lightbox-image').fancybox({
		openEffect  : 'elastic',
		closeEffect : 'elastic',
		helpers : {
			media : {}
		}
	});
}

// 4 Gallery Filters
if($('.filter-list').length){
	$('.filter-list').mixItUp({});
}

// 5 accrodion
function accrodion () {
	if ($('.accrodion-grp').length) {
		
		$('.accrodion-grp').each(function () {
			var accrodionName = $(this).data('grp-name');
			var Self = $(this);
			Self.addClass(accrodionName);
			Self.find('.accrodion .accrodion-content').hide();
			Self.find('.accrodion.active').find('.accrodion-content').show();
			Self.find('.accrodion').each(function() {
				$(this).find('.accrodion-title').on('click', function () {
					if ($(this).parent().hasClass('active') === false ) {					
						$('.accrodion-grp.'+accrodionName).find('.accrodion').removeClass('active');
						$('.accrodion-grp.'+accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
						$(this).parent().addClass('active');					
						$(this).parent().find('.accrodion-content').slideDown();	
					}
				});
			});
		});
		
	}
}

// 6 pieChart RoundCircle
function expertizeRoundCircle () {
	var rounderContainer = $('.piechart.style-one');
	if (rounderContainer.length) {
		rounderContainer.each(function () {
			var Self = $(this);
			var value = Self.data('value');
			var size = Self.parent().width();
			var color = Self.data('fg-color');

			Self.find('span').each(function () {
				var expertCount = $(this);
				expertCount.appear(function () {
					expertCount.countTo({
						from: 1,
						to: value*100,
						speed: 3000
					});
				});

			});
			Self.appear(function () {					
				Self.circleProgress({
					value: value,
					size: 142,
					thickness: 10,
					emptyFill: 'rgba(149,149,149,1)',
					animation: {
						duration: 3000
					},
					fill: {
						color: color
					}
				});
			});
		});
	}
}

// 7 progressBarConfig
function progressBarConfig () {
  var progressBar = $('.progress');
  if(progressBar.length) {
    progressBar.each(function () {
      var Self = $(this);
      Self.appear(function () {
        var progressValue = Self.data('value');

        Self.find('.progress-bar').animate({
          width:progressValue+'%'           
        }, 100);

        Self.find('span.value').countTo({
          from: 0,
            to: progressValue,
            speed: 100
        });
      });
    });
  }

}

// 8 teamCarosule
function teamCarosule () {
	if ($('.team-carousel').length) {
		$('.team-carousel').owlCarousel({
		    loop: true,
		    margin: 30,
		    nav: true,
		    dots: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
		    autoplay: true,
		    autoplayTimeout: 3000,
		    autoplayHoverPause: true,
		    responsive: {
		        0:{
		            items:1
		        },
		        480:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:3
		        },
		        1200:{
		            items:4
		        }
		    }
		});
	}
}

// 9 testiCarosule
function testiCarosule () {
	if ($('.testimonaials-carousel').length) {
		$('.testimonaials-carousel').owlCarousel({
		    loop: true,
		    margin: 50,
		    nav: false,
		    dots: true,
		    autoplay: true,
		    autoplayTimeout: 3000,
		    autoplayHoverPause: true,
		    responsive: {
		        0:{
		            items:1
		        },
		        480:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:2
		        },
		        1200:{
		            items:3
		        }
		    }
		});
	}
}

// 10 clientsCarosule
function clientsCarosule () {
	if ($('.clients-carousel').length) {
		$('.clients-carousel').owlCarousel({
		    loop: true,
		    margin: 50,
		    nav: false,
		    dots: false,
		    autoplay: true,
		    autoplayTimeout: 3000,
		    autoplayHoverPause: true,
		    responsive: {
		        0:{
		            items:2
		        },
		        480:{
		            items:3
		        },
		        600:{
		            items:4
		        },
		        1000:{
		            items:5
		        },
		        1200:{
		            items:6
		        }
		    }
		});
	}
}

function singleItemCarousel () {
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
		    loop: true,
		    margin: 50,
		    nav: true,
		    navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
		    dots: false,
		    autoplay: true,
		    autoplayTimeout: 3000,
		    autoplayHoverPause: true,
		    responsive: {
		        0:{
		            items:1
		        },
		        480:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        },
		        1200:{
		            items:1
		        }
		    }
		});
	}
}

// 11 CounterNumberChanger
function CounterNumberChanger () {
	var timer = $('.timer');
	if(timer.length) {
		timer.appear(function () {
			timer.countTo();
		});
	}
}

// 12 stickyHeader
function stickyHeader () {
	if ($('.stricky').length) {
		var strickyScrollPos = 100;
		if($(window).scrollTop() > strickyScrollPos) {
			$('.stricky').removeClass('fadeIn animated');
	      	$('.stricky').addClass('stricky-fixed fadeInDown animated');
		}
		else if($(window).scrollTop() <= strickyScrollPos) {
			$('.stricky').removeClass('stricky-fixed fadeInDown animated');
	      	$('.stricky').addClass('slideIn animated');
		}
	}
}


// 14 event slider
function bxgeventCarousel () {
	$('.bx-event-carousel').bxSlider({
        auto: false,
        speed: 300,
        mode: 'vertical',
        minSlides: 3,
        slideMargin: 20,
        pager: false,
        prevText: '<i class="fa fa-angle-left"></i>',
        nextText: '<i class="fa fa-angle-right"></i>'
    });
}

// 15 selectInput
function selectInput () {
	if ($('.select-input').length) {
		$('.select-input').selectmenu();
	}
}

// 16 datePicker
function datePicker () {
	if ($('.date-picker').length) {
		$('.date-picker').datepicker();
	}
}



// 18 mobileMenu
function mobileMenu () {
	if ($('.navigation .nav-footer button').length && $(window).width() <= 768 ) {
		$('.navigation .nav-footer button').on('click', function () {
			$('.navigation .nav-header').slideToggle();
			$('.navigation .nav-header').find('.dropdown').children('a').append(function () {
				return '<button><i class="fa fa-bars"></i></button>';
			});
			$('.navigation .nav-header .dropdown a button').on('click', function () {
				$(this).parent().parent().children('ul.submenu').slideToggle();
				return false;
			});
		});
	}
}

// Isotop Layout
	function isotopeBlock() {
		if($(".isotope-block").length){
			var $grid = $('.isotope-block').isotope();
		}
	}

	isotopeBlock();

// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
		// add your functions
		galleryMasonaryLayout();
		accrodion();
		expertizeRoundCircle();
		progressBarConfig();
		teamCarosule();
		testiCarosule();
		clientsCarosule();	
		CounterNumberChanger();
		bxgeventCarousel();
		selectInput();
		datePicker();
		mobileMenu();
		singleItemCarousel();
	})(jQuery);
});

// window on load functino
jQuery(window).on('load', function () {
	(function ($) {
		handlePreloader();	
		isotopeBlock();
	})(jQuery);
});

// window on scroll functino
jQuery(window).on('scroll', function () {
	(function ($) {
		// add your functions
		stickyHeader();
		headerStyle();

	})(jQuery);
});

})(window.jQuery);