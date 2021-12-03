$(function(){
    // 按钮
    $('.agriculture-left button').mouseenter(function () {
        $('.agriculture-left .show p').show()
        $('.agriculture-left .show').animate({
            width: '361px',  opacity: 1
        }, 500)
    })
    $('.agriculture-left .show').mouseleave(function () {
        $('.agriculture-left .show p').hide()
        $('.agriculture-left .show').animate({
            width: '10px', opacity: .2
        }, 500)

    }) 
    // 点击
    
})