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
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		'A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his "Aunt Pol" and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.',
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
		}
]
const articleHolder = document.querySelector(".article-section");

function createArticle(articles){
	articles.forEach(article => {
		// createa rticle elements
		const newArticle = document.createElement("article");
		const articleDetails = document.createElement("div");
		const articleContent = document.createElement("div");
		const detailsDate = document.createElement("p");
		const detailsAgeRange = document.createElement("p");
		const detailsGenre = document.createElement("p");
		const detailsRating = document.createElement("p");
		const contentTitle = document.createElement("h2");
		const contentImage = document.createElement("img");
		const contentDescription = document.createElement("p");

		// add classes to elements that neeed them.
		newArticle.classList.add("posted-article");
		articleDetails.classList.add("article-details");
		articleContent.classList.add("article-content");
		detailsDate.classList.add("date-posted");
		detailsAgeRange.classList.add("age-range");
		detailsGenre.classList.add("genre");
		detailsRating.classList.add("star-rating");

		//adding content
		detailsDate.innerHTML =`${article.date}`;
		detailsAgeRange.innerHTML = `${article.ages}`;
		detailsGenre.innerHTML = `${article.genre}`;
		detailsRating.innerHTML = `${article.stars}`;
		contentTitle.innerHTML = `${article.title}`;
		contentImage.setAttribute('src',`${article.imgSrc}`); contentImage.setAttribute('alt',`${article.imgAlt}`);
		contentDescription.innerHTML = `${article.description}`;


		articleDetails.appendChild(detailsDate);
		articleDetails.appendChild(detailsAgeRange);
		articleDetails.appendChild(detailsGenre);
		articleDetails.appendChild(detailsRating);
		articleContent.appendChild(contentTitle);
		articleContent.appendChild(contentImage);
		articleContent.appendChild(contentDescription);
		newArticle.appendChild(articleDetails);
		newArticle.appendChild(articleContent);
		articleHolder.appendChild(newArticle);
	});
	
	


}

createArticle(articles)
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