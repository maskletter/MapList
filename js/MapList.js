/**
	author: maskletter
	data: 2017.5.15
	version: v0.0.1
	remarks: mapList对象集合(非原生)，拓展object对象，丰富高级功能，路径定位，隐藏与删除
*/
(function(window, document, undefined){

	"use strict";

//重写数组合并事件
function concat(a, b){
	for(var i in b){
		console.log(a)
		a.push(b[i]);
	}
}
//继承元素
function extend(a, b, bool){
	// bool = bool || true;
	if (this instanceof MapList) {
		b = a;
		a = this;
	}
	if (b instanceof Array) {
		concat(a, b);
		return a;
	}
	if (!bool) {
		for(var i in b) {
			if (b.hasOwnProperty(i)) a[i] = b[i];
		}
		return a;	
	}
	for(var i in b){
		if (a.hasOwnProperty(i)) {
			extend(a[i], b[i]);
		}else if (b.hasOwnProperty(i)) {
			a[i] = b[i];
		}
	}
	return a;
}
//数组转换为object
function conver(url){
	var $this = this;
	if (url) $this = format_url($this, url, 'shift', 'generate');
	var obj = {};
	each($this[$this._urlpop], function(k, v){
		obj[k] = v;
	})
	if ($this[$this._urlpop]) $this[$this._urlpop] = obj;
}
//遍历元素
function each(a, f){
	if (this instanceof MapList) {
		f = a;
		a = this;
	}
	for(var i in a){
		if (a.hasOwnProperty(i)) {
			var bool = f(i, a[i]);
			if (bool == false) break;
			else if(bool == true) continue;
		}
	}
}
//格式化url
function format_url($data, url, last, generate){
	if(last == 'generate'){
		generate = last;
		last = undefined;
	}
	url = url.split('/');
	url.shift();
	var _urlpop;
	if(last) _urlpop = url.pop();
	if (generate) {
		each(url, function(i, j){
			if (!$data[j]) {
				$data = undefined;
				return false;
			}else $data = $data[j];
		})
	}else{
		each(url, function(i, j){
			if (!$data[j]) $data = $data[j] = {};
			else $data = $data[j];
		})
	}
	if(last) $data.__proto__._urlpop = _urlpop;
	return $data;
	
}
//MapList主函数
function MapList(k, v){
	this.__proto__.option = {
		hide: {
			_21328173892173: 12321
		}
	}
	this.add(k, v);
}
/**
	添加数组到对象
	k: 主键,
	v: 值,
	url: 路径
*/
MapList.prototype.add = function(k, v, url){
	var $this = this;;
	if (url) $this = format_url(this, url);
	if (typeof(v) == 'object') {
		each(v, function(i, j){
			$this[j[k] || k || i] = j;
		})
	}else {
		$this[k || v] = v;
	}
}
/**
	寻找数组到对象
	url: 路径
*/
MapList.prototype.get = function(url){
	if (!url) return this;
	return format_url(this, url, 'generate');
}
/**
	删除数组到对象
	url: 路径
*/
MapList.prototype.empty = function(url, $d){
	var $this = $d || this;
	if (!url) {
		each($this, function(k){
			delete $this[k];
		})
		return;
	}
	else {
		var $this = format_url($this, url, 'shift', 'generate');
		if ($this instanceof Array) $this.splice($this._urlpop, 1);
		else delete $this[$this._urlpop];
	}
}
/**
	判读是否存在数组到对象
	url: 路径
*/
MapList.prototype.has = function(url){
	var $this = format_url(this, url, 'generate');
	return typeof($this) == 'undefined' ? false : true;
}
/**
	获取mapList对象key集合
	url: 路径
*/
MapList.prototype.keys = function(url){
	if (!url) {
		return getKeys(this);
	}
	var $this = format_url(this, url);
	if (typeof($this) == 'string' || $this instanceof Array) return $this;
	else return getKeys($this);
	function getKeys($t){
		var m = [];
		each($t, function(k){
			m.push(k);
		})
		return m;
	}
}
/**
	复制指定mapList对象
	url: 路径
*/
MapList.prototype.clone = function(url){
	var _ = {}, $this = this;
	if (url) $this = format_url(this, url);
	if ($this instanceof Array || typeof($this) == 'string') _ = $this;
	else each($this, function(k, v){
			if ($this.hasOwnProperty(k)) _[k] = v;
		})
	return new MapList('', _);
}

/**
	继承
*/
MapList.extend = MapList.prototype.extend = extend;

/**
	conver
*/
MapList.prototype.each = each;

window.MapList = MapList;

}(window, document))