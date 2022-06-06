function createCheckboxes(listFull, type, containerId, filterContainerId) {
  const container = document.getElementById(containerId);
  const filterContainer = document.getElementById(filterContainerId);
  const list = listFull[type];

  let id = 1;
  list.forEach((checkbox) => {
    // checkbox
    const checkboxItem = document.createElement("li");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    checkboxItem.classList.add("sidebar-checkbox-item");
    label.classList.add("reset-label", "sidebar-label");
    label.for = `${type}-${id}`;
    input.classList.add("visually-hidden", "sidebar-input");
    input.type = "checkbox";
    input.id = `${type}-${id}`;
    input.name = type;
    input.value = checkbox;
    span.textContent = checkbox;

    label.append(input, span);
    checkboxItem.append(label);
    container.append(checkboxItem);

    // filter item
    const filter = createFilter(checkbox, type);
    filterContainer.append(filter.item);

    input.addEventListener("change", () => {
      filter.item.classList.toggle("open");
    });

    filter.btn.addEventListener("click", () => {
      input.checked = "";
      filter.item.classList.remove('open');
    });

    id++;
  });

  if (list.length > 9) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.classList.add("reset-btn", "sidebar-btn-more");
    const btnText = `+ ещё ${list.length - 9}`;
    btn.textContent = btnText;
    container.parentNode.append(btn);

    btn.addEventListener("click", () => {
      container.classList.toggle("open");
      btn.textContent = container.className.includes("open")
        ? "Свернуть"
        : btnText;
    });
  }
}
