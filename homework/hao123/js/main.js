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


