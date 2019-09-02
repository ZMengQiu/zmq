$(function(){
	var n=0;
	var timer;
	$('.screen1 .one').removeClass('do');
	$(document).mousewheel(function(e,d){
		/* Act on the event */
		clearTimeout(timer);
		timer=setTimeout(function(){
			n=n-d;
			if(n>3){
				n=3;
			}
			if(n<0){
				n=0;
			}
			$('section').animate({'top':-100*n+'%'},500);
			$('section>div').eq(n).children('.one').removeClass('do').parent('').siblings('').children('.one').addClass('do');
			$('.aside ul li').eq(n).addClass('current').siblings('li').removeClass('current');
			
		},500)
	});

	$('.aside ul li').click(function(event) {
		/* Act on the event */
		$(this).addClass('current').siblings('li').removeClass('current');
		n=$(this).index();
		if(n>3){
			n=3;
		}
		$('section').animate({'top':-100*n+'%'},500);
		$('section>div').eq(n).children('.one').removeClass('do').parent('').siblings('').children('.one').addClass('do');
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



})