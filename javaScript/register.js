$(function () {
    // 正则
    var flag =null
    var flag_p=null
    var flag_w=null
    // 1
    $('.register form :text').blur(function () {
            var pattern = /^\w{5,11}$/
            if (pattern.test($(this).val())) {
                $('.register form .text_one').text(' ')
                flag =  true
            } else {
                $('.register form .text_one').text('请输入字母、数字、下划线组成的5-11位')
                $('.register form .text_one').css('color', 'red')
                flag = false
            }
    })
    $('.register form :text').focus(function () {
        $('.register form .text_one').text('请输入字母、数字、下划线组成的5-11位')
        $('.register form .text_one').css('color', '#334b35')
    })
    // 2
    $('.register form #password').blur(function () {
        var pattern = /^[\dA-Za-z]{6,11}$/
        if (pattern.test($(this).val())) {
            $('.register form .text_two').text(' ')
            flag_p= true
        } else {
            $('.register form .text_two').text('请输入字母、数字组成的6-10位')
            $('.register form .text_two').css('color', 'red')
            flag_p= false
        }
    })
    $('.register form #password').focus(function () {
        $('.register form .text_two').text('请输入字母、数字组成的6-10位')
        $('.register form .text_two').css('color', '#334b35')
    })
    // 3
    $('.register form #pass').blur(function(){
        var pattern = /^[\dA-Za-z]{6,11}$/
        
            if(pattern.test( $(this).val())&&($('.register form #pass').val() === $('.register form #password').val())){
                $('.register form .text_three').text('')
                flag_w = true
            }else{
                $('.register form .text_three').text('两次密码不匹配')
                $('.register form .text_three').css('color', 'red')
                flag_w = false
            }
    }) 
    // 存入缓存
   
    $('.register form button').click(function(){
            // 判断输入无误并且加入缓存里
            // console.log(flag,flag_w,flag_p)
        if(flag&&flag_p&&flag_w){
            var Msg= {
                text:$('.register form :text').val(),
                password:$('.register form #password').val()
            }
            var pass = JSON.parse(window.localStorage.getItem('pass')) ||[]
            pass.push(Msg)
            window.localStorage.setItem('pass',JSON.stringify(pass))
            location.href='./logon.html'
            window.localStorage.reload()
            
        }else{
            alert('注册信息有误，请核对注册')
            return
        }
    })
    // 
    
    
})