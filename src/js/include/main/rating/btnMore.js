const ratingBtnMore = document.querySelector(".rating-btn-more");
const ratingItem = document.querySelectorAll(".rating-item");

function openRatingItems(list, maxCount) {
  let count = 0;
  let last = false;
  list.forEach((item) => {
    if (window.getComputedStyle(item).display === "none" && count < maxCount) {
      item.classList.add("is-open");
      count++;
      if (item === list[list.length - 1]) last = true;
    }
  });
  return last;
}

ratingBtnMore.addEventListener("click", () => {
  const screenWidth = document.documentElement.clientWidth;
  let count = 4;
  if (screenWidth < 996) count = 2;
  else if (screenWidth < 1355) count = 3;

  if (openRatingItems(ratingItem, count))
    ratingBtnMore.classList.add("is-close");
});
