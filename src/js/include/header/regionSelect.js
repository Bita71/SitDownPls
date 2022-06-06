const regionSelect = createChoices("#selectRegion");

const regionLabel = document.querySelector(".header-region-label");

regionLabel.addEventListener("click", () => {
  const value = regionLabel.querySelector(".choices__list--singl").children[0]
    .dataset.value;
  const dropdown = regionLabel.querySelector(".choices__list--dropdown");
  dropdown.querySelectorAll(".choices__ite").forEach((item) => {
    value === item.dataset.value
      ? item.classList.add("is-close")
      : item.classList.remove("is-close");
  });
});
