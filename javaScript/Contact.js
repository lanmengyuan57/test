$(function(){
    function run(){
        $('.link form .show button').hide()
    }
    function fun(){
        $('.link form .show button').show()
    }
     var timer =  setTimeout(run,500)
     var timer_fun =  setTimeout(fun,300)
    $('.link form button').mouseenter(function () {
        clearTimeout(timer)
        var timer_fun =  setTimeout(fun,300)
        $('.link form .show').animate({
            width: '232px', left: '0px', opacity: 1
        }, 500)
    })
    $('.link form .show button').mouseleave(function () {
        timer =  setTimeout(run,500)
        clearTimeout(timer_fun)
        $('.link form .show').animate({
            width: '10px', left: '222px', opacity: .5
        }, 500,)
    })
    // 正则,表单0
    $('form input').eq(0).blur(function(){
        var pattern = /^[\u4e00-\u9fa5a-zA-Z]{2,8}$/
        if(pattern.test($(this).val())){
            $('form p').eq(0).text(' ')
            return true
        }else{
            $('form p').eq(0).text('请正确输入2-8位汉字或字母')
            $('form p').eq(0).css('color','red')
            return false
        }
    })
    $('form input').eq(0).focus(function(){
        $('form p').eq(0).text('请正确输入2-8位汉字或字母')
        $('form p').eq(0).css('color','#334b35')
    })
    // 1
    $('form input').eq(1).blur(function(){
        var pattern = /^[1-9]{5,10}@qq\.com$/
        if(pattern.test($(this).val())){
            $('form p').eq(1).text('')
            return true
        }else{
            $('form p').eq(1).text('请正确输入邮箱格式：@qq.com')
            $('form p').eq(1).css('color','red')
            return false
        }
    })
    $('form input').eq(1).focus(function(){
        $('form p').eq(1).text('请正确输入邮箱格式：@qq.com ')
        $('form p').eq(1).css('color','#334b35')
    })
    // 2
    $('form input').eq(2).blur(function(){
        var pattern = /^1[3-9]\d{9}$/
        if(pattern.test($(this).val())){
            $('form p').eq(2).text('')
            return true
        }else{
            $('form p').eq(2).text('请正确输入的手机号')
            $('form p').eq(2).css('color','red')
            return false
        }
    })
    $('form input').eq(2).focus(function(){
        $('form p').eq(2).text('请正确输入的手机号 ')
        $('form p').eq(2).css('color','#334b35')
    })
    // 3
    $('form input').eq(3).blur(function(){
        var pattern = /^\w{3,6}$/
        if(pattern.test($(this).val())){
            $('form p').eq(3).text('')
            return true
        }else{
            $('form p').eq(3).text('请正确输入数字、字母、下划线组成的3-6位')
            $('form p').eq(3).css('color','red')
            return false
        }
    })
    $('form input').eq(3).focus(function(){
        $('form p').eq(3).text('请正确输入数字、字母、下划线组成的3-6位 ')
        $('form p').eq(3).css('color','#334b35')
    })
    // 缓存
    $('.link form button').click(function(){
        var Msg = {
            text:$('.link form #text').val(),
            email:$('.link form #email').val(),
            tel:$('.link form #tel').val(),
            sub:$('.link form #sub').val(),
            area:$('.link form #area').val(),
        }
        // 获取
        var New = JSON.parse(window.localStorage.getItem('New')) ||[]
            // console.log(New)
            New.push(Msg)
        // 写入
            window.localStorage.setItem('New',JSON.stringify(New))
        //重新加载
            window.location.reload()

    })
    
})