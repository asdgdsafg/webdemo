$(function () {
	$(window).scroll(fn1);
	fn1();
	function fn1() {
		var x = $(window).scrollTop() - 100;
		var timer = null;
		if ($(window).scrollTop() > 100) {
			timer = setTimeout(function () {
				$('.topimg').css({
					'position' : 'absolute',
					'top' : x,
				})
			}, 30)
		} else {
			clearInterval(timer);
			$('.topimg').css({
				'top' : '0'
			})
		}
	}
	$('.div1').find('button').first().click(function() {
		inputV($('#input1').val(), 'background-position-x');
		inputV($('#input2').val(), 'background-position-y');
	})
	function inputV(v1, v2) {
		if (/^\s*\d+\s*$/.test(v1) || v1 == '' || /^\s+$/.test(v1)) {
			if (v1 == '' || /^\s+$/.test(v1)) {
				v1 = 0;
			}
			v1 = parseFloat(v1);
			$('.topimg').css(v2, v1 + 'px');
		} else if (/^\s*\d+\%\s*$/.test(v1)) {
			if (/\s+$/.test(v1)) {
				v1 = parseFloat(v1) + '%';
			}
			$('.topimg').css(v2, v1);
		}
	}
	inputX('.div1', 1, 'background-position-x');
	inputX('.div1', 2, 'background-position-y');
	$('.div1').find('button').last().click(function () {
		$('.topimg').css('background-position', 'initial');
	})
	function inputX(ele, seat, attr) {
		var num = 0;
		$(ele).find('button').eq(seat).click(function () {
			if ($('.topimg').css(attr) == 'initial') {
				num = 20;
			} else if (/%$/.test($('.topimg').css(attr))) {
				num = $('.topimg').css(attr) + 20;
				$('.topimg').css(attr, function () {
					return 'calc(' + $('.topimg').css(attr) + ' + 20px)';
				});
			} else if (/^calc/.test($('.topimg').css(attr))) {
				$('.topimg').css(attr, function () {
					return 'calc(' + $('.topimg').css(attr) + ' + 20px)';
				});
			} else {
				num = parseFloat($('.topimg').css(attr)) + 20;
			}
			$('.topimg').css(attr, num + 'px');
		})
	}
	$('.div2').find('button').first().click(function() {
		var inV1 = $('#input3').val();
		var inV2 = $('#input4').val()
		if ((inV1 == '' || /^\s+$/.test(inV1)) && (inV2 == '' || /^\s+$/.test(inV2))) {
			inV1 = 0;
			$('.topimg').css('background-size', '200px 200px');
		} else {
			if (/^\s*\d+\s*$/.test(inV1)) {
				inV1 = parseFloat(inV1) + 'px';
			} else if (/^\s*\d+\%\s*$/.test(inV1)) {
				inV1 = parseFloat(inV1) + '%';
			} else {
				inV1 = 200 + 'px';
			}
			if (/^\s*\d+\s*$/.test(inV2)) {
				inV2 = parseFloat(inV2) + 'px';
			} else if (/^\s*\d+\%\s*$/.test(inV2)) {
				inV2 = parseFloat(inV2) + '%';
			} else {
				inV2 = 200 + 'px';
			}
			$('.topimg').css('background-size', inV1 + ' ' + inV2);
		}
	})
	inputN('.div2', 1, 'background-size');
	inputN('.div2', 2, 'background-size');
	$('.div2').find('button').last().click(function () {
		$('.topimg').css('background-size', '200px 200px');
	})
	function inputN(ele, seat, attr) {
		$(ele).find('button').eq(seat).click(function () {
			var seat1 = $('.topimg').css(attr).split(/\s/ig)[0];
			var seat2 = $('.topimg').css(attr).split(/\s/ig)[1];
			if (/^\s*\d+\%\s*$/.test(seat1)) { seat1 = parseFloat(seat1) + '%' } else { seat1 = parseFloat(seat1) + 'px'}
			if (/^\s*\d+\%\s*$/.test(seat2)) { seat2 = parseFloat(seat2) + '%' } else { seat2 = parseFloat(seat2) + 'px'}
			if (/^calc/.test($('.topimg').css(attr))) {
				seat1 = $('.topimg').css(attr).substr(0, $('.topimg').css(attr).indexOf(') ') + 1);
				seat2 = $('.topimg').css(attr).substr($('.topimg').css(attr).indexOf(') ') + 1)
			}
			if (/\s+calc/.test($('.topimg').css(attr))) {
				seat2 = $('.topimg').css(attr).substr($('.topimg').css(attr).indexOf(' c') + 1);
			}
			if (seat == 1) {
				$('.topimg').css(attr, function () {
					return 'calc(' + seat1 + ' + 40px)' + ' ' + seat2;
				})
			} else {
				if (/^calc/.test($('.topimg').css(attr))) {
					seat1 = $('.topimg').css(attr).substr(0, $('.topimg').css(attr).indexOf(') ') + 1);
				}
				$('.topimg').css(attr, function () {
					return seat1 + ' ' + 'calc(' + seat2 + ' + 40px)';
				})
			}
		})
	}
	fn3(0, 'no-repeat');
	fn3(1, 'repeat-x');
	fn3(2, 'repeat-y');
	fn3(3, 'repeat');
	function fn3(num, attr) {
		$('.div3').find('button').eq(num).click(function () {
			$('.div3').find('button').removeClass('btn-default').addClass('btn-info').eq(num).removeClass('btn-info').addClass('btn-default');
			$('.topimg').css('background-repeat', attr);
		})
	}
	fn4('.div4', 0, 'background-clip', 'border-box');
	fn4('.div4', 1, 'background-clip', 'padding-box');
	fn4('.div4', 2, 'background-clip', 'content-box');
	fn4('.div5', 0, 'background-origin', 'border-box');
	fn4('.div5', 1, 'background-origin', 'padding-box');
	fn4('.div5', 2, 'background-origin', 'content-box');
	function fn4(ele, num, attr1, attr2) {
		$(ele).find('button').eq(num).click(function () {
			$(ele).find('button').removeClass('btn-default').addClass('btn-info').eq(num).removeClass('btn-info').addClass('btn-default');
			$('.topimg').css(attr1, attr2);
		})
	}
})