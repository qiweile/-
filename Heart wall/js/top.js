$(function () {
    //App下载鼠标 显示二维码
    $('.first').mouseenter(function () {
        $(this).children('img').stop().slideDown();
    })
    $('.first').mouseleave(function () {
        $(this).children('img').stop().slideUp();
    })
    //设置slider的背景图
    var $lisSli = $('.slider  li');
    for (var i = 0; i < $lisSli.length; i++) {
        $($lisSli[i]).css({
            backgroundImage: 'url(./images/' + (i + 1) + '.jpg)',
            height: 480,
        })
    }
    //地区选择 
    $('.area-choose').mouseover(function () {
        $(this).find('ul').stop().slideDown();
    })
    $('.area-choose').mouseout(function () {
        $(this).find('ul').stop().slideUp();
    })
    //area-choose的替换 
    // var $lis1 = $('.area-choose li');
    // console.log($lis1)
    // $lis1.each(function(i,ele){
    //     ele.click(function(){
    //         console.log('aaa')
    //          $('.area-choose span').text($(this).children().text());
    //     })
    // })
    var location = $('.area-choose span'),
        lis = $('.area-choose li');
    $('.area-choose ul').on('click', 'li', function () {
        location.text($(this).children().text());
    });


// 固定位置左侧广告
    $(window).scroll(function () {
        var scroll_top = $(window).scrollTop();
        if (scroll_top >= 200) {
            $("#hot").css('display','block');
        }else {
            $("#hot").css('display','none');
        }
    })
});

// 水波纹淡入 淡出
$(window).scroll(function () {
    var scroll_top = $(window).scrollTop();
    if (scroll_top >= 4500) {
        $("#canvas").fadeOut();
    }else {
        $("#canvas").fadeIn();
    }
    });

$(window).scroll(function () {
    var scroll_top = $(window).scrollTop();
    if (scroll_top >= 100) {
        $(".s-jd-toolbar").css('display','block');
    }else {
        $(".s-jd-toolbar").css('display','none');
    }
    });


