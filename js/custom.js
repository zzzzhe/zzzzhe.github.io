(function ($) {
	jQuery(document).ready(function ($) {
		$(window).on("load", function () {
			$('.spinner').fadeOut();
			$('.preloader-area').delay(350).fadeOut('slow');
		});
 
		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 120) {
				var src = logosrc.attr("src").replace("logo.png", "logo_white.png");
				logosrc.attr("src", src);
				$('.navbar-fixed-top').addClass('sticky');
			} else {
				var src = logosrc.attr("src").replace("logo_white.png", "logo.png");
				logosrc.attr("src", src);
				$('.navbar-fixed-top').removeClass('sticky');
			}
		});

      
         
               i18next
                       .use(i18nextBrowserLanguageDetector)
                       .use(i18nextXHRBackend)
                       .init({
                         load: 'languageOnly',
			 debug: true,
                         fallbackLng: 'en',
                         detection: {
                           // order and from where user language should be detected
                           order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
                           // keys or params to lookup language from
                           lookupQuerystring: 'lng',
                           lookupCookie: 'i18next',
                           lookupLocalStorage: 'i18nextLng',
                           // cache user language on
                           caches: ['localStorage', 'cookie'],
                           excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
                           cookieMinutes: 10,
                         },
                         backend: {
                           loadPath: 'locales/{{lng}}/{{ns}}.json',
                         }
                       }, function(err, t) {
		         if (err) return console.log('something went wrong loading', err);
                         jqueryI18next.init(i18next, $);
                         $('nav').localize();
                       });

		$('a.lang').on("click", function (e) {
			if (i18next.language == "en"){
			i18next.changeLanguage("zh");
			} else { i18next.changeLanguage("en")}
                         $('nav').localize();
			e.preventDefault();
		});



		var logosrc = $('.brand');
		$(".testimonial-item").owlCarousel({
			items: 2,
			dots: true,
			autoplay: true,
			loop: true,
			mouseDrag: true,
			touchDrag: true,
			autoPlay: true,
			navigation: false,
			margin: 30,

			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 2

				}
			}
		});
		$(".special-item").owlCarousel({
			items: 3,
			loop: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			responsiveClass: true,
			nav: true,
			autoplayTimeout: 5000,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			autoplay: false,
			margin: 30,

			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3

				}
			}
		});

		/*~-~-~- Slider Area ~-~-~- */
		$('.slider-active').owlCarousel({
			loop: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			responsiveClass: true,
			nav: true,
			autoplayTimeout: 5000,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			autoplay: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});

		$(window).stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });

		$('a.smoth-scroll').on("click", function (e) {
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 50
			}, 1000);
			e.preventDefault();
		});

		/*~-~-~- Bottom to Top ~-~-~- */

		$('body').append('<div id="scrollup"><i class="fa fa-angle-up"></i></div>');

		$(window).on("scroll", function () {
			if ($(this).scrollTop() > 250) {
				$('#scrollup').fadeIn();
			} else {
				$('#scrollup').fadeOut();
			}
		});
		$('#scrollup').on("click", function () {
			$("html, body").animate({
				scrollTop: 0
			}, 800);
			return false;
		});

		/*~-~-~- Skill ~-~-~- */

		$('.skillsection').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$('.chart').easyPieChart({
					easing: 'easeOut',
					delay: 3000,
					barColor: '#3498DB',
					trackColor: 'rgba(255,255,255,0.2)',
					scaleColor: false,
					lineWidth: 8,
					size: 140,
					animate: 2000,
					onStep: function (from, to, percent) {
						this.el.children[0].innerHTML = Math.round(percent);
					}

				});
				$(this).unbind('inview');
			}
		});

		$("ul.nav.navbar-nav li a").click(function () {
			$(".navbar-collapse").removeClass("in");
		})
	});

})(jQuery);
