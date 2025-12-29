function checkPassword(){
    var value1=document.getElementById("pass1").value
    var value2=document.getElementById("pass2").value
    var value3=document.getElementById("user").value
    var value4=document.getElementById("email").value
    var value5=document.getElementById("phone").value
    if (value1.length!=0&&value2.length!=0&&value3.length!=0&&value4.length!=0&&value5.length!=0){
        var re=new RegExp("1[3578]\\d{9}")
        var result=re.test(value5)
        if (result){
            if (value1==value2){
                alert("注册成功")
                document.write("<a href='../index.html' style='font-size: 30px'>返回</a>")
            }
            else {
                alert("你输入的两次密码不一致，请重新输入")
                document.getElementById("pass1").value=""
                document.getElementById("pass2").value=""
            }
        }
        else {
            alert("电话号码错误")
        }
    }
    else {
        alert("资料未填完")
    }
}
