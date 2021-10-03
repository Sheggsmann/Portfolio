const portfolioItems = document.querySelectorAll(".portfolio-item");
let portfolioItemIndex = 0;

document.addEventListener("click", (e) => {
  if (e.target.closest(".portfolio-item")) {
    let currentItem = e.target.closest(".portfolio-item");
    portfolioItemIndex = [...portfolioItems].indexOf(currentItem);
    togglePopup();
    toggleBodyScrolling();
    updateNextPrevItem(portfolioItemIndex);
  }
});

function loadPortfolioDetails(portfolioItem) {
  let renderedData = getRenderedData(portfolioItem);
  setRenderedData(renderedData, document.querySelector(".pp-left"));
  changePortfolioDetails(portfolioItem);
}

function changePortfolioDetails(portfolioItem) {
  /**
   * Changes the portfolio descriptions
   * Including Title and Information at the right panel
   * Works together with other classes
   */
  const renderedData = portfolioItem.querySelector(".portfolio-render-data");
  document.querySelector(".pp-title").innerText =
    renderedData.getAttribute("data-title");
  document.querySelector(".pp-project-type").innerText =
    renderedData.getAttribute("data-type");
  document.querySelector(".pp-dev-date").innerText =
    renderedData.getAttribute("data-date");
  document.querySelector(".description").innerText = renderedData.querySelector(
    ".portfolio-description"
  ).innerText;
  updateTechStack(
    document.querySelector(".tech-stack-list"),
    portfolioItem.querySelectorAll('.tech-stack-item')
  );
}

function updateTechStack(element, techStackList) {
  // Remove the tech-stack-item class or any other class that specified styling.
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  for (let techStackItem of techStackList) {
    const li = document.createElement("li");
    li.innerText = techStackItem.innerText;
    element.appendChild(li);
  }
}

function getRenderedData(portfolioItem) {
  /**
   * Get all data in renderedItems
   */
  let data = [];
  const renderedItems = portfolioItem.querySelectorAll(".render-item");
  renderedItems.forEach((item) => {
    let dataObj = {};
    dataObj.renderImagesSrc = [];
    item
      .querySelectorAll("img")
      .forEach((img) => dataObj.renderImagesSrc.push(img.src));
    dataObj.renderText = item.querySelector("p").innerText;
    data.push(dataObj);
  });
  return data;
}

function setRenderedData(data, where) {
  where.innerHTML = ""; // Clear any data inside the (where - div)
  data.forEach((d) => {
    let div = document.createElement("div");
    const p = document.createElement("p");
    if (d.renderImagesSrc.length === 1) {
      const img = document.createElement("img");
      img.src = d.renderImagesSrc[0];
      div.appendChild(img);
    } else {
      div = getMobileDiv(d.renderImagesSrc);
    }
    p.innerText = d.renderText;
    where.append(div, p);
  });
}

function getMobileDiv(images) {
  const div = document.createElement("div");
  div.setAttribute("class", "p-row space-between");
  // Ensure we loop through two images, since the width is 50%;
  for (let image of images.slice(0, 2)) {
    const col = document.createElement("div");
    col.classList.add("w-50");
    const img = document.createElement("img");
    img.src = image;
    col.appendChild(img);
    div.appendChild(col);
  }
  return div;
}

function togglePopup() {
  document.querySelector(".pp-popup").classList.toggle("open");
}

function toggleBodyScrolling() {
  document.body.classList.toggle("hide-scroll");
}

// Close Portfolio Popup
document.querySelector(".close-pp-btn").addEventListener("click", () => {
  togglePopup();
  toggleBodyScrolling();
});

// Handle Next and Prev buttons
document
  .querySelector(".prev-pp-btn")
  .addEventListener("click", () => loadNextPrevItem("prev"));
document
  .querySelector(".next-pp-btn")
  .addEventListener("click", () => loadNextPrevItem("next"));

// Load Next and Prev Items
function loadNextPrevItem(direction) {
  if (direction === "prev") {
    portfolioItemIndex--;
  } else {
    portfolioItemIndex++;
  }
  document.querySelector(".pp-overlay").classList.add(direction);
  setTimeout(() => {
    document.querySelector(".pp-inner").scrollTo(0, 0);
    updateNextPrevItem();
  }, 400);
  setTimeout(() => {
    document.querySelector(".pp-overlay").classList.remove(direction);
  }, 1000);
}

function updateNextPrevItem() {
  if (portfolioItemIndex > 0) {
    document.querySelector(".prev-pp-btn").classList.remove("hidden");
    loadPortfolioDetails(portfolioItems[portfolioItemIndex]);
  } else {
    // Hide or disable prev button
    document.querySelector(".prev-pp-btn").classList.add("hidden");
  }

  if (portfolioItemIndex < portfolioItems.length - 1) {
    document.querySelector(".next-pp-btn").classList.remove("hidden");
    loadPortfolioDetails(portfolioItems[portfolioItemIndex]);
  } else {
    // Hide or disable next button
    document.querySelector(".next-pp-btn").classList.add("hidden");
  }
}
