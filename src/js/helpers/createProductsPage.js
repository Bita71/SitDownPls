function createProductsPage(productsList) {
  const list = document.createElement("ul");
  list.classList.add("reset-list", "products-list");

  productsList.forEach((product) => {
    list.append(createProductItem(product));
  });

  return list;
}
