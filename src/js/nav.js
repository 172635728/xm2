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
   $('.list1').eq(0).mouseenter(function() {
     $('.nav-gouliang').eq(0).css('display', 'block').css('background', '#fff').css('z-index', '999');
     console.log(3);
   });
   $('.nav-gouliang').eq(0).mouseenter(function() {
     $('.nav-gouliang').eq(0).show().css('background', '#fff');
     console.log(2);
   });
   $('.nav-gouliang').eq(0).mouseleave(function() {
     $('.nav-gouliang').eq(0).hide();
     console.log(1);
   });








 })
