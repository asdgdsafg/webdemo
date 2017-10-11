var imgX = 0;
var imgY = 0;
document.getElementsByTagName('button')[0].onclick = function () {
	var value1 = document.getElementById('input1').value;
	var value2 = document.getElementById('input2').value;
	//document.getElementById('div1').style.backgroundPosition = input1 + 'px ' + input2 + 'px';
	val(value1, 'backgroundPositionX');
	val(value2, 'backgroundPositionY');
}
function val(a, b) {
	if (/^\s*\d+\s*$/.test(a) || a == '' || /^\s+$/.test(a)) {
		if (a == '' || /^\s+$/.test(a)) {
			a = 0;
		}
		a = parseFloat(a);			//去掉两边的空格
		document.getElementById('div1').style[b] = a + 'px';
	} else if (/^\s*\d+\%\s*$/.test(a)) {
		if (/\s+$/.test(a)) {
			a = a.replace(/\s/g, '');			//删除所有空格，必须加g全局匹配，否则删一处就不删了
		}
		document.getElementById('div1').style[b] = a;
	}
}
document.getElementsByTagName('button')[1].onclick = function () {
	if (document.getElementById('div1').style.backgroundPositionX == 'initial') {
		imgX = 20;
	} else {
		imgX = parseFloat(document.getElementById('div1').style.backgroundPositionX) + 20;
	}
	document.getElementById('div1').style.backgroundPositionX = imgX + 'px';
}
document.getElementsByTagName('button')[2].onclick = function () {
	if (document.getElementById('div1').style.backgroundPositionY == 'initial') {
		imgY = 20;
	} else {
		imgY = parseFloat(document.getElementById('div1').style.backgroundPositionY) + 20;
	}
	document.getElementById('div1').style.backgroundPositionY = imgY + 'px';
}
document.getElementsByTagName('button')[3].onclick = function () {
	document.getElementById('div1').style.backgroundPosition = 'initial';
}