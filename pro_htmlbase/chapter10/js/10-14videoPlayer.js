/* 10-14多媒体播放-H5多媒体API-自定义视频播放器 */

var myVideo=$('#myVideo').get(0);
var videoPlayer=$('#videoPlayer').get(0);
var videoRange=$('#videoRange').get(0);
var videoVoice=$('#videoVoice').get(0);
var videoInfo=$('#videoInfo').get(0);

/* 暂停与播放切换 */
videoPlayer.onclick=function(){
	if(myVideo.paused){
		myVideo.play();
		videoPlayer.value="暂停播放";
	}else{
		myVideo.pause();
		videoPlayer.value="开始播放";
	}
};

/* 视频播放时，滚动条同步 */
myVideo.ontimeupdate=function(){
	var currentTime=Math.round(myVideo.currentTime*Math.pow(10,2)/Math.pow(10,2));
	var totalTime=Math.round(myVideo.duration*Math.pow(10,2)/Math.pow(10,2));
	videoInfo.value=currentTime+"/"+totalTime;
	videoRange.value=(currentTime/totalTime)*100;
	if(myVideo.ended){
		videoRange.value=0;
	}
};

/* 拖动滚动条，视频进度同步 */
videoRange.onmousedown=function(){
	myVideo.pause();
};

/* 播放 */
videoRange.onmouseup=function(){
	myVideo.currentTime=myVideo.duration*(videoRange.value/videoRange.max);
	myVideo.play();
}

/* 静音与取消静音切换 */
videoVoice.onclick=function(){
	if(!myVideo.muted){
		videoVoice.value="取消静音";
		myVideo.muted=true;
	}else{
		videoVoice.value="静音";
		myVideo.muted=false;
	}
};