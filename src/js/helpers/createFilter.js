function createFilter(title, type) {
  const item = document.createElement("li");
  const btnClose = document.createElement("button");
  const span = document.createElement('span');
  item.classList.add("products-filters-item", type);
  span.textContent = title;
  btnClose.type = "button";
  btnClose.classList.add("reset-btn", "products-filters-close");
  item.append(span, btnClose);
  return { item: item, span:span, btn: btnClose };
}
