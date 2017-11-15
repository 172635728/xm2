window.onload = function(){
var bannerz=document.getElementById("koubeilunbo");
			var oulz=document.getElementsByClassName('kbul')[0];
			var lisz=document.getElementsByClassName('kbli');
			var oul2z=document.getElementsByClassName('kbbtn')[0];
			var lis2z=document.getElementsByClassName('kblist');
			var liwidthz=lisz[0].offsetWidth;
			oulz.appendChild(lisz[0].cloneNode(true));
			oulz.style.width=liwidthz*lisz.length+"px";
			var numz=0;
			
			var timerz=setInterval(function(){
				numz++;
				movez();
			},3000)
			
			bannerz.onmouseenter=function(){
				clearInterval(timerz);
			}
			bannerz.onmouseleave=function(){
				clearInterval(timerz);
				timerz=setInterval(function(){
					numz++;
					movez();
				},3000)
			}
			var leftbtnz=document.getElementsByClassName("provez")[0];
			var rightbtnz=document.getElementsByClassName("nextz")[0];
			leftbtnz.onclick=function(){
			
				numz--;
				movez();
			}
			rightbtnz.onclick=function(){
			
				numz++;
				movez();
			}
			
			for(let j=0;j<lis2z.length;j++){
				lis2z[j].onclick=function(){
					numz=j;
					movez();
				}
			}
			
			function movez(){
				
				//判断numz的值，当numz的值到达最后一个值时。让它等于1
				if(numz==lisz.length){
					numz=1;
					oulz.style.left=0+"px"
				}
				//这个是判断左边的点击时间当numz为-1时转换
				if(numz==-1){
					oulz.style.left=-(lisz.length-1)*liwidthz+"px"
					numz=lisz.length-2;
					
				}
				
				//首先让所有的小点清空classname
				for(var j=0;j<lis2z.length;j++){
					lis2z[j].className="";
				}
				//然后判断numz的值到图片组的最后一个时（numz==lis.length-1 ）也可以写成（numz==lis2z.length）的，我的lis是图片的数组，lis2z是小点的长度，以为图片比小点多一个，所以用图片组的长度判断要-1，用小点的长度不用-1
				if(numz==lisz.length-1){
					//若numz到达了最后，那么小点组的第一个li显示样式。
					lis2z[0].className="licolor"
				}else{
					//否则lis2z【numz】照常显示当前的样式
					lis2z[numz].className="licolor"
				}
				
				
				
				sportive(oulz,{"left":-liwidthz*numz})
			}








}