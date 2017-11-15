function getStyle(obj,attr){
				if(obj.currentStyle){
					return obj.currentStyle[attr];
				}
				return getComputedStyle(obj, null)[attr]
			}
			//定义一个运动封装函数sportive,传入三个参数，obj=>运动封装的对象，json=>以对象的形式传入想要属性和属性值，（属性值是对象要达到的目标值），fn=>是可以再传一个函数为参数，让obj的json中的对象执行完再执行fn。
			function sportive(obj,json,fn){
				var cont = false;
				clearInterval(obj.timer);
				obj.timer=setInterval(function(){
					var count1=0;	//定义两个计数器
					var count2=0;		
					
					//用for in 来获取json中的attr的属性的属性值，
					for(var attr in json){
						count1++;//for in 执行的话就++，也就是for in 里的若没有变量也就是没有定义;
						//判断for in 中的attr有没有opacity属性
						if(attr=="opacity"){
							//若有opacity属性,则定义yzhi获取obj对象本来的attr（）
							var yzhi=Math.round(getStyle(obj,attr)*100);//若attr 是opacity那么，他的值为获取的对象的opacity*100
						}else{
							var yzhi=parseInt(getStyle(obj,attr));//若attr不为opacity，那么直接获取对象的属性值。
						}
						//用josn中的attr值（也就是目标值）减去对象的原有值yzhi，也就是原有值到目标值之间的值，除以10是把之间的值除以10，（10次就是你想让他这个定时器执行10次就能达到目标，10可以自己随便定义）,也就是除以时相当于iSpeed为中间值的10分之一，
						var iSpeed=(json[attr]-yzhi)/10;
						
						//用三目运算符判断iSpeed>0? 大于零让他向上取整，小于零让他向下取整
						iSpeed=iSpeed>0? Math.ceil(iSpeed):Math.floor(iSpeed);
						//console.log(yzhi,iSpeed);
						if(attr=="opacity"){
							//如果attr是opacity，那么设置obj对象的style的opacity的属性为：yzhi加上中间值ispeed的10分之一，因为是opacity  所以除以100；第一个兼容火狐
							obj.style.opacity=(yzhi+iSpeed)/100;
							obj.style.filter="alpha(opacity="+(yzhi+iSpeed)+")"
						}else{
							//如果attr不是opacity，那么取正常的值带像素单位
							obj.style[attr]=yzhi+iSpeed+"px";
						}
						//若原有的值（原有的值在定时器上在不断增长或减少），等于json[attr]（设置的目标的值，也就是边界）
						if(yzhi==json[attr]){
//							//那么清楚定时器
//							clearInterval(obj.timer)
							count2++//当到达边界是 count2++；
						}
					}
					//当多条josn传进去的值都执行完了，（也就是count1，count2都加加了）
					if(count1==count2){
						//当多条条件都达到了目标值，那么清楚定时器
						clearInterval(obj.timer);
						//function sportive(obj,json,fn){fn=>是可以再传一个函数为参数，让obj的json中的对象执行完再执行fn。(语句都执行完了，那么就可以执行后面传的第三个参数fn了)
							if(fn){//若fn可以获取（if（fn）若传入参数有fn的，那么if(fn==true)则执行if的语句，若没有传入参数fn，那么if(fn==false),所以就不执行了）
								fn();
							}
					}
				},30)
				
			}