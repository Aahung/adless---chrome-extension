function adless(){
	var _block = [
		"s.alitui.weibo.com",
		"70e.com"
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
var _interval = window.setInterval(function(){
	adless();
}, 100);

$(function(){
	window.setTimeout(function(){
		clearInterval(_interval);
	}, 2000);
})

