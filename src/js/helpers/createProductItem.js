function createProductItem({img, title, price, rate}) {
  const item = document.createElement("li");
  item.classList.add("card-full", "products-item");
  item.innerHTML = `
  <article class="card">
    <div class="card-top">${rate}</div>
    <div class="card-img"><img src='img/catalog/products/${img}.png' alt='${title}'></div>
    <div class="card-content">
      <h3 class="reset-title card-title">
        <a class="reset-link card-title-link" "href="#">${title}</a>
      </h3>
      <div class="card-price">${price} руб</div>
      <button class="reset-btn btn-secondary card-content-btn" type="button">Купить</button>
    </div>
  </article>`
  return item;
}
