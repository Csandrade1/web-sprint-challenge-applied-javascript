const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const divHeader = document.createElement("div");
  const dateContent = document.createElement("span");
  const titleContent = document.createElement("h1");
  const tempContent = document.createElement("span");

  divHeader.appendChild(dateContent);
  divHeader.appendChild(titleContent);
  divHeader.appendChild(tempContent);

  divHeader.classList.add("header");
  dateContent.classList.add("date");
  tempContent.classList.add("temp");

  dateContent.textContent = date;
  titleContent.textContent = title;
  tempContent.textContent = temp;

  return divHeader;
};

const headerAppender = (selector) => {
  const selectorArg = document.querySelector(selector);
  const newHeader = Header("Andrade Times", "March 10, 2022", "43°");
  selectorArg.append(newHeader);
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
};

export { Header, headerAppender };
