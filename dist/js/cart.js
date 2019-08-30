
	$.get("http://47.104.244.134:8080/cartlist.do",{token:"3"},function(data){
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
						<strong>总价:${goods.price*item.count}</strong>
						<input class="btn" type="button" value="删除"/>
						<a href="#">立即下单</a>
					</div>
				</li>
			`;
			}
			
		});
			
			$(".list").html(str);
			
			
				$(".sub").click(function(){
					var val = $(".input").val();
					val--;
					if(val<=0){
						val = 0;
					}
					$(".input").val(val);
				})
	
				$(".plus").click(function(){
					$val = $(".input").val();
					$val++;
					$(".input").val($val);
				})
				
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

