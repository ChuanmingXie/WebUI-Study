/* 组件2-封装一个Tab标签页控件 */
Vue.component('tabs', {
	template: '\
		<div class="tabs">\
			<div class="tabs-bar">\
				<div :class="tabCls(item)"\
					v-for="(item,index) in navList"\
					@click="handleChange(index)">\
					{{item.label}}\
				</div>\
			</div>\
			<div class="tabs-content">\
				<slot></slot>\
			</div>\
		</div>',
	props: {
		value: {
			type: [String, Number]
		}
	},

	data: function() {
		return {
			currentValue: this.value,
			navList: []
		}
	},
	methods: {
		tabCls: function(item) {
			return [
				'tabs-tab',
				{
					'tabs-tab-active': item.name === this.currentValue
				}
			]
		},
		handleChange: function(index) {
			var nav = this.navList[index];
			var name = nav.name;
			// 改变当前选中的tab，并触发下面的watch
			this.currentValue = name;
			// 更新value
			this.$emit('input', name);
			// 触发一个自定义事件，供父级使用
			this.$emit('on-click', name);
		},
		getTabs() {
			// 通过遍历组件，得到所有的pane组件
			return this.$children.filter(function(item) {
				return item.$options.name === 'pane';
			});
		},
		updateNav() {
			this.navList = [];
			// 设置对this的引用，在function回调里，this执行的并不是Vue实例
			var that = this;
			this.getTabs().forEach(function(pane, index) {
				that.navList.push({
					label: pane.label,
					name: pane.name || index
				});
				// 如果没给pane设置name，默认使用它的索引
				if (!pane.name) pane.name = index;
				if (index === 0) {
					if (!that.currentValue) {
						that.currentValue = pane.name || index;
					}
				}
			});
			this.updateStatus();
		},
		updateStatus() {
			var tabs = this.getTabs();
			var that = this;
			tabs.forEach(function(tab) {
				return tab.show = tab.name === that.currentValue;
			})
		}
	},
	watch: {
		value: function(val) {
			this.currentValue = val;
		},
		currentValue: function() {
			this.updateStatus();
		}
	}
})
