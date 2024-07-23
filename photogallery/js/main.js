import { galleryData } from "./galleryPics.js";
import { galleryTemplate } from "./template.js";


function buildGallery(galleryData) {
    const gallerySection = document.querySelector('.gallery');
    gallerySection.innerHTML = `${galleryTemplate(galleryData)}`;
    console.log(galleryData);
    // console.log(galleryTemplate(galleryData))
};

buildGallery(galleryData);