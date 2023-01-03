window.onload = function () {
    let lnbBtn1 = document.querySelector(".lnb-depth1");
    let lnbBtn2 = document.querySelector(".lnb-depth2");
    let d1List = document.querySelector(".lnb-depth-list1")
    let d2List = document.querySelector(".lnb-depth-list2")

    function lnbToggle1() {
        d1List.classList.toggle('on');
        lnbBtn1.classList.toggle('on');
        d2List.classList.remove('on');
    }
    function lnbLeave1() {
        d1List.classList.remove('on');
        lnbBtn1.classList.remove('on');
    }
    function lnbToggle2() {
        d2List.classList.toggle('on');
        lnbBtn2.classList.toggle('on');
        d1List.classList.remove('on');
    }
    function lnbLeave2() {
        d2List.classList.remove('on');
        lnbBtn2.classList.remove('on');
    }
    

    lnbBtn1.addEventListener("click", lnbToggle1);
    lnbBtn1.addEventListener("mouseleave", lnbLeave1);
    lnbBtn2.addEventListener("click", lnbToggle2);
    lnbBtn2.addEventListener("mouseleave", lnbLeave2);

    let hd = $("#hsl-hd");
    let scTop = 0;
    let lnb = $("#hsl-lnb");
    let lnbPos = lnb.position().top;

    $(window).resize(function () {
        init();
    });

    function init() {
        lnbPos;
    }
    $(document).scroll(function () {
        scTop = $(document).scrollTop(); console.log(scTop)
        if (scTop > hd.innerHeight()) {
            hd.addClass('fixed');
        } else {
            hd.removeClass ('fixed');
        }

        if (scTop >= lnbPos - lnb.height()) {
            hd.hide();
            lnb.addClass("fixed").css('top','0');
        } else {
            hd.show();
            lnb.removeClass("fixed").css('top','inherit');
        }
    });
}