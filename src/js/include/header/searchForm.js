const searchLabel = document.querySelector(".header-search-label");
let focusInput = false;

searchLabel.addEventListener("keydown", (e) => {
  if (e.code === "Tab") {
    if (focusInput) {
      focusInput = false;
      searchLabel.children[2].tabIndex = 0;
    } else {
      focusInput = false;
      searchLabel.focus();
      searchLabel.children[2].tabIndex = 1;
    }
  } else {
    if (e.key !== "Shift") {
      focusInput = true;
      searchLabel.children[1].focus();
    }
  }
});
