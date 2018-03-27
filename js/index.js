//topbar leftbar
{
    $(window).scroll(function () {
        let st = $(window).scrollTop();//获取滚动高度
        if (st > 700) {
            $(".topbar").show();
        } else {
            $(".topbar").hide();
        }
        if (st > 500) {
            $(".leftbar").show();
        } else {
            $(".leftbar").hide();
        }
    });
}
//dingbudaohang
{
    $(".sn-menu")
        .mouseenter(function () {
            let index = $(this).index(".sn-menu");
            $(".menu-bd").eq(index).show();
        })
        .mouseleave(function () {
            let index = $(this).index(".sn-menu");
            $(".menu-bd").eq(index).hide();
        })
}
//bannerlist
{
    $(".li")
        .mouseenter(function () {
            let index = $(this).index(".li");
            $(".list-pannel-con").eq(index).show();
        })
        .mouseleave(function () {
            let index = $(this).index(".li");
            $(".list-pannel-con").eq(index).hide();
        })
}
//banner
{
    $(".banner_navbox li").mouseenter(function () {
        let index = $(this).index(".banner_navbox li");
        $(".banner_navbox li").removeClass("active").eq(index).addClass("active");
        $(".bimg").removeClass("active").eq(index).addClass("active");
        n = index;
    })

    //自动轮播
    let n = 0;
    let l = $(".bimg").length;

    let st=setInterval(move, 3000);

    function move() {
        n++;
        if (n === l) {
            n = 0;
        }
        if (n < 0) {
            n = l - 1;
        }
        $(".banner_navbox li").removeClass("active").eq(n).addClass("active");
        $(".bimg").removeClass("active").eq(n).addClass("active");
    }

    $(".bannerimg").mouseenter(function () {
        clearInterval(st)
    })
    $(".bannerimg").mouseleave(function () {
        st=setInterval(move,3000);
    })

}
//返回top
{
    $(".todingbu").click(function () {
        $("html,body").animate({scrollTop: 0})
    })


}
//leftbartiaozhuan
{
    $(".left-click").click(function () {
        let index = $(this).index(".left-click");
        let ot = $(".floorportlou").eq(index).offset().top - 100;
        $(".left-click").removeClass(`active${index}`);
        $(".left-click").eq(index).addClass(`active${index}`);
        $("html,body").animate({scrollTop: ot}, 200);
    })
    $(window).scroll(function () {
        let st = $(window).scrollTop();

        $(".floorportlou").each(function () {
            if(st>$(".floorportlou").eq(0).offset().top-200){
                $(".left-click").attr("class","left-detail left-detail1 left-click");
                $(".left-click").eq(0).addClass("active1");
            }
            if(st>$(".floorportlou").eq(1).offset().top-280){
                $(".left-click").attr("class","left-detail left-detail1 left-click");
                $(".left-click").eq(1).addClass("active2");
            }
            if(st>$(".floorportlou").eq(2).offset().top-360){
                $(".left-click").attr("class","left-detail left-detail1 left-click");
                $(".left-click").eq(2).addClass("active3");
            }
            if(st>$(".floorportlou").eq(3).offset().top-440){
                $(".left-click").attr("class","left-detail left-detail1 left-click");
                $(".left-click").eq(3).addClass("active4");
            }
            if(st>$(".floorportlou").eq(4).offset().top-520){
                $(".left-click").attr("class","left-detail left-detail1 left-click");
                $(".left-click").eq(4).addClass("active1");
            }
            if(st>$(".floorportlou").eq(5).offset().top-600){
                $(".left-click").attr("class","left-detail left-detail1 left-click");
                $(".left-click").eq(5).addClass("active2");
            }
            if(st>$(".floorportlou").eq(6).offset().top-680){
                $(".left-click").attr("class","left-detail left-detail1 left-click");
                $(".left-click").eq(6).addClass("active3");
            }
            if(st>$(".floorportlou").eq(7).offset().top-760){
                $(".left-click").attr("class","left-detail left-detail1 left-click");
                $(".left-click").eq(7).addClass("active4");
            }
        })

    });
}
//right
{
    $(".right-logo").mouseenter(function () {
        let index = $(this).index(".right-logo");
        $(".right-fly").eq(index)
            .fadeIn()
            .css("opacity", "1")
            .removeClass("flyOut").addClass("flyIn");
    })
    $(".right-logo").mouseleave(function () {
        let index = $(this).index(".right-logo");
        $(".right-fly").eq(index)
            .fadeOut()
            .css("opacity", "0")
            .removeClass("flyIn").addClass("flyOut");
    })
    $(".rightlogo7").mouseenter(function () {
        $(".rightlogo-xiaoguo1").css("opacity", "1");
    })
    $(".rightlogo7").mouseleave(function () {
        $(".rightlogo-xiaoguo1").css("opacity", "0");
    })
}
//xianshi
{
    let i = 0;

    function active() {
        i++;
        if (i === 2) {
            i = 0;
        }
        if (i < 0) {
            i = 1;
        }
        $(".floorhead li").removeClass("active").eq(i).addClass("active");
        $(".floorbottom1").removeClass("active").eq(i).addClass("active");
    }

    let t = setInterval(active, 3000);

    $(".floorhead li").mouseenter(function () {
        clearInterval(t);
        let index = $(this).index(".floorhead li");
        $(".floorhead li").removeClass("active").eq(index).addClass("active");
        $(".floorbottom1").removeClass("active").eq(index).addClass("active");
        i = index;
    })

}