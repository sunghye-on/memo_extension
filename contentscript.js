const getEleById = (id) => document.getElementById(id);
const createEle = (tag) => document.createElement(tag);
const createText = (data) => document.createTextNode(data);

const makeNewMemoPopup = () => {
  let sectionNode = createEle("section");
  sectionNode.style.cssText =
    "position: fixed; top: 150px; left: 50%; z-index: 999999; height: 300px; width: 400px; background-color: whitesmoke;";
  sectionNode.id = "memoSection";
  let h2Node = createEle("h2");
  let h2Text = createText("새 메모 추가");
  h2Node.appendChild(h2Text);
  sectionNode.appendChild(h2Node);

  let textArea = createEle("textarea");
  textArea.id = "newMemo";
  textArea.style.cssText = "height: 200px; width: 98%";
  //   textArea.rows = 12;
  sectionNode.appendChild(textArea);

  let saveBtn = createEle("button");
  let savebtnText = createText("저장");
  saveBtn.id = "saveBtn";
  saveBtn.appendChild(savebtnText);
  sectionNode.appendChild(saveBtn);

  let cancelBtn = createEle("button");
  let cancelbtnText = createText("취소");
  cancelBtn.id = "cancelBtn";
  cancelBtn.appendChild(cancelbtnText);
  sectionNode.appendChild(cancelBtn);

  let body = document.getElementsByTagName("body")[0];
  body.appendChild(sectionNode);
};

const removeMemoEle = () => {
  getEleById("memoSection").remove();
};

// 윈도우 로드시 이벤트 생성
window.onload = () => {
  this.addEventListener("keydown", (e) => {
    if (e.altKey && e.shiftKey && e.ctrlKey) {
      makeNewMemoPopup();

      // 저장
      getEleById("saveBtn").addEventListener("click", (e) => {
        let memeoText = getEleById("newMemo").value;

        chrome.runtime.sendMessage(
          { action: "sendMemo", memeoText },
          function (response) {
            if (response.Success) {
              removeMemoEle();
            } else {
              alert("저장오류!");
            }
          }
        );
      });

      // 메모장 작성창 삭제
      getEleById("cancelBtn").addEventListener("click", () => {
        removeMemoEle();
      });
    }
  });
};
