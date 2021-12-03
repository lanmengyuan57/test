$(function () {
    $(window).scroll(function () {
        // 吸顶
        var Top = $(document).scrollTop()
        // console.log(Top)
        if (Top < $('.nav').height()) {
            $('.nav_none').slideUp(100)
            $('.header .point').fadeOut(500)
            
        }
        else if (Top >= $('.nav').height()) {
            $('.nav_none').css({ position: 'fixed', top: '0px' })
            $('.nav_none').slideDown(400)
            $('.header .point').fadeIn(500)
        }
        // 点击向上箭头，逐渐返回顶部
        $('.header .point').click(function(){
            animate(window,0)
        })
        function animate(obj, target) {
            clearInterval(obj.timer);  
            obj.timer = setInterval(function() {
                var step = (target - window.pageYOffset) / 10; 
                step = step > 0 ? Math.ceil(step) : Math.floor(step); 
                if(window.pageYOffset == target) {
                    clearInterval(obj.timer);
                }else{
                    window.scroll(0, window.pageYOffset + step);
                }
            }, 15);
        }
    })
    // 下划线
    // nav
    $('.nav ul li').mouseenter(function () {
        $(this).children('div').removeAttr('style','left')
        $(this).children('div').animate({ width: '100%',right: 0}, 500)
    })
    $('.nav ul li').mouseleave(function () {
        $(this).children('div').animate({ width: '0%',left:0}, 500)
    })
    // nav_other
    $('.nav_other ul li').mouseenter(function () {
        $(this).children('div').removeAttr('style','left')
        $(this).children('div').animate({ width: '100%',right:0  }, 500)
    })
    $('.nav_other ul li').mouseleave(function () {
        $(this).children('div').animate({ width: '0%', left: 0 }, 500)
    })
    // 数字加载
    

    // 显示隐藏

    $('.nav .Services').mouseenter(function () {
        $('.nav .ser').fadeIn(200)
    })
    $('.nav .Services').mouseleave(function () {
        $('.nav .ser').fadeOut(400)
    })
    $('.nav .Page').mouseenter(function () {
        $('.nav .pag').fadeIn(200)
    })
    $('.nav .Page').mouseleave(function () {
        $('.nav .pag').fadeOut(400)
    })
    $('.nav .Blog').mouseenter(function () {

        $('.nav .blo').fadeIn(200)
    })
    $('.nav .Blog').mouseleave(function () {
        $('.nav .blo').fadeOut(400)
    })
    // .nav_other
    $('.nav_other .Services').mouseenter(function () {

        $('.nav_other .ser').fadeIn(200)
    })
    $('.nav_other .Services').mouseleave(function () {
        $('.nav_other .ser').fadeOut(400)
    })
    $('.nav_other .Page').mouseenter(function () {

        $('.nav_other .pag').fadeIn(200)
    })
    $('.nav_other .Page').mouseleave(function () {
        $('.nav_other .pag').fadeOut(400)
    })
    $('.nav_other .Blog').mouseenter(function () {

        $('.nav_other .blo').fadeIn(200)
    })
    $('.nav_other .Blog').mouseleave(function () {
        $('.nav_other .blo').fadeOut(400)
    })
    // bg
    $('.nav .ser li').mouseenter(function () {
        $(this).css({ background: '#f1cf69' })

    })
    $('.nav .ser li').mouseleave(function () {
        $(this).css({ background: '#fff' })
    })
    $('.nav .pag li').mouseenter(function () {
        $(this).css({ background: '#f1cf69' })

    })
    $('.nav .pag li').mouseleave(function () {
        $(this).css({ background: '#fff' })
    })
    $('.nav .blo li').mouseenter(function () {
        $(this).css({ background: '#f1cf69' })

    })
    $('.nav .blo li').mouseleave(function () {
        $(this).css({ background: '#fff' })
    })
    // .nav_other
    $('.nav_other .ser li').mouseenter(function () {
        $(this).css({ background: '#f1cf69' })

    })
    $('.nav_other .ser li').mouseleave(function () {
        $(this).css({ background: '#fff' })
    })
    $('.nav_other .pag li').mouseenter(function () {
        $(this).css({ background: '#f1cf69' })

    })
    $('.nav_other .pag li').mouseleave(function () {
        $(this).css({ background: '#fff' })
    })
    $('.nav_other .blo li').mouseenter(function () {
        $(this).css({ background: '#f1cf69' })

    })
    $('.nav_other .blo li').mouseleave(function () {
        $(this).css({ background: '#fff' })
    })
})
