$(function() {
	var str1 = ' ';
	fn1();
	function fn1() {		//日期
		var oDate1 = new Date();
		str1 = oDate1.getFullYear() + '' + toDon((oDate1.getMonth() + 1)) + toDon(oDate1.getDate());
		for (var i = 0; i < str1.length; i++) {
			$('#header').find('.img1').eq(i).attr('src', 'images/' + str1[i] + '.png')
		}
		var arr = ["seven","one","two","three","four","five","six"];
		$('#header').find('img').last().attr('src', 'images/' + arr[oDate1.getDay()] + '.png')
	}
	var timer = null;
	var str2 = ' ';
	timer = setInterval(fn2, 1000);
	fn2();
	function fn2() {		//时间
		var oDate2 = new Date();
		str2 = toDon(oDate2.getHours()) + toDon(oDate2.getMinutes()) + toDon(oDate2.getSeconds());
		for (var i = 0; i < str2.length; i++) {
			$('#header').find('.img2').eq(i).attr('src', 'images/' + str2[i] + '.png')
		}
		if (str2 == '000000') {		//当时间为00:00:00时执行fn1()，日期刷新
			fn1();
		}
	}
	function toDon(n) {		//转换成string类型，并且当数值小于10时，前面添加个零
		if (n > 9) {
			return n + '';
		} else {
			return '0' + n;
		}
	}
})