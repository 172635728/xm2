$(function() {
var attributeCount = function(obj) {
        var count = 0;
        for(var i in obj) {
            if(obj.hasOwnProperty(i)) {  // 建议加上判断,如果没有扩展对象属性可以不加
                count++;
            }
        }
        return count;
    }

//----------
				$.get("../json/list.json", function(data) {
					var str = getCookie('list');
					var arr = JSON.parse(str);
					
					console.log(arr);
					
					
					console.log(arr)
					for(var i = 0;i < arr.length;i++){
						var chong =[]
						 var res = [];
						 var json = {};
						 for(var i = 0; i < arr.length; i++){
						  if(!json[arr[i]]){
						   res.push(arr[i]);
						   json[arr[i]] = 1;
						  }else{
						  	json[arr[i]]+=1;
						  }
						 }
						 											
					}
					console.log(res);
					var ress = [];
					for(var m = 0;m<res.length;m++){
						var ids = parseInt(res[m]);
						ress.push(ids)
						
					}//字符转数组
					console.log(ress.length)
					console.log(json[arr[3]]);
					var htmll = "";
					for(var j = 0 ; j < ress.length;j++){
						htmll += "<li><input type='checkbox' checked='checked'><img src='" + data[ress[j]].src + "'><span>" + data[ress[j]].title + "</span><span id='"+'zengjia'+j+"'><em class='minus'>-</em><input class='nubbb'  type='' value='" + json[arr[j]] + "'><em class='plus'>+</em></span><b>" + data[ress[j]].price2 + "/件</b></li>"
					
					
					$("#cart").html(htmll);
					
				
				
				}
				
					
					$(".plus").on("click", function() {
						console.log($('.plus').index($(this)));
						var xb = $('.plus').index($(this));
						
						var num =  $('.nubbb').eq(xb).val();
						console.log(num);
						num++;
						console.log(num+'f');
						$('.nubbb').eq(xb).val(num);
						//$('.nubbb').eq(xb).val()
					})
					
					$(".minus").on("click", function() {
						console.log($('.minus').index($(this)));
						var xb = $('.minus').index($(this));
						
						var num =  $('.nubbb').eq(xb).val();
						console.log(num);
						if($('.nubbb').eq(xb).val()>0){
						num--;
						console.log(num+'f');
						$('.nubbb').eq(xb).val(num);
					
					
					}
						
						//$('.nubbb').eq(xb).val()
					})
					console.log($('.nubbb').eq(0).val())
					console.log(ress);
					var zongshu = 0;
					for(var i = 0 ; i < ress.length;i++){
						
						zongshu+=~~$('.nubbb').eq(i).val();
						
					}
					console.log(zongshu);
					$('#zs').text(zongshu);
				
				
				
				
				//-------------------------
				})
				//----------------------
				$("#sett").click(function(){
					$(".worn-wrap").css("display","block")
				})
				$("#close").click(function(){
					$(".worn-wrap").css("display","none")
				})
			












//-----------------------------
})