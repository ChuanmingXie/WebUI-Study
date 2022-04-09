$(function () {
    shoplist();
    imageOverMask();
})

// 产品列表
function shoplist() {
    var page = 1;
    var i = 4;
    var len = $('.prolist_content ul li').length;
    var page_count = Math.ceil(len / i);            //向上取整
    var none_unit_width = $('.prolist').width();  //获取框架内容的宽度,不带单位
    var parent = $('.prolist_content');

    $(".gonext").click(function () {
        // e.preventDefault();
        if (!parent.is(":animated")) {
            if (page == page_count) {               //已经到最后一个版面，如果向后,必须转到第一个版本
                parent.animate({ left: 0 }, 800);   //通过改变left值，跳转到第1个版本
                page = 1;
            } else {
                parent.animate({ left: '-=' + none_unit_width }, 800);   //通过改变left值，达到每次换一个版面
                page++;
            }
        }
    });

    $('.goprev').click(function () {
        // e.preventDefault();
        if (!parent.is(":animated")) {
            if (page == 1) {
                parent.animate({ left: '-=' + none_unit_width * (page_count - 1) }, 800);
                page = page_count;
            } else {
                parent.animate({ left: '+=' + none_unit_width }, 800);
                page--;
            }
        }
    });
}

// 产品列表遮罩层
function imageOverMask() {
    $('.content_right .prolist ul li').each(function (index) {
        var position = $(this).position();
        var top = position.top;
        var left = position.left;
        var img_width = $(this).find("img").width();
        var img_height = $(this).find('img').height();
        var spanhtml = '<span style="position:absolute;'
            + 'top:' + top + 'px;left:' + left + 'px;width:' + img_width + 'px;height:' + img_height + 'px;'
            + 'cursor:pointer;" class="imagemask"></span>';
        $(spanhtml).hover(function () {
            // over
            $(this).addClass("imageover");
        }, function () {
            // out
            $(this).removeClass("imageover");
        }).appendTo($(this).find('a'));
    });
}
