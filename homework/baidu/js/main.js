$(document).ready(function(){
	var background = localStorage.getItem('background');
	 if(background){
	 	$('body').css({
	 		background:background
	 	});
	 }
		
	$(".returnTop").click(function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
 });
});


/**
使用单例模式,将中间导航部分的JS归在一起，便于后期维护
**/
var nav ={
	init:function(){
		var recommand   = this;
		var GPS         = this;
		var myattention =this;
		var TV = this;
		var shopping = this;
		var rec = this;
		recommand.render();
		recommand.bind();
		GPS.render();
		GPS.bind();
		myattention.render();
		myattention.bind();
		TV.render();
		TV.bind();
		shopping.render();
		shopping.bind();
		rec.render();
		rec.bind();
	},
	render:function(){
		var recommand = this;
		var GPS = this;
		var myattention=this;
		var TV = this;
		var shopping = this;
		var rec = this;
		recommand.btna = $('#recommand');
		GPS.btnb = $('#GPS');
		myattention.btnc = $('#myattention');
		TV.btnd = $("#TV");
		shopping.btne = $("#shopping");
		rec.btnf = $('.rec');

	},
	bind:function(){
		var recommand = this;
		var GPS = this;
		var myattention = this;
		var TV = this;
		var shopping = this;
		var rec = this;
		recommand.btna.click(function(){
			$(".recommand").show(200),
			$(".imf_c").hide(),
			$(".GPS").hide(),
			$(".TV").hide(),
			$(".shopping").hide();
		});
		GPS.btnb.click(function(){
			$(".recommand").hide(),
			$(".imf_c").hide(),
			$(".GPS").show(200),
			$(".TV").hide(),
			$(".shopping").hide();
		});
		myattention.btnc.click(function(){
			$(".recommand").hide(),
			$(".imf_c").show(200),
			$(".GPS").hide(),
			$(".TV").hide(),
			$(".shopping").hide();
		});
		TV.btnd.click(function(){
			$(".recommand").hide(),
			$(".imf_c").hide(),
			$(".GPS").hide(),
			$(".TV").show(200),
			$(".shopping").hide();
		});
		shopping.btne.click(function(){
			$(".recommand").hide(),
			$(".imf_c").hide(),
			$(".GPS").hide(),
			$(".TV").hide(),
			$(".shopping").show(200);
		});
		rec.btnf.click(function(){
			$(this).addClass("active").siblings().removeClass("active");
		})
	}
};

/** 
使用单例模式,将右侧下拉部分的JS归在一起，便于后期维护
**/
var banner = {
	init:function(){
		var more =this;
		var dropdown = this;
		var setting = this;
		more.render();
		more.bind();
		dropdown.render();
		dropdown.bind();
		setting.render();
		setting.bind();

	},
	render:function(){
		var more = this;
		var dropdown = this;
		var setting = this;
		more.btna = $('.more');
		dropdown.btnb = $('#dropdown');
		setting.btnc = $('#setting')
	},
	bind:function(){
		var more = this;
		var dropdown = this;
		var setting = this;
		more.btna.mouseenter(function(){
			$("#dropdown").stop()
			$("#dropdown").slideDown(500) ;
		});
		dropdown.btnb.mouseleave(function(){
			$("#dropdown").stop()
			$("#dropdown").slideUp(500);
		});
		setting.btnc.mouseenter(function(){
			$(".setting").show(200)
		})
	}
}

/**
使用单例模式,将换肤功能的JS归在一起，便于后期维护
**/
var skin = {
	init:function(){
		var skinchange = this;
		var content = this;
		skinchange.render();
		skinchange.bind();
		content.render();
		content.bind();
	},
	render:function(){
		var skinchange = this;
		var content = this;
		skinchange.btna = $('#skinChange');
		content.btnb = $('.content')
	},
	bind:function(){
		var skinchange = this;
		var content = this;
		skinchange.btna.mouseenter(function(){
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
		content.btnb.mouseenter(function(){
			$("#skin").hide(500);
			$('.setting').hide(200);

		})
	}
}

nav.init();
banner.init();
skin.init();







// $(".content").mouseenter(function(){
	// 	$(".setting").hide(200)
	// });
// $("#setting").mouseenter(function(){
	// 	$(".setting").show(200)
	// });

// $(".rec").click(function(){
	// 	$(this).addClass("active").siblings().removeClass("active");
	// })
 //下拉列表
	// $(".more").mouseenter(function(){
	// 	$("#dropdown").stop()
	// 	$("#dropdown").slideDown(500) ;
	// });
	// $("#dropdown").mouseleave(function(){
	// 	$("#dropdown").stop()
	// 	$("#dropdown").slideUp(500);
	// });
	//网页换肤
	// $("#skinChage").mouseenter(function(){
		// $("#skin").show(500);
		// $('.skin2').on('click',function(){
		// 	$('body').css({
		// 		background:'url(img/9.jpg) center 0 no-repeat'
		// 	});
  //            localStorage.setItem('background','url(img/9.jpg) center 0 no-repeat');
		// });
		// $('.skin3').on('click',function(){
		// 	$('body').css({
		// 		background:'url(img/3.jpg) center 0 no-repeat'
		// 	});
  //            localStorage.setItem('background','url(img/3.jpg) center 0 no-repeat') ;
		// });
		// $('.skin4').on('click',function(){
		// 	$('body').css({
		// 		background:'url(img/5.jpg) center 0 no-repeat'
		// 	});
  //            localStorage.setItem('background','url(img/5.jpg) center 0 no-repeat');
		// });
		
		// $('.skin1').on('click',function(){
		// 	$('body').css({
		// 		background:'url(img/2.jpg)'
		// 	});
  //           localStorage.setItem('background','url(img/2.jpg) center 0 no-repeat');
		// });
	// });
	// $(".content").mouseenter(function(){
		// 	$("#skin").hide(500);
		// });


	//需优化的代码//
	// $("#recommand").click(function(){
	// nn  	$(".recommand").show(200),
	// 	$(".imf_c").hide(),
	// 	$(".GPS").hide(),
	// 	$(".TV").hide(),
	// 	$(".shopping").hide();
	// });
	// $("#GPS").click(function(){
	// 	$(".recommand").hide(),
	// 	$(".imf_c").hide(),
	// 	$(".GPS").show(200),
	// 	$(".TV").hide(),
	// 	$(".shopping").hide();
	// });
	// $("#myattention").click(function(){
	// 	$(".recommand").hide(),
	// 	$(".imf_c").show(200),
	// 	$(".GPS").hide(),
	// 	$(".TV").hide(),
	// 	$(".shopping").hide();
	// });
	// $("#TV").click(function(){
	// 	$(".recommand").hide(),
	// 	$(".imf_c").hide(),
	// 	$(".GPS").hide(),
	// 	$(".TV").show(200),
	// 	$(".shopping").hide();
	// });
	// $("#shopping").click(function(){
	// 	$(".recommand").hide(),
	// 	$(".imf_c").hide(),
	// 	$(".GPS").hide(),
	// 	$(".TV").hide(),
	// 	$(".shopping").show(200);
	// });
	//优化代码//