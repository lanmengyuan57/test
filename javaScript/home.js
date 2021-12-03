$(function () {
    // 按钮
    $('.Welcome button').mouseenter(function () {
        $('.Welcome .show p').show()
        $('.Welcome .show').animate({
            width: '232px', left: '15px', opacity: 1
        }, 500)
    })
    $('.Welcome .show').mouseleave(function () {
        $('.Welcome .show p').hide()
        $('.Welcome .show').animate({
            width: '10px', left: '237px', opacity: .5
        }, 500)

    })
    // 第二个按钮
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
    // 第三个按钮

    $('.backGround .text button').mouseenter(function () {
        $('.backGround .text div p').show()
        $('.backGround .text div').animate({
            width: '232px', left: '0px', opacity: 1
        }, 500)
    })
    $('.backGround .text div').mouseleave(function () {
        $('.backGround .text div p').hide()
        $('.backGround .text div').animate({
            width: '10px', left: '221px', opacity: .3
        }, 500)
    })
    // 1轮播图
    var i = 0;
    var j = 0
    function run() {
        i++;
        if (i > 2) {
            i = 0;
        }
        // console.log(i)
        $('.contain .home_bg ').css({background:'url(./img/pic/bg'+i+'.jpg)'})
        $('.Welcome ul li').eq(i-1).addClass('active').siblings().removeClass('active')
    }
    var timer = setInterval(run, 5000)
    // 2轮播图
    var n = 0;
    function fun() {
        n -= 301
        j++
        if (j > 3) {
            j = 0
        }
        $('.Explore .pic').animate({ left: n + 'px' }, 500, function () {
            n = 0
            $('.Explore .pic').append($('.Explore .pic li').first())
            $('.Explore .pic').css('left', '0px')
        })
    }
    var timer_Fun = setInterval(fun, 3000)


    // 1给小圆点,按钮绑定点击事件
    $('.Welcome ul li').click(function () {
        i = $(this).index()
        run()
    })
    $('.Welcome div img').eq(0).click(function () {
        run()
    })
    $('.Welcome div img').eq(1).click(function () {
        if (i < 2) {
            i = 2
        } else {
            i -= 2
        }
        run()
    })

    // 1移入 移出
    $('.contain').mouseenter(function () {
        clearInterval(timer)
    })
    $('.contain').mouseleave(function () {
        clearInterval(timer)
        timer = setInterval(run, 5000)
    })

    // 2移入移出
    $('.Explore .pic li').mouseenter(function () {
        clearInterval(timer_Fun)
    })
    $('.Explore .pic li').mouseleave(function () {
        clearInterval(timer_Fun)
        timer_Fun = setInterval(fun,3000)
    })
    // 遮罩层与下划线
    $('.Services .Bottom li').mouseenter(function () {
        $(this).find('.pic').find('div').slideDown(500)

        $(this).find('.line').animate({ width: '100%', right: 0 }, 500)
    })
    $('.Services .Bottom li').mouseleave(function () {
        $(this).find('.pic').find('div').slideUp(500)
        $(this).find('.line').animate({ width: '0%', left: 0 }, 500)
    })
    // 遮罩层
    $('.pic li').mouseenter(function () {
        $(this).find('.farm-show').find('div').show()
        $(this).find('.farm-show').animate({
            height:'315px',top:'0px', opacity:1
        }, 400)
    })
    $('.pic li').mouseleave(function () {
        $(this).find('.farm-show').find('div').hide()
        $(this).find('.farm-show').animate({
            height:'0px',top:'195px',opacity:0
        }, 400)
    })

})

