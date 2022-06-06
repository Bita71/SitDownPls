function createProductPagination(count) {
  const list = document.createElement('ul');
  list.classList.add('reset-list','products-pagination');
  for (let i = 0; i < count; i++) {
    const item  = document.createElement('li');
    const btn = document.createElement('button');
    item.classList.add('products-pagination-item');
    btn.classList.add('reset-btn','products-pagination-btn');
    btn.textContent = i + 1;

    btn.addEventListener('click', ()=> {
      openPage(i + 1);
    })

    item.append(btn);
    list.append(item);
  }

  return list;
}