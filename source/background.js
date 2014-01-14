var urls = [
	"1x3x.com",
	"1qwe3r.com",
	"alitui.weibo.com",
	"70e.com",
	"cpro.baidu",
	"youyou234.com",
	"qiyou.com"
];
var urls_formatted = new Array();
for (var i = 0; i < urls.length; i ++) {
	urls_formatted[i] = "*://*." + urls[i] + "/*";
}
function blockRequest(details) {
  return {cancel: true};
}

function updateFilters() {
  if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
    chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
  chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: urls_formatted}, ['blocking']);
}
 updateFilters();