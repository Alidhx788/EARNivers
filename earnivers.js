let products = JSON.parse(localStorage.getItem("online-game")) || [];

    function displayProducts(filteredProducts = products) {
        const list = document.getElementById("full-container");
        list.innerHTML = "";
        filteredProducts.forEach((product, index) => {
            list.innerHTML += `
                <div class="product">
                    <img src="${product.img}" width="150">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <div class="buttons">
                        <button onclick="addToCart(${index})">Add to Cart</button>
                        <button onclick="buyNow(${index})">Buy Now</button>
                    </div>
                </div>`;
        });
    }

    function searchProducts() {
        let query = document.getElementById("search").value.toLowerCase();
        let filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
        displayProducts(filteredProducts);
    }

    function addToCart(index) { alert(`Added ${products[index].name} to cart!`); }
    function buyNow(index) { alert(`Buying ${products[index].name} now!`); }

    displayProducts();