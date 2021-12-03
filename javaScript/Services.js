$(function () {
    //遮罩层、下划线
    $('.Services .Bottom li').mouseenter(function () {
        $(this).find('.pic').find('div').slideDown(500)

        $(this).find('.line').animate({ width: '100%', right: 0 }, 500)
    })
    $('.Services .Bottom li').mouseleave(function () {
        $(this).find('.pic').find('div').slideUp(500)
        $(this).find('.line').animate({ width: '0%', left: 0 }, 500)
    })
    // 按钮
    $('.menu-r .text button').mouseenter(function () {
        $('.menu-r .text div').animate({
            width: '211px', left: '80px'
        }, 500)
    })
    $('.menu-r .text div').mouseleave(function () {
        $('.menu-r .text div').animate({
            width: '10px', left: '281px'
        }, 500)
    })
    //   2 按钮
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
    $('#wrap').mousedown(function(ev) {
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
})