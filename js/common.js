$(document).ready(function () {
    let wW = window.innerWidth;
    let wH = window.innerHeight;
    const body = $("body");
    const hd = $('#hsl-hd');
    let hdH = hd.height();
    let mbH = $('.main-banner-text').height();
    let subH = $('.sub-hd-title').height();
    let logo = $('.logo>a');
    let gnb = $('#hsl-gnb');
    const openBtn = $(".m-gnb-open");
    const closeBtn = $(".m-gnb-close");
    let depth1 = $(".depth1");
    let depth1a = $(".depth1 > a");
    let depth2 = $(".depth2");
    let depth2a = $(".depth2 > li > a");

    let slideSpeed = 400;

    rwd();

    let modal = $(".modal");

    $(window).resize(function () {
        rwd();
        reset();
    });

    function rwd() {
        wW = window.innerWidth;
        wH = window.innerHeight;
        if (wW < 768) {
            body.addClass("mo").removeClass("tb pc");
        } else if (wW >= 768 && wW < 1280) {
            body.addClass("tb").removeClass("mo pc");
        } else {
            body.addClass("pc").removeClass("mo tb");
        }
    }

    function reset() {
        hdH = hd.height();
        body.removeClass("hidden");
        gnbReset();
    }

    function gnbReset() {
        if (body.hasClass("mo")) {
            modal.removeClass('active');
            depth2.fadeOut();
        } else {
            logo.removeClass('active');
        }
    }
    openBtn.click(function () {
        body.addClass("hidden");
        gnb.addClass('active');
        modal.addClass('active');
    });
    closeBtn.click(function () {
        body.removeClass("hidden");
        gnb.removeClass('active');
        modal.removeClass('active');
        depth2.hide();
        depth1a.removeClass("show");
    });

    modal.click(function () {
        body.removeClass("hidden");
        gnb.removeClass('active');
        $(this).removeClass('active');
        depth2.hide();
        depth1a.removeClass("show");
    })
    //모바일 GNB 작동
    depth1.on({
        click: (function () {
            if (body.hasClass("mo")) {
                $(this).children(depth1a).toggleClass("show");
                $(this).children(".depth2").stop().slideToggle().css("opacity", "1");
                $(this).siblings().find(".depth2").stop().slideUp(slideSpeed);
                $(this).siblings().children().removeClass('show');
            }
        })
    });

    //PC GNB 작동
    //trg(depth1), event(mouseenter), method(fadeIn)
    hd.on({
        mouseenter: function () {
            if (body.hasClass("pc") || body.hasClass("tb")) {
                $(this).addClass(("active"));
            }
        },
        mouseleave: function () {
            if (body.hasClass("pc") || body.hasClass("tb")) {
                $(this).removeClass("active");
            }
        }
    });
    depth1.on({/* depth2 마우스올리면 색상변화 */

        mouseenter: function () {
            if (body.hasClass("pc") || body.hasClass("tb")) {
                $(this).addClass("active");
            }
        },
        mouseleave: function () {
            if (body.hasClass("pc") || body.hasClass("tb")) {
                $(this).removeClass("active");
            }
        }
    }
    );

});