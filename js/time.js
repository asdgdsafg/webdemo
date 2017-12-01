$(function() {
	var arr = [];
	var oDate = null;
	for (var i = 0; i < 7; i++) {		//给7个按钮赋予点击事件
		butOne(i);
	}
	function butOne(num) {
		$('#main').children('.div1').children('div.row').find('button').eq(num).click(function () {
			oDate = new Date();
			arr = [oDate.getFullYear() + '年', (oDate.getMonth() + 1) + '月', oDate.getDate() + '日', oDate.getHours() + '点', oDate.getMinutes() + '分', oDate.getSeconds() + '秒', '星期' + oDate.getDay()];
			$('#main').children('.div1').children('div.row').find('input').eq(num).val(arr[num]);
		})
	}
	var timer1 = null;
	btnTwo(0);
	btnTwo(1);
	function btnTwo(num) {
		$('#main').children('.div1').children('div.row').children('span').find('button').eq(num).click(function () {
			firstTime(num);
			if (num == 0) {
				clearInterval(timer1);		//先取消定时器，防止重复开启
				timer1 = setInterval(firstTime, 1000);		//当点击第一个按钮时执行定时器
			} else {
				clearInterval(timer1);		//当点击第二个按钮时取消定时器
			}
		})
	}
	var str = '';
	function firstTime(num) {
		if (num == undefined) {
			num = 0;
		}
		for (var i = 0; i < 7; i++) {
			oDate = new Date();
			arr = [oDate.getFullYear() + '年', (oDate.getMonth() + 1) + '月', oDate.getDate() + '日', oDate.getHours() + '点', oDate.getMinutes() + '分', oDate.getSeconds() + '秒', '星期' + oDate.getDay()];
			if (num == 0) {
				str = arr[i];
			} else {
				str = '';
			}
			$('#main').children('.div1').children('div.row').find('input').eq(i).val(str);
		}
	}
	var timer2 = null;
	timer2 = setInterval(lastTime, 1000);
	lastTime();
	function lastTime() {
		oDate = new Date();
		str = toDon(oDate.getHours()) + toDon(oDate.getMinutes()) + toDon(oDate.getSeconds());
		for (var i = 0; i < str.length; i++) {
			$('.time').find('.img3').eq(i).css('left', 'calc( -49px * ' + str[i] + ')');
		}
		function toDon(n) {
			if (n > 9) {
				return n + '';
			} else {
				return '0' + n;
			}
		}
	}
})