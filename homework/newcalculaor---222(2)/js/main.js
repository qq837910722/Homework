var Con=document.getElementById("root")
var onOff =false;
var str='';
var str2='';

function con(num){
    str2=(str2 == '0'?"":str2);
    str2+=num;
    Con.innerText = str+str2;
    onOff=true;
}
function tools(n){//对符号进行限制
	if(onOff){
    str = str+str2+n
    Con.innerText = str;
    str2 ='';
		onOff=false;	
	}
}

function dot(){//对符号进行限制

if (str2) {
     
    if ( str2.indexOf(".")>0) {
    }else{
     
      str2 = str2 + '.';
      Con.innerText = str+str2;
    }
    
    onOff=false;
    
  }else{
     str2 = '0.';
  }
 


}

function equal(){//计算结果
	var str = Con.innerText;
	var r = eval(str);
	if(r=="Infinity"){
    alert('除数不能为0');
    r=NaN
    }
	Con.innerText =parseFloat(r.toFixed(9));

}
function clearZero(){//清屏功能
	 Con.innerText =0
    str='';
    str2='';
}
function clicknum(){//百分号的运算
    var x =Con.innerText;
	Con.innerText = x*0.01
}
function opposite(){//相反数运算
	var x =Con.innerText;
	Con.innerText = -x
}
function trigonometric(){//cos函数
	var x =Con.innerText;
	Con.innerText = Math.cos(x*Math.PI/180).toFixed(9);
}
function trigonometric2(){//sin函数
	var x =Con.innerText;
	Con.innerText = Math.sin(x*Math.PI/180).toFixed(9);
}
function Reciprocal(){//取倒数运算
    var x =Con.innerText;
    var y = 1/x;
    if (x== '0') {
        y = '正无穷'
    }
    Con.innerText= y;
}
function backspace(){//退格
   var x =Con.innerText;
   Con.innerText= x.slice(0, x.length - 1);
}
function newclicknum(){//开平方运算
  var x =Con.innerText;
  if(x>=0){
  	Con.innerText =  Math.sqrt(x)
  }
  else{
  	alert("请输入大于0的数")
  }
}
