/* 03-06实战练习-购物车结算-Vue|jQuery*/
var app = new Vue({
	el: '#app',
	data: {
		list: [{
			type: '电子产品',
			id: '1',
			product: [{ id: 1, name: 'iphone 13', price: 6188, count: 1, rowspanShow: true },
			{ id: 2, name: 'iPad Pro', price: 588, count: 1, rowspanShow: false },
			{ id: 3, name: 'MacBook Pro', price: 21688, count: 1, rowspanShow: false }]
		}, {
			type: '生活用品',
			id: '2',
			product: [{ id: 1, name: '餐桌用纸', price: 23, count: 1, rowspanShow: true },
			{ id: 2, name: '晾衣架', price: 68, count: 1, rowspanShow: false },
			{ id: 3, name: '洗菜盆', price: 20, count: 1, rowspanShow: false }]

		}, {
			type: '蔬菜瓜果',
			id: '3',
			product: [{ id: 1, name: '苹果', price: 35, count: 1, rowspanShow: true },
			{ id: 2, name: '黄瓜', price: 20, count: 1, rowspanShow: false },
			{ id: 3, name: '毛豆', price: 8, count: 1, rowspanShow: false }]
		}],
		checkItem: []
	},
	computed: {
		totalPrice: function () {
			var total = 0;
			let arrTotal = [];
			/* var unique = Array.from(new Set(this.checkItem))
			this.list.filter(item => {
				unique.includes((item.id - 1)*3 + item.product.id) && arr2.push(item);
			}); */


			for (var i = 0; i < this.list.length; i++) {
				var item = this.list[i];
				for (var j = 0; j < item.product.length; j++) {
					var totalProduct = item.product[j];
					if (this.checkItem.includes((item.id - 1) * 3 + totalProduct.id - 1)) {
						console.log((item.id - 1) * 3 + totalProduct.id - 1);
						total += totalProduct.price * totalProduct.count;
					}
				}
			}
			/* 此处做了一个千位分隔符 */
			return total.toString().replace(/\B(?=(\d{3})+$)/g, ",");
		},
		rowspanNum: function () {
			return function (i) {
				return this.list[i].product.length
			}
		}
	},
	methods: {
		handleReduce: function (i, j) {
			if (this.list[i].product[j].count == 1) return;
			this.list[i].product[j].count--;
		},
		handleAdd: function (i, j, num) {
			this.list[i].product[j].count += num;
		},
		handleRemove: function (i, j) {
			this.list[i].product.splice(j, 1);
			if (this.list[i].product.length > 0) {
				// Vue中修改数组中某个对象的属性值 Vue.set()<==>this.$set()
				this.$set(this.list[i].product[0], 'rowspanShow', true);
			}
		},
		AddChecked: function (e) {
			var that = this;
			$.each($(e.target).parents("tbody").children().children().has("input[type=checkbox]"), function (i, element) {
				// console.log("测试：" + $(element).children().prop('checked'));
				if ($(element).children().prop('checked')) {
					if (that.checkItem.indexOf(i) < 0) {
						that.checkItem.push(i);
					}
				} else {
					/* 删除指定元素没那么简单，需要先找到下标，在进行删除 */
					// that.checkItem.pop(id);	//错误，无法删除指定元素，pop()无参
					var indexdel = that.checkItem.findIndex(item => item == i);
					console.log(indexdel)
					if (indexdel > -1) {
						that.checkItem.splice(indexdel, 1);
					}
				}
			});
			console.log(that.checkItem);
		},
		handleSelectAll: function () {
			this.checkItem.splice(0, this.checkItem.length);
			var that = this;

			$("input[type='checkbox']").prop('checked', true);
			$("input[type='checkbox']").each(function (index, elememt) {
				if ($(elememt).prop('checked')) {
					if (that.checkItem.indexOf(index) < 0) {
						that.checkItem.push(index);
					}
				}
			});
			console.log(that.checkItem);
		}
	}
});