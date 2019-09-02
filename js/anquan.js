$(function(){
	$('.list ul li:nth-child(1)').hover(function(){
		$('.title1').css('background-position','0px -594px');
	},function(){
		$('.title1').css('background-position','');
	})
	$('.list ul li:nth-child(2)').hover(function(){
		$('.title2').css('background-position','0 -474px');
	},function(){
		$('.title2').css('background-position','');
	})
	$('.list ul li:nth-child(3)').hover(function(){
		$('.title3').css('background-position','0 -354px');
	},function(){
		$('.title3').css('background-position','');
	})
	// 快速安全登录
	$('.mol0 ul li:nth-child(1)').hover(function(event) {
		$(this).css('left', '-30px');
		$('.mol0 ul li:nth-child(2)').css('display', 'inline');
	},function(){
		$(this).css('left', '');
		$('.mol0 ul li:nth-child(2)').css('display', 'none');
	});
	
//	手机APP扫码
	$('.show').hover(function(){
		$('.box').css('opacity','1');
	},function(){
		$('.box').css('opacity','');
	})
	
})
