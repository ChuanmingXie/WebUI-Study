$(function () {
    navigation();

    newspanel();
    newstip();

    moduleSilde();
    treeview();
})


// 顶部导航栏开合
function navigation() {
    $('#navigation ul li:has(ul)').hover(function () {
        $(this).children("ul").stop(true, true).slideDown(400);
    }, function () {
        $(this).children('ul').stop(true, true).slideUp("fast");
    });
}

// 广告通知滚动
function newspanel() {
    var that = $(".scrollNews");
    that.hover(function () {
        clearInterval(scrollTimer);
    }, function () {
        scrollTimer = setInterval(function () {
            scrollNews(that);
        }, 3000);
    }).trigger("mouseleave");
    var scrollTimer = setInterval(function () {
        scrollNews(that);
    }, 3000);
}

// 滚动的位置调整
function scrollNews(obj) {
    var that = obj.find("ul:first");
    var lineHeight = that.find('li:first').height();
    that.animate({ "marginTop": -lineHeight + "px" }, 600, function () {
        that.css({ marginTop: 0 }).find("li:first").appendTo(that);
    })
}

// 广告栏消息提示
function newstip() {
    var x = 10;
    var y = 20;
    $("a.tooltip").mouseover(function (e) {
        this.myTitle = this.title;
        this.title = "";
        var tooltip = "<div id='tooltip'>" + this.myTitle + "</div>";
        $("body").append(tooltip);
        $("#tooltip").css({ "top": (e.pageY + y) + "px", "left": (e.pageX + x) + "px" }).show("fast");
    }).mouseout(function () {
        this.title = this.myTitle;
        $("#tooltip").remove();
    }).mousemove(function (e) {
        $("#tooltip").css({ "top": (e.pageY + y) + "px", "left": (e.pageX + x) + "px" });
    });
}

// 左侧导航栏开合
function moduleSilde() {
    $(".module_up_down").toggle(function () {
        var that = $(this);
        that.prev().slideToggle(600, function () {
            $('img', that).attr("src", "assets/img/up.gif");
        });
    }, function () {
        var that = $(this);
        that.prev().slideToggle(600, function () {
            $('img', that).attr("src", 'assets/img/down.gif');
        });
    })
}

// 左侧菜单栏子菜单开合
function treeview() {
    $(".m-treeview > li > span").click(function () {
        var ul = $(this).siblings('ul');
        if (ul.is(':visible')) {
            $(this).parent().attr('class', "m-collapsed");
            ul.hide();
        } else {
            $(this).parent().attr('class', "m-expanded");
            ul.show();
        }
        return false;
    });
}
