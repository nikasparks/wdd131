
function galleryTemplate(artistWorks) {
    const artistSections = artistWorks.map(artist => {
        return`<section class="artist">
        <h3 class="artistName">${artist.artist}</h3>
        <p class="genre">${artist.genre}</p>
        ${photoLayout(artist)}           
        <p class="acknowledgement">${artist.acknowledgement}</p>
    </section>`;
    });
    return artistSections.join('');
};

function photoLayout (artist) {
   const imageSection =  artist.images.map(image =>{
    return`<figure class="pic ${image.class}" id="${image.id}">
        <h3 class="title">${image.title}</h3>
        <img src="./resources/images/300/${image.imageSource}" alt="${image.altText}" />
	<figcaption>
		<p class="description">${image.description}</p>
        <p class="tags">Tags: ${grabTags(image)}</p>
    </figcaption>
    </figure>`
    });
    return imageSection.join('');
};

function grabTags (image){
    return image.tags.reduce((acc, tag, i) => (
        acc + (i === image.tags.length - 1 ? tag : `${tag}, `)
      ), "");
};

export {galleryTemplate};

