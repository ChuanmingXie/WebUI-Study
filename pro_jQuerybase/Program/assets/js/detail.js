$(function () {
    switchColorImg();
    switchImg();
    switchTab();
    switchColor();

    clickProSize();
    clickProPrice();
    clickProStar();
    proSubmit();
})

// 图片列表的改变
function switchImg() {
    $('.pro_detail_left ul li img').click(function (e) {
        // e.preventDefault();
        var imgsrc = $(this).attr("src");
        var i = imgsrc.lastIndexOf('.');
        var unit = imgsrc.substring(i);
        imgsrc = imgsrc.substring(0, i);
        var imgsrc_small = imgsrc + "_small" + unit;
        var imgsrc_big = imgsrc + "_big" + unit;
        $("#bigImg").attr({ "src": imgsrc_small, "jqimg": imgsrc_big });
        $("#thickImg").attr("href", imgsrc_big);
    });
}

// Tab选项的改变
function switchTab(){
    var tab_li=$("div.tab_menu ul li");
    tab_li.click(function (e) { 
        // e.preventDefault();
        $(this).addClass("selected").siblings().removeClass("selected");    //为自己添加高亮并去掉兄弟li的高亮
        var index=tab_li.index(this);       //获取li元素的索引
        $('div.tab_box > div').eq(index).show().siblings().hide();      //选取li节点并显示节点对应的div,隐藏同辈div元素
    }).hover(function () {
        // over
        $(this).addClass("hover");
    }, function () {
        // out
        $(this).removeClass("hover");
    });
}

// 物品颜色选择
function switchColor(){
    $(".color_change ul li img").click(function (e) { 
        // e.preventDefault();
        var imgsrc=$(this).attr('src');
        var i=imgsrc.lastIndexOf(".");
        var unit=imgsrc.substring(i);
        imgsrc=imgsrc.substring(0,i);

        var imgsrc_small=imgsrc+"_one_small"+unit;
        var imgsrc_big=imgsrc+"_one_big"+unit;

        $("#bigImg").attr({"src":imgsrc_small,"jqimg":imgsrc_big});
        $("#thickImg").attr("href",imgsrc_big);

        var alt=$(this).attr("alt");
        $(".color_change string").text(alt);

        var url=imgsrc+".html";
        $(".pro_detail_left ul.imgList").empty().load(url);
    });
}

//更具颜色变化而改变图片的信息
function switchColorImg(){
    $(".pro_detail_left ul li img").livequery("click",function (e) { 
        // e.preventDefault();
        var imgsrc=$(this).attr("src");
        var i=imgsrc.lastIndexOf('.');
        var unit=imgsrc.substring(i);
        imgsrc=imgsrc.substring(0,i);
        var imgsrc_small=imgsrc+"_small"+unit;
        var imgsrc_big=imgsrc+"_big"+unit;
        $("#bigImg").attr({"src":imgsrc_small,"jqimg":imgsrc_big});
        $("#thickImg").attr("href",imgsrc_big);
    });
}

// 产品尺码
function clickProSize(){
    $(".pro_size li span").click(function (e) { 
        // e.preventDefault();
        $(this).parents("ul").siblings("strong").text($(this).text());        
    });
}

// 产品数量
function clickProPrice(){
    var span=$("div.pro_price span");
    var price=span.text();
    $("#num_sort").change(function (e) { 
        // e.preventDefault();
        var num=$(this).val();
        var amount=num*price;
        span.text(amount);
    }).change();
}

// 产品评级
function clickProStar(){
    $("ul.rating li a").click(function (e) { 
        var title=$(this).attr("title");
        alert("你给此商品的评分是："+title);
        var ulClass=$(this).parent().attr("class");
        $(this).parent().parent().removeClass().addClass("rating "+ulClass+"star");
        $(this).blur();
        e.preventDefault();        
    });
}

// 产品提交
function proSubmit(){
    var product=$(".pro_detail_right");
    $("#cart a").click(function (e) {
        var pro_name=product.find("h4:first").text();
        var pro_size=product.find(".pro_size strong").text();
        var pro_color=$(".color_change strong").text();
        var pro_num=product.find("#num_sort").val();
        var pro_price=product.find(".pro_price span").text();
        var dialog="感谢您的购买.\n您购买的\n"
            +"产品是："+pro_name+";\n"
            +"尺码是："+pro_size+";\n"
            +"颜色是："+pro_color+";\n"
            +"数量是："+pro_num+";\n"
            +"总价是："+pro_price+";\n";
        if(confirm(dialog)){
            alert("你已经下单！");
        }
        e.preventDefault();
        
    });
}