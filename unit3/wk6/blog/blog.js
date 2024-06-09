const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]
const articleHolder = document.querySelector(".article-section");

function createArticle(articles){
	articles.forEach(article => {
		const newArticle = document.createElement("article")
		// const articleDetails
		// const articleContent
		// const detailsDate
		// const detailsAgeRange
		// const detailsGenre
		// const detailsRating
		// const contentTitle
		// const contentImage
		// const contentReview
		newArticle.classList.add("posted-article")
		articleHolder.appendChild(newArticle);
	});
	
	


}

function generateDetails(){
	const articleDetails = document.createElement("div");
	articleDetails.classList.add("article-details");
	articleDate
	articleDetails.appendChild()
}
function generateContent(){
	const articleContent = document.createElement("div");
	articleContent.classList.add("article-content");
}


// const newParagraph = document.createElement("p");
// newParagraph.innerText = "Added with Javascript!";
// document.body.appendChild(newParagraph);

// const newImg = document.createElement("img");
// newImg.setAttribute("src", "https://picsum.photos/200");
// newImg.setAttribute("alt", "Random image.");
// document.body.appendChild(newImg);

// const newDiv = document.createElement("div");
// newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
// document.body.appendChild(newDiv);

// const newSec = document.createElement("section");
// newSec.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>";
// document.body.appendChild(newSec);