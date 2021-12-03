$(function(){
    $('.Famers li').mouseenter(function () {
        $(this).find('.farm-show').find('div').show()
        $(this).find('.farm-show').animate({
            height:'441px',top:'0px', opacity:1
        }, 400)
    })
    $('.Famers li').mouseleave(function () {
        $(this).find('.farm-show').find('div').hide()
        $(this).find('.farm-show').animate({
            height:'0px',top:'195px',opacity:0
        }, 400)
    })
})