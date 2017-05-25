# MapList.js,让object更强大一点

<style type="text/css">
		* { margin: 0px;padding: 0px; }
		html{ background: #ecf0f5; }
		#container{ padding: 30px;box-sizing: border-box; }
		#container h2{ color: #666; }
		hr{ border: none;border-top: 1px solid #ccc;margin: 20px 0; }
		.quotes{
			background: #f8f8f8;border-left: 4px solid #666;padding: 20px 20px 20px 40px;box-sizing: border-box;position: relative;
			box-shadow: 0 2px 3px rgba(0, 0, 0, 0.125);
		}
		.quotes .list-index{ position: absolute;left: 20px; }
		.quotes small{ font-size: 14px;margin-left: 20px; }
		.code{ background: #f6f6f6;padding: 20px;margin: 20px 0;display: none;  }
		  .CodeMirror { height: auto; border: 1px solid #ddd;box-shadow: 0 2px 3px rgba(0, 0, 0, 0.125);margin: 10px 0 20px; }
		  .CodeMirror-scroll { margin-left: 0px;margin-right: 0px !important;overflow: auto !important; }
		  .CodeMirror pre { padding-left: 7px; line-height: 1.25; }
		.content{ overflow: hidden; }
		.content > *{ width: calc(50% - 10px);float: left;box-shadow: 0 2px 3px rgba(0, 0, 0, 0.125);background: white;border: 1px solid #ddd;margin: 10px 0 20px; }
		.content > .json{ float: right;padding: 20px;box-sizing: border-box; }
		.content > .json .string { color: green; }
	    .content > .json .number { color: darkorange; }
	    .content > .json .boolean { color: blue; }
	    .content > .json .null { color: magenta; }
	    .content > .json .key { color: red; }

	</style>
