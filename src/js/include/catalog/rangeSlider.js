const mySlider = document.getElementById("noUiSlider");

noUiSlider.create(mySlider, {
  start: [2000, 150000],
  range: {
    min: [0],
    max: [200000],
  },
  margin: 100,
  step: 50,
  connect: true,
});
const rangeFrom = document.getElementById("priceFrom");
const rangeTo = document.getElementById("priceTo");
const noUiHandleList = document.querySelectorAll(".noUi-handle");
const noUiСonnect = document.querySelector(".noUi-connect");

noUiHandleList.forEach((block) => {
  block.firstChild.innerHTML =
    "<svg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1.0197 13C0.25466 13 -0.23717 12.1878 0.117236 11.5096L5.84671 0.546693C6.23552 -0.197262 7.30668 -0.177781 7.66819 0.579819L12.8994 11.5428C13.222 12.2187 12.7293 13 11.9804 13L1.0197 13Z' fill='#A65CF0'/></svg>";

  block.addEventListener("focus", () => {
    noUiСonnect.classList.add("focus");
  });
  block.addEventListener("blur", () => {
    noUiСonnect.classList.remove("focus");
  });
});

const filterItems = {
  min: createFilter("от", "price"),
  max: createFilter("до", "price"),
};
const filterMin = filterItems.min.item;
const filterMax = filterItems.max.item;
const sliderMin = Math.round(mySlider.noUiSlider.options.range.min[0]);
const sliderMax = Math.round(mySlider.noUiSlider.options.range.max[0]);
document.getElementById(filterContainerId).append(filterMin, filterMax);

filterItems.min.btn.addEventListener("click", () => {
  filterMin.classList.remove("open");
  mySlider.noUiSlider.set([sliderMin, null]);
});

filterItems.max.btn.addEventListener("click", () => {
  filterMax.classList.remove("open");
  mySlider.noUiSlider.set([null, sliderMax]);
});

mySlider.noUiSlider.on("update", (values) => {
  rangeFrom.value = Math.round(values[0]);
  rangeTo.value = Math.round(values[1]);
  if (rangeFrom.value > sliderMin) {
    filterMin.classList.add("open");
    filterItems.min.span.textContent = `от ${rangeFrom.value}`;
  }

  if (rangeTo.value < sliderMax) {
    filterMax.classList.add("open");
    filterItems.max.span.textContent = `До ${rangeTo.value}`;
  }
});

rangeFrom.addEventListener("change", () => {
  mySlider.noUiSlider.set([rangeFrom.value, null]);
});

rangeTo.addEventListener("change", () => {
  mySlider.noUiSlider.set([null, rangeTo.value]);
});
