CSS:
	定义:层叠样式表，又叫级联样式表，简称样式表;用于HTML文档中元素的样式定义。
	特点:1.实现将内容与表现相分离。2.提高代码的可重用性和可维护性。
一、HTML与CSS的关系：
	HTML用于构建网页的结构;CSS负责构建HTML页面元素的样式;HTML是页面的内容组成，CSS是页面的表现。
二、CSS样式表：
	1.内联方式:将样式定义在单个的HTML元素中;
		color:red; background-color:green; font-size:24px; 文本颜色的样式属性，背景颜色的样式属性，文本大小的样式属性。
		<div style="background-color: red; color: blue; font-size: 100px;">标题1</div>
	2.内部样式表:将样式定义在HTML页的头元素中;
		特点:
			1.应用范围为整个页面而不是某一个别元素,能够提升可重用性和可维护性，同时体现内容与表现相分离;
			2.在style元素中添加样式规则,可以定义多个样式规则,每个样式规则有两个部分：选择器和样式声明
				<head>
					<meta charset="utf-8" />
					<title></title>
					<style> /*内部样式表*/
						h1{
							...
						}
						p{
							color: yellow;
							background-color: black;
							font-size: 24px;
						}		
					</style>
				</head>
				<body text="blue" bgcolor="silver">				
					<h1><marquee>标题1</marquee></h1>
					<div style="background-color: black; color: yellow; font-size: 48px;">div1</div> /*内联方式*/
					<p>段落2</p>
				</body>
	3.外部样式表:将样式定义在一个外部CSS文件中(.css文件)，由HTML页面引用样式表文件。
		(1)创建单独的样式表文件(*.css),在该文件中可以编写若干样式规则
		(2)在需要使用该样式表文件的页面上，引入样式表文件，在页面的head元素中添加一下代码:<link rel="stylesheet" href="样式表文件的url"/>
			<link rel="stylesheet" href="css/style.css" />			
三、CSS语法
	1.CSS语法规范：
		内联规则:由样式声明组成.
		样式表(内部样式表或者外部样式表):由多个样式表规则组成，每个样式规则由两个小部分组成:选择器和声明.
	2.CSS样式表特征:
		(1)继承性:所谓继承性是指书写CSS样式表时，子标签会继承父标签的某些样式，如文本颜色和字号，想要设置一个可继承的属性，只需要将它应用于父元素即可。子元素可以继承父元素的样式(text-,font-,line-开头&&color的属性)
			<div style="color: pink; font-size: 20px;">
				<p>段落</p>
			</div>
		(2)层叠性:CSS处理冲突的能力(样式冲突，遵循就近原则).
			注意:层叠性只有在多个选择器选中"同一个标签"，然后又设置了"相同的属性"，才会发生层叠性。
		(3)优先级:样式定义冲入(重复)时，会按照不同样式的优先级来应用样式。
			低:浏览器缺省设置
			中:外部样式表或内部样式表(就近原则)
			高:内联样式
			!important:调整显示样式属性(不是选择器)的优先级，只要都以!important为主
			注意:继承的样式和自定义样式冲突时，永远都是以类选择器优先。		
		(4)例子：https://github.com/ZichengQu/Java/blob/CSS/Others/CSS_day01/index.html
			<!DOCTYPE html>
			<html>
				<head>
					<meta charset="utf-8" />
					<title></title>
					<!--<link rel="stylesheet" href="css/style.css" />-->
					<style >			
						.pink{/*自定义*//*类选择器*/
							color: pink;
							font-size: 20px;
							background-color: black;
							font-weight: 1000; /*加粗*/
						}
						.orange{/*!important*/
							color: orange!important;
						}
						div{
							color: aqua;
							font-size: 20px;
						}
						div{/*就近原则*/		
							font-size: 50px;
						}
					</style>
				</head>
				<body >						
					<div >
						<p>段落1</p> <!-- color: aqua; font-size: 50px; -->
					</div>
					<div class="pink">
						<p>段落2</p> <!-- .pink -->
					</div>	
					<div class="pink" style="color: red;">
						<p>段落3</p> <!-- 内联优先级最高，所以是red -->
					</div>
					<div class="orange" style="color: red;">
						<p>段落4</p> <!-- !important优先级最高，所以是orange -->
					</div>
					<div class="orange pink" style="color: red;"> <!-- 多类选择器 -->
						<p>段落5</p> <!-- !important优先级最高，所以是orange -->
					</div>
				</body>
			</html>
四、CSS基础选择器
	1.选择器的作用:规范了页面中哪些元素能够使用定义好的样式，同时也帮助我们去匹配页面上的元素
	2.选择器
		(1)通用选择器(了解)
			1)作用:匹配页面上所有的元素
			2)语法:*{样式声明;}
				<style >
					*{
						...
					}
				</style>
			3)注意:效率低，尽可能通过继承性去代替通用选择器的效果，它常用来设置一些默认样式。
		(2)元素选择器(标签选择器，标记选择器)(重点)
			1)作用:匹配页面上某一指定元素
			2)语法:元素{}				
				div{color:pink;}
				p{font-size:20px;}
		(3)类选择器(重点)
			1)作用:允许元素使用附带的class属性值，对选择器进行引用
			2)语法:以.作为开始，类名以"字母，数字，_"组成,不能以数字开始，     .类名{样式声明;}
			3)多类选择器:
				作用:可以让一个元素同时引用多个类选择器，中间用空格分开即可
		(4)结合元素选择器
			语法:元素选择器.类选择器{样式声明;}
		(5)id选择器(重点)
			作用:只匹配指定id值的元素
			语法:#id{样式声明;}
			例子：	
				#xr{
					background-color: pink;
				}				
		(6)群组选择器
			作用:选择器声明以逗号隔开的选择器列表，其目的是为了声明一组选择器中的公共样式。
			语法:选择器1，选择器2，选择器3...{样式声明;}
		(7)后代选择器
			作用:又称为包含选择器，用于选择作为某元素后代的元素(可选儿子，孙子，重孙子)
			注意:选择器一端包含两个或多个用空格分隔的选择器
			语法:
				选择器1 选择器2{样式声明;} <!-- 如果是自定义的就写. -->
		(8)子代选择器
			作用:选择某个元素的子元素(只选亲儿子)
			语法:选择器1>选择器2(样式声明;)
		(9)例子:https://github.com/ZichengQu/Java/blob/CSS/Others/CSS_day01/css2.html
			<!DOCTYPE html>
			<html>
				<head>
					<meta charset="UTF-8">
					<title></title>
					<style >
						.red{
							color: red;
							font-size: 20px;
							font-weight: bold;
						}
						p.red{/*结合元素选择器*/
							font-size: 200px;
						}
						#xr{/*id选择器*/
							background-color: pink;
						}
						#xr,.red,p.red{/*群组选择器*/
							...
						}
						h1 .a{/*后代选择器,h1后面要有空格*/
							color: red;
						}
						.nav1 li{/*后代选择器*/
							color: blue;
						}
						.nav2>li{/*子代选择器*/
							color: green;
						}
					</style>
				</head>
				<body>
					<div class="red">熊大</div> <!-- 类选择器 -->
					<div id="xr"> 熊二</div> <!-- id选择器 -->
					<p>小强</p> <!-- 无属性,不是结合元素选择器 -->
					<p class="red">光头强</p> <!-- 结合元素选择器 -->
					<h1> 
						<p class="a">演示p</p> 
						<span class="a">演示span</span>
					</h1>
					
					<ul class="nav1"> <!-- 后代选择器,所有li均变颜色 -->
						<li>一级菜单</li>
						<ul>
							<li>二级菜单</li>
							<li>二级菜单</li>
							<li>二级菜单</li>
						</ul>
					</ul>
					
					<ul class="nav2">
						<li>一级菜单</li> <!-- 子代选择器,只有这个li变颜色 -->
						<ul>
							<li>二级菜单</li>
							<li>二级菜单</li>
							<li>二级菜单</li>
						</ul>			
					</ul>						
				</body>
			</html>
		(10)伪类选择器:
			作用:用于向某种选择器添加特殊的效果;
			语法:		选择器:伪类选择器{样式声明;}
			分类:
				1.链接伪类:
					link 匹配超链接未被访问时的状态。
					visited 匹配超链接被访问过的状态(只能定义字体颜色)。
				2.动态伪类:
					hover 匹配鼠标悬停在html元素时的状态。
					active 匹配html元素未激活时的状态(点击即被激活)。
					focus 匹配html元素获取焦点时的状态(文本框与密码框)。
				3.书写顺序:link>visited>hover>active
				4.例子:https://github.com/ZichengQu/Java/blob/CSS/Others/CSS_day02/index.html
					<head>
						<meta charset="utf-8" />
						<title></title>
						<style>
							a{/*去掉超链接的下划线*/
								text-decoration: none;
							}
							a:link{/*匹配超链接未被访问时的状态*//*Ctrl+Shift+Delete删除浏览器缓存*/
								color: darkgray;
							}
							a:visited{/*匹配超链接被访问过的状态(只能定义字体颜色)*/
								color: dark;
							}
							a:hover{/*匹配鼠标悬停在html元素时的状态*/
								color: red;
								font-size: 20px;
							}
							a:active{/*匹配html元素未激活时的状态*/
								color: yellow;
								font-size: 100px;
							}
							input:focus{/*匹配html元素获取焦点时的状态*/
								color: red;
								background-color: yellow;
							}
						</style>
					</head>
					<body>
						<a href="#">文本</a>
						<br />
						用户名:<input type="text" />
					</body>
		(11)选择器优先级顺序:
			选择器类型  	 权值(不进位，只在本位一直相加)
			元素选择器:		0,0,0,1
			类选择器:		0,0,1,0
			伪类选择器:		0,0,1,0
			ID选择器:		0,1,0,0
			内联样式:		1,0,0,0
			例子:https://github.com/ZichengQu/Java/blob/CSS/Others/CSS_day02/index2.html
				<head>
					<meta charset="UTF-8">
					<title></title>
					<style>
						.h{/*0,0,1,0*/
							font-size: 50px;
							color: red;
						}
						p{/*0,0,0,1*/
							font-size: 20px;
							color: yellow;
						}
						div p{/*0,0,0,2*/
							font-size: 50px;
							color: blue;
						}
					</style>
				</head>
				<body>
					<div>
						<p class="h">文本</p><!--显示的是h的属性-->
					</div>		
				</body>
五、尺寸与边框
	1.尺寸属性:
		(1)作用:尺寸属性一般用于设置元素的宽度和高度，单位一般为像素和百分比。
		(2)宽度属性:width,min-width,max-width
		(3)高度属性:height,min-height,max-height
		(4)注意:
			1)不是所有的元素都支持修改尺寸;
			2)支持修改尺寸属性的如下:块级元素;非块级元素中存在width,height属性的html元素(table,img,input).
			例子:
				<style>
					input{
						width: 100px;
						height: 100px;
					}
					span{
						background-color: blueviolet;
						color: bisque;
						width: 200px;/*无变化，因为行内元素不能设置高和宽*/
						height: 200px;				
					}
				</style>
	2.溢出:使用尺寸控制元素大小时，如果内容所需的控件大小大于元素本身的空间，会导致内容溢出。
		处理溢出的属性:
			overflow:当内容溢出元素时如何处理
			overfolw-x:横向溢出处理
			overflow-y:纵向溢出处理
		取值:
			visible:默认值，溢出可见。
			hidden:溢出隐藏。
			scroll:溢出滚动,会为父元素添加滚动条，通过拖动滚动条来查看完整内容，该属性不论内容是否溢出，都会添加水平和垂直双方向的滚动条。
			auto:当溢出的时候，才会出现滚动框，否则不出现。
	3.边框
		(1)简写方式:
			border: width style color
			width:边框粗细，以px为单位
			style:solid(实线),dotted(点虚线),dashed(虚线),double(双实线)
			color:边框颜色
			作用:控制元素的上下左右四个部分的粗细，样式和颜色。
		(2)单边定义:
			border-top/bottom/left/right:width style color
		(3)单属性定义:
			border-width/style/color:值
			作用:控制4条边的对应属性。
		(4)单方向单属性定义:
			border-top/bottom/left/right-width/style/color:值		
		(5)例子:https://github.com/ZichengQu/Java/blob/CSS/Others/CSS_day02/index3.html
			<head>
				<meta charset="UTF-8">
				<title></title>
				<style>
					.box1{
						width: 200px;
						min-width: 150px;/*当width<min-width时,以min-width为准*/
						height: 200px;
						background-color: yellow;
						/*overflow: visible;*//*默认值，溢出可见*/
						/*overflow: hidden;*//*溢出隐藏*/
						/*overflow: scroll;*//*溢出滚动*/
						overflow: auto;/*当溢出的时候，才会出现滚动框，否则不出现*/
						/*
						border-width: 5px;
						border-color: #8A2BE2;
						border-style: solid; dotted虚线，dashed虚线,double双实线
						*/
						border: 5px red solid;/*简写方式*/
					}
					.box2{
						width: 100px;
						height: 500px;
						background-color: pink;
						border-bottom: 5px solid blueviolet;/*单边定义*/
						border-width: 5px 10px 15px 20px;
						border-style: solid double;
					}			
				</style>
			</head>
			<body>
				<div class="box1">
					<div class="box2"></div>
				</div>		
			</body>
		(6)注意:
			1)边框颜色可取值为transparent
			2)取消边框显示
				border:0/none;	border-top/bottom/left/right:0/none;
	4.轮廓
		(1)轮廓定义:绘制于元素边框周围的一条线，位于边框边缘的外围，可起到突出元素的作用。
		(2)属性:
			outline:width style color;
			outline-width:宽度
			outline-style:样式
			outline-color:颜色
			常用:outline:0/none;
		(3)例子:https://github.com/ZichengQu/Java/blob/CSS/Others/CSS_day02/index4.html
			<head>
				<meta charset="UTF-8">
				<title></title>
				<style>
					input{/*取消显示边框*/
						border: none;
						outline: 0;
					}
					#username{
						/*border: 0;*/
						border-bottom: 5px solid blue;/*显示下边框*/
					}
				</style>
			</head>
			<body>
				用户名:<input type="text" id="username" /> <!-- 只显示下边框  -->
			</body>
	5.京东登陆框demo:https://github.com/ZichengQu/Java/blob/CSS/Others/CSS_day02/index5.html
	
六、盒子模型:
	1.框模型:
		框:盒子(box),页面元素皆为框。
		框模型:(box-model)定义了元素处理内容，内边距，外边距，边框的一种方式。
		框模型的宽度、高度和面积:
			元素的width和height属性指定了内容区域的宽度和高度;
			增加内边距、边框和外边框不会影响内容区域的大小，但会增加元素框的总尺寸;
			元素的实际宽度=左右外边距+左右边框+左右内边距+width(元素的宽度);
			元素的实际高度=上下外边距+上下边框+上下内边距+height(元素的宽度);
	2.外边距:
		(1)外边距定义:围绕在元素边框周围的空白区域(当前盒子与其它盒子之间的距离)称为外边距;
		(2)作用:控制元素与元素之间的距离;移动元素位置;
		(3)属性:
		margin:四个方向的外边距
		margin-top/bottom/left/right:(上/下/左/右)外边距
		取值:px(像素),%(百分比),auto(自动),负值
		(4)取值-auto
			左右方向设置为auto时，允许元素在其父元素中水平居中对齐，前提必须设置该元素的宽度。
		(5)取值-负值
			移动元素，向着反方向移动; margin-left:-10; 向左移动10px
		(6)外边距的简洁写法:
			margin:value;四个方向外边距
			margin:value1 value2;	上下、左右
			margin:value2 value2 value3; 	上、左右、下
			margin:value1 value2 value3 value4;	上右下左
			margin:0 auto;水平居中
		(7)页面中具备默认外边距的元素:h#,p,ol,ul,div.
			清楚默认外边距:声明margin属性可以覆盖默认样式。 *{margin=0;}
		(8)外边距合并:当两个相邻的垂直外边距相遇时，它们将形成"一个"外边距，合并后的外边距的高度是两个外边距中较大者。
		(9)外边距溢出:在某种特殊场合下，给子元素设置外边距时，效果却作用在父元素的外边距上。
			特殊场合:父元素不设置边框时，为父元素中的第一个子元素设置上外边距时;或为最后一个子元素设置下外边距时.
			解决方案:为父元素添加边框(父元素高度会发生改变);为父元素添加内边距来取代子元素外边距(影响元素的尺寸).
			例子:
				<head>
					<meta charset="utf-8" />
					<title></title>
					<style>
						div.box1{
							width: 200px;
							height: 100px;
							background-color: yellow;
							/*border: 1px solid blue;加border，使子div不影响父外边距*/
							padding-top: 100px;/*内边距*/
						}
						div.box2{
							/*margin-top: 100px;*/
							width: 100px;
							height: 100px;
							background-color: pink;
						}
					</style>
				</head>
				<body>
					<div class="box1">
						<div class="box2"></div> <!-- 当紧挨着的时候，子div外边距溢出，会影响父div的外边距，并不改变它们之间的相对位置。-->
					</div>	
				</body>
	3.内边距
		(1)定义:内容区域与边框之间的空间，会扩大元素边框所占用的区域
		(2)属性:
			1)padding-top/bottom/left/right:px/%;
			2)内边距的简洁写法:
				padding:value;	四个方向外边距
				padding:value1 value2;	上下、左右
				padding:value2 value2 value3; 	上、左右、下
				padding:value1 value2 value3 value4;	上右下左
	4.行内元素盒模型:
		行内元素无法设置高、宽、垂直外边距、垂直内边距和上下两侧的边框，可以设置水平内外边距和左右两侧的边框。
		例子:https://github.com/ZichengQu/Java/blob/CSS/Others/CSS_day03/%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0%E7%9B%92%E6%A8%A1%E5%9E%8B.html
			<head>
				<meta charset="UTF-8">
				<title></title>
				<style>
					.s1{/*内容区、内边距、边框、外边距*/
						width: 200px;/*行内元素可以设置width和height(不会影响布局)*/
						height: 200px;
						padding-left: 100px;/*设置水平内边距，行内元素可以设置水平方向的内边距(不合并，叠加),可以设置垂直内边距(不会影响布局)*/
						padding-right: 100px;
						border: 1px solid blue;/*内联元素(行内元素)可以设置边框，但是垂直的边框不会影响到页面的布局*/
						margin-left: 100px;/*设置水平外边距，行内元素可以设置水平方向的外边距(不合并，叠加),可以设置垂直外边距(不会影响布局)*/
						margin-right: 100px;
					}
					.box1{
						width: 100px;
						height: 100px;
						background-color: red;
					}
				</style>
			</head>
			<body>
				<span class="s1">我是一个span</span>
				<span class="s1">我是一个span</span>
				<span class="s1">我是一个span</span>
				<span class="s1">我是一个span</span>
				<div class="box1"></div>
			</body>
	5.diaplay和visibility:
		例子:https://github.com/ZichengQu/Java/blob/CSS/Others/CSS_day03/display%E5%B1%9E%E6%80%A7.html
			<head>
				<meta charset="UTF-8">
				<title></title>
				<style>
					/*
					 * 将一个内联元素(行内元素)变成块元素，通过display样式可以修改元素的类型;
					 * 为其设置宽和高可以检测是否转换成功。
					 * 可选值:
					 * 	inline:可以将一个元素作为行内元素显示;
					 * 	inline-block:可以将一个元素作为行内块元素显示;既可以设置高度，又不会独占一行(img);
					 * 	block:可以将一个元素设置为块元素显示;
					 * 	none:不显示元素，并且元素不会在页面中继续占有位置。
					 */
					/*
					 * visibility:可以用来设置元素的隐藏和显示状态
					 * 可选值:
					 * 	visible:默认值，元素默认会在页面显示
					 *  hidden:元素隐藏不显示,位置保留
					 */
					a{
						background-color: yellow;
						border: 1px solid blue;				
						display:block;/*将一个元素设置为块元素显示*/
						width: 200px;
						height:200px;
						visibility: hidden;
					}
					.box1{
						width: 100px;
						height: 100px;
						background-color: pink;
						display: none;/* none:不显示元素，并且元素不会在页面中继续占有位置。*/
					}
					.box2{
						width: 100px;
						height: 100px;
						background-color: red;
					}
					.box3{
						width: 100px;
						height: 100px;
						background-color: yellow;
					}
				</style>
			</head>
			<body>
				<a href="#">我是一个超链接</a>	
				<div class="box2"></div>
				<div class="box1"></div>
				<div class="box3"></div>
			</body>
七、背景属性:https://github.com/ZichengQu/Java/blob/CSS/Others/CSS_day03/index2.html
	1.背景颜色
		属性:background-color
		取值:任意合法的颜色值可取值transparent
		注意:背景颜色会填充到元素的内容区域，内边距区域以及边框区域
	2.背景图像
		属性:background-image
		取值:url(图像的url)		background-image: url(img/SCAR-L.jpg);
	3.背景平铺
		属性:background-repeat
		取值:no-repeat,repeat-x,repeat-y,默认值是repeat
	4.背景图片尺寸
		属性:background-size
		取值:px,%,cover(),contain()		ps:对于px和%，尽量只改一个值，防止缩放失真。
			 value1px value2px	具体数值px，value1表示背景图像的宽度，value2表示背景图像的高度;
			 value1% value2%	以元素尺寸的占比决定背景图的尺寸;
			 cover:把背景图扩展至足够大(等比缩放)，直到背景图像完全覆盖住元素区域的位置(图像可能显示不完整)。
			 contain:包含，将背景图像等比缩放，直到右边或下边碰到元素边缘为止。
		例子:
			.box1{
					width: 500px;
					height: 500px;
					display: inline-block;
					background-color: yellow;
					background-image: url(img/SCAR-L.jpg);/*背景图像*/
					background-repeat: no-repeat;/*背景平铺,no-repeat,repeat-x,repeat-y,默认值是repeat*/
					/*背景图片设置大小background-size*/
					/*background-size: 500px;/*尽量只改一个值，防止缩放失真*/
					/*background-size: 50%;*/
					/*background-size: cover;*/
					background-size: contain;
				}
	5.背景图片固定
		属性:background-attachment
		取值:scroll 滚动，默认值	fixed 固定，将背景图片保持在可视化区域内，不随着滚动条而发生改变。
		例子：
			body{
				background-color: black;
				background-image: url(img/pc_kv2.jpg);		
				background-repeat: no-repeat;	
				background-size: 100%;	
				color: white;
				font-size: 20px;
				background-attachment: fixed;
			}
	6.背景图片位置:
		属性:background-position:方位名词
		取值:left bottom(方位名词没有顺序，谁在前都可以),left(如果方位名词只写一个，另一个默认为center),左中右，上中下
			 x y
			 % %	
		例子:
			background-position: center;/*方位名词没有顺序，谁在前都可以*/
			background-position: left;/*如果方位名词只写一个，另一个默认为center*/
			background-position: 10px 30px;/*精确单位，第一个值是X坐标，第二个值一定是Y坐标，取值可为负*/
			background-position: 10px center;/*水平移10px，垂直居中*/
	7.简写属性:
		background:color url() repeat attachment position;
		background:yellow url(img/SCAR-L.jpg) fixed center;
		注意:属性可以省略，省略的话将采用默认值。
八、文本格式化:https://github.com/ZichengQu/Java/blob/CSS/Others/CSS_day03/%E6%96%87%E6%9C%AC%E6%A0%BC%E5%BC%8F%E5%8C%96.html
	1.字体属性
		(1)指定字体:font-family:value1,value2,...
			可以同时指定多个value，中间以逗号隔开，表示如果浏览器不支持第一个字体，则尝试下一个，直到找到合适的字体
			注意:中文字体需要加英文状态下的双引号
			例子:font-family: arial,"黑体";
		(2)字体大小:font-size:value; 设置的并不是文字本身的大小,在页面中，每个文字都是处在一个看不见的框中，我们设置的font-size实际上是设置的格的大小，并不是字体的大小。
		(3)字体加粗:<b></b>,<strong></strong>,font-weight:normal/bold/100~900(100的整数倍，400等价于normal，700等价于bold)
		(4)字体样式:font-style:normal/italic(斜体)
		(5)综合设置字体样式:font:style weight size family;
			font: italic 100 20px "黑体";
			使用font属性时，必须按上面语法格式中的混徐书写，不能更换顺序，各个属性以空格隔开。
			其中不需要设置的属性可以忽略(取默认值)，但必须保留size和family属性，否则font属性将不起作用。