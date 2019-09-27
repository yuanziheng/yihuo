$(function(){
	$(".getvip").find("span").on("click",function(){
		$(this).addClass("click").siblings().removeClass("click");
	})
})