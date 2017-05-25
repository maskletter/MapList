# MapList.js,让object更强大一点

1.初始化Map对象 (new Map)<br>
   /**<br>
			new Map(name, data);<br>
			name: 主键，匹配数据的属性值(可以为'')<br>
			data: 值，可以为任何类型<br>
	*/<br>
  var database = [<br>
		{ name: '张三', age: 19, gender: '男' },<br>
		{ name: '李四', age: 21, gender: '男' },<br>
		{ name: '王五', age: 42, gender: '女' },<br>
		{ name: '赵六', age: 23, gender: '男' },<br>
	];<br>
  var map = new MapList('name', database);<br>
    <br>
2. map.get(url)(url:/张三)<br>
  /**<br>
		通过与浏览器url一样的方式访问json，更快速更具有可读性<br>
	*/<br>
  map.get('/张三/name');<br>
<br>
3. map.add(name, data, url)添加对象<br>
  /**<br>
		更具特色的添加方式<br>
			name: 主键，匹配数据的属性值(可以为'')<br>
			data: 值，可以为任何类型,<br>
			url: 定位到指定位置添加内容(如果指定的路径不存在，会系统生成)<br>
	*/<br>
    <br>
	map.add('', { hello: ['world', 'goodbye'] }, '/new');<br>
	<br>
	map.add('', { hello: 'world' });<br>
  <br>
4. map.has()判断对象是否存在<br>
  /**<br>
		定位判断对象是否存在<br>
			url: 路径(必填)<br>
	*/
    
	map.has('/new');<br>
	map.has('/a/b/c ');<br>
5. map.empty()清除对象<br>
  /**<br>
		清除指定对象<br>
			url: 路径(不填则清空全部对象)<br>
	*/<br>
	map.empty('/张三/age');<br>
  <br>
6. map.clone()复制对象<br>\
   /**<br>
		复制指定对象<br>
			url: 路径(不填则复制全部对象)<br>
				*复制生成的对象，属性的改动不会反射到被复制的元素上<br>
	*/<br>
    <br>
	var _cloneMap = map.clone('/new');<br>
	_cloneMap.empty('/new');<br>
7. map.keys()获取对象键<br>
  /**<br>
		获取指定对象键<br>
			url: 路径(不填则复制全部对象)<br>
	*/<br>
    <br>
	map.keys();<br>
	map.keys('/张三')<br>
