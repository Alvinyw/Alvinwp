 $(function () {
 	// HEX 转为 RGBA：#000000 -> rgba(0,0,0,1)
 	function hexToRgba(hex, alpha) {
 		var c;
 		if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
 			c = hex.substring(1).split('');
 			if (c.length == 3) {
 				c = [c[0], c[0], c[1], c[1], c[2], c[2]];
 			}
 			c = '0x' + c.join('');
 			return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
 		}
 		throw new Error('Bad Hex');
 	}
	 /* 设置主题色 */
	 // 安全色：https://www.bootcss.com/p/websafecolors/
 	var webColor = ["#44cef6", "#00CC66", "#0000FF", "#9900FF", "#CC00FF"]
	 document.body.style.setProperty("--themeColor", webColor[1])
	 // 第二
	 document.body.style.setProperty("--themeColorS", hexToRgba(webColor[1], 0.6))
	 // 第三
	 document.body.style.setProperty("--themeColorT", hexToRgba(webColor[1], 0.4))
	 // 第四
	 document.body.style.setProperty("--themeColorF", hexToRgba(webColor[1], 0.1))
 	/*toTop && sunNav-scroll-fixed*/
 	$("#toTop").hide();
 	$(window).scroll(function () {
 		var windowScTop = $(window).scrollTop();
 		if (windowScTop > 120) {
 			$("#toTop").fadeIn();
 		} else {
 			$("#toTop").fadeOut();
 		}
 	});
 	$("#toTop").click(function () {
 		$('body,html').animate({
 			scrollTop: 0
 		}, 500);
 		return false;
 	});
 	//根据 URL 将内容进行分类
 	var url = window.document.URL;
 	var htmlcss = /html-css/;
 	var js = /js/;
 	var seo = /seo/;
 	var mobile = /mobile/;
 	var commonsense = /common-sense/;
 	var travel = /travel/;
 	if (url.match(htmlcss) == 'html-css') {
 		$("#nav-top li:eq(1)").addClass('uk-active');
 	} else if (url.match(js) == 'js') {
 		$("#nav-top li:eq(2)").addClass('uk-active');
 	} else if (url.match(seo) == 'seo') {
 		$("#nav-top li:eq(3)").addClass('uk-active');
 	} else if (url.match(mobile) == 'mobile') {
 		$("#nav-top li:eq(4)").addClass('uk-active');
 	} else if (url.match(commonsense) == 'common-sense') {
 		$("#nav-top li:eq(5)").addClass('uk-active');
 	} else if (url.match(travel) == 'travel') {
 		$("#nav-top li:eq(6)").addClass('uk-active');
 	} else {
 		$("#nav-top li:eq(0)").addClass('uk-active');
 	}
 	//点击下拉显示内容
 	$("#clickShowGroup .toggleClick .icon").click(function () {
 		$(this).toggleClass('on');
 		$(this).parent('.toggleClick').siblings('.content').slideToggle();
 	});
 	//文章结构-两列变一列
 	$("#unfold").click(function () {
 		$(".uk-width-large-4-5, .uk-width-large-4-5 #index").toggleClass('unfold');
 		$(".uk-width-large-1-5").toggleClass('hidden');
 	});
 	//让博客里的所有超链接都不被跟踪
 	$("a").attr("rel", "nofollow");
 	//手机端导航下拉
 	$("#nav-top").removeClass('uk-hidden-small');
 	$(".uk-navbar-toggle").click(function () {
 		$("#nav-top").slideToggle();
 	});
 	//左侧导航栏最底部的版权内容美化
 	$("#head .ft,#content .ft").html('关于 <a href="https://alvinwp.com/default/1" target="_black">博客</a><br/>关于 <a href="https://github.com/Alvinyw" target="_black">GitHub</a>');
 });

 //页面完全加载完成再执行
 $(window).load(function () {
 	// 点击绽放烟花效果
 	var setInterval_1, setInterval_2;
 	var aDiv = [];
 	var _oDiv = document.createElement('div');
 	var ifRemovedTargetNode = true,
 		ifRemovedChildNodes = true;

 	function yanHuaZanFang(oEvent) {
 		if (aDiv.length !== 0) return false;
 		ifRemovedTargetNode = false;
 		ifRemovedChildNodes = false;
 		var oDiv = null;
 		var i = 0;

 		var x = oEvent.clientX;
 		var y = oEvent.clientY;

 		_oDiv.style.position = 'fixed';
 		_oDiv.style.zIndex = '10000';
 		_oDiv.style.background = 'red';
 		_oDiv.style.width = '3px';
 		_oDiv.style.height = '30px';
 		_oDiv.style.left = oEvent.clientX + 'px';
 		_oDiv.style.top = document.documentElement.clientHeight + 'px';

 		document.body.appendChild(_oDiv);

 		setInterval_1 = setInterval(function () {
 			if (_oDiv.offsetTop <= y) {
 				clearInterval(setInterval_1);
 				show();
 				document.body.removeChild(_oDiv);
 				ifRemovedTargetNode = true;
 			}
 			_oDiv.style.top = _oDiv.offsetTop - 30 + 'px';
 		}, 30);

 		function show() {
 			var oDiv = null;

 			for (i = 0; i < 100; i++) {
 				oDiv = document.createElement('div');

 				oDiv.style.width = '3px';
 				oDiv.style.height = '3px';
 				oDiv.style.background = '#' + Math.ceil(Math.random() * 0xEFFFFF + 0x0FFFFF).toString(16);
 				oDiv.style.position = 'fixed';
 				oDiv.style.zIndex = '10000';
 				oDiv.style.left = x + 'px';
 				oDiv.style.top = y + 'px';

 				var a = Math.random() * 360;

 				//oDiv.speedX=Math.random()*40-20;
 				//oDiv.speedY=Math.random()*40-20;

 				oDiv.speedX = Math.sin(a * 180 / Math.PI) * 20 * Math.random();
 				oDiv.speedY = Math.cos(a * 180 / Math.PI) * 20 * Math.random();

 				document.body.appendChild(oDiv);

 				aDiv.push(oDiv);
 			}
 		}

 		setInterval_2 = setInterval(doMove, 30);

 		function doMove() {
 			for (i = 0; i < aDiv.length; i++) {
 				aDiv[i].style.left = aDiv[i].offsetLeft + aDiv[i].speedX + 'px';
 				aDiv[i].style.top = aDiv[i].offsetTop + aDiv[i].speedY + 'px';
 				aDiv[i].speedY += 1;

 				if (aDiv[i].offsetLeft < 0 || aDiv[i].offsetLeft > document.documentElement.clientWidth || aDiv[i].offsetTop < 0 || aDiv[i].offsetTop > document.documentElement.clientHeight) {
 					document.body.removeChild(aDiv[i]);
 					aDiv.splice(i, 1);

 					if (aDiv.length === 0) {
 						clearInterval(setInterval_2);
 						ifRemovedChildNodes = true;
 					}
 				}
 			}
 		}
 		doMove();
 	}

 	document.onclick = function (ev) {
 		var oEvent = ev || event;
 		// yanHuaZanFang(oEvent);
 		if (ifRemovedTargetNode && ifRemovedChildNodes) {
 			yanHuaZanFang(oEvent);
 		}
 	}

 	setInterval(function () {
 		var oEvent = {
 			clientX: window.innerWidth * Math.random(),
 			clientY: window.innerHeight * Math.random()
 		};
 		if (ifRemovedTargetNode && ifRemovedChildNodes) {
 			yanHuaZanFang(oEvent);
 		}
 	}, 6000)
 });

 //  // 添加百度统计代码
 //  setTimeout(() => {
 //  	var _hmt = _hmt || []
 //  	// 每次执行前，先移除上次插入的代码
 //  	document.getElementById('baidu_js') && document.getElementById('baidu_js').remove()
 //  	var hm = document.createElement('script')
 //  	hm.src = "https://hm.baidu.com/hm.js?bc56cdf32315cd85609d16cc48d14b20";
 //  	hm.charset = 'UTF-8'
 //  	hm.id = 'baidu_js'
 //  	var s = document.getElementsByTagName('script')[0]
 //  	s.parentNode.insertBefore(hm, s)
 //  }, 0)