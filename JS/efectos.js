$(document).ready(function () {
    
    $('.menu a').each(function (index) {
        $(this).css({
            top:'-200px',
        })

        $(this).animate({
            top:'0',
        },1000+(index*500))
    })



    if($(window).width()>800){
        $('header .textos').css({
            opacity:0,
            marginTop:0
        })

        $('header .textos').animate({
            opacity:1,
            marginTop:'-52px'
        },1500);
    }


    var acercade=$('#acercade').offset().top,
        actividades=$('#actividades').offset().top,
        galeria=$('#galeria').offset().top,
        ubicacion=$('#ubicacion').offset().top;

    $('#btn-acercade').on('click',function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop:acercade-200
        },500);
    })

    $('#btn-actividades').on('click',function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop:actividades+500
        },500);
    })

    $('#btn-galeria').on('click',function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop:galeria-100
        },500);
    })

    $('#btn-ubicacion').on('click',function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop:ubicacion
        },500);
    })

    
 
})