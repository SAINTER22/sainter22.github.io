$(document).ready(function() {
    
    
    $(window).scroll(function () {
        var windowWidth=$(window).width();
        if (windowWidth>800) {
            var scroll=$(window).scrollTop();

            $('header .textos').css({
                transform:'translate(0px,'+scroll/2+'%)'
            })

            $('.acercade article').css({
                transform:'translate(0px, -'+scroll/4+'%)'
            })
        }
    })

    $(window).resize(function () {
        if(windowWidth<800){
            $('header .textos').css({
                transform:'translate(0px,0px)'
            })
            $('.acercade article').css({
                transform:'translate(0px, 0px)'
            })
        }
    })

});