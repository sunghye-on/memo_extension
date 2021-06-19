const getEleById = (id) => document.getElementById(id);
const createEle = (tag) => document.createElement(tag);
const createText = (data) => document.createTextNode(data);

chrome.storage.sync.get(["memoList"], (data) => {
  let memoList = JSON.parse(data.memoList);

  let memoDiv = getEleById("memo");

  for (const memo of memoList) {
    let memoP = createEle("p");
    let memoText = createText(memo);
    memoP.appendChild(memoText);
    memoDiv.appendChild(memoP);
  }
});
