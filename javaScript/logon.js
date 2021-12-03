$(function () {
    $('.logon div button').click(function(){
        var pass = JSON.parse(window.localStorage.getItem('pass'))
        // console.log(pass)
        var obj = {
            _text:$('.logon div :text').val(),
            _password:$('.logon div :password').val()
        }

        for(var i=0; i<pass.length; i++){
            if(obj._text === pass[i].text&&obj._password === pass[i].password){
                location.href = './indent1.html'
                return
            }else{
                alert('账号与密码不匹配')
                return
            }
        }
    })
})