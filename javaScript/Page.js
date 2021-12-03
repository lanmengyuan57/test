$(function(){
    $('.Famers li').mouseenter(function () {
        $(this).find('.farm-show').find('ul').show()
        $(this).find('.farm-show').animate({
            height:'391px',top:'0px', opacity:1
        }, 400)
    })
    $('.Famers li').mouseleave(function () {
        $(this).find('.farm-show').find('ul').hide()
        $(this).find('.farm-show').animate({
            height:'0px',top:'195px',opacity:0
        }, 400)
    })
})