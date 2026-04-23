const productGrid = document.getElementById("product-container");
const searchField = document.getElementById("search-field");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

fetch("https://fakestoreapi.com/products")
  .then((response) => {
    console.log("loading...");
    return response.json();
  })
  .then((data) => {
    console.log("loaded");
    console.log(data);

    function renderProducts(products) {
      if (products.length === 0) {
        productGrid.innerHTML = "<p>No products match your filters.</p>";
        return;
      }

      const gridHTML = products
        .map((product) => {
          const productTitle = product.title;
          const productPrice = product.price;
          const productDescription = product.description;
          const productImage = product.image;
          const productCategory = product.category;
          const productCount = product.rating.count;
          const productRate = product.rating.rate;

          return `
              <article class="product-card" data-title="${productTitle}">
              <h2>${productTitle}</h2>
              <img class = "product-image" src="${productImage}" alt="${productTitle}" />
              <p>${productDescription}</p>
              <p>Price: $${productPrice}</p>
              <p>Category: ${productCategory}</p>
              <p>Rating: ${productRate} (${productCount} reviews)</p>
              <button class = "like-button" data-title="${productTitle}">❤️</button>
              </article>
          `;
        })
        .join("");

      // savedItems();

      productGrid.innerHTML = gridHTML;
    }

    function applyFilters() {
      const searchValue = searchField.value.trim().toLowerCase();
      const selectedCategories = [...checkboxes]
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value.toLowerCase());

      const filteredProducts = data.filter((product) => {
        const matchesSearch = product.title.toLowerCase().includes(searchValue);
        const matchesCategory =
          selectedCategories.length === 0 ||
          selectedCategories.includes(product.category.toLowerCase());

        return matchesSearch && matchesCategory;
      });

      renderProducts(filteredProducts);
      savedItems();
    }

    renderProducts(data);

    searchField.addEventListener("input", applyFilters);
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", applyFilters);
    });
    savedItems();

    function savedItems() {
      const likeButton = document.querySelectorAll(".like-button");
      const productCard = document.querySelectorAll(".product-card");

      productCard.forEach((card) => {
        const title = card.dataset.title;

        if (localStorage.getItem(title) === "true") {
          card.classList.add("like");
        } else {
          card.classList.remove("like");
        }
      });

      likeButton.forEach((button) => {
        button.addEventListener("click", () => {
          const title = button.dataset.title;
          const card = button.closest(".product-card");

          if (localStorage.getItem(title) === "true") {
            localStorage.setItem(title, "false");
            card.classList.remove("like");
          } else {
            localStorage.setItem(title, "true");
            card.classList.add("like");
          }
        });
      });
    }
  });
