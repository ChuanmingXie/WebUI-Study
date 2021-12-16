interface Storage{
	readonly attribute unsigned long length;
	DOMString? Key(unsigned long index);
	getter DOMString? getItem(DOMString key);
	setter creator void setItem(DOMString key,DOMString value);
	deleter void removeItem(DOMString key);
	void clear();
}