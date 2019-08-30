
	var list = JSON.parse(localStorage.getItem("token"));
	var token = list.token;
	console.log(token);

	$.get("http://47.104.244.134:8080/cartlist.do",{token:token},function(data){
		var str = '';
		data.map(function(item){
			//console.log(item)
			var goods=item.goods;
			console.log(goods)
			if(goods.flag==3){
			
			str += `
				<li>
					<input class="checkbox" type="checkbox"/>
					<img src="${goods.picurl}"/>
					<div class="cart-r">
						<span>${goods.name}</span>
						<i>¥:${goods.price}</i>
						<input type="button" class="sub" value="-"/>
						<input class="input" type="text" value="${item.count}"/>
						<input type="button" class="plus" value="+"/>
						<strong class="totalPrice">总价:${goods.price*item.count}</strong>
						<input class="btn" type="button" value="删除"/>
						<a href="#">立即下单</a>
					</div>
				</li>
			`;
			}
			
		});
			
			$(".list").html(str);
			
			
				
				for (let i = 0; i < data.length; i++) {
				//-sub
				$(".sub").eq(i).click(function() {
					$(".input").eq(i).val(parseInt($(".input").eq(i).val()) - 1);
					if ($(".input").eq(i).val() <= 0) {
						$(".input").eq(i).val(1);
					}
					var price = $(".input").eq(i).val() * data[i].goods.price;
					$(".totalPrice").eq(i).text(price);
					$.ajax({
						type: "get",
						url: "http://47.104.244.134:8080/cartupdate.do",
						async: true,
						data: {
							id: data[i].id,
							gid: data[i].gid,
							num: "-1",
							token: token
						},
						success: function() {}
					})
				})
				//plus
				$(".plus").eq(i).click(function() {
					$(".input").eq(i).val(parseInt($(".input").eq(i).val()) + 1);
					var price = $(".input").eq(i).val() * data[i].goods.price;
					$(".totalPrice").eq(i).text(price);
					$.ajax({
						type: "get",
						url: "http://47.104.244.134:8080/cartupdate.do",
						async: true,
						data: {
							id: data[i].id,
							gid: data[i].gid,
							num: "1",
							token: token
						},
						success: function(){}
					})
				})
				$(".input").eq(i).change(function() {
					var price = $(".input").eq(i).val() * data[i].goods.price;
					$(".totalPrice").eq(i).text(price);
				})
				//delete
				$(".btn").eq(i).click(function() {
					$(".btn").eq(i).parent().parent().remove();
					$.ajax({
						type: "get",
						url: "http://47.104.244.134:8080/cartupdate.do",
						async: true,
						data: {
							id: data[i].id,
							gid: data[i].gid,
							num: "0",
							token: token
						},
						success: function() {}
					})
				})
				
			}
		
				$(".checkAll").prop("checked",true);
				$.each($(".checkbox"),function(i){
					$(this).prop("checked",true);
				})
				$(".checkAll").click(function(){
					$.each($(".checkbox"),function(i){
						//console.log($(".checkAll").prop("checked"));
						$(".checkbox").eq(i).prop("checked",$(".checkAll").prop("checked"));
					})
				})
				$.each($(".checkbox"),function(i){
					$(this).eq(i).click(function(){
						if($(this).prop("checked")==false){
							$(".checkAll").prop("checked",false);
						}
					})
				})
	})

