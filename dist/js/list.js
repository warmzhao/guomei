//http://47.104.244.134:8080/goodsbytid.do
$.get("http://47.104.244.134:8080/goodsbytid.do",{tid:13,page:1,limit:10},function(data){
	//console.log(data.data);
	$val = data.data;
	console.log($val);
	let str = "";
	$.each($val,function(index,item){
		console.log(item);
		if(item.flag==3){
			str += `<li><a href = "detail.html?data-id=${item.id}">
				<img src = "${item.picurl}"/>
				<p>${item.name}</p>
				<strong>￥${item.price}</strong>
				<p>评分:${item.star}</p>
				<span>上架时间:${item.pubdate}</span>
				<i><b>店铺</b>:${item.info}</i>
				</a>
		</li>`;
		}
	})
	$(".product").html(str);
})

