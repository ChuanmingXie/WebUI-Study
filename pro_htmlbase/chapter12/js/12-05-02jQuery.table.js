/* 12-5-2jQueryplugin-Table */

/* 调用插件显示数据 */
$(function(){	
	var data={
		tableTitle:{
			name:"商品名称",
			price:'商品价格',
			upTime:'上架时间',
			qualityTime:'保质期'
		},
		tableData:[
			{name:'绿树苹果脆皮苹果干',price:40,upTime:'2019-03-30',qualityTime:'3年'},
			{name:'亚洲渔港至q虾球',price:120,upTime:'2022-05-10',qualityTime:'4年'},
			{name:'台湾零食核桃仁核桃恋',price:50,upTime:'2018-12-20',qualityTime:'6年'},
			{name:'韩国蜜恋果味奶茶',price:35,upTime:'2020-09-31',qualityTime:'1年'},
			{name:'乌拉圭进口牛肉健',price:120,upTime:'2019-10-30',qualityTime:'0.5年'}
		]
	};
	$('#dataList').dataListPlugin(data);
});

/* 定义插件具体内容 */
;(function($,window,document,undefined){

	// 构造方法
	function DataList(element,data){
		this.$element=element;
		this.tableTitle=data.tableTitle;
		this.tableData=data.tableData;
	};
	
	DataList.prototype={
		// 字段定义
		sortMode:'default',
		imgSrc:'img/w2.png',
		lastClick:'',
		currentImageSrc:'',
		
		// 方法定义
		// 初始化表格(清空表格)
		initTable:function(){
			this.$element.empty();
		},
		// 显示表格表头
		showTabelTitle:function(){
			var that=this;
			var tableTitleStart="<thead><tr><th>选中</th>";
			var tableTitleEnd="</tr></thead>";
			var titleRow=tableTitleStart;
			$.each(this.tableTitle,function(key,value){
				titleRow+=("<th title='"+key+"'>"+value+"<img src='"+that.imgSrc+"' id="+key+"></th>");
			});
			titleRow+=tableTitleEnd;
			this.$element.append(titleRow);
		},
		// 显示表格数据
		showTableBody:function(){
			var rowStart="<tr><td><input type='checkbox'/></td>";
			var rowEnd="</tr>";
			var tableRow;
			$.each(this.tableData,function(index,rowData){
				tableRow+=rowStart;
				$.each(rowData,function(key,value){
					tableRow+="<td>"+value+"</td>";
				});
				tableRow+=rowEnd;
			});
			this.$element.append(tableRow);
		},
		// 显示样式
		showStyle:function(){
			// 设置表头以外的偶数行样式
			this.$element.find("tr:even:gt(0)").addClass('evenClass');
			// 设置奇数行的样式
			this.$element.find("tr:odd").addClass('oddClass');
			// 设置表格样式
			this.$element.addClass("tableClass");
		},
		// 绑定事件
		bindEvent:function(){
			var that=this;
			// 为每行数据添加单击事件
			this.$element.find("tr:gt(0)").click(function(){
				if($(this).hasClass('selectedClass')){
					$(this).removeClass("selectedClass").find(':checkbox').prop('checked',false);
				}else{
					$(this).addClass('selectedClass').find(":checkbox").prop('checked',true);
				}
			});
			// 为每行数据添加hover事件
			this.$element.find("tr:gt(0)").hover(
				function(){	$(this).addClass("hoverClass");	},
				function(){	$(this).removeClass('hoverClass'); }
			);
			// 为表头添加排序事件
			this.$element.find('thead th').click(function(){
				// 执行排序这一列的名称
				var sortName=$(this).attr('title');
				// 保存当前单击的列
				var clickName=sortName;
				// 根据当前列进行排序，并对数据进行重绘
				that.dataSort(sortName,clickName);
				// 保存但当前单击的列，以便下一次单击时进行比较
				that.lastClick=clickName;
				// 修改单击列的标题包含的图片
				//console.log($('#'+sortName).attr('src'));	//查看变化
				$('#'+sortName).attr('src',that.currentImageSrc);
				//console.log($('#'+sortName).attr('src'));	//查看变化
			})
		},
		// 数据排序
		dataSort:function(sortName,thisClick){
			// 该列被单击1次进行升序排列
			if(this.lastClick!=thisClick){
				this.tableData.sort(function(prev,next){
					return (prev[sortName]<next[sortName])?-1:(prev[sortName]>next[sortName]?1:0);
				});
				this.sortMode="desc";
				this.currentImageSrc='img/w6.png';
			}else if(this.sortMode=="asc"){
				this.tableData.sort(function(prev,next){
					return (prev[sortName]<next[sortName]?-1:(prev[sortName]>next[sortName]?1:0));
				});
				this.sortMode="desc";
				this.currentImageSrc='img/w6.png';
			}else if(this.sortMode=="desc"){
				this.tableData.sort(function(prev,next){
					return (prev[sortName]>next[sortName]?-1:(prev[sortName]<next[sortName]?1:0));
				});
				this.sortMode="asc";
				this.currentImageSrc='img/w5.png';
			}
			this.show();
		},
		
		show:function(){
			this.initTable();
			this.showTabelTitle();
			this.showTableBody();
			this.showStyle();
			this.bindEvent();
		}
	};
	// 封装对象的方法定义插件
	$.fn.dataListPlugin=function(data){
		// 创建DataList的实体
		var dataList=new DataList(this,data);
		// 调用其方法
		return dataList.show();
	}
	
})(jQuery,window,document);

