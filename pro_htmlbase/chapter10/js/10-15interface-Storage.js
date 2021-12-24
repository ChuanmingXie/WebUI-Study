/* 10-15Web存储-Storage接口定义*/

/* session Storage与Local Storage是该接口的具体实现 */

interface Storage{
	readonly attribute unsigned long length;
	DOMString? Key(unsigned long index);
	getter DOMString? getItem(DOMString key);
	setter creator void setItem(DOMString key,DOMString value);
	deleter void removeItem(DOMString key);
	void clear();
}