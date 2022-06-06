function createBreadcrumbs(breadcrumbsList) {
  const header = document.querySelector(".header");

  if (document.querySelector(".breadcrumbs")) {
    document.querySelector(".breadcrumbs").remove();
    header.classList.remove("with-breadcrumbs");
  }
  if (document.documentElement.clientWidth < 710) return;
    
  const width = document.documentElement.clientWidth;

  header.classList.add("with-breadcrumbs");

  const list = document.createElement("ul");
  list.classList.add("reset-list", "breadcrumbs");

  breadcrumbsList.forEach((el) => {
    const item = document.createElement("li");
    item.classList.add("breadcrumbs-item");

    if (el === breadcrumbsList[breadcrumbsList.length - 1]) {
      item.textContent = el.title;
    } else {
      const link = document.createElement("a");
      const slash = document.createElement("span");

      link.classList.add("reset-link", "breadcrumbs-link");
      link.textContent = el.title;
      link.href = el.link;

      slash.textContent = "/";

      item.append(link, slash);
    }
    list.append(item);
  });

  header.append(list);
}
