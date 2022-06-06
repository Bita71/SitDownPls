//= common.js
//= include/catalog/data.js
//= helpers/createBreadcrumbs.js
//= helpers/createCheckboxes.js
//= helpers/createFilter.js
//= helpers/createCatalogPages.js
//= helpers/createProductsPagination.js
//= helpers/createProductsPage.js
//= helpers/createProductItem.js
//= include/catalog/breadcrumbs.js
//= include/catalog/sidebarDropdown.js
//= include/catalog/checkboxes.js
//= include/catalog/rangeSlider.js
//= include/catalog/openPage.js
//= include/catalog/products.js


const sidebarTitle = document.querySelector('.sidebar-title');

sidebarTitle.textContent = document.documentElement.clientWidth > 1352 ? "Фильтровать по:" : "Фильтры:";
const priceCheckboxes = [document.getElementById('discount-1'),document.getElementById('discount-2')];
if(document.documentElement.clientWidth < 710) {
  priceCheckboxes[0].nextSibling.textContent = "> 5000";
  priceCheckboxes[1].nextSibling.textContent = "< 5000";
}

window.addEventListener("resize", () => {
  let width = document.documentElement.clientWidth;
  createBreadcrumbs(breadcrumbsList);
  createCatalogPages(productsList, productsContainerId);
  if (width > 1352) {
    sidebarTitle.textContent = "Фильтровать по:";
  } else if (width <= 710) {
    priceCheckboxes[0].nextSibling.textContent = "> 5000";
    priceCheckboxes[1].nextSibling.textContent = "< 5000";
  } else if (width <= 1352) {
    sidebarTitle.textContent = "Фильтры:";
    priceCheckboxes[0].nextSibling.textContent = "Более 5000";
    priceCheckboxes[1].nextSibling.textContent = "Менее 5000";
  }
});
