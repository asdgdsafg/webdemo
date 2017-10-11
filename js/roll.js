$(function () {
	//下拉轮播图
	//显示隐藏左右按钮
	$('#main').children('.one-roll').hover(function () {
		$('#main').children('.one-roll').children('.btn-left, .btn-right').stop().fadeIn('slow');
	}, function() {
		$('#main').children('.one-roll').children('.btn-left, .btn-right').stop().fadeOut('slow');
	})
	var now1 = 1;
	var nowIndex = 2;
	//左按钮
	$('#main').children('.one-roll').children('.btn-left').click(function () {
		if(! $('#main').children('.one-roll').children('.banner1').children('li').is(":animated") ){
			now1--;
			tab1();
		}
	})
	//右按钮
	$('#main').children('.one-roll').children('.btn-right').click(function () {rClick1()})
	function rClick1() {
		if(! $('#main').children('.one-roll').children('.banner1').children('li').is(":animated") ){
			now1++;
			tab1();
		}
	}
	//下拉滚动效果
	function tab1() {
		if (now1 == 4) {
			now1 = 1;
		} else if (now1 == 0) {
			now1 = 3;
		}
		$('#main').children('.one-roll').children('.banner1').children('li').eq(now1 - 1).css({
			'z-index' : nowIndex++,
			'display' : 'none',
		}).stop().slideDown().end().end().end().children('.one-in').find('li').removeClass('one-active').eq(now1 - 1).addClass('one-active');
	}
	//自动轮播
	var timer1 = null;
	timer1 = setInterval(rClick1, 4000);
	//移入移出时清除和开启定时器
	$('#main').children('.one-roll').hover(function () {
		clearInterval(timer1);
	}, function () {
		clearInterval(timer1);
		timer1 = setInterval(rClick1, 4000);
	})
	//位置按钮
	for (var i = 0; i < 3; i++) {
		(function (i) {
			$('#main').children('.one-roll').children('.one-in').children('li').eq(i).click(function () {
				if(! ($('#main').children('.one-roll').children('.banner1').children('li').is(":animated")) && ! (now1 - i == 1)){		//判断是否有动画执行并且是否重复执行相同动作
					now1 = i + 1;
					tab1();
				}
			})
		})(i)
	}





	//无缝轮播图
	//显示隐藏左右按钮
	$('#main').children('.two-roll').hover(function () {
		$('#main').children('.two-roll').children('.btn-left, .btn-right').stop().fadeIn('slow');
	}, function() {
		$('#main').children('.two-roll').children('.btn-left, .btn-right').stop().fadeOut('slow');
	})
	var now2 = 1;
	var leftNum = 0;
	//左按钮
	$('#main').children('.two-roll').children('.btn-left').click(function () {
		if(! $('#main').children('.two-roll').children('.banner2').is(":animated")){
			now2--;
			tab2();
		}
	})
	//右按钮
	$('#main').children('.two-roll').children('.btn-right').click(function () {rClick2()})
	function rClick2() {
		if(! $('#main').children('.two-roll').children('.banner2').is(":animated") ){
			now2++;
			tab2();
		}
	}
	//自动轮播
	var timer2 = null;
	timer2 = setInterval(rClick2, 4000);
	//移入移出时清除和开启定时器
	$('#main').children('.two-roll').hover(function () {
		clearInterval(timer2);
	}, function () {
		clearInterval(timer2);
		timer2 = setInterval(rClick2, 4000);
	})
	//离开和进入网页时清除和开启定时器
	$(window).focus(function () {
		clearInterval(timer1);
		timer1 = setInterval(rClick1, 4000);
		clearInterval(timer2);
		timer2 = setInterval(rClick2, 4000);
	})
	$(window).blur(function () {
		clearInterval(timer1);
		clearInterval(timer2);
	})
	//当窗口大小改变时执行
	var newWidth = 0;
	var leftWidth = 0;
	function change() {
		newWidth = $('#main').children('.one-roll').children('.banner1').children('li').width() * -1;
		leftWidth = $('#main').children('.one-roll').children('.banner1').children('li').width() / 2 - 75;
		$('#main').children('.one-roll').children('.btn-right').css('right', '10px').end().children('.one-in').css('left', leftWidth);
		$('#main').children('.two-roll').children('.banner2').children('li').css('width', newWidth * -1).end().end().children('.two-in').css('left', leftWidth);
	}
	change();
	$(window).resize(function () {
		change();
	})
	//无缝滚动效果
	function tab2() {
		if (now2 == -1) {
			$('#main').children('.two-roll').children('.banner2').css('margin-left', newWidth * 3);
			now2 = 2;
		} else if (now2 == 4) {
			$('#main').children('.two-roll').children('.banner2').css('margin-left', '0');
			now2 = 1;
		}
		leftNum = now2 * newWidth;
		$('#main').children('.two-roll').children('.banner2').stop().animate({'margin-left' : leftNum}, 1000);
		(function (i) {				//判断当前图片是第几张，给圆点加active
			var nowI = i;
			if (i == 0) {
				nowI = 3;
			} else if (i == 4) {
				nowI = 1;
			}
			$('#main').children('.two-roll').children('.two-in').find('li').removeClass('two-active');
			$('#main').children('.two-roll').children('.two-in').find('li').eq(nowI - 1).addClass('two-active');
		})(now2)
	}
	//位置按钮
	for (var i = 0; i < 3; i++) {
		(function (i) {
			$('#main').children('.two-roll').children('.two-in').children('li').eq(i).click(function () {
				if(! $('#main').children('.two-roll').children('.banner2').is(":animated")){
					now2 = i + 1;
					leftNum = now2 * newWidth;
					$('#main').children('.two-roll').children('.banner2').stop().animate({'margin-left' : leftNum}, 1000).end().children('.two-in').find('li').removeClass('two-active').eq(i).addClass('two-active');
				}
			})
		})(i)
	}
})