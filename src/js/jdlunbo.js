function jdlunbo(className) {
  var box = document.getElementsByClassName(className)[0];
  var rightBtn = box.querySelector('.rightBtn');
  var item = box.querySelector('.item');
  var lis = item.getElementsByTagName('li');

  var page = box.querySelector('.page');
  //小圆点
  var pages = page.getElementsByTagName('li');
  var bgs = document.getElementsByClassName('nav-1')[0];
  var bgs1 = document.getElementsByClassName('nav-1')[1];
  var bgs2 = document.getElementsByClassName('lunbo-wrap')[0];
  console.log(rightBtn);

  var pageNum = 0; //控制显示的图片
  showPage(); //

  pageEvent();

  rightBtn.onclick = function() {
    playNext();
  }

  var leftBtn = box.querySelector('.leftBtn');
  leftBtn.onclick = function() {
    playPrevious();
  }

  //自动播放
  var autoPlay = setInterval(function() {
    //rightBtn.onclick();
    playNext();
  }, 2000);

  box.onmouseenter = function() {
    clearInterval(autoPlay)
  }
  box.onmouseleave = function() {
    autoPlay = setInterval(function() {
      //rightBtn.onclick();
      playNext();
    }, 2000)
  }

  //小圆点的点击
  function pageEvent() {
    for (var i = 0; i < pages.length; i++) {
      pages[i].index = i;

      pages[i].onmouseenter = function() {

        animate(lis[pageNum], {
          opacity: 0
        });

        console.log(this);
        pageNum = this.index;
        showPage();
        //
        //						for(var j=0;j<lis.length;j++){
        //							//lis[j]
        //							animate(lis[j],{opacity:0});
        //
        //						}
        animate(lis[pageNum], {
          opacity: 1
        });

      }
    }
  }

  //			pages[pageNum].style.background = 'white';

  function playNext() {

    //0
    animate(lis[pageNum], {
      opacity: 0
    });
    pageNum++;

    if (pageNum == lis.length) {
      pageNum = 0;
    }
    animate(lis[pageNum], {
      opacity: 1
    });

    showPage();
    //
    //				for(var i=0;i<pages.length;i++){
    //					pages[i].style.background = 'red'
    //				}
    //				pages[pageNum].style.background = 'white'

  }

  function playPrevious() {
    animate(lis[pageNum], {
      opacity: 0
    });
    pageNum--;
    if (pageNum == -1) {
      pageNum = lis.length - 1;
    }
    animate(lis[pageNum], {
      opacity: 1
    });

    showPage();
  }


  function showPage() {

    var arrbgs = new Array("#F14764", "#7600C4", "#FF627A", "#7D47E5", "#D7203F", "#B02FEE", "#2F023D", "#2E023D");
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.background = '#999999';

    }
    pages[pageNum].style.background = 'white';
    bgs.style.background = arrbgs[pageNum];
    bgs1.style.background = arrbgs[pageNum];
    bgs2.style.background = arrbgs[pageNum];
  }

}
