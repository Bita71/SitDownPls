const burger = document.getElementById("burger");
const headerMenu = document.querySelector(".nav");
const headerAddMenu = document.getElementById("addMenu");

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  headerMenu.classList.toggle("open");
  headerAddMenu.classList.toggle("open");
});
