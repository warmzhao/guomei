$(function(){
	
	$.ajax({
            url: "http://47.104.244.134:8080/goodstypelist.do",
            contentType: "application/x-www-form-urlencoded",
            data: {
                l: 1,
            }
        }).then(function (res) {
            let level1 = res;
            $.ajax({
                url: "http://47.104.244.134:8080/goodstypelist.do",
                contentType: "application/x-www-form-urlencoded",
                data: {
                    l: 2,
                },
                success: function (res) {
                    let level2 = res;
                    let str = '';
                    level1.forEach(function (item) {
                        // 二级分类
                        let levelStr2 = '';
                        for (let i in level2) {
                            if (level2[i].parentid == item.id) {
                                levelStr2 += `
                                        <li>
                                            <a target="_black" href="./list.html?typeid=${level2[i].id}&page=1">${level2[i].name}</a>
                                        </li>`;
                            }
                        }
                        str += ` <div class="item">
                                    <div class="item-header">
                                        <div class="item_decoration"></div>
                                        <h3 class="title">
                                            ${item.name}
                                            <i class="arrow">&gt;</i>
                                        </h3>
                                    </div>
                                    <div class="item-body">
                                        <ul>
                                        ${levelStr2}
                                        </ul>
                                    </div>
                                </div>`;
                    });
                    // console.log(str);
                    $("#navBox").html(str);
                    $("#navBox .item").hover(function () {
                   	 	$(this).find(".item-body").show();
                    }, function () {
                        $(this).find(".item-body").hide();
                    })
                }
            });
        });
	
	
	
	
	$("#gome-user").mouseover(function(){
		$(this).children(".public-dropdown").css("height","auto");
	})
	$("#gome-user").mouseout(function(){
		$(this).children(".public-dropdown").css("height","0");
	})
	
	$(".user-icon-prev").click(function(){
		
	})
	$("#gome-mygome").mouseover(function(){
		$(this).children(".public-dropdown").css("height","auto");
	})
	$("#gome-mygome").mouseout(function(){
		$(this).children(".public-dropdown").css("height","0");
	})
	$("#gome-enterprise").mouseover(function(){
		$(this).children(".public-dropdown").css("height","auto");
	})
	$("#gome-enterprise").mouseout(function(){
		$(this).children(".public-dropdown").css("height","0");
	})
	$("#gome-service").mouseover(function(){
		$(this).children(".public-dropdown").css("height","auto");
	})
	$("#gome-service").mouseout(function(){
		$(this).children(".public-dropdown").css("height","0");
	})
	$("#gome-sitemap").mouseover(function(){
		$(this).children(".public-dropdown").css("height","auto");
	})
	$("#gome-sitemap").mouseout(function(){
		$(this).children(".public-dropdown").css("height","0");
	})
	
	$("#gome-phone").mouseover(function(){
		$(this).children(".public-dropdown").css("height","auto");
	})
	$("#gome-phone").mouseout(function(){
		$(this).children(".public-dropdown").css("height","0");
	})
	$("#search-type-dropdown").mouseover(function(){
		$(this).children(".search-type-list").show();
	})
	$("#search-type-dropdown").mouseout(function(){
		$(this).children(".search-type-list").hide();
	})
	$(".search-type-item").click(function(){
		$(".search-type-selected").html($(this).text());
		$(".search-type-list").hide();
	})
	
	$(".point").mouseover(function(){
		index = $(this).index();
		$(".lunbo").eq(index).show().siblings().hide();
	})
	var index = 0;
	var imgNum = $(".sliderList li").size();
	var timer = setInterval(move,3000);
	function move(){
		index++;
		if(index==imgNum){
			index=0;
		}
		$(".lunbo").eq(index).show().siblings().hide();
		$(".point").eq(index).addClass("hover").siblings().removeClass("hover");
	}
	$(".btn-left").click(function(){
		index -= 2;
		move();
	})
	$(".btn-right").click(function(){
		move();
	})
	$(".sliderList").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(move,3000);
	})
	
	$("#gome-bar-border-tab li").mouseover(function(){
		$(this).children().eq(1).css("right","40px")
	})
	$("#gome-bar-border-tab li").mouseout(function(){
		$(this).children().eq(1).css("right","-100px")
	})
	$(".tab li").mouseover(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
	})
	
})
