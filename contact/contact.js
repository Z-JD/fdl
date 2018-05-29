$("#glyphicon").click(function () {
    $(".navbar-single").stop(true,false).slideToggle(1000);
});

//侧边栏
$(".keFu").mouseover(function () {
    $(".phoneNum").stop(true,false).fadeIn(1000);
});
$(".keFu").mouseleave(function () {
    $(".phoneNum").stop(true,false).fadeOut(1000);
});

//注册
$(function () {
    var a,b,c = false;
    $("input[name='user']").blur(function() {
        var namestr = $(this).val();
        var regstr = /^[a-zA-Z0-9_-]{4,16}$/;
        if(!regstr.test(namestr)) {
            $(".red1").html("用户名必须4到16位（字母，数字，下划线，减号）").css("color", "red");
            return a = false;
        }else {
            $(".red1").html("正确").css("color","green");
        }
        return a = true;
    });
    $("input[name = 'user']").focus(function() {
        var namestr = $(this).val();
        var regstr = /^[a-zA-Z0-9_-]{4,16}$/;
        if(!regstr.test(namestr)) {
            $(".red1").html("*").css("color", "red");
        }else {
            $(".red1").html("正确").css("color","green");
        }
    });
    $("input[name='pw']").blur(function() {
        var pwdstr = $(this).val();
        var regstr = /^\w{8}$/;
        if(!regstr.test(pwdstr)) {
            $(".red2").html("密码必须是8位数字字母下划线").css("color", "red");
            return b = false;
        }else {
            $(".red2").html("正确").css("color","green");
        }
        return b = true;
    });
    $("input[name='pw']").focus(function() {
        var pwdstr = $(this).val();
        var regstr = /^\w{8}$/;
        if(!regstr.test(pwdstr)) {
            $(".red2").html("*").css("color", "red");
        }else {
            $(".red2").html("正确").css("color","green");
        }
    });
    $("input[name='tel']").blur(function() {
        var namestr = $(this).val();
        var regstr = /^1[3|4|5|7|8][0-9]{9}$/;
        if(!regstr.test(namestr)) {
            $(".red3").html("手机号码不符合要求").css({"color": "red","fontSize": "14px"});
            return b = false;
        }else {
            $(".red3").html("正确").css("color","green");
        }
        return c = true;
    });
    $("input[name = 'tel']").focus(function() {
        var namestr = $(this).val();
        var regstr = /^1[3|4|5|7|8][0-9]{9}$/;
        if(!regstr.test(namestr)) {
            $(".red3").html("*").css("color", "red");
        }else {
            $(".red3").html("正确").css("color","green");
        }
    });

    change.onclick=function () {
        user.value="";
        mm.value="";
        phone.value="";
    };

    $("input[id='btn']").click(function() {
        if( a&b&c === true ){
            alert("注册成功！欢迎加入，即将为你跳转！");
            window.location.href = "file:///C:/%E6%AF%95%E4%B8%9A%E8%AE%BE%E8%AE%A1/index/index.html";
        }else {
            alert("请输入正确的信息！");
            $("form")[0].reset();
        }
    });
});