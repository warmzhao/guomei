$(function(){
			$(".inpBtn").on("click",function(){
				$(this).parent().parent().parent().hide().end();
				$(".mask_lh").hide().end();
			})
			var $name = $("#username");
			var $sex = $("#sex");
			var $email = $("#email");
			var $pwd = $("#password");
			var obj = {};
			
			$($name).focus(function(){
				$(this).next().hide().next().show();
			})
			$($sex).focus(function(){
				$(this).next().hide().next().show();
			})
			$($email).focus(function(){
				$(this).next().hide().next().show();
			})
			$($pwd).focus(function(){
				$(this).next().hide().next().show();
			})
			$(".cl-sex").click(function(){
				$($sex).val("");
				$(this).hide();
			})
			$(".cl-name").click(function(){
				$($name).val("");
				$(this).hide();
			})
			$(".cl-email").click(function(){
				$($email).val("");
				$(this).hide();
			})
			$(".cl-pwd").click(function(){
				$($pwd).val("");
				$(this).hide();
			})
			
			$name.change(function(){
				var $flag1 = false;
				var val = $(this).val();
				$.get("http://47.104.244.134:8080/username.do",{username:val},(data)=>{
						
						if(data.code==1&&val.length!=0){
							$(".er-name").hide();
							$(".in-name").show().next().hide();
							$(this).next().show();
							$flag1 = true;
							obj.name = 1;
						}else{
							$(".er-name").show();
							$(this).next().hide();
							$flag1 = false;
							obj.name = 0;
						}
					
				})
			})
			$sex.change(function(){
				$flag2 = false;
				var val = $sex.val();
				if(val!="男"&&val!="女"){
					$flag2 = false;
					obj.sex = 0;
					$(".er-sex").show();
					$(this).next().hide();
				}else{
					$(".er-sex").hide();
					$(".cl-sex").hide();
					$(this).next().show();
					$flag2 = true;
					obj.sex = 1;
				}
			})
			
			$email.change(function(){
				var val = $(this).val();
				$flag3 = false;
				var reg = /^\w{6,11}@\w{2,3}(\.\w{2,3})+$/g;
				
				$.get("http://47.104.244.134:8080/useremail.do",{username:val},function(data){
			if(data.code==1&&reg.test(val)){
				$flag3 = true;
				obj.email = 1;
				$(this).next().show();
				$(".er-email").hide();
				$(".cl-email").hide();
			}else{
				$(".er-email").show();
				$(this).next().hide();
				$flag3 = false;
				obj.email = 0;
				console.log(data);
			}
		})
		})		
			$pwd.change(function(){
				$flag4 = false;
				var val=$(this).val();
				var reg = /\w{5,16}/g;
				if(!reg.test(val)){
					$(".er-pwd").show();
					obj.pwd = 0;
				}else{
					$(".er-pwd").hide();
					$(this).next().show();
					$(".cl-pwd").hide();
					obj.pwd = 1;
				}
			})
			
			var str = 0;
			$(".button").click(function(){
				for(let i in obj){
					str += obj[i];
				}
				console.log(str);
				if(str==4){
					$.post("http://47.104.244.134:8080/usersave.do",{username:$name.val(),password:$pwd.val(),email:$email.val(),sex:$sex.val()},function(data){
						if(data.code!=0){
							console.log(data);
							alert("请重新注册");
						}else{
							alert("注册成功");
							setTimeout(function(){
								location.href="login.html";
							},2000)
						}
					})
				}
	
			})
	
		})