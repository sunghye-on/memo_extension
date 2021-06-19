let memoList = new Array();

chrome.storage.sync.get(["memoList"], (data) => {
  memoList = JSON.parse(data.memoList);
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "sendMemo") {
    memoList.unshift(request.memeoText);

    chrome.storage.sync.set({
      memoList: JSON.stringify(memoList),
    });

    sendResponse({ Success: true });
  }
});
