jQuery(document).ready(function () {

    //-------razvertivanie menu---------
   jQuery('.menu_box .menu #about_company').click(function () {
        if(jQuery(this).hasClass('active')){
            jQuery(this).removeClass('active');
        }
        else {
            jQuery(this).addClass('active');
        }
        jQuery('.menu_box .menu li .drop').slideToggle('slow');
   });
    //-------end---------


    //-------select gorod---------
   jQuery('.modal.city ul.select .current').click(function () {
        jQuery(this).next().slideToggle('fast');
   });
   jQuery('.modal.city ul.select .option').click(function () {
        html = jQuery(this).html();
        jQuery(this).parent().parent().slideToggle('fast').prev().html(html);
   });
    //-------end---------


    //-------select vacansii---------
   jQuery('.modal.vacancies ul.select .current').click(function () {
        jQuery(this).next().slideToggle('fast');
   });
   jQuery('.modal.vacancies ul.select .option').click(function () {
        html = jQuery(this).html();
        jQuery(this).parent().parent().slideToggle('fast').prev().html(html);
   });
    //-------end---------


    //-------select kontakti---------
   jQuery('.modal.tabs ul.select .current').click(function () {
        jQuery(this).next().slideToggle('fast');
   });
   jQuery('.modal.tabs ul.select .option').click(function () {
        html = jQuery(this).html();
        jQuery(this).parent().parent().slideToggle('fast').prev().html(html);
   });
    //-------end---------

    //-------zakrit modalnoe okno dlya vsex---------
   jQuery('.modal .close').click(function () {
        jQuery('.modal').fadeOut('fast');
   });
    //-------end---------

    //-------otkrit goroda---------
   jQuery('.header .city').click(function () {
        jQuery('.modal').fadeOut('fast');
        jQuery('.modal.city').fadeIn('fast');
   });
    //-------end---------

    //-------otkrit zayavky---------
   jQuery('.calculation .issue_button input,.modal.shares .content_shares .button input').click(function () {
        if(jQuery(window).width()<768) {
            jQuery('.main_content').fadeOut('fast');
            jQuery('body,html').scrollTop(0);
        }
        jQuery('.modal').fadeOut('fast');
        jQuery('.modal.application').fadeIn('fast');
   });

    if(jQuery(window).width()<768) {
        jQuery('#application').click(function () {
            jQuery('.main_content').fadeOut('fast');
            jQuery('.modal').fadeOut('fast');
            jQuery('.modal.application').fadeIn('fast');
            jQuery('body,html').scrollTop(0);
        });
    }
    else {
        jQuery('#application').click(function () {
            jQuery('.modal').fadeOut('fast');
            jQuery('.modal.application').fadeIn('fast');
        });
    }
    //-------end---------

    //-------otkrit obratnyu svyaz---------
   jQuery('.header #write').click(function () {
        jQuery('.modal').fadeOut('fast');
        jQuery('.modal.write_').fadeIn('fast');
   });
    //-------end---------

    //-------otkrit calculyator---------
   jQuery('.header #calc_click').click(function () {
        jQuery('.modal').fadeOut('fast');
        jQuery('.modal.click_calc').fadeIn('fast');
   });
    //-------end---------

    //-------otkrit zayavky---------
   jQuery('.menu #calc_click').click(function () {
        jQuery('.modal').fadeOut('fast');
        jQuery('.calc_wall').fadeIn('fast');
       jQuery('.calculation').css('z-index','11');
   });
    //-------end---------


    //-------calc po akcii---------
    if (jQuery(window).width()>767) {
        jQuery('.calculation .new_client label').click(function () {
            if(jQuery('#new_client').is(":not(:checked)")) {
                jQuery('.modal').fadeOut('fast');
                jQuery('.modal.shares_calc').fadeIn('fast');
                jQuery('.calc_wall').fadeOut('fast');
                setTimeout(function () {
                    jQuery('.calculation').css('z-index','0');
                },400);
            }
        });
    }
    else {
        jQuery('.calculation .new_client label').click(function () {
            if(jQuery('#new_client').is(":not(:checked)")) {
                jQuery('.return_div,.new_client,.issue_button').fadeOut(0);
                jQuery('.benefit_mobile').fadeIn(0);
                jQuery('.calculation .calc_content').css('border','none');
            }
        });
    }
    jQuery('#no_thanks_mobile').click(function () {
        jQuery('.return_div,.new_client,.issue_button').fadeIn(0);
        jQuery('.benefit_mobile').fadeOut(0);
        jQuery('.calculation .calc_content').css('border-bottom','1px solid #c6c6c6');
        jQuery('#new_client').prop("checked", false);
    });

    jQuery('.calc_wall').click(function () {
        jQuery(this).fadeOut('fast');
        setTimeout(function () {
            jQuery('.calculation').css('z-index','0');
        },400);

    });
    //-------end---------


    //-------cnyat checbox calc---------
   jQuery('#no_thanks, .modal.shares_calc .close').click(function () {
        jQuery('.modal').fadeOut('fast');
        jQuery('#new_client').prop("checked", false);
   });
    //-------end---------


    //-------otkrit akcii---------
    jQuery('#shares').click(function () {
        jQuery('.modal').fadeOut('fast');
        jQuery('.modal.shares').fadeIn('fast');
    });
    //-------end---------


    //-------otkrit arendy---------
    jQuery('#rent').click(function () {
        jQuery('.modal').fadeOut('fast');
        jQuery('.modal.rent').fadeIn('fast');
    });
    //-------end---------


    //-------otkrit spravochnik klienta---------
    jQuery('#directory').click(function () {
        jQuery('.modal').fadeOut('fast');
        jQuery('.modal.directory').fadeIn('fast');
    });
    //-------end---------


    //-------otkrit vacansii---------
    jQuery('#vacancies').click(function () {
        jQuery('.modal').fadeOut('fast');
        jQuery('.modal.vacancies').fadeIn('fast');
    });
    //-------end---------


    //-------spravochnik klienta otkrit---------
    jQuery('.modal.directory .question_item').click(function () {
        if(jQuery(this).hasClass('active')) {
            jQuery(this).removeClass('active');
            jQuery(this).find('.comment').slideToggle('fast');
        }
        else {
            jQuery(this).addClass('active');
            jQuery(this).find('.comment').slideToggle('fast');
        }
    });
    //-------end---------

    //-------razvernut vacansiu podrobno---------
    jQuery('.modal.vacancies .vacancies_item').click(function () {
        if(jQuery(this).hasClass('active')) {
            return false;
        }
        else {
            jQuery('.modal.vacancies .vacancies_container,body,html').scrollTop(100).addClass('vac_margin');
            jQuery('.modal.vacancies .vacancies_item').css('display','none');
            jQuery('.modal.vacancies .h3 .return_link').css('display','block');
            jQuery(this).addClass('active on');
            jQuery(this).find('.read_vacancies').slideToggle(0);
        }
    });
    //-------end---------

    //-------zavernut vacansiu---------
    jQuery('.modal.vacancies').on('click','.h3 .return_link', function () {
        setTimeout(function () {
            jQuery('.modal.vacancies .vacancies_container,body,html').animate({scrollTop:jQuery('.modal.vacancies .vacancies_item.on').position().top+100},500);
            jQuery('.modal.vacancies .vacancies_item').removeClass('on');
        },2);
        jQuery('.modal.vacancies .vacancies_item').css('display','block').removeClass('active');
        jQuery('.modal.vacancies .h3 .return_link').css('display','none');
        jQuery('.modal.vacancies .vacancies_item .read_vacancies').css('display','none');
        jQuery('.modal.vacancies .vacancies_container').removeClass('vac_margin');
    });
    //-------end---------

    //-------razvernut akcii podrobno---------
    jQuery('.modal.shares .button_open input').click(function () {
        jQuery('.modal.shares .shares_block').css('display','none');
        jQuery('.modal.shares .h3 .return_link').css('display','block');
        jQuery(this).css('display','none').parent().parent().parent().addClass('on').css('display','block').find('.shares_hide').slideToggle(0);;
    });
    //-------end---------

    //-------zavernut akcii---------
    jQuery('.modal.shares').on('click','.h3 .return_link', function () {
        setTimeout(function () {
            jQuery('.modal.shares .shares_container').animate({scrollTop:jQuery('.modal.shares .shares_block.on').position().top},500);
            jQuery('.modal.shares .shares_block').removeClass('on');
        },2);
        jQuery('.modal.shares .shares_block,.modal.shares .button_open input').css('display','block');
        jQuery('.modal.shares .h3 .return_link').css('display','none');
        jQuery('.modal.shares .shares_hide').css('display','none');
    });
    //-------end---------

    //-------razvernut novosti podrobno---------
    jQuery('.modal.tabs .tab_three .button_open input').click(function () {
        if (jQuery(window).width()<768) {
            jQuery('body,html').scrollTop(100);
        }
        jQuery('.modal.tabs .tab_three .shares_block').css('display','none');
        jQuery('.modal.tabs .tab_three .h3 .return_link').css('display','block');
        jQuery(this).css('display','none').parent().parent().parent().addClass('on').css('display','block').find('.shares_hide').slideToggle(0);;
    });
    //-------end---------

    //-------zavernut novosti---------
    jQuery('.modal.tabs .tab_three').on('click','.h3 .return_link', function () {
        setTimeout(function () {
            jQuery('.modal.tabs .tab_three .shares_container').animate({scrollTop:jQuery('.modal.tabs .tab_three .shares_block.on').position().top},500);
            jQuery('.modal.tabs .tab_three .shares_block').removeClass('on');
        },2);
        jQuery('.modal.tabs .tab_three .shares_block,.modal.tabs .tab_three .button_open input').css('display','block');
        jQuery('.modal.tabs .tab_three .h3 .return_link').css('display','none');
        jQuery('.modal.tabs .tab_three .shares_hide').css('display','none');
    });
    //-------end---------

    //-------perekluchenie tabov---------
    jQuery('.modal.tabs .one,#about_company').click(function () {
        jQuery('.modal.tabs .content > div').removeClass('active');
        jQuery('.modal.tabs .tab_one').addClass('active');
        jQuery('.modal.tabs .h2').removeClass('active');
        jQuery('.modal.tabs .h2.one').addClass('active');
    });
    jQuery('.modal.tabs .two,#documents_download').click(function () {
        jQuery('.modal.tabs .content > div').removeClass('active');
        jQuery('.modal.tabs .tab_two').addClass('active');
        jQuery('.modal.tabs .h2').removeClass('active');
        jQuery('.modal.tabs .h2.two').addClass('active');
    });
    jQuery('.modal.tabs .three,#news_company').click(function () {
        jQuery('.modal.tabs .content > div').removeClass('active');
        jQuery('.modal.tabs .tab_three').addClass('active');
        jQuery('.modal.tabs .h2').removeClass('active');
        jQuery('.modal.tabs .h2.three').addClass('active');
    });
    jQuery('.modal.tabs .four, #reviews_company,.reviews .h2 .all,.reviews .h2 .add').click(function () {
        jQuery('.modal.tabs .content > div').removeClass('active');
        jQuery('.modal.tabs .tab_four').addClass('active');
        jQuery('.modal.tabs .h2').removeClass('active');
        jQuery('.modal.tabs .h2.four').addClass('active');
    });
    jQuery('.reviews .h2 .all,.reviews .h2 .add').click(function () {
       jQuery('.modal.tabs').fadeIn('fast');
        jQuery('.main_content').fadeOut('fast');
        jQuery('body,html').scrollTop(0);
    });
    jQuery('.reviews .h2 .all').click(function () {
        jQuery('.modal.tabs .tab_four .scroll').css('display','block');
        jQuery('.modal.tabs .tab_four .h3 .return_link,.modal.tabs .tab_four .add_reviews_').css('display','none');
    });
    jQuery('.modal.tabs .five, #contacts_company,.open_contacts').click(function () {
        jQuery('.modal.tabs .content > div').removeClass('active');
        jQuery('.modal.tabs .tab_five').addClass('active');
        jQuery('.modal.tabs .h2').removeClass('active');
        jQuery('.modal.tabs .h2.five').addClass('active');
    });
    jQuery('#about_company,#documents_download,#news_company,#reviews_company,#contacts_company,.open_contacts').click(function () {
        jQuery('.modal.rent,.modal.city,.modal.write,.modal.application,.modal.shares_calc,.modal.shares,.modal.directory,.modal.vacancies').fadeOut('fast');
        jQuery('.modal.tabs').fadeIn('fast');
    });
    //-------end---------


    //-------razvernut otziv podrobno---------
    jQuery('.modal.tabs .tab_four .reviews_content input').click(function () {
        if(jQuery(window).width()<768){
            jQuery('body,html').scrollTop(300);
        }
        jQuery('.modal.tabs .tab_four .block_reviews').css('display','none');
        jQuery('.modal.tabs .tab_four .h3 .return_link.one_link').css('display','block');
        jQuery('.modal.tabs .tab_four .text').removeClass('min_height');
        jQuery('.modal.tabs .tab_four .tabs_four_content').addClass('rew_top');
        jQuery(this).css('display','none').parent().parent().parent().addClass('on').css('display','block').find('.hidden_').slideToggle(0);
    });
    //-------end---------

    //-------zavernut otziv---------
    jQuery('.modal.tabs .tab_four').on('click','.h3 .return_link.one_link', function () {
        setTimeout(function () {
            jQuery('.modal.tabs .tab_four .tabs_four_content,body,html').animate({scrollTop:jQuery('.modal.tabs .tab_four .block_reviews.on').position().top},500);
            jQuery('.modal.tabs .tab_four .block_reviews').removeClass('on');
        },2);
        jQuery('.modal.tabs .tab_four .block_reviews,.modal.tabs .tab_four .reviews_content input').css('display','block');
        jQuery('.modal.tabs .tab_four .h3 .return_link').css('display','none');
        jQuery('.modal.tabs .tab_four .hidden_').css('display','none');
        jQuery('.modal.tabs .tab_four .text').addClass('min_height');
        jQuery('.modal.tabs .tab_four .tabs_four_content').removeClass('rew_top');
    });
    //-------end---------


    //-------razvernut ostavit otziv---------
    jQuery('.modal.tabs .tab_four .h4 input,.reviews .h2 .add').click(function () {
        jQuery('.modal.tabs .tab_four .scroll').css('display','none');
        jQuery('.modal.tabs .tab_four .h3 .return_link.two_link,.modal.tabs .tab_four .add_reviews_').css('display','block');
    });
    //-------end---------

    //-------zavernut ostavit otziv---------
    jQuery('.modal.tabs .tab_four').on('click','.h3 .return_link.two_link', function () {
        if(jQuery('.modal.tabs .tab_four .block_reviews').hasClass('on')){
            jQuery('.modal.tabs .tab_four .scroll').css('display','block');
            jQuery('.modal.tabs .tab_four .h3 .return_link.two_link,.modal.tabs .tab_four .add_reviews_').css('display','none');

        }
        else {
            jQuery('.modal.tabs .tab_four .scroll').css('display','block');
            jQuery('.modal.tabs .tab_four .h3 .return_link,.modal.tabs .tab_four .add_reviews_').css('display','none');
        }
      });
    //-------end---------


    //-----------------mobile----------------------
    jQuery('.mobile_menu_click,.mobile_menu .close_mobile_div .close_mobile.one').click(function () {
        jQuery('.mobile_menu.one').slideToggle(350);
        if(jQuery('body,html').hasClass('overflow')){
            jQuery('body,html').removeClass('overflow');
        }
        else {
            jQuery('body,html').addClass('overflow');
        }
    });
    jQuery('.mobile_button_contacts, .close_mobile.two').click(function () {
        jQuery('.mobile_menu.two').slideToggle(350);
        if(jQuery('body,html').hasClass('overflow')){
            jQuery('body,html').removeClass('overflow');
        }
        else {
            jQuery('body,html').addClass('overflow');
        }
    });

    if(jQuery(window).width()<768) {
        jQuery('.add_main').addClass('main_content');

        jQuery('#about_company_').click(function (event) {
            if( $(event.target).closest(".menu_box .menu li span.default > span.bottom, .menu_box .menu li span.default > span.top").length )return;
            jQuery('.mobile_menu.one').slideToggle(350);
            jQuery('body,html').removeClass('overflow').scrollTop(0);
            jQuery('.modal.rent,.modal.city,.modal.write,.modal.application,.modal.shares_calc,.modal.shares,.modal.directory,.modal.vacancies').fadeOut('fast');
            jQuery('.modal.tabs').fadeIn('fast');
            jQuery('.modal.tabs .content > div').removeClass('active');
            jQuery('.modal.tabs .tab_one').addClass('active');
            jQuery('.main_content').fadeOut('fast');
            event.stopPropagation();
        });

        jQuery('#documents_download_').click(function () {
           jQuery('.mobile_menu.one').slideToggle(350);
            jQuery('body,html').removeClass('overflow').scrollTop(0);
            jQuery('.modal.rent,.modal.city,.modal.write,.modal.application,.modal.shares_calc,.modal.shares,.modal.directory,.modal.vacancies').fadeOut('fast');
            jQuery('.modal.tabs').fadeIn('fast');
            jQuery('.modal.tabs .content > div').removeClass('active');
            jQuery('.modal.tabs .tab_two').addClass('active');
            jQuery('.main_content').fadeOut('fast');
        });

        jQuery('#rent_').click(function () {
           jQuery('.mobile_menu.one').slideToggle(350);
            jQuery('body,html').removeClass('overflow').scrollTop(0);
            jQuery('.modal.tabs,.modal.city,.modal.write,.modal.application,.modal.shares_calc,.modal.shares,.modal.directory,.modal.vacancies').fadeOut('fast');
            jQuery('.modal.rent').fadeIn('fast');
            jQuery('.main_content').fadeOut('fast');
        });

        jQuery('#news_company_').click(function () {
           jQuery('.mobile_menu.one').slideToggle(350);
            jQuery('body,html').removeClass('overflow').scrollTop(0);
            jQuery('.modal.rent,.modal.city,.modal.write,.modal.application,.modal.shares_calc,.modal.shares,.modal.directory,.modal.vacancies').fadeOut('fast');
            jQuery('.modal.tabs').fadeIn('fast');
            jQuery('.modal.tabs .content > div').removeClass('active');
            jQuery('.modal.tabs .tab_three').addClass('active');
            jQuery('.main_content').fadeOut('fast');
        });

        jQuery('#reviews_company_').click(function () {
           jQuery('.mobile_menu.one').slideToggle(350);
            jQuery('body,html').removeClass('overflow').scrollTop(0);
            jQuery('.modal.rent,.modal.city,.modal.write,.modal.application,.modal.shares_calc,.modal.shares,.modal.directory,.modal.vacancies').fadeOut('fast');
            jQuery('.modal.tabs').fadeIn('fast');
            jQuery('.modal.tabs .content > div').removeClass('active');
            jQuery('.modal.tabs .tab_four').addClass('active');
            jQuery('.main_content').fadeOut('fast');
        });

        jQuery('#contacts_company_').click(function () {
           jQuery('.mobile_menu.one').slideToggle(350);
            jQuery('body,html').removeClass('overflow').scrollTop(0);
            jQuery('.modal.rent,.modal.city,.modal.write,.modal.application,.modal.shares_calc,.modal.shares,.modal.directory,.modal.vacancies').fadeOut('fast');
            jQuery('.modal.tabs').fadeIn('fast');
            jQuery('.modal.tabs .content > div').removeClass('active');
            jQuery('.modal.tabs .tab_five').addClass('active');
            jQuery('.main_content').fadeOut('fast');
        });


        jQuery('.menu_box .menu li span.default > span.bottom, .menu_box .menu li span.default > span.top').click(function () {
            jQuery('.menu_box .menu li .drop').slideToggle('slow');
            if(jQuery('#about_company_').hasClass('active')){
                jQuery('#about_company_').removeClass('active');
            }
            else {
                jQuery('#about_company_').addClass('active');
            }
        });

        jQuery('.contact_menu_mobile .city_mob_con p').click(function () {
            jQuery('.modal').fadeOut('fast');
            jQuery('.modal.city').fadeIn('fast');
            jQuery('.main_content').fadeOut('fast');
            jQuery('body,html').removeClass('overflow').scrollTop(0);
            jQuery('.mobile_menu.two').slideToggle(350);
        });

        jQuery('.open_contacts_').click(function () {
            jQuery('.mobile_menu.two').slideToggle(350);
            jQuery('body,html').removeClass('overflow').scrollTop(0);
            jQuery('.modal.rent,.modal.city,.modal.write,.modal.application,.modal.shares_calc,.modal.shares,.modal.directory,.modal.vacancies').fadeOut('fast');
            jQuery('.modal.tabs').fadeIn('fast');
            jQuery('.modal.tabs .content > div').removeClass('active');
            jQuery('.modal.tabs .tab_five').addClass('active');
            jQuery('.main_content').fadeOut('fast');
        });

        jQuery('#directory_').click(function () {
            jQuery('.modal').fadeOut('fast');
            jQuery('.modal.directory').fadeIn('fast');
            jQuery('.main_content').fadeOut('fast');
            jQuery('body,html').removeClass('overflow').scrollTop(0);
            jQuery('.mobile_menu.one').slideToggle(350);
        });

        jQuery('#vacancies_').click(function () {
            jQuery('.modal').fadeOut('fast');
            jQuery('.modal.vacancies').fadeIn('fast');
            jQuery('.main_content').fadeOut('fast');
            jQuery('body,html').removeClass('overflow').scrollTop(0);
            jQuery('.mobile_menu.one').slideToggle(350);
        });


        jQuery('.open_write').click(function () {
            jQuery('.modal').fadeOut('fast');
            jQuery('.modal.write.write_').fadeIn('fast');
            jQuery('.main_content').fadeOut('fast');
            jQuery('body,html').removeClass('overflow').scrollTop(0);
            jQuery('.mobile_menu.two').slideToggle(350);
        });

        jQuery('#calc_click_').click(function () {
            jQuery('.modal').fadeOut('fast');
            jQuery('.main_content').fadeIn('fast');
            jQuery('body,html').removeClass('overflow').scrollTop(0);
            jQuery('.mobile_menu.one').slideToggle(350);
        });
    }


//----------------------------------------//
//  GLOBAL VARS
//----------------------------------------//

// Lower track color
    var rangeSliderTrackColor = '#ccc',
// Upper track color
        rangeSliderTrackFillColor = '#54b309',

// ID of the HTML style element that gets appended to the HTML head
        rangeSliderStyleElementID = 'rangeSliderStyleElement',

// Class that gets assigned to the individual range sliders (+ ongoing index number)
        rangeSliderClass = 'range-slider__input--',

// A variable to call every instance of range sliders
        $rangeSliderElement = document.querySelectorAll('.range-slider input[type=range]'),

// A variable to call every instance of dotted range sliders
        $dottedRangeSliderElement = document.querySelectorAll('.range-slider--dotted input[type=range]');





//----------------------------------------//
//  FUNCTIONS
//----------------------------------------//

// Function to create empty style elements in the HTML head
// to append the dynamic syles for the range sliders to
    function createStyleElements(numberOfStyleElements) {
        // We want a <style> element
        var rangeSliderStyleElement = document.createElement('style');
        // ...equal the amount of range sliders on the side
        rangeSliderStyleElement.id = rangeSliderStyleElementID + numberOfStyleElements;
        // ...and append it to the HTML head
        document.head.appendChild(rangeSliderStyleElement);
    }



// Function that takes care of coloring the range slider track differently
// on the left and on the right side of the slider handle.
    function paintRangeTrack(rangeSliderInstance) {
        // Get the current value of the actual range slider
        var rangeValue = $rangeSliderElement[rangeSliderInstance].value,
        // Get the max attributes value of the actual range slider
            rangeMaxValue = $rangeSliderElement[rangeSliderInstance].getAttribute('max');

        // Generate the CSS and put it into the style tag with the appropriate ID in the HTML head
        // (One for Webkit, one for Firefox)
        document.getElementById(rangeSliderStyleElementID + rangeSliderInstance).textContent =
            'input[class~="' + rangeSliderClass + rangeSliderInstance + '"]::-webkit-slider-runnable-track{background: linear-gradient(90deg, ' + rangeSliderTrackFillColor + ' ' + Math.round((rangeValue/rangeMaxValue)*100) + '% , ' + rangeSliderTrackColor + ' ' + Math.round((rangeValue/rangeMaxValue)*100 + 1) + '%)}'
            +
            'input[class~="' + rangeSliderClass + rangeSliderInstance + '"]::-moz-range-track{background: linear-gradient(90deg, ' + rangeSliderTrackFillColor + ' ' + Math.round((rangeValue/rangeMaxValue)*100) + '% , ' + rangeSliderTrackColor + ' ' + Math.round((rangeValue/rangeMaxValue)*100 + 1) + '%)}'
        ;
    }



// Function to generate the correct amount dots for dotted range sliders
    function createRangeSliderDots(dottedRangeSliderInstance) {
        // Get the min value of the actual range slider
        var rangeSliderMinValue = $dottedRangeSliderElement[dottedRangeSliderInstance].getAttribute('min'),
        // Get the max value of the actual range slider
            rangeSliderMaxValue = $dottedRangeSliderElement[dottedRangeSliderInstance].getAttribute('max'),
        // Calculate the correct number of steps thereof
            rangeSliderDots = rangeSliderMaxValue - rangeSliderMinValue + 1,
        // Get the container to put the dot elements into
            $rangeSliderStepsContainer = document.querySelectorAll('.range-slider__dots');

        // Iterate over the amount of the actual needed dots
        for (var i = 0 ; i < rangeSliderDots; i++) {
            // We want to create span elements representing the dots
            var rangeSliderDotElement = document.createElement('span');

            // Append the span to the dots container
            $rangeSliderStepsContainer[dottedRangeSliderInstance].appendChild(rangeSliderDotElement);
        }
    }



// Function to generate the necessary container for the dots of the dotted range slider
    function createDotsContainerElement() {

        // For every dotted range slider...
        Array.prototype.forEach.call(document.querySelectorAll('.range-slider--dotted'), function(el, i){
            // ...we want a <div> element
            var dotsContainerElement = document.createElement('div');

            // ...with a class of 'range-slider__dots`
            dotsContainerElement.className = 'range-slider__dots';

            // ...and append it to the actual range slider
            el.appendChild(dotsContainerElement);
        });

    }



// Function to paint the slider dots in the correct color
    function paintSliderDots(dottedRangeSliderInstance) {
        // Get the current value of the actual range slider
        var rangeSliderValue = $dottedRangeSliderElement[dottedRangeSliderInstance].value,
        // Collect all dots from the actual dotted slider
            rangeSliderDots = $dottedRangeSliderElement[dottedRangeSliderInstance].parentNode.querySelectorAll('.range-slider__dots span');

        // Iterate over all dots of this respective dotted range slider
        for (var j=0; j < rangeSliderDots.length; j++) {
            // If the dot is lower than the sliders current value...
            if (j < rangeSliderValue) {
                // ...paint it in the lower slider tracks color
                rangeSliderDots[j].style.backgroundColor = rangeSliderTrackFillColor;
                // If it's greater than the current sliders value...
            } else {
                // ...paint it in the upper slider tracks color
                rangeSliderDots[j].style.backgroundColor = rangeSliderTrackColor;
            }
        }
    }





//----------------------------------------//
//  DOM-READY FUNCTION
//----------------------------------------//

    document.addEventListener('DOMContentLoaded', function(event) {



        // NORMAL RANGE SLIDERS

        // Get all range sliders on the page
        var sliders = $rangeSliderElement;

        // Iterate over all range sliders on the page
        for (var rangeSliders=0; rangeSliders < sliders.length; rangeSliders++) {
            // Create an empty style element for each range slider
            // in the hmtl head and give each one an unique id.
            createStyleElements(rangeSliders);

            // Give each range slider an unique class
            $rangeSliderElement[rangeSliders].classList.add(rangeSliderClass + rangeSliders);

            // Fill the lower and upper end of the range slider track with the correct color
            paintRangeTrack(rangeSliders);

            // On-change function, so the filled area
            // changes dynamically with the current sliders value
            sliders[rangeSliders].addEventListener('input', function() {
                // Iterate over all range sliders on the page
                for (var i=0; i < sliders.length; i++) {
                    // Fill the lower and upper end of the range slider track with the correct color
                    paintRangeTrack(i);
                }
            })
        }



        // DOTTED RANGE SLIDERS

        // Get all dotted range sliders on the page
        var dottedSliders = $dottedRangeSliderElement;

        // Create the dots container element
        createDotsContainerElement();

        // Iterate over all range sliders on the page
        for (var dottedRangeSliders=0; dottedRangeSliders < dottedSliders.length; dottedRangeSliders++) {

            // Create the dots
            createRangeSliderDots(dottedRangeSliders);

            // ...and paint them appropriately
            paintSliderDots(dottedRangeSliders);

            // Add event listener (when the user changes the value)
            dottedSliders[dottedRangeSliders].addEventListener('input', function() {
                // Iterate over all range dotted sliders on the page
                for (var i=0; i < dottedSliders.length; i++) {
                    // ...and paint them correctly on change
                    paintSliderDots(i);
                }
            })

            // Add an additional event listener ('mousemove') for IE
            // (IE seems to have a problem with the 'input' event listeners on range sliders)
            dottedSliders[dottedRangeSliders].addEventListener('mousemove', function() {
                // Iterate over all range dotted sliders on the page
                for (var i=0; i < dottedSliders.length; i++) {
                    // ...and paint them correctly on change
                    paintSliderDots(i);
                }
            })
        }

    });
});