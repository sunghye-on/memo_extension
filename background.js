chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "sendMemo") {
    chrome.storage.sync.get(["memoList"], (data) => {
      if (data.memoList) {
        memoList = JSON.parse(data.memoList);
        memoList.unshift(request.memeoText);

        chrome.storage.sync.set({
          memoList: JSON.stringify(memoList),
        });
      } else {
        let memoList = new Array();
        memoList.push(request.memeoText);

        chrome.storage.sync.set({
          memoList: JSON.stringify(memoList),
        });
      }
    });
  }
});
