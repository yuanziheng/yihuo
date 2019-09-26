$(function() {
	var indexBanner = document.getElementById("banner");
	var str = "";
	var index = 0;
	$.ajax({
		type: "get",
		url: "https://www.fastmock.site/mock/d65b8d91bf598002ddd37fcb7a92c43a/api/index_recom_banner",
		success: function(data){
			for(var i in data.data.list){
				str += `
							<a href=''>
								<img src = '${data.data.list[i].image}' class="pic">
							</a>
						`;
			}
			$("#banner").append(str);
			//轮播
			
			setInterval(function(){
				index++;
				if(index>$(".pic").length-1){index = 0;}
				$(".pic").eq(index).fadeIn().siblings().fadeOut();
				$(".circle li").eq(index).animate({width:"0.25rem"}).siblings().animate({width:"0.1rem"});
				$(".circle li").eq(index)").bind("click", function(){
					
				});
			},3500)
			
			
			
		}
	});
	

});