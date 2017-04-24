$(document).ready(function(){
	$(window).on("load",function(){
     imgLocation();
     var dateImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"}]};
     window.onscroll=function(){
         if(scrollside()){
         	$.each(dateImg.data,function(index,value){
               var box = $("<div>").addClass("box").appendTo($("#container"));
               var content =$("<div>").addClass("content").appendTo(box);
               $("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);
         	});
         	imgLocation();
         }
     }
	});
});
//定义滚动高度
function scrollside(){
	var box = $(".box");
	var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
	var documentHeight = $(document).width();
	var scrollHeight = $(window).scrollTop();
	return(lastboxHeight<scrollHeight+documentHeight)?true:false;
}
//对图片进行瀑布流式摆放
function imgLocation(){
	var box = $(".box");
	var boxWidth = box.eq(0).width();
	var num = Math.floor($(window).width()/boxWidth);
	var boxArr = [];
	box.each(function(index,value){
	    var boxHeight = box.eq(index).height();
	      if(index<num){
	          boxArr[index] = boxHeight;
	      }else{
	      	var minboxHeight = Math.min.apply(null,boxArr);
	      	var minboxIndex = $.inArray(minboxHeight,boxArr);
	      	$(value).css({
	      		"position":"absolute",
	      		"top":minboxHeight,
	      		"left":box.eq(minboxIndex).position().left	
      	});
	      	boxArr[minboxIndex]+=box.eq(index).height();
      }
	});
}