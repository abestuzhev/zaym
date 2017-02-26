jQuery(document).ready(function () {

    $('#ex_money,#ex_money_two').slider({
        formatter: function(value) {
            return value +' руб.';
        }
    });
    $('#ex_day,#ex_day_two').slider({
        formatter: function(value) {
            return value +' д.';
        }
    });

    setInterval(function () {
        jQuery('.ex_money .slider-handle.min-slider-handle.round').html(jQuery('.ex_money .tooltip-inner').html());
        jQuery('.ex_day .slider-handle.min-slider-handle.round').html(jQuery('.ex_day .tooltip-inner').html());
        jQuery('.ex_money_two .slider-handle.min-slider-handle.round').html(jQuery('.ex_money_two .tooltip-inner').html());
        jQuery('.ex_day_two .slider-handle.min-slider-handle.round').html(jQuery('.ex_day_two .tooltip-inner').html());
    },0);

});
