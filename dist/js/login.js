$(function(){
	
	$name = $(".username");
	$pwd = $(".password");
	
	$(".login-a").on("click",function(){
		console.log($name.val());
		$.post("http://47.104.244.134:8080/userlogin.do",{name:$name.val(),password:$pwd.val()},function(data){
			if(data.code==0){
				location.href = "index.html";
			}else{
				alert("用户名或密码错误");
			}
		})
	})
	
})
