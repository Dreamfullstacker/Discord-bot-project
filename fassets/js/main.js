(function ($) {

    "use strict";


    //===== Preloader
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
        })
    }

    $(window).on('load', function() {
        handlePreloader();
    }); 





    jQuery(document).on('ready', function () {


        //===== Sticky

        jQuery(window).on('scroll', function (event) {
            var scroll = jQuery(window).scrollTop();
            if (scroll < 150) {
                jQuery(".appie-sticky").removeClass("sticky");
            } else {
                jQuery(".appie-sticky").addClass("sticky");
            }
        });


        //===== appie team slick slider
        $('.appie-testimonial-slider').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            prevArrow: '<span class="prev"><i class="fal fa-arrow-left"></i></span>',
            nextArrow: '<span class="next"><i class="fal fa-arrow-right"></i></span>',
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "0",
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                    }
            },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                    }
            },
                {
                    breakpoint: 576,
                    settings: {
                        arrows: false,
                    }
            }
          ]
        });


        //===== appie team slick slider
        $('.appie-testimonial-slider-rtl').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            prevArrow: '<span class="prev"><i class="fal fa-arrow-left"></i></span>',
            nextArrow: '<span class="next"><i class="fal fa-arrow-right"></i></span>',
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "0",
            focusOnSelect: true,
            rtl: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                    }
            },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                    }
            },
                {
                    breakpoint: 576,
                    settings: {
                        arrows: false,
                    }
            }
          ]
        });


        //===== appie team slick slider
        $('.appie-testimonial-slider-2').slick({
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            prevArrow: '<span class="prev"><i class="fal fa-arrow-left"></i></span>',
            nextArrow: '<span class="next"><i class="fal fa-arrow-right"></i></span>',
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "0",
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                    }
            },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                    }
            },
                {
                    breakpoint: 576,
                    settings: {
                        arrows: false,
                    }
            }
          ]
        });



        //===== appie VIDEO PLAYER slick slider
        $('.appie-video-player-slider').slick({
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            prevArrow: '<span class="prev"><i class="fal fa-arrow-left"></i></span>',
            nextArrow: '<span class="next"><i class="fal fa-arrow-right"></i></span>',
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                    }
            },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                    }
            },
                {
                    breakpoint: 576,
                    settings: {
                        arrows: false,
                    }
            }
          ]
        });


        //===== appie VIDEO PLAYER slick slider
        $('.appie-showcase-slider').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            prevArrow: '<span class="prev"><i class="fal fa-arrow-left"></i></span>',
            nextArrow: '<span class="next"><i class="fal fa-arrow-right"></i></span>',
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        slidesToShow: 3,
                    }
            },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                    }
            },
                {
                    breakpoint: 576,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                    }
            }
          ]
        });

        //===== appie VIDEO PLAYER slick slider
        $('.shop-related-product-slider-active').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        slidesToShow: 3,
                    }
            },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                    }
            },
                {
                    breakpoint: 576,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                    }
            }
          ]
        });

        //===== Testimonial Content Slide slick slider
        var news_slider1 = jQuery('.testimonial-about-slider-active');
        news_slider1.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<span class="prev"><i class="fal fa-arrow-left"></i></span>',
            nextArrow: '<span class="next"><i class="fal fa-arrow-right"></i></span>',
            fade: false,
            asNavFor: '.testimonial-box-about-slider-small-active'
        });
        var news_slider2 = jQuery('.testimonial-box-about-slider-small-active');
        news_slider2.slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.testimonial-about-slider-active',
            dots: false,
            centerMode: true,
            arrows: false,
            centerPadding: "0",
            focusOnSelect: true,

        });

        //===== Testimonial Content Slide slick slider
        var shop_slider1 = jQuery('.shop-details-thumb-slider-active');
        shop_slider1.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            asNavFor: '.shop-small-slider-active'
        });
        var shop_slider2 = jQuery('.shop-small-slider-active');
        shop_slider2.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.shop-details-thumb-slider-active',
            dots: false,
            centerMode: true,
            arrows: false,
            centerPadding: "0",
            focusOnSelect: true,

        });

        // wow js
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 250, // distance to the element when triggering the animation (default is 0)
                mobile: true, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }

        // faq accrodion

        if ($('.accrodion-grp').length) {
            var accrodionGrp = $('.accrodion-grp');
            accrodionGrp.each(function () {
                var accrodionName = $(this).data('grp-name');
                var Self = $(this);
                var accordion = Self.find('.accrodion');
                Self.addClass(accrodionName);
                Self.find('.accrodion .accrodion-content').hide();
                Self.find('.accrodion.active').find('.accrodion-content').show();
                accordion.each(function () {
                    $(this).find('.accrodion-title').on('click', function () {
                        if ($(this).parent().parent().hasClass('active') === false) {
                            $('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active');
                            $('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                            $(this).parent().parent().addClass('active');
                            $(this).parent().parent().find('.accrodion-content').slideDown();
                        };

                    });
                });
            });
        };

       //===== pricing plan js active

        if ($('#switch-toggle-tab').length) {
            var toggleSwitch = $('#switch-toggle-tab label.switch');
            var TabTitle = $('#switch-toggle-tab li');
            var monthTabTitle = $('#switch-toggle-tab li.month');
            var yearTabTitle = $('#switch-toggle-tab li.year');
            var monthTabContent = $('#month');
            var yearTabContent = $('#year');
            // hidden show deafult;
            monthTabContent.fadeIn();
            yearTabContent.fadeOut();

            function toggleHandle() {
                if (toggleSwitch.hasClass('on')) {
                    yearTabContent.fadeOut();
                    monthTabContent.fadeIn();
                    monthTabTitle.addClass('active');
                    yearTabTitle.removeClass('active');
                } else {
                    monthTabContent.fadeOut();
                    yearTabContent.fadeIn();
                    yearTabTitle.addClass('active');
                    monthTabTitle.removeClass('active');
                }
            };
            monthTabTitle.on('click', function () {
                toggleSwitch.addClass('on').removeClass('off');
                toggleHandle();
                return false;
            });
            yearTabTitle.on('click', function () {
                toggleSwitch.addClass('off').removeClass('on');
                toggleHandle();
                return false;
            });
            toggleSwitch.on('click', function () {
                toggleSwitch.toggleClass('on off');
                toggleHandle();
            });
        }



        /*===============================  
             counter up
        ================================*/

        $('.counter-item').counterUp({
            delay: 10,
            time: 2000
        });

        //====== Magnific Popup

        jQuery('.appie-video-popup').magnificPopup({
            type: 'iframe'
            // other options
        });


        //===== Magnific Popup

        jQuery('.appie-image-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });


    




        //===== Back to top



        // Show or hide the sticky footer button
        jQuery(window).on('scroll', function (event) {
            if (jQuery(this).scrollTop() > 600) {
                jQuery('.back-to-top').fadeIn(200)
            } else {
                jQuery('.back-to-top').fadeOut(200)
            }
        });


        //Animate the scroll to yop
        jQuery('.back-to-top').on('click', function (event) {
            event.preventDefault();
             
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        jQuery('*').animate({
            scrollTop: 0,
        }, 1500);

       
        });




        //===== Search 

        $('.search-open').on('click', function () {
            $('.search-box').addClass('open')
        });

        $('.search-close-btn').on('click', function () {
            $('.search-box').removeClass('open')
        });

        //===== Shopping Cart 

        $('.amm-shopping-cart-open').on('click', function () {
            $('.amm-shopping-cart-canvas').addClass('open')
            $('.overlay').addClass('open')
        });

        $('.amm-shopping-cart-close').on('click', function () {
            $('.amm-shopping-cart-canvas').removeClass('open')
            $('.overlay').removeClass('open')
        });
        $('.overlay').on('click', function () {
            $('.amm-shopping-cart-canvas').removeClass('open')
            $('.overlay').removeClass('open')
        });









        /*---canvas menu activation---*/
        $('.canvas_open').on('click', function(){
            $('.offcanvas_menu_wrapper,.off_canvars_overlay').addClass('active')
        });
        
        $('.canvas_close,.off_canvars_overlay').on('click', function(){
            $('.offcanvas_menu_wrapper,.off_canvars_overlay').removeClass('active')
        });

        /*---Off Canvas Menu---*/
        var $offcanvasNav = $('.offcanvas_main_menu'),
            $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
        $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');
        
        $offcanvasNavSubMenu.slideUp();
        
        $offcanvasNav.on('click', 'li a, li .menu-expand', function(e) {
            var $this = $(this);
            if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length){
                    $this.siblings('ul').slideUp('slow');
                }else {
                    $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                    $this.siblings('ul').slideDown('slow');
                }
            }
            if( $this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/) ){
                $this.parent().toggleClass('menu-open');
            }else if( $this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/) ){
                $this.toggleClass('menu-open');
            }
        });


        //===== product quantity

        $('.add').click(function () {
            if ($(this).prev().val()) {
                $(this).prev().val(+$(this).prev().val() + 1);
            }
        });
        $('.sub').click(function () {
            if ($(this).next().val() > 1) {
                if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
            }
        });








        


    });




})(jQuery);
