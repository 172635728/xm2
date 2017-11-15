window.onload = function(){
console.log('1')
jdlunbo('mybox');
				jdlunbo('box');
var banner=document.getElementById("koubeilunbo");
			var oul=document.getElementsByClassName('kbul')[0];
			var lis=document.getElementsByClassName('kbli');
			var oul2=document.getElementsByClassName('kbbtn')[0];
			var lis2=document.getElementsByClassName('kblist');
			
			var liwidth=lis[0].offsetWidth;
			console.log(lis.length,lis2.length)
//			oul.appendChild(lis[0].cloneNode(true));
//			oul.style.width=liwidth*lis.length+"px";
			var num=0;
			
			var timer=setInterval(function(){
				num++;
				move();
			},3000)
			
			banner.onmouseenter=function(){
				clearInterval(timer);
			}
			banner.onmouseleave=function(){
				clearInterval(timer);
				timer=setInterval(function(){
					num++;
					move();
				},3000)
			}
			var leftbtn=document.getElementsByClassName("prove")[0];
			var rightbtn=document.getElementsByClassName("next")[0];
			leftbtn.onclick=function(){
			
				num--;
				move();
			}
			rightbtn.onclick=function(){
			
				num++;
				move();
			}
			
			for(let j=0;j<lis2.length;j++){
				lis2[j].onclick=function(){
					num=j;
					move();
				}
			}
			
			function move(){
				
				//判断num的值，当num的值到达最后一个值时。让它等于1
				if(num==lis.length){
					num=1;
					oul.style.left=0+"px"
				}
				//这个是判断左边的点击时间当num为-1时转换
				if(num==-1){
					oul.style.left=-(lis.length-1)*liwidth+"px"
					num=lis.length-2;
					
				}
				
				//首先让所有的小点清空classname
				for(var j=0;j<lis2.length;j++){
					lis2[j].className="";
				}
				//然后判断num的值到图片组的最后一个时（num==lis.length-1 ）也可以写成（num==lis2.length）的，我的lis是图片的数组，lis2是小点的长度，以为图片比小点多一个，所以用图片组的长度判断要-1，用小点的长度不用-1
				if(num==lis.length){
					//若num到达了最后，那么小点组的第一个li显示样式。
					lis2[0].style.width=""
				}else{
					//否则lis2【num】照常显示当前的样式
				
					//lis2[num].className="yuanshi"
				}
				
				
				
				sportive(oul,{"left":-liwidth*num})
			}

}
