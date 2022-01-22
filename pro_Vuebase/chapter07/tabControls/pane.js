/* 组件2-封装一个Tab标签页控件 */
Vue.component('pane', {
	name: 'pane',
	template: '\
		<div class="pane" v-show="show">\
			<slot></slot>\
		</div>',
	data: function() {
		return {
			show: true
		}
	},
	props: {
		name: {
			type: String
		},
		label: {
			type: String,
			default: ''
		},
		closeable: {
			type: Boolean,
			default: true
		}
	},
	methods: {
		updateNav() {
			this.$parent.updateNav();
		},
		closeNav(){
			this.$parent.closeNav();
		}
	},
	watch: {
		label() {
			this.updateNav();
		}
	},
	mounted() {
		this.updateNav();
	}
})
