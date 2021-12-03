$(function () {
    // 按钮
    $('.about .text button').mouseenter(function () {
        $('.about .text .show p').show()
        $('.about .text .show').animate({
            width: '232px', left: '0px', opacity: 1
        }, 500)
    })
    $('.about .text .show').mouseleave(function () {
        $('.about .text .show p').hide()
        $('.about .text .show').animate({
            width: '10px', left: '223px', opacity: .5
        }, 500)
    })
   
    //2按钮
    $('.We button').mouseenter(function () {
        $('.We .show p').show()
        $('.We .show').animate({
            width: '232px', right: '312x', opacity: 1
        }, 500)
    })
    $('.We .show').mouseleave(function () {
        $('.We .show p').hide()
        $('.We .show').animate({
            width: '10px', right: '80px', opacity: .2
        }, 500)

    }) 
   
    // 拖拽轮播图
    $('.picture .envato').mousedown(function(ev) {
        var $this = $(this);
        var e = ev || window.event;
        var  X = e.clientX;
        e.preventDefault  ?  e.preventDefault() : returnValue = false
        var left = $this.css('left');
        // 取数值，去px
        var left_1 = window.parseInt(left);
        // console.log(left_1)

        $(document).on('mousemove', function(e) {
            var x = e.clientX - X;
            // console.log(x)
            var move = x + left_1;
            if (move > 0) {
                move = 0
            } else if (move <= -1800) {
                move = -1800
            }
            $this.css('left', move+'px');
        })
        $(document).mouseup(function(){
            $(this).off('mousemove');
        })

    })
    // 遮罩层
    $('.Famers li').mouseenter(function () {
        $(this).find('.farm-show').find('ul').show()
        $(this).find('.farm-show').animate({
            height:'331px',top:'0px',opacity:1
        }, 400)
    })
    $('.Famers li').mouseleave(function () {
        $(this).find('.farm-show').find('ul').hide()
        $(this).find('.farm-show').animate({
            height:'0px',top:'160px',opacity:0
        }, 400)
    })
})