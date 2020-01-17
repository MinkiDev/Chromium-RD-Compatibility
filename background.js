chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.tabs.executeScript(tab.id, {
        file: 'inject.js'
    });
});

chrome.browserAction.onClicked.addListener(function(tab) {
    window.open("https://remotedesktop.google.com/");
});