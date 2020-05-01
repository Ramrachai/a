// Add left to right
let leftList = document.querySelectorAll(".leftList li");
leftList.forEach((item) => {
  item.addEventListener("click", (e) => {
    document.querySelector("#mylist").appendChild(item);
  });
});

// add right to left
let rightList = document.querySelector("#mylist");
let observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      rightItems = document.querySelectorAll("#mylist li");
      rightItems.forEach((item) => {
        item.addEventListener("click", () => {
          document.querySelector(".leftList").appendChild(item);
        });
      });
    }
  });
});
observer.observe(rightList, { childList: true });
