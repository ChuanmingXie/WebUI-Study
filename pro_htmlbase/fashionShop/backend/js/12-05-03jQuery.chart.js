/* 12-5-2jQueryplugin-Chart */

/* 调用插件显示数据 */
$(function(){
	var data={
		drawData:[
			{name:'女装',amount:40},
			{name:'男装',amount:80},
			{name:'童装',amount:50},
			{name:'服饰',amount:35},
			{name:'内衣',amount:60},
		],
	};
	var options={
		bgColor:[
			{drawColor:'#9cc507'},
			{drawColor:'#8b86ca'},
			{drawColor:'#ff4400'},
			{drawColor:'#ffb81d'},
			{drawColor:'#2CABE0'},
		],
		frontColor:{
			font:'bold 16px misrosoft',
			color:'black'
		}
	};
	
	
	//使用自定义的样式进行绘制图表	
	$('#myCanvas1').drawChart(data,options,"PieChart");
	$('#myCanvas2').drawChart(data,options,"ColumnChart");
	$('#myCanvas3').drawChart(data,options,"FoldLineChart");
});

/* 图标插件的实现 */
;(function($,window,document,undefined){
	var defaults={
		bgColor:[
			{drawColor:'red'},
			{drawColor:'green'},
			{drawColor:'yellow'},
			{drawColor:'blue'},
			{drawColor:'gray'}
		],
		frontColor:{
			font:'12px 宋体',
			color:'black'
		}
	};
	
	// 构造方法
	function DataDrawer(element,data,options){
		this.$element=element;
		this.drawType=data.drawType;
		this.drawData=data.drawData;
		this.setting=$.extend({},defaults,options);
	};
	
	// 添加属性或方法
	DataDrawer.prototype={
		// 统计数据总量
		countData:function(){
			var allData=0;
			for (var i = 0; i < this.drawData.length; i++) {
				allData+=this.drawData[i].amount;
			}
			this.allData=allData;
		},
		
		// 绘制圆饼图
		drawPieChart:function(){
			var startPoint=1.5*Math.PI;
			var endPoint=0;
			var context=this.$element.get(0).getContext("2d");
			for (var i = 0; i < this.drawData.length; i++) {
				context.fillStyle=this.setting.bgColor[i].drawColor;
				context.strokeStyle=this.setting.bgColor[i].drawColor;
				// 开始创建路径
				context.beginPath();
				// 开始创建圆心
				context.moveTo(150,150);
				// 计算圆弧结束位置的角度
				endPoint=startPoint-Math.PI*2*(this.drawData[i].amount/this.allData);
				// 开始创建路径(弧形圆心)
				context.arc(150,150,90,startPoint,endPoint,true);
				context.fill();
				context.stroke();
				// 保存状态
				context.save();
				// 计算文本角度
				var textAngle=(startPoint+endPoint)/2;
				var textScale=this.drawData[i].amount/this.allData;
				// 将坐标原点移动到绘制文本处(根据圆心进行计算)
				context.translate(150+110*Math.cos(textAngle),150+110*Math.sin(textAngle));
				// 旋转文本
				context.rotate(textAngle+Math.PI*1/2);
				context.fillStyle=this.setting.frontColor.color;
				context.font=this.setting.frontColor.font;
				context.fillText(this.drawData[i].name,-20,0);
				// 恢复到保存点
				context.restore();
				startPoint-=Math.PI*2*(this.drawData[i].amount/this.allData);
			}		
		},
		
		// 绘制坐标系
		drawCoordinateSystem:function(context){
			context.moveTo(20,20);
			context.lineTo(20,260);
			context.lineTo(260,260);
			context.lineWidth=2;
			context.strokeStyle='black';
			context.stroke();
		},
		
		// 绘制柱状图
		drawColumnar:function(){
			var context=this.$element.get(0).getContext('2d');
			// 先添加坐标系
			this.drawCoordinateSystem(context);
			var width=20;
			var margin=20;
			for (var i = 0; i < this.drawData.length; i++) {
				context.fillStyle=this.setting.bgColor[i].drawColor;
				context.strokeStyle=this.setting.bgColor[i].drawColor;
				// 计算绘制的矩形的左上角的x,y的坐标(以绘制的x坐标轴作为参考线);
				var x=40+(width+margin)*i;
				var y=260-260*(this.drawData[i].amount/this.allData);
				// 绘制柱状体
				context.fillRect(x,y,width,260*(this.drawData[i].amount/this.allData));
				// 绘制文本
				context.fillStyle=this.setting.frontColor.color;
				context.font=this.setting.frontColor.font;
				context.fillText(this.drawData[i].name,x,280);
			}
		},
		
		// 绘制折线图
		drawFoldLine:function(){
			var padding=50;
			var context=this.$element.get(0).getContext('2d');
			// 绘制坐标系
			this.drawCoordinateSystem(context);
			context.beginPath();
			context.moveTo(20,260);
			for (var i = 0; i < this.drawData.length; i++) {
				// 计算折线坐标
				var x=40+padding*i;
				var y=260-260*(this.drawData[i].amount/this.allData);
				context.setLineDash([4,4]);
				context.lineTo(x,y);
				context.stroke();
				context.fillStyle='gray';
				context.fillRect(x,y,1,260*(this.drawData[i].amount/this.allData));
				context.fillStyle=this.setting.frontColor.color;
				context.font=this.setting.frontColor.font;
				context.fillText(this.drawData[i].name,x-10,280);
			}
		}
	};
	
	$.fn.drawChart=function(data,options,drawType){
		// 创建DataList 的实体
		 var dataDrawer=new DataDrawer(this,data,options);
		 console.log(dataDrawer.dataData);
		 // 调用其方法
		 dataDrawer.countData();
		 switch (drawType){
		 	case "PieChart":
		 		return dataDrawer.drawPieChart();
		 	case "ColumnChart":
		 		return dataDrawer.drawColumnar();
		 	case "FoldLineChart":
		 		return dataDrawer.drawFoldLine();
		 	default:
		 		return dataDrawer.drawPieChart();
		 }
	}
})(jQuery,window,document);
