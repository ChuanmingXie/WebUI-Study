$(function(){
    $('.pro_detail_left ul li img').click(function (e) { 
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
})