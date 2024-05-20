const menuButton = document.querySelector(".button");
function toggleMenu() {
  const menuList = document.querySelector(".menu");
  menuList.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {

};

