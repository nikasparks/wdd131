const menuButton = document.querySelector(".button");
function toggleMenu() {
  const menuList = document.querySelector(".menu");
  menuList.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menuList = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
      menuList.classList.remove("hide");
    } else {
      menuList.classList.add("hide");
    }
  }
  
  handleResize();
  window.addEventListener("resize", handleResize);

  function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }