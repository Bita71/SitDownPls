const categorySelect = createChoices("#selectCategory");

const categoryChoices = document
  .querySelector(".header-search")
  .querySelector(".choices");

categoryChoices.addEventListener("click", () => {
  const value = categoryChoices.querySelector(".choices__list--singl").children[0]
  .dataset.value;
  const dropdown = categoryChoices.querySelector(".choices__list--dropdown");
  dropdown.querySelectorAll(".choices__ite").forEach((item) => {
    value === item.dataset.value
      ? item.classList.add("is-close")
      : item.classList.remove("is-close");
  });
});
