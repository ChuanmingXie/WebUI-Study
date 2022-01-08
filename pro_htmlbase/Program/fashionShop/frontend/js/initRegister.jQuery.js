/* @by chuanmingxie */
/* 省市区三级菜单 - 封装jQuery插件 */
;
(function($, window, document, undefined) {
	var defaults = [{
		"value": "山东省",
		"text": "山东省",
		"secondMenu": [{
			"value": "济南市",
			"text": "济南市",
			"thirdMenu": [{
					"value": "市中区",
					"text": "市中区"
				},
				{
					"value": "历下区",
					"text": "历下区"
				},
				{
					"value": "天桥区",
					"text": "天桥区"
				},
				{
					"value": "槐荫区",
					"text": "槐荫区"
				},
				{
					"value": "历城区",
					"text": "历城区"
				},
				{
					"value": "长清区",
					"text": "长清区"
				}
			]
		}, {
			"value": "青岛市",
			"text": "青岛市",
			"thirdMenu": [{
					"value": "市南区",
					"text": "市南区"
				},
				{
					"value": "市北区",
					"text": "市北区"
				},
				{
					"value": "四方区",
					"text": "四方区"
				},
				{
					"value": "李沧区",
					"text": "李沧区"
				},
				{
					"value": "城阳区",
					"text": "城阳区"
				},
				{
					"value": "崂山区",
					"text": "崂山区"
				}
			]
		}]
	}, {
		"value": "河北省",
		"text": "河北省",
		"secondMenu": [{
			"value": "石家庄",
			"text": "石家庄",
			"thirdMenu": [{
					"value": "桥西区",
					"text": "桥西区"
				},
				{
					"value": "新华区",
					"text": "新华区"
				},
				{
					"value": "长安区",
					"text": "长安区"
				},
				{
					"value": "裕华区",
					"text": "裕华区"
				},
				{
					"value": "井陉区",
					"text": "井陉区"
				},
				{
					"value": "鹿泉区",
					"text": "鹿泉区"
				},
				{
					"value": "栾城区",
					"text": "栾城区"
				},
				{
					"value": "藁城区",
					"text": "藁城区"
				}
			]
		}, {
			"value": "廊坊市",
			"text": "廊坊市",
			"thirdMenu": [{
					"value": "安次区",
					"text": "安次区"
				},
				{
					"value": "广阳区",
					"text": "广阳区"
				},
				{
					"value": "霸州市",
					"text": "霸州市"
				},
				{
					"value": "香河县",
					"text": "香河县"
				},
				{
					"value": "三河市",
					"text": "三河市"
				},
				{
					"value": "永清县",
					"text": "永清县"
				},
				{
					"value": "固安县",
					"text": "固安县"
				},
				{
					"value": "文安县",
					"text": "文安县"
				}
			]
		}]
	}];

	function CascadingMenu(element, options) {
		this.$element = element;
		this.settings = $.extend(defaults, options);
		this.firstMenu = null;
		this.secondMenu = null;
		this.thirdMenu = null;
	}
	CascadingMenu.prototype = {
		initMenu: function() {
			this.initFirstMenu();
			this.bindSelectChangeEvent();
			this.bindSceondChangeEvent();
			return $(this.$element)
				.append(this.firstMenu)
				.append(this.secondMenu)
				.append(this.thirdMenu);

		},
		initFirstMenu: function() {
			this.firstMenu = $("<select></select>");
			this.firstMenu.append($("<option value='请选择'>请选择-</option>"));
			for (var i = 0; i < this.settings.length; i++) {
				var option = $("<option></option>");
				option.append(this.settings[i].text);
				option.val(this.settings[i].value);
				this.firstMenu.append(option);
			}
			return this.firstMenu;
		},
		bindSelectChangeEvent: function() {
			var that = this;
			that.secondMenu = $("<select></select>");
			that.secondMenu.append($("<option value='请选择'>-请选择-</option>"));
			that.firstMenu.on("change", function() {
				that.secondMenu.empty();
				that.secondMenu.append($("<option value='请选择'>-请选择-</option>"));
				var index = this.selectedIndex - 1;
				var secondList = that.settings[index].secondMenu;
				for (var i = 0; i < secondList.length; i++) {
					var option = $("<option></option>")
					option.append(secondList[i].text);
					option.val(secondList[i].value);
					that.secondMenu.append(option);
				}
			});
			return that.secondMenu;
		},
		bindSceondChangeEvent: function() {
			var that = this;
			that.thirdMenu = $("<select></select>");
			that.thirdMenu.append($("<option value='请选择'>-请选择-</option>"));
			that.secondMenu.on("change", function() {
				that.thirdMenu.empty();
				that.thirdMenu.append($("<option value='请选择'>-请选择-</option>"));
				var index1 = $('select').get(0).selectedIndex - 1;
				var index2 = $('select').get(1).selectedIndex - 1;
				var thirdList = that.settings[index1].secondMenu[index2].thirdMenu;
				for (var i = 0; i < thirdList.length; i++) {
					var option = $("<option></option>");
					option.append(thirdList[i].text);
					option.val(thirdList[i].value);
					that.thirdMenu.append(option);
				}
			});
			return that.thirdMenu;
		}
	};

	$.fn.cascadingMenuPlugins = function(opts) {
		console.log(opts);
		var cascadingMenu = new CascadingMenu(this, opts);
		return cascadingMenu.initMenu();
	}
})(jQuery, window, document);

$(function(){
	$(".vacation:first").empty().cascadingMenuPlugins(null);
});
