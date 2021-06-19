chrome.storage.sync.get((data) => {
  console.log(data);
  document.getElementById("test").innerText = data;
});
