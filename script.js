// Cart array to store items
let cart = [];

// Get the modals
var productModal = document.getElementById("productModal");
var cartModal = document.getElementById("cartModal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("modalImage");
var modalPrice = document.getElementById("modalPrice");
var addToCartBtn = document.getElementById("addToCart");
var orderNowBtn = document.getElementById("orderNow");

// Get all the product images and buttons
var images = document.querySelectorAll(".product-image");
var buttons = document.querySelectorAll(".view-details");

// Get the cart items container
var cartItemsContainer = document.getElementById("cartItems");

// Get the "View Cart" button
var viewCartBtn = document.getElementById("viewCart");

// Loop through all images and buttons to add event listeners
images.forEach((image, index) => {
    image.addEventListener("click", function() {
        productModal.style.display = "block";
        modalImg.src = this.src;
        modalPrice.textContent = "Price: $10.00"; // You can dynamically set the price here
    });
});

buttons.forEach((button, index) => {
    button.addEventListener("click", function() {
        productModal.style.display = "block";
        modalImg.src = images[index].src;
        modalPrice.textContent = "Price: $10.00"; // You can dynamically set the price here
    });
});

// Close modals when clicking on the close button
document.querySelectorAll(".close").forEach((closeBtn) => {
    closeBtn.addEventListener("click", function() {
        productModal.style.display = "none";
        cartModal.style.display = "none";
    });
});

// Close modals when clicking outside the modal
window.onclick = function(event) {
    if (event.target == productModal || event.target == cartModal) {
        productModal.style.display = "none";
        cartModal.style.display = "none";
    }
}

// Add to Cart functionality
addToCartBtn.addEventListener("click", function() {
    var quantity = document.getElementById("quantity").value;
    var product = {
        image: modalImg.src,
        price: modalPrice.textContent,
        quantity: quantity
    };
    cart.push(product);
    alert("Added " + quantity + " item(s) to cart");
    productModal.style.display = "none";
});

// Order Now functionality
orderNowBtn.addEventListener("click", function() {
    var quantity = document.getElementById("quantity").value;
    alert("Order placed for " + quantity + " item(s)!");
    productModal.style.display = "none";
});

// View Cart functionality
viewCartBtn.addEventListener("click", function() {
    cartItemsContainer.innerHTML = ""; // Clear previous cart items
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach((item, index) => {
            var cartItem = document.createElement("div");
            cartItem.innerHTML = `
                <img src="${item.image}" alt="Product Image" width="50">
                <p>${item.price} | Quantity: ${item.quantity}</p>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }
    cartModal.style.display = "block";
});

// Checkout functionality
document.getElementById("checkout").addEventListener("click", function() {
    alert("Order placed successfully!");
    cart = []; // Clear the cart
    cartModal.style.display = "none";
});