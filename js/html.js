$(function () {
	fn('.a-attr', '.a-hid', '.a-son-hid');
	fn('.btn-url', '.a-url-hid');
	fn('.btn-val', '.tar-hid');
	fn('.abbr-attr', '.abbr-hid');
	fn('.audio-attr', '.audio-hid');
	fn('.img-attr', '.img-hid', '.img-son-hid');
	fn('.form-attr', '.form-hid');
	fn('.input-attr', '.input-hid', '.input-attr-hid');
	fn('.input-attr-attr', '.input-attr-hid');
	fn('.laber-attr', '.laber-hid');
	fn('.fiel-attr', '.fiel-hid');
	fn('.btn-attr', '.btn-hid');
	fn('.se-attr', '.se-hid');
	fn('.opti-attr', '.opti-hid');
	fn('.optg-attr', '.optg-hid');
	fn('.textarea-attr', '.textarea-hid');
	fn('.outp-attr', '.outp-hid');
	fn('.meta-attr', '.meta-hid');
	function fn(ele1, ele2, ele3) {
		$('#main').children('.panel2').find(ele1).click(function () {
			if($('#main').children('.panel2').find(ele2).is(':hidden')){
				$('#main').children('.panel2').find(ele2).show();
			} else{
				$('#main').children('.panel2').find(ele2).hide();
				$('#main').children('.panel2').find(ele3).hide();
			}
		})
	}
	$('.a-rel').click(function () {
		window.open("http://www.w3school.com.cn/tags/att_a_rel.asp");
	})
})