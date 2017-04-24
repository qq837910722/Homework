function caculate(){
		var a ="超牛逼的一等生";//90-100
		var b ="还不错的二等生";//80-89
		var c ="还过得去的三等生";//70-79
		var d ="有点差的四等生";//60-69
		var e ="还需努力的五等生";//50-59
		var f ="比较差的六等生";//40-49
		var g ="很差的七等生";//30-39
		var h ="压根没读书的八等生";//20-29
		var i = "分数全靠蒙的九等生"//10-19
		var j ="吊车尾=。=";//0-9
		x =document.getElementById("score").value//用户输入的分数
		if(!x.trim()||isNaN(x)){
			alert('你还想咋的，不能为空，不能为非数字哦，注意0-100的哟')
		}else if(x>=90&&x<=100){
			document.getElementById("rank").innerText=a;
		}else if(x>=80&&x<90){
			document.getElementById("rank").innerText=b;
		}else if(x>=70&&x<80){
			document.getElementById("rank").innerText=c;
		}else if(x>=60&&x<70){
			document.getElementById("rank").innerText=d;
		}else if(x>=50&&x<60){
			document.getElementById("rank").innerText=e;
		}else if(x>=40&&x<50){
			document.getElementById("rank").innerText=f;
		}else if(x>=30&&x<40){
			document.getElementById("rank").innerText=g;
		}else if(x>=20&&x<30){
			document.getElementById("rank").innerText=h;
		}else if(x>=10&&x<20){
			document.getElementById("rank").innerText=i;
		}else if(x>=0&&x<10) {
			document.getElementById("rank").innerText=j;
		}else{
			rank.innerHTML = "Please enter a number between 0 and 100";
		}
	}