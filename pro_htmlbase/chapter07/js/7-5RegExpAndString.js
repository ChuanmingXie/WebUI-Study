/* 敏感字符串替换 */
function replaceContent (replaceText) {
	var replaceReg=/台独|分裂|破坏/g;
	var markStr="**".fontcolor("blue").bold();
	var result=replaceText.replace(replaceReg,markStr);
	document.write(result);
}