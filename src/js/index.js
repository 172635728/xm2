 $(function() {
   $('.nav-1').eq(0).mouseenter(function() {
     $('.nav-sp').eq(0).hide();
     $('.nav-dog').eq(0).show();
     $('.nav-1').eq(0).css("background", "#fff")

   });

   $('.nav-1').eq(1).mouseenter(function() {
     $('.nav-dog').eq(0).hide();
     $('.nav-sp').eq(0).show();
     $('.nav-1').eq(1).css("background", "#fff")

   });
  //NAV左侧导航

   for(var m = 0 ; m <= 6; m++){
  	(function(i){  //自执行函数实时把i传入e
                 $('.list1').eq(i).mouseenter(function() {
     $('.nav-gouliang').eq(i).css('display', 'block').css('background', '#fff').css('z-index', '999');

   });
   $('.list1').eq(i).mouseleave(function() {
     $('.nav-gouliang').eq(i).hide();

   });
   $('.nav-gouliang').eq(i).mouseenter(function() {
     $('.nav-gouliang').eq(i).show().css('background', '#fff');

   });
   $('.nav-gouliang').eq(i).mouseleave(function() {
     $('.nav-gouliang').eq(i).hide();

   });
            })(m)    
   }
   //以上是二级导航
$.getJSON("../json/everyday.json",function(data){         
           for (var j = 0; j < 7; j++) {
            (function(e){  //自执行函数实时把i传入e
              	$('.over').eq(e).mouseenter(function(){
              		for (var i = 0; i < 5; i++) {           
                $('.zom').eq(i).attr('src',data[e].everprice[i].src);
                $('.goodsDes').eq(i).text(data[e].everprice[i].title);
                $('.price1').eq(i).text(data[e].everprice[i].price1);
                 $('.price2').eq(i).text(data[e].everprice[i].price2);
            } 
              	})               
            })(j)};    
			
			for (var i = 0; i < 5; i++) {           
                $('.zom').eq(i).attr('src',data[0].everprice[i].src);
                $('.goodsDes').eq(i).text(data[0].everprice[i].title);
                $('.price1').eq(i).text(data[0].everprice[i].price1);
                 $('.price2').eq(i).text(data[0].everprice[i].price2);
            } 			
})

$.getJSON("../json/main.json",function(data){
	for(var k =0; k<5;k++){
		(function(e){
			 $('.mainbtn').eq(e).mouseenter(function(){
			 	for(var j = 0;j<5;j++){
			 		$('.mainbtn').eq(j).css({"border-bottom":"1px solid #459d36",
			 		"border-right":"#fff",
			 		"border-left":"1px solid #459d36",
			 		"border-top":"3px solid #ccc",
			 		"margin-left":"0"})			 		 	
			 	}
			 	$('.mainbtn').eq(e).css({"border-bottom":"1px solid #fff",
			 		"border-right":"1px solid #459d36",
			 		"border-left":"1px solid #459d36",
			 		"border-top":"3px solid #459d36",
			 		"margin-left":"-2px"})
			 	
			 	
			 	if(e==0){
			 		$('.mr-page1').eq(0).show();
			 		$('.mr-page2').eq(0).hide();
			 	}else{
			 	$('.mr-page1').eq(0).hide();
			 	$('.mr-page2').eq(0).show();
			 	for (var i = 0; i < 9; i++) {           
                $('.main-img').eq(i).attr('src',data[e].mainprice[i].src);
                $('.mlist').eq(i).text(data[e].mainprice[i].title);
                $('.main-price').eq(i).text(data[e].mainprice[i].price1);
                 }//选项卡 
	 	
			 	}
              		
              	}) 
		
		
		
		})(k)
	
	
	}    
})	
//	for (var i = 0; i < 8; i++) {           
//              $('.main-img').eq(i).attr('src',data[0].mainprice[i].src);
//              $('.mlist').eq(i).text(data[0].mainprice[i].title);
//              $('.main-price').eq(i).text(data[0].mainprice[i].price1);
//               
//          } 	
$.getJSON("../json/main.json",function(data){
	for(var k =0; k<5;k++){
		(function(e){
			 $('.mainbtn1').eq(e).mouseenter(function(){
			 	console.log(e)
			 	for(var j = 0;j<5;j++){
			 		$('.mainbtn1').eq(j).css({"border-bottom":"1px solid #459d36",
			 		"border-right":"#fff",
			 		"border-left":"1px solid #459d36",
			 		"border-top":"3px solid #ccc",
			 		"margin-left":"0"})			 		 	
			 	}
			 	$('.mainbtn1').eq(e).css({"border-bottom":"1px solid #fff",
			 		"border-right":"1px solid #459d36",
			 		"border-left":"1px solid #459d36",
			 		"border-top":"3px solid #459d36",
			 		"margin-left":"-2px"})
			 	
			 	
			 	if(e==0){
			 		$('.mr-page11').eq(0).show();
			 		$('.mr-page21').eq(0).hide();
			 	}else{
			 	$('.mr-page11').eq(0).hide();
			 	$('.mr-page21').eq(0).show();
			 	for (var i = 0; i < 9; i++) {           
                $('.main-img1').eq(i).attr('src',data[e].mainprice[i].src);
                $('.mlist1').eq(i).text(data[e].mainprice[i].title);
                $('.main-price1').eq(i).text(data[e].mainprice[i].price1);
                 }//选项卡 
	 	
			 	}
              		
              	}) 
		
		
		
		})(k)
	
	
	}    
})	

//------------------------
$.getJSON("../json/main.json",function(data){
	for(var k =0; k<5;k++){
		(function(e){
			 $('.mainbtn2').eq(e).mouseenter(function(){
			 	console.log(e)
			 	for(var j = 0;j<5;j++){
			 		$('.mainbtn2').eq(j).css({"border-bottom":"1px solid #459d36",
			 		"border-right":"#fff",
			 		"border-left":"1px solid #459d36",
			 		"border-top":"3px solid #ccc",
			 		"margin-left":"0"})			 		 	
			 	}
			 	$('.mainbtn2').eq(e).css({"border-bottom":"1px solid #fff",
			 		"border-right":"1px solid #459d36",
			 		"border-left":"1px solid #459d36",
			 		"border-top":"3px solid #459d36",
			 		"margin-left":"-2px"})
			 	
			 	
			 	if(e==0){
			 		$('.mr-page12').eq(0).show();
			 		$('.mr-page22').eq(0).hide();
			 	}else{
			 	$('.mr-page12').eq(0).hide();
			 	$('.mr-page22').eq(0).show();
			 	for (var i = 0; i < 9; i++) {           
                $('.main-img2').eq(i).attr('src',data[e].mainprice[i].src);
                $('.mlist2').eq(i).text(data[e].mainprice[i].title);
                $('.main-price2').eq(i).text(data[e].mainprice[i].price1);
                 }//选项卡 
	 	
			 	}
              		
              	}) 
		
		
		
		})(k)
	
	
	}    
})	

//------------------------
$.getJSON("../json/main.json",function(data){
	for(var k =0; k<5;k++){
		(function(e){
			 $('.mainbtn3').eq(e).mouseenter(function(){
			 	console.log(e)
			 	for(var j = 0;j<5;j++){
			 		$('.mainbtn3').eq(j).css({"border-bottom":"1px solid #459d36",
			 		"border-right":"#fff",
			 		"border-left":"1px solid #459d36",
			 		"border-top":"3px solid #ccc",
			 		"margin-left":"0"})			 		 	
			 	}
			 	$('.mainbtn3').eq(e).css({"border-bottom":"1px solid #fff",
			 		"border-right":"1px solid #459d36",
			 		"border-left":"1px solid #459d36",
			 		"border-top":"3px solid #459d36",
			 		"margin-left":"-2px"})
			 	
			 	
			 	if(e==0){
			 		$('.mr-page13').eq(0).show();
			 		$('.mr-page23').eq(0).hide();
			 	}else{
			 	$('.mr-page13').eq(0).hide();
			 	$('.mr-page23').eq(0).show();
			 	for (var i = 0; i < 9; i++) {           
                $('.main-img3').eq(i).attr('src',data[e].mainprice[i].src);
                $('.mlist3').eq(i).text(data[e].mainprice[i].title);
                $('.main-price3').eq(i).text(data[e].mainprice[i].price1);
                 }//选项卡 
	 	
			 	}
              		
              	}) 
		
		
		
		})(k)
	
	
	}    
})	



//------------------------
$.getJSON("../json/main.json",function(data){
	for(var k =0; k<5;k++){
		(function(e){
			 $('.mainbtn4').eq(e).mouseenter(function(){
			 	console.log(e)
			 	for(var j = 0;j<5;j++){
			 		$('.mainbtn4').eq(j).css({"border-bottom":"1px solid #459d36",
			 		"border-right":"#fff",
			 		"border-left":"1px solid #459d36",
			 		"border-top":"3px solid #ccc",
			 		"margin-left":"0"})			 		 	
			 	}
			 	$('.mainbtn4').eq(e).css({"border-bottom":"1px solid #fff",
			 		"border-right":"1px solid #459d36",
			 		"border-left":"1px solid #459d36",
			 		"border-top":"3px solid #459d36",
			 		"margin-left":"-2px"})
			 	
			 	
			 	if(e==0){
			 		$('.mr-page14').eq(0).show();
			 		$('.mr-page24').eq(0).hide();
			 	}else{
			 	$('.mr-page14').eq(0).hide();
			 	$('.mr-page24').eq(0).show();
			 	for (var i = 0; i < 9; i++) {           
                $('.main-img4').eq(i).attr('src',data[e].mainprice[i].src);
                $('.mlist4').eq(i).text(data[e].mainprice[i].title);
                $('.main-price4').eq(i).text(data[e].mainprice[i].price1);
                 }//选项卡 
	 	
			 	}
              		
              	}) 
		
		
		
		})(k)
	
	
	}    
})	



//------------------------
$.getJSON("../json/main.json",function(data){
	for(var k =0; k<5;k++){
		(function(e){
			 $('.mainbtn5').eq(e).mouseenter(function(){
			 	console.log(e)
			 	for(var j = 0;j<5;j++){
			 		$('.mainbtn5').eq(j).css({"border-bottom":"1px solid #459d36",
			 		"border-right":"#fff",
			 		"border-left":"1px solid #459d36",
			 		"border-top":"3px solid #ccc",
			 		"margin-left":"0"})			 		 	
			 	}
			 	$('.mainbtn5').eq(e).css({"border-bottom":"1px solid #fff",
			 		"border-right":"1px solid #459d36",
			 		"border-left":"1px solid #459d36",
			 		"border-top":"3px solid #459d36",
			 		"margin-left":"-2px"})
			 	
			 	
			 	if(e==0){
			 		$('.mr-page15').eq(0).show();
			 		$('.mr-page25').eq(0).hide();
			 	}else{
			 	$('.mr-page15').eq(0).hide();
			 	$('.mr-page25').eq(0).show();
			 	for (var i = 0; i < 9; i++) {           
                $('.main-img5').eq(i).attr('src',data[e].mainprice[i].src);
                $('.mlist5').eq(i).text(data[e].mainprice[i].title);
                $('.main-price5').eq(i).text(data[e].mainprice[i].price1);
                 }//选项卡 
	 	
			 	}
              		
              	}) 
		
		
		
		})(k)
	
	
	}    
})	
//-------------------------------------lunbotwo
var banner=document.getElementById("lunbotwo1111");
		var oul1=document.getElementsByClassName('lunbotwo')[0];
		var lis1=document.getElementsByClassName('lblist');
		var oul2=document.getElementsByClassName('lbbtn')[0];
		var lis2=document.getElementsByClassName('reqq');
		var kl=lis1[0].cloneNode(true);
		oul1.appendChild(kl);
		var kl1=lis1[1].cloneNode(true);
		oul1.appendChild(kl1);
		lis2[0].style.color="#000";
		var liheight=151;
		oul1.style.height=liheight*lis1.length+"px";
		var num=0;
		var timer=setInterval(function(){
			num++;
			move();
		},3000)
		
		for(let j=0;j<lis2.length;j++){
			lis2[j].onmouseenter=function(){
				clearInterval(timer);
				num=j;
				move()
			}
		}
		
		
		var bottombtn=document.getElementsByClassName("prove")[0];
		var topbtn=document.getElementsByClassName("next")[0];
		
		topbtn.onclick=function(){
			num++;
			move();
		}
		bottombtn.onclick=function(){
			num--;
			move();
		}
		
		function move(){
			if(num==lis1.length){
				num=1;
				oul1.style.top=0+"px";
			}
			if(num==-1){
				oul1.style.top=-liheight*(lis1.length-1)+"px";
				num=length-2
			}
			
			for(var i=0;i<lis2.length;i++){
				lis2[i].style.color="";
			}
			if(num==lis2.length){
				lis2[0].style.color="#000";
			}else{
			
			}
			
			
			sportive(oul1,{"top":-liheight*num})
		}
//--------------------------------口碑轮播
var bannerx=document.getElementById("shulunbo");
		var oul1x=document.getElementsByClassName('lunboc')[0];
		var lis1x=document.getElementsByClassName('lunbocli');
		var oul2x=document.getElementsByClassName('lbbtnx')[0];
		var lis2x=document.getElementsByClassName('reqqx');
		var klx=lis1x[0].cloneNode(true);
		oul1x.appendChild(klx);
		
		
		var liheightx=135;
		oul1x.style.height=liheightx*lis1x.length+"px";
		var numx=0;
		var timerx=setInterval(function(){
			numx++;
			movex();
		},3000)
		
//		for(let j=0;j<lis2.length;j++){
//			lis2x[j].onmouseenter=function(){
//				clearInterval(timerx);
//				num=jx;
//				movex()
//			}
//		}
		bannerx.onmouseenter=function(){
			clearInterval(timerx);
		}
		bannerx.onmouseout=function(){
			clearInterval(timerx);
			timerx=setInterval(function(){
				numx++;
				movex();
			},8000)
		}
		var bottombtnx=document.getElementsByClassName("provex")[0];
		var topbtnx=document.getElementsByClassName("nextx")[0];
		
//		topbtnx.onclick=function(){
//			numx++;
//			movex();
//		}
//		bottombtnx.onclick=function(){
//			numx--;
//			movex();
//		}
		
		function movex(){
			if(num==lis1x.length){
				numx=1;
				oul1x.style.top=0+"px";
			}
			if(numx==-1){
				oul1x.style.top=-liheightx*(lis1x.length-1)+"px";
				numx=length-2
			}
			
			for(var i=0;i<lis2.length;i++){
//				lis2x[i].style.color="";
			}
			if(numx==lis2x.length){
//				lis2x[0].style.color="#000";
			}else{
//				lis2x[num].style.color="#000";
			}
			
			
			sportive(oul1x,{"top":-liheightx*numx})
		}

//-----------------评价竖轮播
//--------------------
 })
//document.body.contentEditable='true';
