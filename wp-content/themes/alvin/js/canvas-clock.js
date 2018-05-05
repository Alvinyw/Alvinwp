// JavaScript Document
window.onload = function(){
	var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	c_raduis=150,
	c_raduis_numbers =c_raduis+ 25,
	c_raduis_secound =c_raduis,
	c_raduis_m =c_raduis_secound-25,
	c_raduis_h =c_raduis_m-25;
	
	context.font="15pt Arial";
	context.textAlign="center";
	context.textBaseline="middle";
	context.shadowColor="rgba(100,100,150,.8)";
	context.lineCap="square";
	context.shadowOffsetX=5;
	context.shadowOffsetY=5;
	context.shadowBlur=10;
	
	function drawXY(){
		context.beginPath();
		context.lineWidth="2";
		context.strokeStyle="red";
		context.moveTo(0,canvas.height/2);
		context.lineTo(canvas.width,canvas.height/2);
		context.stroke();
		
		context.beginPath();
		context.lineWidth="2";
		context.strokeStyle="gray";
		context.moveTo(canvas.width/2,0);
		context.lineTo(canvas.width/2,canvas.height);
		context.stroke();
	}

	function drawCircle(){
		context.save();
		context.shadowColor="rgba(0,0,0,.7)";
		context.strokeStyle="rgba(100,240,130,.5)";
		context.fillStyle="rgba(171,208,174,.3)";
		context.beginPath();
		context.arc(canvas.width/2,canvas.height/2,c_raduis_numbers+30,0,Math.PI*2,false);
		context.arc(canvas.width/2,canvas.height/2,c_raduis,0,Math.PI*2,true);
		context.stroke();
		context.fill();
		context.restore();
	}

	function drawKedu(){
		var x,y,w1=5,w2=10,x1,y1,a;
		context.save();
		context.strokeStyle="rgba(135,199,140,.7)";
		context.beginPath();
		for(var angle=0,index=0;angle<=Math.PI*2;angle+=Math.PI/30,index++){
			if(index%5==0){
				a=w2;
			}else{
				a=w1;
			}
			x=canvas.width/2+Math.cos(angle)*c_raduis;
			y=canvas.height/2+Math.sin(angle)*c_raduis;
			x1=canvas.width/2+Math.cos(angle)*(c_raduis-a);
			y1=canvas.height/2+Math.sin(angle)*(c_raduis-a);
			context.moveTo(x,y);
			context.lineTo(x1,y1);
		}
		context.stroke();
		context.strokeStyle="rgba(6,158,18,.3)";
		context.arc(canvas.width/2,canvas.height/2,c_raduis-w2,0,Math.PI*2,false);
		context.stroke();
		context.restore();
	}

	function drawCenter(){
		context.beginPath();
		context.arc(canvas.width/2,canvas.height/2,6,0,Math.PI*2,true);
		context.fill();
	}

	function drawNumbers(){
		var x,y,nums=[1,2,3,4,5,6,7,8,9,10,11,12],numberWidth;
		nums.forEach(function(num){
			context.save();
			context.fillStyle="rgba(250,100,200,1)";
			context.beginPath();
			var angle = Math.PI/6*num-Math.PI/2;
			x=canvas.width/2+Math.cos(angle)*c_raduis_numbers;
			y=canvas.height/2+Math.sin(angle)*c_raduis_numbers;
			context.translate(x,y);
			context.rotate(Math.PI/2+angle)
			if(num==3) context.fillText("3",0,0);
			else if(num==6) context.fillText("6",0,0);
			else if(num==9) context.fillText("9",0,0);
			else if(num==12) context.fillText("12",0,0);
			else {
				context.font="10pt Arial";
				context.fillStyle="rgba(100,140,230,1)";
				context.fillText(num,0,0);
			}
			context.restore();
		});
		
	}

	function drawHandler(){
		var date = new Date();
		drawHandlerItem(calc(null,null,date.getSeconds(),date.getMilliseconds())
			,c_raduis_secound,2,"rgba(255,0,0,.5)");
		drawHandlerItem(calc(null,date.getMinutes(),date.getSeconds(),date.getMilliseconds())
			,c_raduis_m,4,"rgba(0,0,0,.9)");
		drawHandlerItem(calc(date.getHours(),date.getMinutes(),date.getSeconds(),date.getMilliseconds())
			,c_raduis_h,6,"rgba(0,0,0,.9)");
	}
	
	function drawHandlerItem(a,raduis,lineWidth,color){
		var x,y,o={x:canvas.width/2,y:canvas.height/2};
		x=o.x+Math.sin(Math.PI-(2*Math.PI)/a)*raduis;
		y=o.y+Math.cos(Math.PI-(2*Math.PI)/a)*raduis;
		context.save();
		context.lineWidth=lineWidth;
		context.strokeStyle=color;
		context.beginPath();
		context.moveTo(canvas.width/2,canvas.height/2);
		context.lineTo(x,y);
		context.stroke();
		context.restore();
	}
	
	function calc(h,m,s,ms){
		var count
		,current
		,h1=h||0
		,m1=m||0
		,s1=s||0
		,ms1=ms||0
		;
		h1=h1%12;
		current = h1*60*60*1000+m1*60*1000+s1*1000+ms1;

		if(h!=null)count=12*60*60*1000;
		else if(m!=null)count=60*60*1000;
		else if(s!=null)count=60*1000;
		else if(ms!=null)count=1000;
		return count/current;
	}

	function drawClock(){
		context.clearRect(0,0,canvas.width,canvas.height);
		//drawXY();
		drawCircle();
		drawKedu();
		drawCenter();
		drawNumbers();
		drawHandler();
	}

	function main(a){
		drawClock();
	    setTimeout(main,40);
	}
	main();
}