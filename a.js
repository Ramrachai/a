// init document list change
let leftList = document.querySelectorAll("#leftList li");
leftList.forEach((item) => {
  item.addEventListener("click", (e) => {
    document.querySelector("#rightList").appendChild(item);
  });
});

// add items
let rightList = document.querySelector("#rightList");
let observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      rightItems = document.querySelectorAll("#rightList li");
      rightItems.forEach((item) => {
        item.addEventListener("click", () => {
          document.querySelector("#leftList").appendChild(item);
        });
      });

      leftItem = document.querySelectorAll("#leftList li");
      leftItem.forEach((item) => {
        item.addEventListener("click", () => {
          document.querySelector("#rightList").appendChild(item);
        });
      });
    }
  });
});
observer.observe(rightList, { childList: true });
