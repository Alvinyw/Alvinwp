//代码高亮插件
$(function(){
    //需要高亮的元素
	var Keywords1 = new Array("html","head","title","body","div","button","a","p","span","style","script","input","link","meta","img","br","hr");
	//需要高亮的属性
	var Keywords2 = new Array("content","id","value","alt","title","style","type","src","href","rel","dir","lang","name","onBlur","onClick","onclick","onFocus","onKeyUp","onKeyDown","onKeyPress");
	
	//将转义符还原：&amp;lt; -> &lt;
	do{
	   $("#CodeHighlight").html($("#CodeHighlight").html().replace(/&amp;/g, '&'));
	}while($("#CodeHighlight").html().indexOf('&amp;')!=-1)
	
	//将中文标点转化为英文符号
	do{
	   $("#CodeHighlight").html($("#CodeHighlight").html().replace('“', '"').replace('”', '"'));
	}while($("#CodeHighlight").html().indexOf('”')!=-1)
	do{
	   $("#CodeHighlight").html($("#CodeHighlight").html().replace("‘", "'").replace("’", "'"));
	}while($("#CodeHighlight").html().indexOf('’')!=-1)
	
	//为需要高亮的元素和属性添加 class 和对应的 style
	for(var i=0;i<Keywords1.length;i++){
	   do{
	      $("#CodeHighlight").html($("#CodeHighlight").html().replace('&lt;'+Keywords1[i], '&lt;<span class="keyword">'+Keywords1[i]+'</span>'));
	      $("#CodeHighlight").html($("#CodeHighlight").html().replace('&lt;/'+Keywords1[i]+'&gt;', '&lt;<span class="plain">/</span><span class="keyword">'+Keywords1[i]+'</span>&gt;'));
	   }while($("#CodeHighlight").html().indexOf('&lt;'+Keywords1[i])!=-1)
	}					
	for(var i=0;i<Keywords2.length;i++){
	   do{
	   $("#CodeHighlight").html($("#CodeHighlight").html().replace(Keywords2[i]+'="', '<span class="color1">'+Keywords2[i]+'</span><span class="plain">=</span><span class="string">"'));
	   $("#CodeHighlight").html($("#CodeHighlight").html().replace('" ', '"</span> '));
	   $("#CodeHighlight").html($("#CodeHighlight").html().replace('"&gt;', '"</span>&gt;'));
	   }while($("#CodeHighlight").html().indexOf(Keywords2[i]+'="')!=-1)
	}
	
	//最后单独为 < 和 > 加上 class="plain" - 方便以后改变样式
	$("#CodeHighlight").html($("#CodeHighlight").html().replace(/&lt;/g, '<span class="plain">&lt;</span>').replace(/&gt;/g, '<span class="plain">&gt;</span>'));
});