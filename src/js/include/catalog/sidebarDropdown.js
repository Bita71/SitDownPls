const sidebarTitlesList = document.querySelectorAll('.sidebar-subtitle');

sidebarTitlesList.forEach(title => {
  title.addEventListener('click',() => {
    document.querySelectorAll(".open-dropdown").forEach(item => {
      if (item != title.parentNode) item.classList.remove('open-dropdown');
    })
    if (document.documentElement.clientWidth <= 1352) {
      title.parentNode.classList.toggle('open-dropdown');
    }
  })
})