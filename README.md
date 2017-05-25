# MapList.js,让object更强大一点

1.初始化Map对象 (new Map)<br>
   /**
			new Map(name, data);
			name: 主键，匹配数据的属性值(可以为'')
			data: 值，可以为任何类型
	*/
  var database = [
		{ name: '张三', age: 19, gender: '男' },
		{ name: '李四', age: 21, gender: '男' },
		{ name: '王五', age: 42, gender: '女' },
		{ name: '赵六', age: 23, gender: '男' },
	];
  var map = new MapList('name', database);
    
2. map.get(url)(url:/张三)<br>
  /**
		通过与浏览器url一样的方式访问json，更快速更具有可读性
	*/
  map.get('/张三/name');

3. map.add(name, data, url)添加对象<br>
  /**
		更具特色的添加方式
			name: 主键，匹配数据的属性值(可以为'')
			data: 值，可以为任何类型,
			url: 定位到指定位置添加内容(如果指定的路径不存在，会系统生成)
	*/
    
	map.add('', { hello: ['world', 'goodbye'] }, '/new');
	
	map.add('', { hello: 'world' });
  
4. map.has()判断对象是否存在<br>
  /**
		定位判断对象是否存在
			url: 路径(必填)
	*/
    
	map.has('/new');
	map.has('/a/b/c ');
5. map.empty()清除对象<br>
  /**
		清除指定对象
			url: 路径(不填则清空全部对象)
	*/
	map.empty('/张三/age');
  
6. map.clone()复制对象<br>\
   /**
		复制指定对象
			url: 路径(不填则复制全部对象)
				*复制生成的对象，属性的改动不会反射到被复制的元素上
	*/
    
	var _cloneMap = map.clone('/new');
	_cloneMap.empty('/new');
7. map.keys()获取对象键<br>
  /**
		获取指定对象键
			url: 路径(不填则复制全部对象)
	*/
    
	map.keys();
	map.keys('/张三')
