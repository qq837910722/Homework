(function (){

var x = document.querySelector('#skin'),
	changeBtn = document.querySelector('#skinchange');
	x.style.display="none";

var skinsBtn = document.querySelectorAll('.skin_s');
var box = document.querySelector('#box');


function skinChange(){
	//console.log("working");
	if(x.style.display=="none"){
		//console.log("display");
		x.style.display="block";
	}else{
		//console.log("hide");
		x.style.display="none";
	}
}

function newSkin(e){
	var btn = e.currentTarget.id;
	//console.log(btn);
	box.style.backgroundImage ="url('img/"+btn+".jpg')";
	box.style.backgroundPosition= 'center top';
	box.style.backgroundRepeat= 'no-repeat';
}

changeBtn.addEventListener('click', skinChange, false);

for(var i=0; i<skinsBtn.length;i++){
	skinsBtn[i].addEventListener('click', newSkin, false);
}


// function skinSet(){
// 	var box = document.querySelector('#box');
// 	box.style.backgroundPosition= 'center top';
// 	box.style.backgroundRepeat= 'no-repeat';
// }


//设置cookie的 名称，值，储存时间（天）
// function setCookie(c_name,value,expiredays)
// {
// var exdate=new Date()
// exdate.setDate(exdate.getDate()+expiredays)
// document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString())

// }
//检测cookie内容
// function checkCookie()
// {
// name1=getCookie('username') //获取之前存入的图片
// if (name1!=null && name1!="") //如果背景不为空
//   { 
//    var colorss = document.getElementById("box");
//     colorss.style.backgroundImage = name1;
//   }
// else //否则
//   {
//   if (name!=null && name!="")
//     {
//     setCookie('username',name,2)
//     var colorss = document.getElementById("box");
//     colorss.style.backgroundImage = name;
   
//     }
//   }
// }


// function skin1(){
// 	document.getElementById('box').style.backgroundImage =" url('../hao123/img/3136c151f56e721af74d8c119ac1b2cd.jpg') ";
//     skinSet()
// 	setCookie('username',"url('../hao123/img/3136c151f56e721af74d8c119ac1b2cd.jpg') ",2)
// }
// function skin2(){
// 	document.getElementById('box').style.backgroundImage =" url('../hao123/img/e240765236dbf2a2b347635985471cd2.jpg') ";
// 	skinSet()

// }
// function skin3(){
// 	document.getElementById('box').style.backgroundImage =" url('../hao123/img/c600290b20dfef351c097bbd9bc4ba26.jpg') ";
// 	skinSet()

// }
// function skin4(){
// 	document.getElementById('box').style.backgroundImage =" url('../hao123/img/a8e788d129477482d62836e3f2921897.jpg') ";
// 	skinSet()
// }
// function skin5(){
// 	document.getElementById('box').style.backgroundImage =" url('../hao123/img/8e5d37a30939eacb9d5a8c4e3a6632d4.jpg') ";
// 	skinSet()
// }
// function skin6(){
// 	document.getElementById('box').style.backgroundImage =" url('../hao123/img/f2c06a3a628f1164003db1569a712b18.jpg') ";
// 	skinSet()
// }
// function skin7(){
// 	document.getElementById('box').style.backgroundImage =" url('../hao123/img/0fb652e99f82c02bdcde57fa78074a43.png') ";
// 	skinSet()
// }
// function skin8(){
// 	document.getElementById('box').style.backgroundImage =" url('../hao123/img/cb620a4888804cbcc82abad08a1686da.jpg') ";
// 	skinSet()
// }
// function skin9(){
// 	document.getElementById('box').style.backgroundImage =" url('../hao123/img/34daa81f1cfe5e0795a44a867e7f0e0b.jpg') ";
// 	skinSet()
// }
// function skin10(){
// 	document.getElementById('box').style.backgroundImage =" url('../hao123/img/ad5431e1bef2165812b1e41ec6fc395f.jpg') ";
// 	skinSet()
// }
// function skin11(){
// 	document.getElementById('box').style.backgroundImage =" url('../hao123/img/400270e417a425c4ffa37bb40c3c7875.jpg') "
// 	skinSet()
// }
// function skin12(){
// 	document.getElementById('box').style.backgroundImage =" url('../hao123/img/263b6c746e62dd77965223d9beb38af1 (1).jpg') "
// 	skinSet()
// }
})();