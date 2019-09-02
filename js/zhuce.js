$(function(){
	//左侧动画
	var n=0;
	var timer;
	function go(){
		clearInterval(timer);
		timer=setInterval(function(){
			n++;
			if(n>2){
				n=0
			};
			$('.fix0 img').eq(n).css('opacity','1').siblings('').css('opacity','0');
		},2000)
	}
	go();
	$('.fix0').hover(function(){
		clearInterval(timer);
	},function(){
		go();
	})
//	靓号
	$('.top0 .one').hover(function(){
		$('.list0').css('opacity','1');
	},function(){
		$('.list0').css('opacity','0');
	})
	//	简体中文
	$('.two').hover(function(){
		$('.down').css('display','none')
		$('.up').css('display','inline');
		$('.list').css('opacity','1');
	},function(){
		$('.up').css('display','none');
		$('.down').css('display','');
		$('.list').css('opacity','0');
	})
	// 表单
	function aa(a){
		return document.getElementById(a)
	}
	var Ouser,Opass
	aa('forms').onsubmit=function(){
		Ouser=aa('user').value;
		Opass=aa('pass').value;
		if(Ouser==''){
			aa('info1').style.display='block';
			}else{
				aa('info1').style.display='';
				// return false;
			}
		if(Opass==''){
			aa('info2').style.display='block';
			}else{
				aa('info2').style.display='';
				return false;
			}
	}
})
