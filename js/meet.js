$(function(){
	var str = "";
	$.ajax({
		type:"get",
		url:"https://www.fastmock.site/mock/d65b8d91bf598002ddd37fcb7a92c43a/api/ph",
		success:function(data){
			for(var i in data.data.list){
				str +=`
				<div class="swiper-slide">
						<img src='${data.data.list[i].pic}'/>
				</div>
				`
			}
			$(".swiper-wrapper").append(str);
			
			
			var mySwiper = new Swiper('.swiper-container',{
    			loop : true,
  			}) 
  			
			$(".icon-sanjiaoxing").on('click', function() {
		        var index = $(".swiper-slide-active").index();
		        console.log(index);
		        if(index==6){
		        	index=1;
		        	mySwiper.slideNext();
		        }else{
		        	mySwiper.slideTo(index+1);
		        }
		        
		    })
		}
	});
})
     
