/* 9-1Virtual DOM简介 */
// VNode 定义
export interface VNode {
	tag ? : string;			//当前节点的标签名
	data ? : VNodeData;		//当前节点的数据对象
	children ? : VNode[];
	text ? : string;
	elm ? : Node;
	ns ? : string;
	context ? : Vue;
	key ? : string | number;
	componentOptions: VNodeComponentOptions;
	componentInstance ? : Vue;
	parent ? : VNode;
	raw ? : boolean;
	isStatic ? : boolean;
	isRootInsert ? : boolean;
	isComment: boolean;
}

// VNodeData 定义
export interface VNodeData {

}
