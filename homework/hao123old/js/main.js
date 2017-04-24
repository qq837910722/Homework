var x = document.getElementById('skin')
var y = document.getElementById('saveAll')
var z = document.getElementById('clearAll')
x.style.display="none"
y.style.display="none"
z.style.display="none"
function skinChange(){
	if(x.style.display=="none"){
		x.style.display="block";
	}else
	{
		x.style.display="none"
	}
}
function skinChange(){
	if(y.style.display=="none"){
		y.style.display="block";
	}else
	{
		y.style.display="none"
	}
}
function skinChange(){
	if(z.style.display=="none"){
		z.style.display="block";
	}else
	{
		z.style.display="none"
	}
}
//localstorage
(function(){
	var box = document.querySelector('#box'),
		saveAll = document.querySelector('#saveAll'),
		clearAll = document.querySelector('#clearAll');

	function emptyStorage(e){
		localStorage.clear();
	}

	function fillStorage(){
		localStorage.setItem('todoList', list.innerHTML);
	}

	function loadToDo(){
		if(window.localStorage){
			if (localStorage.getItem('todoList')){
				list.innerHTML = localStorage.getItem('todoList');
			}
		}else{
			console.log('get a better browser');
		}
	}

	clearAll.addEventListener('click', emptyStorage, false);
	saveAll.addEventListener('click', fillStorage, false);

	loadToDo();
})();




function skinSet(){
	document.getElementById('box').style.backgroundPosition= 'center top';
	document.getElementById('box').style.backgroundRepeat= 'no-repeat';
}

function skin1(){
	document.getElementById('box').style.backgroundImage =" url('../hao123/img/3136c151f56e721af74d8c119ac1b2cd.jpg') ";
    skinSet()
}
function skin2(){
	document.getElementById('box').style.backgroundImage =" url('../hao123/img/e240765236dbf2a2b347635985471cd2.jpg') ";
	skinSet()
}
function skin3(){
	document.getElementById('box').style.backgroundImage =" url('../hao123/img/c600290b20dfef351c097bbd9bc4ba26.jpg') ";
	skinSet()
}
function skin4(){
	document.getElementById('box').style.backgroundImage =" url('../hao123/img/a8e788d129477482d62836e3f2921897.jpg') ";
	skinSet()
}
function skin5(){
	document.getElementById('box').style.backgroundImage =" url('../hao123/img/8e5d37a30939eacb9d5a8c4e3a6632d4.jpg') ";
	skinSet()
}
function skin6(){
	document.getElementById('box').style.backgroundImage =" url('../hao123/img/f2c06a3a628f1164003db1569a712b18.jpg') ";
	skinSet()
}
function skin7(){
	document.getElementById('box').style.backgroundImage =" url('../hao123/img/0fb652e99f82c02bdcde57fa78074a43.png') ";
	skinSet()
}
function skin8(){
	document.getElementById('box').style.backgroundImage =" url('../hao123/img/cb620a4888804cbcc82abad08a1686da.jpg') ";
	skinSet()
}
function skin9(){
	document.getElementById('box').style.backgroundImage =" url('../hao123/img/34daa81f1cfe5e0795a44a867e7f0e0b.jpg') ";
	skinSet()
}
function skin10(){
	document.getElementById('box').style.backgroundImage =" url('../hao123/img/ad5431e1bef2165812b1e41ec6fc395f.jpg') ";
	skinSet()
}
function skin11(){
	document.getElementById('box').style.backgroundImage =" url('../hao123/img/400270e417a425c4ffa37bb40c3c7875.jpg') "
	skinSet()
}
function skin12(){
	document.getElementById('box').style.backgroundImage =" url('../hao123/img/263b6c746e62dd77965223d9beb38af1 (1).jpg') "
	skinSet()
}