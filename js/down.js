/*
* @Author: hp
* @Date:   2019-08-15 18:32:20
* @Last Modified by:   hp
* @Last Modified time: 2019-08-16 09:28:08
*/
$(function(){
	// 登录
	$('.mol ul li:nth-child(1)').hover(function(event) {
		$(this).css('left', '-30px');
		$('.mol ul li:nth-child(2)').css('display', 'inline');
	},function(){
		$(this).css('left', '');
		$('.mol ul li:nth-child(2)').css('display', 'none');
	});
	
	//隐藏小列表
	$('.andd .down_btn').hover(function(){
		$('.dropList').css('display','block');
	},function(){
		$('.dropList').css('display','');
	})

})
