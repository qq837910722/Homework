// JavaScript Document
(function(){

	var rank = document.querySelector('#rank'),
		btn = document.querySelector('#btn');

	function distribution(){
		//console.log("function is running");
		var x = document.querySelector('#score').value;

		if(x>=90 && x<=100){
			rank.innerHTML = "一等生";

		}else if(x>=80 && x<90){
			rank.innerHTML = "二等生";

		}else if(x>=70 && x<80){
			rank.innerHTML = "三等生";

		}else if(x>=60 && x<70){
			rank.innerHTML = "四等生";

		}else if(x>=50 && x<60){
			rank.innerHTML = "五等生";

		}else if(x>=40 && x<50){
			rank.innerHTML = "六等生";

		}else if(x>=30 && x<40){
			rank.innerHTML = "七等生";

		}else if(x>=20 && x<30){
			rank.innerHTML = "八等生";

		}else if(x>=10 && x<20){
			rank.innerHTML = "九等生";

		}else if(x>=0 && x<10){
			rank.innerHTML = "吊车尾的=。=";

		}else{
			rank.innerHTML = "Please enter a number between 0 and 100";
		}
	}

	btn.addEventListener('click', distribution, false);

})();