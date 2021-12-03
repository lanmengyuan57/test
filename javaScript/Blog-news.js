$(function(){
    $('.News_left button').mouseenter(function () {
        $('.News_left .show p').show()
        $('.News_left .show').animate({
            width: '232px', left: '0', opacity: 1
        }, 500)
    })
    $('.News_left .show').mouseleave(function () {
        $('.News_left .show p').hide()
        $('.News_left .show').animate({
            width: '10px', left: '222px', opacity: .2
        }, 500)
    })
})