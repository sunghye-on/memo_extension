chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "sendMemo") {
    sendResponse({ farewell: "goodbye" });
  }
});
