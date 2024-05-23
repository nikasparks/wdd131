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

function closeViewer(event){
    const parent = event.target.closest('div');
    parent.remove();
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const picInfo = event.target;
	// get the src attribute from that element and 'split' it on the "-"
    const picSorce = picInfo.src.split("-")

    const picName = picSorce[0]
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const picNew = `${picName}-full.jpeg`

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(picNew,'New pic'));
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    const closeButton = document.querySelector('.close-viewer');
    closeButton.addEventListener("click", closeViewer);

}

document.querySelector(".gallery").addEventListener("click", viewHandler);