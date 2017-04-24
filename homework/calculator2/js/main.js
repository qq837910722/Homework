var numresult;
var str;
function onclicknum(nums) {//简单的加减乘除四则运算
  str = document.getElementById("nummessege");
  str.value = str.value + nums;
}
function onclickclear() {//清除
  str = document.getElementById("nummessege");
  str.value = "";
}
function onclickresult() {//等于
  str = document.getElementById("nummessege");
  numresult = eval(str.value);
  if(numresult=="Infinity"){
    alert('除数不能为0');
    numresult=NaN
  }
  str.value = parseFloat(numresult.toFixed(9));
   
}
function clicknum(){//百分号的运算
  str = document.getElementById("nummessege");
  str.value = str.value * 0.01
}
function opposite(){//相反数的值
  str = document.getElementById("nummessege");
  str.value = -str.value
}
function newclicknum(){//开平方运算
  str = document.getElementById("nummessege");
  var x =  Math.sqrt(str.value);
  str.value = x
}
function Reciprocal(){//取倒数运算
  str = document.getElementById("nummessege");
  var y = 1/str.value;
    if (str.value == '0') {
        y = '正无穷'
    }
    str.value = y;
}
function backspace(){//退格
  str = document.getElementById("nummessege");
   str.value = str.value.slice(0, str.value.length - 1);
}
function trigonometric(){//cos函数
  str = document.getElementById("nummessege");
  var z =Math.cos(str.value);
}
function trigonometric2(){//sin函数
  str = document.getElementById("nummessege");
  var m =Math.sin(str.value);
  str.value=m
}