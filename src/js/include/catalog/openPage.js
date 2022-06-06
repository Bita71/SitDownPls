function openPage(number) {
  document.querySelectorAll(".products-main-item").forEach((item) => {
    item.classList.remove("open");
    if (item.id.substr(-1) == number - 1) item.classList.add("open");
  });

  document.querySelectorAll(".products-pagination-btn").forEach((btn) => {
    btn.classList.remove("active");
    btn.disabled = "";
    if (btn.textContent == number) {
      btn.classList.add("active")
      btn.disabled = "disabled";
    };
  });
}
