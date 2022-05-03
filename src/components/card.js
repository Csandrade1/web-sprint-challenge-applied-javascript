import axios from "axios";

const Card = (article) => {
  const cardWrapper = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgContainer = document.createElement("div");
  const authorImg = document.createElement("img");
  const authorNameSpan = document.createElement("span");

  cardWrapper.appendChild(headlineDiv);
  cardWrapper.appendChild(authorDiv);
  authorDiv.appendChild(imgContainer);
  imgContainer.appendChild(authorImg);
  authorDiv.appendChild(authorNameSpan);

  cardWrapper.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgContainer.classList.add("img-container");

  headlineDiv.textContent = article.headline;
  authorImg.src = article.authorPhoto;
  authorNameSpan.textContent = article.authorName;

  return cardWrapper;
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
};

const cardAppender = (selector) => {
  const cardData = axios
    .get("http://localhost:5001/api/articles")
    .then((resp) => {
      const cards = Object.values(resp.data.articles);
      console.log(cards);
      for (let i = 0; i < cards.length; i++) {
        for (let n = 0; n < cards[i].length; n++) {
          document.querySelector(selector).appendChild(Card(cards[i][n]));
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
};

export { Card, cardAppender };
