$(window).scroll(function () {
    let wW = window.innerWidth;
    let wH = window.innerHeight;
    const body = $("body");
    const hd = $('#hsl-hd');
    let hdH = hd.height();
    let mbH = $('.main-banner-text').height();
    let subH = $('.sub-hd-title').height();
    let mainHeight = $(document).outerHeight() - $(window).outerHeight()-$("#hsl-footer").outerHeight();
    let scBtn = $(".btn-circle").height();
// console.log(mainHeight);

   scTop = $(window).scrollTop(); 
   console.log(scTop);
   
       if (scTop > hdH) {
           hd.addClass("fixed");
           $(".btn-circle").css("opacity","1")
            $(".bg,.mask").addClass("slide");
       } else if (scTop < hdH){
           hd.removeClass("fixed");
           $(".btn-circle").css("opacity","0")
       }
   if (scTop >= mainHeight ) {
    $(".btn-circle").css("position","absolute");
    $(".btn-circle").css("opacity","1");
    } else if(scTop < mainHeight) {
        $(".btn-circle").css("position","fixed");
    }/* 탑버튼 스크롤이벤트 */

// //    $(".ani-top").each(function () {
// //        let offsetTop = $(this).offset().top - wH;
// //        if (scTop > offsetTop) {
// //            $(this).fadeOut(500);
// //        } else {
// //            $(this).fadeIn(500);
// //        }
//    });
});