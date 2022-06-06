const tooltips = document.querySelectorAll(".tooltip");
tippy(tooltips, {
  duration: [200, 200],
  maxWidth: 157,
  trigger: "mouseenter click focus",
  hideOnClick: "toggle",
  theme: "myTooltip",
});
