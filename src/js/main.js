    // show top menu
    if ($('.js-hamburger').length) {

        $('.js-hamburger').click(function() {

             var nav = $('.mobile-nav')

             $(this).toggleClass('is-active');
             nav.toggleClass('mobile-nav--open');
             $("body").toggleClass('menu_open');

         }); 
    };

    //toggle sub-menu on top menu
    if ($('.js-mobile-nav-toggle').length) {

        $('.js-mobile-nav-toggle').click(function() {

            $(this).toggleClass('mobile-nav-toggle--open')
            $(this).find('ul').slideToggle();
        });
    };

    // toggle main menu-item
    if ($('.js-nav-list').length) {

        $('.js-nav-list').click(function() {

            $(this).find('ul').slideToggle(150);
            $(this).siblings().find('ul').slideUp(150)
        });
    };

    // toggle mobile numbers in header on mobile screen
    if ($('.js-toggle-mobile-bottom').length) {

        if ($(window).width() < 768) {

            $('.js-toggle-mobile-bottom').click(function() {

                $('.number-mobile-bottom').slideToggle();

             });
        };
    };

    // construct select on mobile screen
        if ($('.main-nav-list').length) {

            if ($(window).resize()) {

                if ($(window).width() < 768) {

                    var mob_nav_select = $(' <select/>', { id: "main-nav-select" ,class: "mobile-nav-select" }),
                        mob_nav_select_default = $('<option>').text('Выбрать');
                        mob_nav_select_default.appendTo(mob_nav_select );   
                        mob_nav_select.appendTo('.main-nav');


                    $('.main-nav-list li').each(function() { 

                        var opt_lbl = $(this).children('p').text();
                             var opt_link = $(this).children('a');

                        if ($(this).is(':has(p)')) {
                            var opt_group = $(' <optgroup/>', { "label": opt_lbl });

                            $(this).find('ul > li > a').each(function () {
                                var el = $(this),
                                    opt_el = $(' <option/>', { "value": el.attr("href"), "text": el.text() });

                                opt_el.appendTo(opt_group)
                            });

                            opt_group.appendTo('#main-nav-select');
                        };

                    });

                    $('.main-nav-list > li a').not("ul li ul a").each(function () {
                        var el = $(this),
                            opt_el = $(' <option/>', { "value": el.attr("href"), "text": el.text() });
                        opt_el.appendTo(mob_nav_select)
                    })

                    $('#main-nav-select').change(function () {

                        window.location = $(this).find("option:selected").val();
                    });

                    $('#main-nav-select').each(function () {

                        if($(this).val() == $("a.active-item").attr("href")) {
                           $(this).attr("selected", "selected");
                        };
                    });
            };
        }
    };

    // toggle filter option 
    if ($('.js-product-filter-item-trigger').length) {

        if ($(window).width() < 768) {

            $('.js-product-filter-item-trigger').click(function() {
                $(this).next().slideToggle();
                $(this).toggleClass('product-filter-item-trigger-open')
            })
        };
    };

    // added class when filter checked
    if ($('.js-product-filter-item-link').length) {

        $('.js-product-filter-item-link').click(function(event) {
            event.preventDefault();

            $(this).toggleClass('product-filter-item-link-choise')
        })
    };

    //  toggle class add to favorites
    if ($('.js-add-favorites').length) {

        $('.js-add-favorites').click(function(event) {
            event.preventDefault();

            $(this).addClass('add-like--favorites')
        });
    };

    // init jq ui range
    $( function() {
        $( "#price-range" ).slider({
          range: true,
          min: 0,
          max: 500,
          values: [ 75, 300 ],
          slide: function( event, ui ) {
            $( "#price" ).val( "от " + ui.values[ 0 ] + " грн" + " - до " + ui.values[ 1 ] + " грн");
          }
        });
        $( "#price" ).val( "от " + $( "#price-range" ).slider( "values", 0 ) + " грн" +
          " - до " + $( "#price-range" ).slider( "values", 1 ) + " грн" );
    });

    // fancybox
    if ($('.js-modal').length) {

        $('.js-modal').fancybox();

    }
    // chice modal
    if ($('.js-choice-app').length) {

        $('.js-choice-app').click(function(event) {
            event.preventDefault();

            $('.choice-form-box').fadeIn(400);

            if ($(window).width() < 768) {
                $("body").css('overflow', "hidden");
            }   

        });
    }

    
    if ($('.js-choice-close').length) {

        $('.js-choice-close').click(function(event) {
            event.preventDefault();

            $('.choice-form-box').fadeOut();

            if ($(window).width() < 768) {
                $("body").css('overflow', "visible");
            }   
        })
    }
    // scroll to top
    $(document).ready(function(){   
    
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                $('.js-scroll').fadeIn();
            } else {
                $('.js-scroll').fadeOut();
            }
        });

        $('.js-scroll').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 400);
            return false;
        });
    });

    //cart page tabs 
    if($('.cart-tabs').length) {
        $(function() {
            var tab = $('.cart-stage'); 
            tab.hide().filter(':first').show(); 
            
            $('.cart-tabs a').click(function(){

                tab.hide(); 
                tab.filter(this.hash).show(); 
                $('.cart-tabs a').removeClass('active');
                $(this).addClass('active');
                return false;
            }).filter(':first').click();
        });
    }

