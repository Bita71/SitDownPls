const buyOneClickBtn = document.querySelector('.product-main-info-buy');
buyOneClickBtn.addEventListener('click',()=> {
  new GraphModal().open('buyOneClick');
})