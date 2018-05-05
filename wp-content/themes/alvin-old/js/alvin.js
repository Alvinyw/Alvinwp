$(function(){	
/*toTop && sunNav-scroll-fixed*/
    $("#toTop").hide();
	$(window).scroll(function(){
	   var windowScTop = $(window).scrollTop();
	   if (windowScTop>120){
			$("#toTop").fadeIn();
		}else{
			$("#toTop").fadeOut();
		}
	});
	$("#toTop").click(function(){
			$('body,html').animate({scrollTop:0},500);
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
	if (url.match(htmlcss)=='html-css'){
		$("#nav-top li:eq(1)").addClass('uk-active');
		}
	else if (url.match(js)=='js'){
		$("#nav-top li:eq(2)").addClass('uk-active');
		}
	else if (url.match(seo)=='seo'){
		$("#nav-top li:eq(3)").addClass('uk-active');
		}
    else if (url.match(mobile)=='mobile'){
		$("#nav-top li:eq(4)").addClass('uk-active');
		}
	else if (url.match(commonsense)=='common-sense'){
		$("#nav-top li:eq(5)").addClass('uk-active');
		}
	else if (url.match(travel)=='travel'){
		$("#nav-top li:eq(6)").addClass('uk-active');
		}
	else {
		$("#nav-top li:eq(0)").addClass('uk-active');
		}
//点击下拉显示内容
    $("#clickShowGroup .toggleClick .icon").click(function(){
		$(this).toggleClass('on');
		$(this).parent('.toggleClick').siblings('.content').slideToggle();
		});
//头部的泡泡提示
    //$('img#myHead').thoughtBubble({
		//text: 'Welcome !',
		//font: 'Arial'
	//});
//文章结构-两列变一列
    $("#unfold").click(function(){
		$(".uk-width-large-4-5").toggleClass('unfold');
		$(".uk-width-large-1-5").toggleClass('hidden');
		});
//让博客里的所有超链接都不被跟踪
    $("a").attr("rel","nofollow");

});