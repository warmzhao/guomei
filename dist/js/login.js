$(function(){
	
	$name = $(".username");
	$pwd = $(".password");
	
	$(".login-a").on("click",function(){
		console.log($name.val());
		$.post("http://47.104.244.134:8080/userlogin.do",{name:$name.val(),password:$pwd.val()},function(data){
			var item = data.data;
			if(data.code==0){
				location.href = "index.html";
				token = item.token;
				console.log(token);
				localStorage.setItem("token",JSON.stringify({token:token}))
				
			}else{
				alert("用户名或密码错误");
			}
		})
	})
	
})
