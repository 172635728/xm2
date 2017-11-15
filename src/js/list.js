$(function(){


$.getJSON("../json/list.json",function(data){
console.log(data[0].title)
//$('.ggimg').eq(0).attr('src',data[0].src)
for(var i = 0 ; i<16;i++){
	$('.ggimg').eq(i).attr('src',data[i].src);
	$('.gtit').eq(i).text(data[i].title);
	$('.gprice1').eq(i).text(data[i].price1);
	$('.gprice2').eq(i).text(data[i].price2);

}	
//	if("undefined" != typeof arr){
//			if(arr.length>0){
//				var str = getCookie('list');
//				var arr = JSON.parse(str);
//			}
//		}
	//console.log(arr.length+'panduan')
	if(getCookie("list")){
			var arr=JSON.parse(getCookie("list"));
		}else{
			var arr=new Array();
		}		
	$(".gouwuche").on("click",function(){
								var id = $(this).attr("data-id");
								
								
								arr.push(id);
								console.log(arr);
								setCookie('list',JSON.stringify(arr),7);
								
							})

							
						

//------
})















//--------------------------------
})
