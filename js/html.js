$(function () {
	fn1('.a-attr', '.a-hid', '.a-son-hid');
	fn1('.btn-url', '.a-url-hid');
	fn1('.btn-val', '.tar-hid');
	fn1('.abbr-attr', '.abbr-hid');
	fn1('.audio-attr', '.audio-hid');
	function fn1(ele1, ele2, ele3) {
		$('#main').children('.panel').eq(1).find(ele1).click(function () {
			if($('#main').children('.panel').eq(1).find(ele2).is(':hidden')){
				$('#main').children('.panel').eq(1).find(ele2).show();
			}else{
				$('#main').children('.panel').eq(1).find(ele2).hide();
				$('#main').children('.panel').eq(1).find(ele3).hide();
			}
		})
	}
	$('.a-rel').click(function () {
		window.open("http://www.w3school.com.cn/tags/att_a_rel.asp");
	})
	fn1('.img-attr', '.img-hid', '.img-son-hid');
})