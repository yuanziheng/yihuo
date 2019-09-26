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
						<li class="ph">	
							<a href=''>
								<img src = '${data.data.list[i].image}'>
							</a>
						</li>
						`;
			}
			$(".pic").append(str);
			//轮播
			
			setInterval(function(){
				index++;
				if(index>$(".ph").length-1){index = 0;}
				
				$(".ph").eq(index).fadeIn().siblings().fadeOut();
				$(".circle li").eq(index).animate({width:"0.25rem"}).siblings().animate({width:"0.1rem"});
				
			},3500)
			$(".circle li").on("click", function(){
				$(this).animate({width:"0.25rem"}).siblings().animate({width:"0.1rem"});
				$(".ph").eq($(this).index()).fadeIn().siblings().fadeOut();
				index = $(this).index();
			});
			
			
		}
	});
	

});