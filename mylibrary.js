let products = {
  data: [
    {
      productName: "BIOLOGY",
      image: "bio.png",
      link: "biology.html",
    },
    {
      productName: "PHYSICS",
      image: "phy.png",
      link: "physics.html",
    },
    {
      productName: "CHEMISTRY",
      image: "chem.png",
      link: "chem.html",
    },
    {
      productName: "STATISTICS",
      image: "stat.png",
      link: "statistics.html",
    },
    {
      productName: "CALCULUS",
      image: "calc.png",
      link: "calculus.html",
    },

    {
      productName: "PROGRAMMING",
      image: "prog.png",
      link: "programming.html",
    },
    // Add other products with their respective links
  ],
};

function createCard(product) {
  // Create Card anchor element
  let cardLink = document.createElement("a");
  cardLink.setAttribute("href", product.link); // Set link for the card
  cardLink.classList.add("card-link");

  // Create Card
  let card = document.createElement("div");
  card.classList.add("card");

  // Image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  // Image tag
  let image = document.createElement("img");
  image.setAttribute("src", product.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  // Container
  let container = document.createElement("div");
  container.classList.add("container");

  // Product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = product.productName.toUpperCase();
  container.appendChild(name);

  card.appendChild(container);

  cardLink.appendChild(card); // Append card to the anchor element
  document.getElementById("products").appendChild(cardLink); // Append anchor element to products container
}

// Display existing products
products.data.forEach((product) => {
  createCard(product);
});

// Event listener for search button click
document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value.toUpperCase();
  let elements = document.querySelectorAll(".product-name");

  elements.forEach((element) => {
    let card = element.closest('.card');
    if (element.innerText.toUpperCase().includes(searchInput)) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
});

// Event listener for "Add Product" button click
document.getElementById("add-product").addEventListener("click", () => {
  addProduct();
});
