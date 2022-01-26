/* 8-3综合复习小应用-问卷调查 */
Vue.component('btngroup',{
	props:{
		fontcolor:{
			type:String,
			default:"#000"
		},
		banned:{
			type:Boolean,
			default:true
		}
	},
	template:'\
		<button class="mybutton" @click="handleClick" :disabled="banned">\
			<slot></slot>\
		</button>',
	methods:{
		getStyle:function(){
			return {
				color:this.fontcolor,
				":active color":'#fff'
			}
		},
		handleClick:function(){
			this.$emit('click');
		}
	}
})