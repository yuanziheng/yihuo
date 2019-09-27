$(function(){
	var section  = document.querySelectorAll("section")[0];
	var oUl = section.children[0];
	var str = "";
	$.ajax({
		type:"get",
		url:"https://www.fastmock.site/mock/d65b8d91bf598002ddd37fcb7a92c43a/api/private-class",
		success:function(data){
			for(var i in data.data.list){
				str += `
						<li>	
							<img src = '${data.data.list[i].image}'>
							<p>
							<span class='title'>${data.data.list[i].title}</span>	
							<span class='subtitle'>${data.data.list[i].subtitle}</span>	
							</p>
							<p>
							<span class='name'>导师 : ${data.data.list[i].name}</span>	
							<span class='number'>${data.data.list[i].number}人已购</span>	
							</p>
						</li>
						`;
			}
			oUl.innerHTML = str;
		}
	});
})