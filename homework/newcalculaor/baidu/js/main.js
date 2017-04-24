$(document).ready(function(){
	var background = localStorage.getItem('background');
	 if(background){
	 	$('body').css({
	 		background:background
	 	});
	 }
	$(".more").mouseenter(function(){
		$("#dropdown").stop()
		$("#dropdown").slideDown(500) ;
	});
	$("#dropdown").mouseleave(function(){
		$("#dropdown").stop()
		$("#dropdown").slideUp(500);
	});
	$("#skinChage").mouseenter(function(){
		$("#skin").show(500);
		$('.skin2').on('click',function(){
			$('body').css({
				background:'url(img/9.jpg) center 0 no-repeat'
			});
             localStorage.setItem('background','url(img/9.jpg) center 0 no-repeat');
		});
		$('.skin3').on('click',function(){
			$('body').css({
				background:'url(img/3.jpg) center 0 no-repeat'
			});
             localStorage.setItem('background','url(img/3.jpg) center 0 no-repeat') ;
		});
		$('.skin4').on('click',function(){
			$('body').css({
				background:'url(img/5.jpg) center 0 no-repeat'
			});
             localStorage.setItem('background','url(img/5.jpg) center 0 no-repeat');
		});
		
		$('.skin1').on('click',function(){
			$('body').css({
				background:'url(img/2.jpg)'
			});
            localStorage.setItem('background','url(img/2.jpg) center 0 no-repeat');
		});
	});
	$(".content").mouseenter(function(){
		$("#skin").hide(500);
	});
	//需优化的代码//
	$("#recommand").click(function(){
		$(".recommand").show(200),
		$(".imf_c").hide(),
		$(".GPS").hide(),
		$(".shipin").hide(),
		$(".shopping").hide();
	});
	$("#GPS").click(function(){
		$(".recommand").hide(),
		$(".imf_c").hide(),
		$(".GPS").show(200),
		$(".shipin").hide(),
		$(".shopping").hide();
	});
	$("#myattention").click(function(){
		$(".recommand").hide(),
		$(".imf_c").show(200),
		$(".GPS").hide(),
		$(".shipin").hide(),
		$(".shopping").hide();
	});
	$("#TV").click(function(){
		$(".recommand").hide(),
		$(".imf_c").hide(),
		$(".GPS").hide(),
		$(".shipin").show(200),
		$(".shopping").hide();
	});
	$("#shopping").click(function(){
		$(".recommand").hide(),
		$(".imf_c").hide(),
		$(".GPS").hide(),
		$(".shipin").hide(),
		$(".shopping").show(200);
	});
	//优化代码//
	$(".rec").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$("#"+$(this).attr("id","")).addClass("block").siblings().removeClass("block");//此处优化代码不懂//
	})
	$("#setting").mouseenter(function(){
		$(".setting").show(200)
	});
	$("p").mouseenter(function(){
		$(".setting").hide(200)
	});
	$(".returnTop").click(function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
 });
});
