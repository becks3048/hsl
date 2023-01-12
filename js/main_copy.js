$(function () {
  //*********여기부터
  // var doubleClickFlag = false;
  // function doubleClickCheck(){
  //     if(doubleClickFlag){
  //         return doubleClickFlag; //true
  //     }else{
  //         doubleClickFlag = true;
  //         return false;
  //     }
  // }
  //*********여기까지

  //배너 한개의 너비 값
  let liWidth = $(".main-banner > li").outerWidth();


  //오른쪽버튼
  $(".mb-next").on("click", 4000, function (e) {
    let ani = $(".main-banner").is(":animated"); /* animated */
    if (ani === false) {

      //*********여기부터
      // if(doubleClickCheck()) return;
      // setTimeout(function(){
      //     doubleClickFlag = false;
      // },4000); 
      //*********여기까지

      $(".main-banner").stop().animate({
        "margin-left": -liWidth
      }, 1000, function (e) {
        // $(".main-banner>li:even").stop().animate({
        //   "margin-top": 50
        // }, 500)
        // $(".main-banner>li:odd").stop().animate({
        //   "margin-top": 0
        // }, 500)
        //첫번째 배너를 잘라서 마지막으로 옮기기
        let objFirst = $(".main-banner > li:first");
        let obj = objFirst.clone();
        objFirst.remove();
        $(".main-banner").append(obj).css("margin-left", 0);
      });

    }
  });



  //왼쪽버튼
  $(".mb-prev").on("click", 4000, function (e) {

    //*********여기부터
    //  if(doubleClickCheck()) return;
    //  setTimeout(function(){
    //      doubleClickFlag = false;
    //  },2000); //3000+1500
    //*********여기까지

    //배너의 끝번째를 복사하여 첫번째로 옮기기

    let ani = $(".main-banner").is(":animated");
    if (ani === false) {

      let objLast = $(".main-banner > li:last");
      let obj = objLast.clone();
      objLast.remove();
      $(".main-banner").prepend(obj).css("margin-left", -liWidth);
      $(".main-banner>li").each(function (i) {
      })
      $(".main-banner").stop().animate({
        "margin-left": 0
      }, 2000, function () {
        $(".main-banner>li").each(function (i) {
          let count = i % 2;

        })
      })
    }
  })

  function moveAuto() {
    $(".mb-next").trigger("click");
  }
  // 자동으로 이동하기
  let timer = setInterval(moveAuto, 6000);

  // 배너에 마우스가 올라가면 실행중지
  // 벗어나면 재실행
  $(".main-banner-wrap").on({
    "mouseenter": function () {
      clearInterval(timer);
    },
    "mouseleave": function () {
      timer = setInterval(moveAuto, 6000);
    }
  })

  
    //마우스를 다운한 상태인지를 체크할 변수 만들기
    let isDown = false;
    //배너의 시작위치를 저장할 변수
    let startX;
    let scrollLeft;
  
    const banner = document.querySelector(".main-banner");
  
    const start = (e) => {
      isDown = true;
      console.log(e);
      banner.classList.add("active");
      startX = e.pageX || e.touches[0].pageX - banner.offsetLeft;
      scrollLeft = banner.scrollLeft;
      console.log(startX);
      console.log(scrollLeft);
      //이동한 거리
    }
  
    const move = (e) => {
      if (!isDown) return; //isDown이 false일때 return
      console.log(e);
      const x = e.pageX || e.touches[0].pageX - banner.offsetLeft;
      const dist = (x - startX);
      banner.scrollLeft = scrollLeft - dist;
      console.log(dist);
    }
  
    const end = (e) => {
      isDown = false;
      banner.classList.remove("active");
  
    }
  
    //마우스 다운 touchstart
    banner.addEventListener("mousedown", start);
    banner.addEventListener("touchstart", start);
  
    banner.addEventListener("mousemove", move);
    banner.addEventListener("touchmove", move);
  
    banner.addEventListener("mouseup", end);
    banner.addEventListener("mouseleave", end);
    banner.addEventListener("touchend", end);
  
})
