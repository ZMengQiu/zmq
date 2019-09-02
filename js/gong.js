/*
* @Author: hp
* @Date:   2019-08-14 16:12:32
* @Last Modified by:   hp
* @Last Modified time: 2019-08-19 19:06:39
*/
$(function(){
	var n=0;
	$('.list li').click(function(event) {
		$(this).addClass('blue').siblings('').removeClass('blue');
	});

	$(window).scroll(function(event) {
	/* Act on the event */
	var h=$(window).scrollTop();
	console.log(h);
	if(h>=260){
		$('.list').children().eq(0).addClass('blue').siblings('').removeClass('blue');
	}
	if(h>=2580){
		$('.list').children().eq(1).addClass('blue').siblings('').removeClass('blue');
	}
	if(h>=5480){
		$('.list').children().eq(2).addClass('blue').siblings('').removeClass('blue');
	}
	if(h>=8380){
		$('.list').children().eq(3).addClass('blue').siblings('').removeClass('blue');
	}
	if(h>=11280){
		$('.list').children().eq(4).addClass('blue').siblings('').removeClass('blue');
	}
	if(h>=14106){
		$('.list').children().eq(5).addClass('blue').siblings('').removeClass('blue');
	}
	});

	$('.list li').eq(0).click(function(event) {
		var h=$('.page').eq(0).offset().top;
		console.log(h);
		$('html,body').animate({'scrollTop':h},500);
	});
	$('.list li').eq(1).click(function(event) {
		var h=$('.page').eq(4).offset().top;
		$('html,body').animate({'scrollTop':h},500);
	});
	$('.list li').eq(2).click(function(event) {
		var h=$('.page').eq(9).offset().top;
		console.log(h)
		$('html,body').animate({'scrollTop':h},500);
	});
	$('.list li').eq(3).click(function(event) {
		var h=$('.page').eq(14).offset().top;
		console.log(h)
		$('html,body').animate({'scrollTop':h},500);
	});
	$('.list li').eq(4).click(function(event) {
		var h=$('.page').eq(19).offset().top;
		$('html,body').animate({'scrollTop':h},500);
	});
	$('.list li').eq(5).click(function(event) {
		var h=$('.page').eq(24).offset().top;
		$('html,body').animate({'scrollTop':h},500);
	});
	
//	导航隐藏小列表
	$('.dropdown').hover(function(){
		$('.dropdown-menu').css('display','block');
	},function(){
		$('.dropdown-menu').css('display','none');
	})

	// 登录
	$('.mol ul li:nth-child(1)').hover(function(event) {
		$(this).css('left', '-30px');
		$('.mol ul li:nth-child(2)').css('display', 'inline');
	},function(){
		$(this).css('left', '');
		$('.mol ul li:nth-child(2)').css('display', 'none');
	});
	//	查看更多
	var divnum=$('.main>div').length;//记录总数
	if(divnum>5){
		$('.main>div').addClass('hide');
		$('.main>div:lt(5)').addClass('list0').removeClass('hide');//默认显示5条
		$('.none').addClass('hide');
		//点击查看更多
		$('.more').click(function(){
			var listnum=$('.main .list0').length;
			console.log(listnum)
			var numtr=listnum+5;//每次查看都多加载5条
			console.log(numtr)
			if(numtr>divnum){
				$('.contain>div').addClass('list0').removeClass('hide');
				$('.more').addClass('hide');
				$('.none').removeClass('hide');
			}else{
				$('.main>div:lt('+numtr+')').addClass('list0').removeClass('hide');
			}
		})
	}else{
//		div少于5条时设置底部按钮
		$('.more').addClass('hide');
		$('.none').removeClass('hide');
	}


	
	
	
	
})