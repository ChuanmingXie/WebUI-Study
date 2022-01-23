/* 8-2指令示例2-实时的时间转化指令 */
var Time = {
	// 获取当前时间戳
	getUnix: function() {
		var date = new Date();
		// 将时间转化为毫秒
		return date.getTime();
	},
	// 获取今天0点0分0秒的时间戳
	getTodayUnix: function() {
		var date = new Date();
		date.setHours(0);
		date.setMinutes(0);
		date.setSeconds(0);
		date.setMilliseconds(0);
		return date.getTime();
	},
	// 获取今年1月1日0点0分0秒的时间戳
	getYearUnix: function() {
		var date = new Date();
		date.setMonth(0);
		date.setDate(1);
		date.setHours(0);
		date.setMinutes(0);
		date.setSeconds(0);
		date.setMilliseconds(0);
		return date.getTime();
	},
	// 获取标准的年月日
	getLastDate: function(time) {
		var date = new Date(time);
		var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
		var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
		return date.getFullYear() + '-' + month + '-' + day;
	},
	// 转化为最终显示的字符串
	getFormatTime: function(timestamp) {
		var now = this.getUnix(); //获取当前时间戳
		var today = this.getTodayUnix(); //获取今天0点时间戳
		var year = this.getYearUnix(); //获取今年0点时间戳
		var timer = (now - timestamp) / 1000; //转化成秒级时间戳
		var tip = "";

		// timer / 60
		// timer / 60 / 60
		// timer / 60 / 60 / 24
		// timer / 60 / 60 / 24 / 31
		/* 暂时不方便改写成switc case的形式。无论除60还是3600分类情况均不方便枚举完 */
		if (timer <= 0 || (Math.floor(timer / 60)) <= 0) {
			tip = '刚刚';
		} else if (timer < 3600) {
			tip = Math.floor(timer / 60) + '分钟前';
		}else if(timer>=3600&&(timestamp-today>=0)){
			tip = Math.floor(timer / 3600) + '小时前';
		}else if(timer/86400<=31){
			tip = Math.ceil(timer / 86400) + '天前';
		}else{
			tip=this.getLastDate(timestamp);
		}
		return tip;
	}
}
Vue.directive('time',{
	bind:function(el,binding){
		el.innerHTML=Time.getFormatTime(binding.value);
		el._timeout_=setInterval(function(){
			el.innerHTML=Time.getFormatTime(binding.value);
		},60000);
	},
	unbind:function(el){
		clearInterval(el._timeout_);
		delete el._timeout_;
	}
})
