chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "sendMemo") {
    let memoList;

    chrome.storage.sync.get((data) => {
      memoList = data.memoList;
    });

    chrome.storage.sync.set({
      memoList: memoList + request.memeoText,
    });

    sendResponse({ Success: true });
  }
});
