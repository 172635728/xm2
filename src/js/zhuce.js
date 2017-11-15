$(function(){

function checkisPhone(phone) {
  var re =/^1[3|4|5|8][0-9]\d{4,8}$/
  return re.test(phone);
}
$('#nickname').css("color","#999");
$('#phone').keyup(function(){
	if(checkisPhone(this.value)==false){
		$('#phonemsg_div').css("display","block");
		$('#phone').css("color","#ff6f4a");
		
	}else{
		$('#phonemsg_div').css("display","none");
		$('#phone').css("color","#999");
	}




})


function checkIsPassword(pw) {
  if (pw.length > 0) {
    var re = /[\u2E80-\u9FFF]+/;
    return !re.test(pw);
  } else {
    return false;
  }
}
function checkPasswordIsEqul(pd1,pd2) {
            return pd1 == pd2;
}

function checkPasswordStrong(pd) {
            console.log(2)
            //显示的内容  弱 中等
            var pwd_level_tip = document.getElementById('pwd_level_tip');
            var pwd_level = document.getElementById('pwd_level')
            if(pd.length == 0){
                pwd_level_tip.children[0].style.visibility = 'hidden'
                pwd_level_tip.children[1].style.visibility = 'hidden'
                pwd_level_tip.children[2].style.visibility = 'hidden'

                pwd_level.children[0].style.background = ''
                pwd_level.children[1].style.background = ''
                pwd_level.children[2].style.background = ''
                return;
            }

            var str = pd;
            //console.log(str)
            //设定三个标准，表示是否包含数字、字母、特殊符号
            var hasNum = false;
            var hasChar = false;
            var hasSign = false;

            for(var i=0;i<str.length;i++){

                var char = str[i];//拿到每一个字符
                if(char >= '0' && char <= '9'){//说明出现了数字
                    hasNum = true;
                }else if( char >= 'a' && char <='z'){
                    hasChar = true;
                }else if( char >= 'A' && char <='Z'){
                    hasChar = true;
                }else {
                    hasSign = true;
                }

            }
            console.log(hasChar)


            if(hasSign ){
                //强
                pwd_level_tip.children[0].style.visibility = 'hidden'
                pwd_level_tip.children[1].style.visibility = 'hidden'
                pwd_level_tip.children[2].style.visibility = 'visible'


                pwd_level.children[0].style.background = '#FC9720'
                pwd_level.children[1].style.background = '#FC9720'
                pwd_level.children[2].style.background = '#FC9720'


            }else if(hasNum && hasChar){
                //中等
                pwd_level_tip.children[0].style.visibility = 'hidden'
                pwd_level_tip.children[1].style.visibility = 'visible'
                pwd_level_tip.children[2].style.visibility = 'hidden'


                pwd_level.children[0].style.background = '#FC9720'
                pwd_level.children[1].style.background = '#FC9720'
                pwd_level.children[2].style.background = '#EEEEEE'

            }else {
                //弱
                pwd_level_tip.children[0].style.visibility = 'visible'
                pwd_level_tip.children[1].style.visibility = 'hidden'
                pwd_level_tip.children[2].style.visibility = 'hidden'


                pwd_level.children[0].style.background = '#FC9720'
                pwd_level.children[1].style.background = '#EEEEEE'
                pwd_level.children[2].style.background = '#EEEEEE'
            }
        }

$("#passwordag").keyup(function(){

if(checkPasswordIsEqul($("#passwordag").val(),$("#passwordr").val())){
	
	$("#passwordag_msg_div").css("display","none");
	$('#passwordag').css("color","#999");
	$('#passwordr').css("color","#999");
}else{
	$('#passwordag').css("color","#ff6f4a");
	$('#passwordr').css("color","#ff6f4a");
	$("#passwordag_msg_div").css("display","block");
}
var isShouji = $('#phonemsg_div').css("display")=="none";
var isYanzheng = $('#passwordag_msg_div').css("display")=="none";
var isMima = $('#msgcode_msg_div').css("display")=="none";
console.log(isShouji);
console.log(isYanzheng);
console.log(isMima);

if(isShouji&&isYanzheng&&isMima){
	console.log("可以注册了");
	$('#registerbtn').css("background","#33CB98")

}


})

$("#passwordr").keyup(function(){

	$("#panduan").css("display","block");
	checkPasswordStrong($("#passwordr").val());


})
$('#hqbtn').click(function(){
var suiji = Math.random()*9000+Math.random()*100+Math.random()*10;
suiji = ~~suiji;

$('#huoqu').text(suiji)

})

$('#regphonecode').keyup(function(){
console.log($('#huoqu').text())
if(checkPasswordIsEqul($('#regphonecode').val(),$('#huoqu').text())){
	$('#msgcode_msg_div').css("display","none")
		$('#regphonecode').css("color","#999");
}else{
	$('#msgcode_msg_div').css("display","block")
}


})

//--------------
})
