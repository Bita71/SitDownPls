export function createPhotos(
  mainPhotoContainer,
  previewContainer,
  imgNameList,
  activeMainPhoto = true
) {
  let itemList = [];
  previewContainer.innerHTML = "";

  imgNameList.forEach((imgName) => {
    const item = document.createElement("li");
    const img = document.createElement("img");
    if (!activeMainPhoto) {
      item.classList.add("swiper-slide", "modal-preview-item");
      img.classList.add("modal-preview-img");
    } else {
      item.classList.add("product-main-preview-item");
      img.classList.add("product-main-preview-img");
    }

    img.src = `img/product/productCard/${imgName}.png`;
    img.alt = "Диван";
    img.ondragstart = function() {
      return false;
    };

    img.addEventListener("click", () => {
      itemList.forEach((item) => item.classList.remove("close"));
      mainPhotoContainer.src = img.src;
      item.classList.add("close");
      if (!activeMainPhoto) swiperPreview.update();
    });

    item.append(img);
    previewContainer.append(item);
    itemList.push(item);
  });

  mainPhotoContainer.src = `img/product/productCard/1.png`;
  itemList[0].classList.add("close");

  if (activeMainPhoto) {
    mainPhotoContainer.addEventListener("click", () => {
      createPhotos(
        document.querySelector(".modal-preview-photo"),
        document.querySelector(".modal-preview-list"),
        imgNameList,
        false
      );
      new GraphModal().open("preview");
    });
  }
}
