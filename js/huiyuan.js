/*
* @Author: hp
* @Date:   2019-08-15 14:56:58
* @Last Modified by:   hp
* @Last Modified time: 2019-08-20 18:38:37
*/
$(function(){
	$('.list-one').hover(function() {
		$('.list1').css('display', 'block');
	}, function() {
		$('.list1').css('display', '');
	});
	$('.list-two').hover(function() {
		$('.list2').css('display', 'block');
	}, function() {
		$('.list2').css('display', '');
	});
	$('.list-three').hover(function() {
		$('.list3').css('display', 'block');
	}, function() {
		$('.list3').css('display', '');
	});

	// 轮播图
	var n=0;
	var timer;
	function go(){
		clearInterval(timer);
		timer=setInterval(function(){
			n++;
			if(n==5){
				$('.banner ol li').eq(0).addClass('add').siblings('li').removeClass('add');
			}
			if(n>5){
				$('.banner ul').css('left', 0+'px');
				n=1;
			}
				$('.banner ul').animate({'left':-n*800+'px'},500);
				$('.banner ol li').eq(n).addClass('add').siblings('li').removeClass('add');
		},2000)
	}
	go();
	$('.banner').hover(function() {
		clearInterval(timer);
	}, function() {
		go();
	});
	// 点击两边按钮
	$('.span-left').click(function(event) {
		n--;
		if(n<0){
			n=4;
			$('.banner ul').css('left', -n*800+'px');
			n=3;
		}
		$('.banner ul').animate({'left':-n*800+'px'},500);
		$('.banner ol li').eq(n).addClass('add').siblings('li').removeClass('add');
	});
	$('.span-right').click(function(event) {
		n++;
		if(n==4){
			$('.banner ol li').eq(0).addClass('add').siblings('li').removeClass('add');
		}
		if(n>4){
			$('.banner ul').css('left', 0+'px');
			n=1;
		}
			$('.banner ul').animate({'left':-n*800+'px'},500);
			$('.banner ol li').eq(n).addClass('add').siblings('li').removeClass('add');
	});
	$('.banner ol li').click(function(event) {
		n=$(this).index();
		$('.banner ul').animate({'left':-n*800+'px'},500);
		$(this).addClass('add').siblings('').removeClass('add');
	});
	// 滚动显示
	$(window).scroll(function(){
		var h=$(window).scrollTop();
		console.log(h);
		if(h>200){
			$('.footer0').css('display', 'block');
		}else{
			$('.footer0').css('display', '');
		}
	});
	// 登录
	$('.mol ul li:nth-child(1)').hover(function(event) {
		$(this).css('left', '-30px');
		$('.mol ul li:nth-child(2)').css('display', 'inline');
	},function(){
		$(this).css('left', '');
		$('.mol ul li:nth-child(2)').css('display', 'none');
	});	






})