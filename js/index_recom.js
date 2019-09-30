$(function() {
	var indexBanner = document.getElementById("banner");
	var str = "";
	$.ajax({
		type: "get",
		url: "https://www.fastmock.site/mock/d65b8d91bf598002ddd37fcb7a92c43a/api/index_recom_banner",
		success: function(data){
			for(var i in data.data.list){
				str += `
						<li class="ph swiper-slide">	
							<a href=''>
								<img src = '${data.data.list[i].image}' class="banpic">
							</a>
						</li>
						`;
			}
			$(".swiper-wrapper").append(str);
			//牛逼轮播图
			
			var mySwiper = new Swiper('.swiper-container',{
				 loop:true,
 				 autoplay:{delay: 3000,
 				 	disableOnInteraction: false,
 				 	
    			},
    			on:{
    				 slideChange: function(){
    				 	let index = this.activeIndex-1;
    				 	if(index==5){index=0;}
    				 	console.log(index)
    					  $(".circle li").eq(index).stop().animate({width:"0.25rem"},400).siblings().stop().animate({width:"0.1rem"},400)
   					 },
    			}
			})
			

		}
	});
	

});