function adless_1(){
	var _block = [
		"s.alitui.weibo.com", //微博
		"70e.com", //麒麟联盟
		"cpro.baidu" //百度联盟
	];
	var _all = $('iframe, script');
	for (var i = 0; i < _all.length; i ++){
		for (var j = 0; j < _block.length; j ++){
			if (_all[i].src.indexOf(_block[j]) > -1){
				console.log('adless: removed 1 ad from ' + _all[i].src);
				$(_all).remove();
				break;
			}
		}
	}
}
function adless_2(){
	//remove Weibo promotion;
	$('[feedtype="ad"]').remove();
}
var _interval = window.setInterval(function(){
	//adless_1(); // has moved to background.js
	adless_2();
}, 100);

$(function(){
	window.setTimeout(function(){
		clearInterval(_interval);
	}, 2000);
})

