$(function(){
	var str1 = "";
	var str2 = "";
	$.ajax({
		type:"get",
		url:"https://www.fastmock.site/mock/d65b8d91bf598002ddd37fcb7a92c43a/api/comm-concern",
		success:function(data){
			for(var i in data.data.list){
				str1 +=`
						<div class="item">
							<img src='${data.data.list[i].person}'/>
							<p>${data.data.list[i].name}</p>
							<span>${data.data.list[i].subtitle}</span>
							<label class='iconfont icon-hao'></label>
						</div>
				`
			}
			$(".items").append(str1);
			$("label").on('click',function(){
				if($(this).hasClass("icon-hao")){
					$(this).removeClass("icon-hao").addClass("icon-duihao");
				}
				else{
					$(this).removeClass("icon-duihao").addClass("icon-hao");
				}
				
			})
		}
	});
	
	//news
	$.ajax({
		type:"get",
		url:"https://www.fastmock.site/mock/d65b8d91bf598002ddd37fcb7a92c43a/api/new",
		success:function(data){
			for(var i in data.data.list){
				str2 +=`
						<div class="new">
							<img src='${data.data.list[i].person}' class='head-pic'/>
							<p>${data.data.list[i].name}</p>
							<p>${data.data.list[i].datatime}</p>
							<img src='${data.data.list[i].new}'>
						</div>
				`
			}
			$("section .news").append(str2);
		}
	});
})

