function setIntervalPlay() {
    setIntervalStop = setInterval(function () {
        if(item_index == item_last_index) {
            jQuery('.slider_item').removeClass('opacity').eq(0).addClass('opacity');
            jQuery('.slider_button').each(function () {
                jQuery(this).find('span').removeClass('active').eq(0).addClass('active');
            });
            item_index = 0;
        }
        else {
            jQuery('.slider_item').removeClass('opacity').eq(item_index + 1).addClass('opacity');
            jQuery('.slider_button').each(function () {
                jQuery(this).find('span').removeClass('active').eq(item_index + 1).addClass('active')
            });
            item_index = item_index +1;
        }
    },4000);
}
function add_slider_button() {
    i = jQuery('.slider_item').length;
    html = '<span class="button"></span>';
    new_html = '<span class="button"></span>';
    while (1 < i) {
        new_html=new_html+html;
        i--;
    }
    jQuery('.slider_button').each(function () {
        jQuery(this).html(new_html).find('span').eq(0).addClass('active');
    });
}
function slider() {
    jQuery('.slider_item').eq(0).removeClass('hide');
    setTimeout(function () {
        jQuery('.slider_item').css('display','block');
    },1300);
    add_slider_button();
    // resize_width();
    item_index=0;
    item_last_index=jQuery('.slider_item').eq(-1).index();
    setIntervalPlay();
}
function setIntervalPlay2() {
    setIntervalStop2 = setInterval(function () {
        if(item_index2 == item_last_index2) {
            jQuery('.slider_item2').removeClass('opacity').eq(0).addClass('opacity');
            jQuery('.slider_button2').each(function () {
                jQuery(this).find('span').removeClass('active').eq(0).addClass('active');
            });
            item_index2 = 0;
        }
        else {
            jQuery('.slider_item2').removeClass('opacity').eq(item_index2 + 1).addClass('opacity');
            jQuery('.slider_button2').each(function () {
                jQuery(this).find('span').removeClass('active').eq(item_index2 + 1).addClass('active')
            });
            item_index2 = item_index2 +1;
        }
    },4000);
}
function add_slider_button2() {
    i2 = jQuery('.slider_item2').length;
    html2 = '<span class="button"></span>';
    new_html2 = '<span class="button"></span>';
    while (1 < i2) {
        new_html2=new_html2+html2;
        i2--;
    }
    jQuery('.slider_button2').each(function () {
        jQuery(this).html(new_html2).find('span').eq(0).addClass('active');
    });
}
function slider2() {
    jQuery('.slider_item2').eq(0).removeClass('hide');
    setTimeout(function () {
        jQuery('.slider_item2').css('display','block');
    },1300);
    add_slider_button2();
    item_index2=0;
    item_last_index2=jQuery('.slider_item2').eq(-1).index();
    setIntervalPlay2();
}
jQuery(window).bind('load',function () {

    if(jQuery(window).width()>767) {
        jQuery('.slider_container').on('click','.slider_button span', function () {
            i=jQuery(this).index()-1;
            jQuery('.slider_button').each(function () {
                jQuery(this).find('span').removeClass('active').eq(i+1).addClass('active');;
            });
            jQuery('.slider_item').removeClass('opacity').eq(i+1).addClass('opacity');
            item_index = i;
        });
        jQuery('.slider_button').hover(
            function () {
                clearInterval(setIntervalStop);
            } ,
            function() {
                setIntervalPlay();
            }
        );
        slider();
    }
    else {
        jQuery('.slider_container2').on('click','.slider_button2 span', function () {
            jQuery('.slider_item2').removeClass('opacity');
            i2=jQuery(this).index()-1;
            jQuery('.slider_button2').each(function () {
                jQuery(this).find('span').removeClass('active').eq(i2+1).addClass('active');;
            });
            jQuery('.slider_item2').removeClass('opacity').eq(i2+1).addClass('opacity');
            item_index2 = i2;
        });
        jQuery('.slider_button2').hover(
            function () {
                clearInterval(setIntervalStop2);
            } ,
            function() {
                setIntervalPlay2();
            }
        );
        slider2();
    }


});