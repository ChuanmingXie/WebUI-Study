/* 组件1-封装一个数字输入框控件 */
function isValueNumber(value) {
	var regStr = /(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/;
	return regStr.test(value + '');
}
Vue.component('input-number', {
	template: '\
		<div class="input-number">\
			<input type="text" @keyup="handleSwitch" :value="currentValue" @change="handleChange">\
			<button @click="handleDown" :disable="currentValue<=min">-</button>\
			<button @click="handleUp" :disable="currentValue>=max">+</button>\
		</div>',
	props: {
		max: {
			type: Number,
			default: Infinity
		},
		min: {
			type: Number,
			default: -Infinity
		},
		value: {
			type: Number,
			default: 0
		},
		step: {
			type: Number,
			default: 1
		}
	},
	data: function() {
		return {
			currentValue: this.value
		}
	},
	watch: {
		currentValue: function(val) {
			this.$emit('input', val);
			this.$emit('on-change', val);
		},
		value: function(val) {
			this.updateValue(val);
		}
	},
	methods: {
		updateValue: function(val) {
			if (val > this.max) val = this.max;
			if (val < this.min) val = this.min;
			this.currentValue = val;
		},
		handleDown: function() {
			if (this.currentValue <= this.min) return;
			this.currentValue -= this.step;
		},
		handleUp: function() {
			if (this.currentValue >= this.max) return;
			this.currentValue += this.step;
		},
		handleSwitch:function(e){
			switch (e.keyCode){
				case 38:this.handleUp();
				// e.target.setSelectionRange(0,0);
					break;
				case 40:this.handleDown();
					break;
				default:
					break;
			}
		},
		handleChange: function(event) {
			var val = event.target.value.trim();
			var max = this.max;
			var min = this.min;
			var step=this.step;
			if (isValueNumber(val)) {
				val = Number(val);
				this.currentValue = val;
				if (val > max) {
					this.currentValue = max;
				} else if (val < min) {
					this.currentValue = min;
				}
			} else {
				event.target.value = this.currentValue;
			}
		}
	},
	mounted: function() {
		this.updateValue(this.value);
	}
})
