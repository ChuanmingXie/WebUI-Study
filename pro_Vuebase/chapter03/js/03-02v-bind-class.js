/* 3-2绑定class的处理方式-对象语法|数组语法|组件方式 */

/*在使用vue时最常见的问题就是:
1.el属性忘记"#";
2.而数组忘记[] 
3.忘记为div设置id */

Vue.component('my-component', {
	template: '<p class="article">一些文本</p>'
});
var app8 = new Vue({
	el: '#app8',
	data: {
		isActive: true
	}
});

var app7 = new Vue({
	el: '#app7',
	data: {
		size: 'large',
		disabled: true
	},
	computed: {
		classArry: function() {
			return [
				'btn', {
					['btn-' + this.size]: this.size != '',
					['btn-disabled']: this.disabled
				}
			]
		}
	}
})

var app6 = new Vue({
	el: '#app6',
	data: {
		isActive: true,
		errorCls: 'error'
	}
});

var app5 = new Vue({
	el: '#app5',
	data: {
		isActive: true,
		activeCls: 'active',
		errorCls: 'error'
	}
});

var app4 = new Vue({
	el: '#app4',
	data: {
		activeCls: 'active',
		errorCls: 'error'
	}
});

var app3 = new Vue({
	el: '#app3',
	data: {
		isActive: true,
		error: null,
	},
	computed: {
		classname: function() {
			return {
				active: this.isActive && !this.error,
				'text-fail': this.error && this.error.type === 'fail'
			}
		}
	}
});

var app2 = new Vue({
	el: '#app2',
	data: {
		isActive: true,
		isError: false
	}
});
var app = new Vue({
	el: '#app',
	data: {
		IsActive: true
	}
});
