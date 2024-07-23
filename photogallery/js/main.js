import { galleryData } from "./galleryPics.js";
import { galleryTemplate } from "./template.js";
import { getDate } from "./getDates.js";


function buildGallery(galleryData) {
    const gallerySection = document.querySelector('.gallery');
    gallerySection.innerHTML = `${galleryTemplate(galleryData)}`;
    console.log(galleryData);
    // console.log(galleryTemplate(galleryData))
};

getDate();
buildGallery(galleryData);
