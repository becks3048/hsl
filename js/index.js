$(document).scroll(function () {
    let wW = window.innerWidth;
    let wH = window.innerHeight;
    const body = $("body");
    const hd = $('#hsl-hd');
    let hdH = hd.height();
    let mbH = $('.main-banner-text').height();
    let subH = $('.sub-hd-title').height();
    
   scTop = $(document).scrollTop();
   if (body.hasClass("pc") || body.hasClass("tb")) {
       if (scTop > hdH) {
           hd.addClass("fixed");
       } else {
           hd.removeClass("fixed");
       }
   }
   else {
       if ((scTop > mbH) || (scTop > subH)) {
           hd.addClass("fixed");
       } else {
           hd.removeClass("fixed");
       }
   }

   $(".ani-top").each(function () {
       let offsetTop = $(this).offset().top - wH;
       if (scTop > offsetTop) {
           $(this).fadeOut(500);
       } else {
           $(this).fadeIn(500);
       }
   });
});