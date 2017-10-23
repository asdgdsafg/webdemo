window.onload = function () {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.translate(155, 155);
	//定时器
	var timer = null;
	timer = setInterval(fn, 1000);
	fn();
	//离开和进入网页时清除和开启定时器
	$(window).focus(function () {
		clearInterval(timer);
		timer = setInterval(fn, 1000);
	})
	$(window).blur(function () {
		clearInterval(timer);
	})
	function fn() {
		//外圈
		ctx.save();
		ctx.clearRect(-155, -155, c.width, c.height);
		ctx.beginPath();
		ctx.lineWidth = 5;
		ctx.arc(0, 0, 150, 0, 2 * Math.PI, false);
		var grd = ctx.createLinearGradient(-100, -100, 140, 0);
		grd.addColorStop(0, "magenta");
		grd.addColorStop(0.5, "blue");
		grd.addColorStop(1, "red");
		ctx.strokeStyle = grd;
		ctx.stroke();
		ctx.restore();
		//数字
		ctx.save();
		ctx.lineWidth = 2;
		ctx.textBaseline = 'top';
		ctx.textAlign = 'center';
		ctx.font = '20px microsoft yahei';
		(function (num, grd) {
			for (var i = 1; i < 13; i++) {
				ctx.save();
				num = i * 10;
				grd = ctx.createLinearGradient(-220, 0, num, 0);
				grd.addColorStop(0, "magenta");
				grd.addColorStop(0.5, "blue");
				grd.addColorStop(1, "red");
				ctx.strokeStyle = grd;
				ctx.rotate(i * 30 * Math.PI / 180);
				ctx.strokeText(i, 0, -145);
				ctx.restore();
			}
		})()
		ctx.restore();
		//圆点
		point(13, 30);				//5个大圆点，每个圆点移动30度
		point(60, 6);				//55个小圆点，6度
		function point(num1, num2, num3) {			//圆点 封装
			if (num1 == 13) {
				ctx.lineWidth = 3;	//圆点的宽度
				num3 = 1.5;				//圆点的半径
			} else {
				ctx.lineWidth = 2;
				num3 = 1;
			}
			for (var i = 1; i < num1; i++) {
				if (num1 == 60) {
					if (i % 5 == 0) {
						continue;
						console.log(i)
					}
				}
				ctx.save();
				ctx.beginPath();
				ctx.rotate(i * num2 * Math.PI / 180);
				ctx.arc(116, 0, num3, 0, 2 * Math.PI, false);
				ctx.strokeStyle = 'magenta';
				ctx.stroke();
				ctx.restore();
			}
		}
		//时间
		hand('H');
		hand('M');
		hand('S');
		function hand(num, length, width) {
			if (num == 'H') {
				width = 4;
				length = 85;
				num = new Date().getHours() * 30 + new Date().getMinutes() / 2;
			} else if (num == 'M') {
				width = 3;
				length = 100;
				num = new Date().getMinutes() * 6 + new Date().getSeconds() / 10;
			} else if (num == 'S') {
				width = 2;
				length = 120;
				num = new Date().getSeconds() * 6;
			}
			ctx.save();
			ctx.lineWidth = width;
			ctx.beginPath();
			grd = ctx.createLinearGradient(-220, 0, num, 0);
			grd.addColorStop(0, "magenta");
			grd.addColorStop(0.5, "blue");
			grd.addColorStop(1, "red");
			ctx.strokeStyle = grd;
			ctx.rotate((num - 90) * Math.PI / 180);
			ctx.translate(-10, 0);
			ctx.moveTo(0, 0);
			ctx.lineTo(length, 0);
			ctx.closePath();
			ctx.lineJoin = 'round';
			ctx.stroke();
			ctx.restore();
		}
		//最中间的小圆点
		ctx.save();
		ctx.lineWidth = 5;
		ctx.beginPath();
		ctx.arc(0, 0, 2, 0, 2 * Math.PI, false);
		ctx.strokeStyle = '#444';
		ctx.stroke();
		ctx.restore();
	};
}