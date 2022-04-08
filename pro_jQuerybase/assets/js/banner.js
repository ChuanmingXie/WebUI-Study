$(function () {
    advertBanner();
})

// 广告banner的滚动
function advertBanner(){
    var len = $('.num > li').length;
    var index = 0;
    var advertTimer;
    $(".num li").mouseover(function () {
        index = $('.num li').index(this);
        showImg(index);
    }).eq(0).mouseover();
    $('.advert').hover(function () {
        // over
        clearInterval(advertTimer);
    }, function () {
        // out
        advertTimer = setInterval(function () {
            showImg(index);
            index++;
            if (index == len) {
                index = 0;
            }
        }, 3000);
    }).trigger("mouseleave");
}

function showImg(index){
    var advertHeight=$('.content_right .advert').height();
    $('.slider').stop(true,false).animate({top:-advertHeight*index},1000);
    $(".num li").removeClass("on").eq(index).addClass('on');
}