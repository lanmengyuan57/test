$(function(){
    $('.banner button').mouseenter(function () {
        $('.banner .show p').show()
        $('.banner .show').animate({
            width: '232px', right: '515px', opacity: 1
        }, 500)
    })
    $('.banner .show').mouseleave(function () {
        $('.banner .show p').hide()
        $('.banner .show').animate({
            width: '10px', right: '515px', opacity: .2
        }, 500)
    })
 

})