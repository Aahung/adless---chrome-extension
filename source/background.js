var urls = [
	"http://brazil.cityu.edu.hk:8754/pebook-jscript/noRight.js"
];
function blockRequest(details) {
  return {cancel: true};
}

function updateFilters() {
  if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
    chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
  chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: urls}, ['blocking']);
}
 updateFilters();