const makeNewMemoPopup = () => {
  let sectionNode = document.createElement("section");
  sectionNode.style.cssText =
    "position: fixed; top: 150px; left: 50%; z-index: 999999; height: 300px; width: 400px; background-color: whitesmoke;";

  let h2Node = document.createElement("h2");
  let h2Text = document.createTextNode("새 메모 추가");
  h2Node.appendChild(h2Text);
  sectionNode.appendChild(h2Node);

  let textArea = document.createElement("textarea");
  textArea.id = "newMemo";
  textArea.style.cssText = "height: 200px; width: 98%";
  //   textArea.rows = 12;
  sectionNode.appendChild(textArea);

  let saveBtn = document.createElement("button");
  let savebtnText = document.createTextNode("저장");
  saveBtn.id = "saveBtn";
  saveBtn.appendChild(savebtnText);
  sectionNode.appendChild(saveBtn);

  let cancelBtn = document.createElement("button");
  let cancelbtnText = document.createTextNode("취소");
  cancelBtn.id = "cancelBtn";
  cancelBtn.appendChild(cancelbtnText);
  sectionNode.appendChild(cancelBtn);

  let body = document.getElementsByTagName("body")[0];
  body.appendChild(sectionNode);
};

// 윈도우 로드시 이벤트 생성
window.onload = () => {
  this.addEventListener("keydown", (e) => {
    if (e.altKey && e.shiftKey && e.ctrlKey) {
      makeNewMemoPopup();

      chrome.runtime.sendMessage({ action: "sendMemo" }, function (response) {
        //   결과 이벤트를 작성할곳
      });
    }
  });
};
