function createCatalogPages(productsList, containerId) {
  if (!productsList.length) return;
  if (document.querySelector(".products-main"))
    document.querySelector(".products-main").remove();
  if (document.querySelector(".products-pagination"))
    document.querySelector(".products-pagination").remove();

  const width = document.documentElement.clientWidth;
  const countItemsOnOnePage = width > 1004 ? 9 : 6;

  const countOfPages = Math.ceil(productsList.length / countItemsOnOnePage);

  const container = document.getElementById(containerId);
  const list = document.createElement("ul");
  list.classList.add("reset-list", "products-main");

  for (let i = 0; i < countOfPages; i++) {
    const item = document.createElement("li");
    item.classList.add("products-main-item");
    item.id = "page-" + i;
    item.append(
      createProductsPage(
        productsList.slice(
          i * countItemsOnOnePage,
          (i + 1) * countItemsOnOnePage
        )
      )
    );
    list.append(item);
  }
  container.append(list);

  if (countOfPages > 1) {
    container.append(createProductPagination(countOfPages, container));
    openPage(1);
  }
}
