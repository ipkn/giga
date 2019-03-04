chrome.browserAction.onClicked.addListener(function(){
    //chrome.browserAction.setBadgeText({text: ''+((Math.random()*10)|0)});
    chrome.tabs.executeScript({file:"tile.js"});
});
//chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    //if (message.type === 'showPageAction') {
        //chrome.pageAction.show(sender.tab.id);
    //}
//});

 //"permissions": ["activeTab"]
