$(document).ready(function(){
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 250,
        slideMargin: 10,
        randomStart: true, 
        moveSlides: 1, 
        pagerCustom: '#pager', 
        pause: 3000, 
        autoHover: true 
    });
});
