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
								<img src = '${data.data.list[i].image}' class="banpic">
							</a>
						</li>
						`;
			}
			$(".pic").append(str);
			//轮播

			

			for(var j=0;j<$(".banpic").length;j++){
				$(".banpic").eq(j).css({"left":j*$('.banpic').width()+'px'});
			}
			$(".ph").eq(index).animate({left:"0px"},1000);
		
			setInterval(function(){
				index++;
				if(index>$(".ph").length-1){index = 0;}
				console.log(index);
				$(".ph").eq(index).animate({left:"0px"},1000);
				$(".ph").eq(index-1).animate({left:"-3.5rem"},1000)
				.siblings().css({"left":"3.5rem"});
				$(".circle li").eq(index).animate({width:"0.25rem"},1000).siblings().animate({width:"0.1rem"},1000);
			},3500)
		}
	});
	

});