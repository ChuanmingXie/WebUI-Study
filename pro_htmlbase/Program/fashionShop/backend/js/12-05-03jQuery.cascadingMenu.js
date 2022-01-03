/* @by chuanmingxie */
/* 在所有的添加页中 引入 创建级联菜单 */

;(function($,window,document,undefined){
	var defaults=[{
		"text":"男装",
		"value":"男装",
		"subType":[
			{"text":"西装","text":"西装"},
			{"text":"风衣","text":"风衣"},
			{"text":"夹克","text":"夹克"}]
		},
		{
		"text":"女装",
		"value":"女装",
		"subType":[
			{"text":"上衣","text":"上衣"},
			{"text":"裙装","text":"裙装"},
			{"text":"外衣","text":"外衣"}]
		},
		{
		"text":"童装",
		"value":"童装",
		"subType":[
			{"text":"卡通","text":"卡通"},
			{"text":"运动","text":"运动"},
			{"text":"纹案","text":"纹案"}]
			
		}];
	
	function CascadingMenu(element,options){
		this.$element=element,
		this.settings=$.extend(defaults,options);
		this.firstMenu=null;
		this.secondMenu=null;
	}
	CascadingMenu.prototype={
		initMenu:function(){
			this.initFirstMenu();
			this.bindSelectChangeEvent();
			return $(this.$element).append(this.firstMenu).append(this.secondMenu);
		},
		initFirstMenu:function(){
			// 创建级联菜单第一项
			this.firstMenu=$("<select></select>");
			this.firstMenu.append($("<option value='请选择'>--请选择--</option>"))
			for (var i = 0; i < this.settings.length; i++) {
				var option=$("<option></option>");
				option.append(this.settings[i].text);
				option.val(this.settings[i].value);
				this.firstMenu.append(option);
			}
			return this.firstMenu;
		},
		bindSelectChangeEvent:function(){
			// 保存this对象
			var that = this;
			that.secondMenu=$("<select></select>");
			that.secondMenu.append($("<option value='请选择'>--请选择--</option>"));
			that.firstMenu.on("change",function(){
				that.secondMenu.empty();
				that.secondMenu.append($("<option value='请选择'>--请选择--</option>"));
				var index=this.selectedIndex-1;
				var subType=that.settings[index].subType;
				for (var i = 0; i < subType.length; i++) {
					var option=$("<option></option>");
					option.append(subType[i].text);
					option.val(subType[i].value);
					that.secondMenu.append(option);
				}
			});
			return that.secondMenu;
		}
	};
	
	/* 在自定义插件cascadingMenuPlugin 中创建cascadingMenu对象 */
	$.fn.cascadingMenuPlugins=function(opts){
		console.log(opts);
		var cascadingMenu=new CascadingMenu(this,opts);
		return cascadingMenu.initMenu();
	}
})(jQuery,window,document);