var not_popbox = true;
function caixinPostShare(share_mark,share_title,share_description,share_popUpUrl,share_pic,app_id){  
 	share_title=share_title+encodeURIComponent("");
 	userUrl="http://user.caixin.com/share/index/?";
 	switch(share_mark) {
		case "email":
	 		postPopUp(userUrl+"webid=email&url="+share_popUpUrl+"&title="+share_title);
	 		break;
  	case "qqweibo":
	 		if(typeof(srcinfoid) == "undefined"){
				srcinfoid = 0;
	 		}
	 		var _appkey = encodeURI("39e9ee0a88cd4e77bbb10881a6af9d26");//从腾讯获得的appkey
	 		var _site = 'https://www.caixin.com/';//你的网站地址
  	  		window.open("https://c2.caixin.com/comment-api-caixin/comment/shareToTencent.do?id="+srcinfoid +"&url="+share_popUpUrl+"&content="+share_title+"&picurl="+share_pic+"&appid="+app_id,"newwindow","height=445,width=578,toolbar =no,menubar=no,scrollbars=no,resizable=no,location=no,status=no");

	 		break;
  	case "tsina":
	 		if(typeof(srcinfoid) == "undefined"){
				postPopUp("https://user.caixin.com/share/send/?webid=tsina&url="+share_popUpUrl+"&title="+share_title + "&pic=" + share_pic);
	 		}else{
  	  			window.open("https://c2.caixin.com/comment-api-caixin/comment/shareToSina.do?id="+srcinfoid+"&url="+share_popUpUrl+"&content="+share_title+"&picurl="+share_pic+"&appid="+app_id,"newwindow","height=445,width=578,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no");

	 		}
	 		break;
		case "t163":
	 		postPopUp("https://user.caixin.com/share/send/?webid=t163&url="+share_popUpUrl+"&title="+share_title);
   		break;
		case "kaixin001":
	 		postPopUp(userUrl+"webid=kaixin001&url="+share_popUpUrl+"&title="+share_title);
   		break;
		case "douban":
	 		postPopUp(userUrl+"webid=douban&url="+share_popUpUrl+"&title="+share_title);
   		break;
		case "renren":
	 		postPopUp(userUrl+"webid=renren&url="+share_popUpUrl+"&title="+share_title);
   		break;
		case "xianguo":
	 		postPopUp(userUrl+"webid=xianguo&url="+share_popUpUrl+"&title="+share_title);
   		break;
		case "qzone":
	 		postPopUp("https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+share_popUpUrl);
   		break;
		case "tsohu":
	 		postPopUp("https://user.caixin.com/share/send/?webid=tsohu&url="+share_popUpUrl+"&title="+share_title);
   		break;
		case "baidu":
	 		postPopUp("https://user.caixin.com/share/send/?webid=baidu&url="+share_popUpUrl+"&title="+share_title);
   		break;
		case "google":
	 		postPopUp(userUrl+"webid=google&url="+share_popUpUrl+"&title="+share_title);
 	}
}
function caingPostShare(share_mark,share_title,share_description,share_popUpUrl,share_pic,app_id){
 	if(typeof(share_description)=="undefined") share_description = "";
 	if(typeof(share_pic)=="undefined") share_pic = "";
 	if(typeof(app_id)=="undefined") app_id = 100;
 	share_title=share_title+encodeURIComponent("");
	if(share_mark=='qqweibo' || share_mark=='tsina'){
	  var cxuid = GetCookieValue("SA_USER_UID");
	  var cxname = GetCookieValue("SA_USER_NICK_NAME");
		if(cxuid && cxname){
			caixinPostShare(share_mark,share_title,share_description,share_popUpUrl,share_pic,app_id);
		}else{
	 		var userShare = GetCookieValue("SA_USER_SHARE");
	 		if(userShare!="NOTREG") {
	 			if(not_popbox){
	 				var tishi = "<div class='bindSucceed'>";
					tishi += "<div id='bsh_popbox' class='bindSucceedBox' style='display:none;'>";
					tishi += "<p>您将微博帐号与财新网通行证进行绑定，即刻实现文章分享的便捷与评论互通的畅快。</p>";
					tishi += "<div>";
					tishi += "<a class='btn_a' href='javascript:void(0);' onClick='javascript:yesBindShare(\""+share_mark+"\",\""+share_title+"\",\""+share_description+"\",\""+share_popUpUrl+"\",\""+share_pic+"\","+app_id+");' target='_self'>立即绑定</a>";
					tishi += "<a class='btn_b' href='javascript:void(0);' onClick='javascript:notBindShare(\""+share_mark+"\",\""+share_title+"\",\""+share_description+"\",\""+share_popUpUrl+"\",\""+share_pic+"\","+app_id+");' target='_self'>暂不绑定</a>";
					tishi += "</div>";
					tishi += "<a class='exit' href='javascript:void(0);' onClick='javascript:toCloseBsh();' target='_self'>";
					tishi += "<img src='//file.caixin.com/file/content/images/exit_btn.png'>";
					tishi += "</a>";
					tishi += "</div>";
					tishi += "</div>";
		    	$("body").append(tishi);
		    	not_popbox = false;
	 			}
				$("#bsh_popbox").show();
	 		}else{
				caixinPostShare(share_mark,share_title,share_description,share_popUpUrl,share_pic,app_id);
	 		}
		}	
	}else{
		caixinPostShare(share_mark,share_title,share_description,share_popUpUrl,share_pic,app_id);
	}
}
function yesBindShare(share_mark,share_title,share_description,share_popUpUrl,share_pic,app_id){  
	$("#bsh_popbox").hide();
 	var loginUrl="https://user.caixin.com/usermanage/login/?mini=1&url="+makeShareUrl(share_mark,share_title,share_description,share_popUpUrl,share_pic,app_id);
	window.open(loginUrl,"newwindow","height=445,width=578,toolbar =no,menubar=no,scrollbars=no,resizable=no,location=no,status=no")
}
function makeShareUrl(share_mark,share_title,share_description,share_popUpUrl,share_pic,app_id){
 	switch(share_mark) {
 		case "qqweibo":
	 		if(typeof(srcinfoid) == "undefined"){
				srcinfoid = 0;
	 		}
	 		var _appkey = encodeURI("39e9ee0a88cd4e77bbb10881a6af9d26");//从腾讯获得的appkey
	 		var _site = 'https://www.caixin.com/';//你的网站地址
  	  				return base64encode(base64encode(base64encode("https://c2.caixin.com/comment-api-caixin/comment/shareToTencent.do?id="+srcinfoid +"&url="+share_popUpUrl+"&content="+share_title+"&picurl="+share_pic+"&appid="+app_id)));
  	case "tsina":
  	  				return base64encode(base64encode(base64encode("https://c2.caixin.com/comment-api-caixin/comment/shareToSina.do?id="+srcinfoid+"&url="+share_popUpUrl+"&content="+share_title+"&picurl="+share_pic+"&appid="+app_id)));

 	}
}
function toCloseBsh(){
	$("#bsh_popbox").hide();
}
function notBindShare(share_mark,share_title,share_description,share_popUpUrl,share_pic,app_id){
	SetCookieValue("SA_USER_SHARE","NOTREG",7);
	$("#bsh_popbox").hide();
	caixinPostShare(share_mark,share_title,share_description,share_popUpUrl,share_pic,app_id);
}
function postPopUp(url){
 window.open(url,"_blank")
}
function zoom_in(){
 try{var size = parseInt($(".text").css("fontSize"));$(".text").css("fontSize",(size+1)+"px");SetCookieValue("SA_USER_FONT_SIZE",(size+1));}catch(e){}
}
function zoom_out(){
 try{var size = parseInt($(".text").css("fontSize"));$(".text").css("fontSize",(size-1)+"px");SetCookieValue("SA_USER_FONT_SIZE",(size-1));}catch(e){}
}
function zoom_init(){
	var size = GetCookieValue("SA_USER_FONT_SIZE");
	if(!isNaN(size)){ $(".text").css("fontSize",""+size+"px"); }
}
function sendMail(){
 var mailFormat = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
 var email = $("#eaddress").val();
 if(mailFormat.test(email)){
 	window.open("https://service.caixin.com/subscription/email/v/"+email);
 }else{
 	alert("请输入有效的E_mail！");
 }
}
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; 
function base64encode(str) { 
  var out, i, len; 
  var c1, c2, c3; 
  len = str.length; 
  i = 0; 
  out = ""; 
  while(i < len) { 
	  c1 = str.charCodeAt(i++) & 0xff; 
	  if(i==len) { 
	    out += base64EncodeChars.charAt(c1 >> 2); 
	    out += base64EncodeChars.charAt((c1 & 0x3) << 4); 
	    out += "=="; 
	    break; 
	  } 
	  c2 = str.charCodeAt(i++); 
	  if(i==len) { 
	    out += base64EncodeChars.charAt(c1 >> 2); 
	    out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4)); 
	    out += base64EncodeChars.charAt((c2 & 0xF) << 2); 
	    out += "="; 
	    break; 
	  } 
	  c3 = str.charCodeAt(i++); 
	  out += base64EncodeChars.charAt(c1 >> 2); 
	  out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4)); 
	  out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >>6)); 
	  out += base64EncodeChars.charAt(c3 & 0x3F); 
  } 
  return out; 
} 
