


//----------------------------------------//
//  GLOBAL VARS
//----------------------------------------//

// Lower track color
var rangeSliderTrackColor = '#3c3c3c',
// Upper track color
    rangeSliderTrackFillColor = '#54b309',

// ID of the HTML style element that gets appended to the HTML head
    rangeSliderStyleElementID = 'rangeSliderStyleElement',

// Class that gets assigned to the individual range sliders (+ ongoing index number)
    rangeSliderClass = 'range-slider__input--',

// A variable to call every instance of range sliders
    $rangeSliderElement = document.querySelectorAll('.range-slider input[type=range]')

// A variable to call every instance of dotted range sliders
    // $dottedRangeSliderElement = document.querySelectorAll('.range-slider--dotted input[type=range]');





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



});
$(document).ready(function () {

    var range = $('.range-slider__input');
    var value = $('.range-value');
    // var monparent;

    range.on('input', function(){
        monparent=$(this).parents(".calculation_range").siblings(".calculation-box_list");
      value=$(monparent).find('.range-value');
        $(value).val(this.value);
    });

    value.on('input', function(){
        monparent=$(this).parents(".calculation-box_list").siblings(".calculation_range");
        range=$(monparent).find('.range-slider__input');
        $(range).val(this.value);
        var sliders = $(".range-slider input[type=range]")
        for (var rangeSliders=0; rangeSliders < sliders.length; rangeSliders++) {
            createStyleElements(rangeSliders);
            $rangeSliderElement[rangeSliders].classList.add(rangeSliderClass + rangeSliders);
            paintRangeTrack(rangeSliders);
            sliders[rangeSliders].addEventListener('input', function() {
                for (var i=0; i < sliders.length; i++) {
                    paintRangeTrack(i);
                }
            })
        }

    });

    /*анимация ползунков */

    var $setTimeSum = 4500;

    /*время анимации up*/
    var $intervalTimeUpSum = 60,
        $timeoutTimeUpSum = $intervalTimeUpSum * 20;

    setTimeout(function() {

        var timerIdUpSum = setInterval(function() {
            var $value = $('.range-value_price').val();
            console.log('value: ' + $value);
            var $valueCount = parseInt($value) + 1000;
            $('.range-slider__input--0, .range-value_price').val($valueCount);


            var sliders = $(".range-slider input[type=range]");
            for (var rangeSliders=0; rangeSliders < sliders.length; rangeSliders++) {
                createStyleElements(rangeSliders);
                $rangeSliderElement[rangeSliders].classList.add(rangeSliderClass + rangeSliders);
                paintRangeTrack(rangeSliders);
                sliders[rangeSliders].addEventListener('input', function() {
                    for (var i=0; i < sliders.length; i++) {
                        paintRangeTrack(i);
                    }
                })
            }
        }, $intervalTimeUpSum);




        setTimeout(function() {
            clearInterval(timerIdUpSum);
        }, $timeoutTimeUpSum);

    }, $setTimeSum);

    /*время анимации down*/
    var $intervalTimeDownSum = 60,
        $timeoutTimeDownSum = $intervalTimeDownSum * 15;

    setTimeout(function() {
        var timerIdDownSum = setInterval(function() {
            var $value = $('.range-value_price').val();
            console.log($value);
            var $valueCount = parseInt($value) - 1000;
            $('.range-slider__input--0, .range-value_price').val($valueCount);


            var sliders = $(".range-slider input[type=range]");
            for (var rangeSliders=0; rangeSliders < sliders.length; rangeSliders++) {
                createStyleElements(rangeSliders);
                $rangeSliderElement[rangeSliders].classList.add(rangeSliderClass + rangeSliders);
                paintRangeTrack(rangeSliders);
                sliders[rangeSliders].addEventListener('input', function() {
                    for (var i=0; i < sliders.length; i++) {
                        paintRangeTrack(i);
                    }
                })
            }
        }, $intervalTimeDownSum);

        setTimeout(function() {
            clearInterval(timerIdDownSum);
        }, $timeoutTimeDownSum);

    }, $setTimeSum + $timeoutTimeUpSum);
    /*конец анимации ползунков*/




    /*анимация ползунков срок займа*/

    var $setTimeDay = 4300;

    /*время анимации up*/
    var $intervalTimeUpDay = 70,
        $timeoutTimeUpDay = $intervalTimeUpDay * 20;

    setTimeout(function() {


        var timerIdUpDay = setInterval(function() {
            var $value = $('.range-value_day').val();
            console.log($value);
            var $valueCount = parseInt($value) + 1;
            $('.range-slider__input--1, .range-value_day').val($valueCount);



            var sliders = $(".range-slider input[type=range]");
            for (var rangeSliders=0; rangeSliders < sliders.length; rangeSliders++) {
                createStyleElements(rangeSliders);
                $rangeSliderElement[rangeSliders].classList.add(rangeSliderClass + rangeSliders);
                paintRangeTrack(rangeSliders);
                sliders[rangeSliders].addEventListener('input', function() {
                    for (var i=0; i < sliders.length; i++) {
                        paintRangeTrack(i);
                    }
                })
            }
        }, $intervalTimeUpDay);


        setTimeout(function() {
            clearInterval(timerIdUpDay);
        }, $timeoutTimeUpDay);


    }, $setTimeDay);

    /*время анимации down*/
    var $intervalTimeDownDay = 70,
        $timeoutTimeDownDay = $intervalTimeDownDay * 11;
    setTimeout(function() {

        var timerIdDownDay = setInterval(function() {
            var $value = $('.range-value_day').val();
            console.log($value);
            var $valueCount = parseInt($value) - 1;
            $('.range-slider__input--1, .range-value_day').val($valueCount);


            var sliders = $(".range-slider input[type=range]")
            for (var rangeSliders=0; rangeSliders < sliders.length; rangeSliders++) {
                createStyleElements(rangeSliders);
                $rangeSliderElement[rangeSliders].classList.add(rangeSliderClass + rangeSliders);
                paintRangeTrack(rangeSliders);
                sliders[rangeSliders].addEventListener('input', function() {
                    for (var i=0; i < sliders.length; i++) {
                        paintRangeTrack(i);
                    }
                })
            }
        }, $intervalTimeDownDay);


        setTimeout(function() {
            clearInterval(timerIdDownDay);
        }, $timeoutTimeDownDay);


    }, $setTimeDay + $timeoutTimeUpDay);
    /*конец анимации ползунков*/







    $(".menu_item").on("click", function(){
        $(this).siblings().removeClass("menu-active");
        $(this).addClass("menu-active");
        $("li.about_li").removeClass("menu-active-color");
    });

    $("li.about_li").on("click", function(){
        $(this).siblings().removeClass("menu-active");
        $("#about_company").addClass("menu-active");
        $(this).addClass("menu-active-color");
    });

    /*автоматическое изменение ползунков при загрузке*/
    //$('.range-value_price')

    /*появление плашки с заказами*/
    setInterval(function(){

      $('.popup-message').toggleClass('show-popup');
        setInterval(function(){
            $('.popup-message').toggleClass('show-popup');
        }, 10000);
    }, 10000);

    $('.popup-message__close').on('click', function(e){
        e.preventDefault();
        $('.popup-message').removeClass('show-popup');
    });



});//ready end
