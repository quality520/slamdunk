$(function(){
	
	$("div.nav_list ul li").hover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		})
	$("div.nav_search a").hover(function(){
			
			$("div.nav_search .search_box").css({
				"display":"block",
				"position":"absolute",
				"top":"64px",
				"left":"1000px"
			});
		})	
	
	var a = 0;
	var oPlay = null;
	$("#button ul li").hover(function(){
			a = $(this).index();
			$(this).addClass("hover").siblings().removeClass("hover");
			$("#img_box ul li").eq(a).fadeIn().siblings().hide();
		})
	function play(){
			oPlay = setInterval(function(){
				a++;
				if(a < 6){
					$("#button ul li").eq(a).addClass("hover").siblings().removeClass("hover");
					$("#img_box ul li").eq(a).fadeIn().siblings().hide();
					if(a == 5){
						a = -1;
					}
				}
				else{
					a = -1;
				}
			},3000)
		}
	play();

	$("#main").hover(function(){
		clearInterval(oPlay);
	},function(){
		play();
	})
})