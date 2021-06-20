const getEleById = (id) => document.getElementById(id);
const createEle = (tag) => document.createElement(tag);
const createText = (data) => document.createTextNode(data);

chrome.storage.sync.get(["memoList"], (data) => {
  let memoList = JSON.parse(data.memoList);

  let memoDiv = getEleById("memoContaienr");

  for (const memo of memoList) {
    let memoP = createEle("div");
    memoP.setAttribute("class", "memoText");
    let memoText = createText(memo);
    memoP.appendChild(memoText);
    memoDiv.appendChild(memoP);
  }
});

getEleById("resetMemo").addEventListener("click", () => {
  chrome.storage.sync.clear();
  location.reload();
});
