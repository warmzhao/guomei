
	var id = location.search.split("=")[1];
	console.log(location.search);
	console.log(id);
	
	$.get("http://47.104.244.134:8080/goodsbyid.do",{id:id},function(data){
	console.log(data);
		
	var str = `
		<div id="zoomBox fl">
			<div id="midArea">
				<img id="child1" src="${data.picurl}">
				<div id="zoom"></div>
			</div>
			<div id="bigArea">
				<img id="child2" src="${data.picurl}">
			</div>
			<div id="smallArea">
				<img id="child3" src="${data.picurl}">
			</div>
		</div>
		<div class="goods-info fr">
				<h2>${data.name}</h2>
				<strong>¥:${data.price}</strong>
				<p>上架时间:${data.pubdate}</p>
				<b>评分:${data.star}</b>
				<i>店铺:${data.info}</i>
				<div class="add">
					<button class="sub">-</button>
					<input class="input" type="text" value="1"/>
					<button class="plus">+</button>
					<input class="addcart" type="button" value="加入购物车"/>
				</div>
		</div>
	`;
	
	$(".product").html(str);
	$(".input").change(function(){
		var $val = $(this).val();
		console.log($val);
	})
	
	$(".sub").click(function(){
		var $val = $(".input").val();
		$val--;
		if($val<=0){
			$val = 0;
		}
		$(".input").val($val);
	})
	
	$(".plus").click(function(){
		$val = $(".input").val();
		$val++;
		$(".input").val($val);
	})
	
	$(".addcart").click(function(){
		$.get("http://47.104.244.134:8080/cartsave.do",{gid:id,token:"3"},function(data){
			console.log(data);
		})
		
		
	})
})
