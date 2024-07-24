// Ensure cart is initialized
const cart = JSON.parse(localStorage.getItem('cart')) || {};

// Function to update the cart UI
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    if (cartItems) {
        cartItems.innerHTML = ''; // Clear existing items
        if (Object.keys(cart).length === 0) {
            const emptyMessage = document.createElement('li');
            emptyMessage.textContent = 'Your cart is empty.';
            cartItems.appendChild(emptyMessage);
        } else {
            for (const product in cart) {
                const quantity = cart[product];
                const listItem = document.createElement('li');
                listItem.textContent = `${product} (10x${quantity})`;

                // Optional: Add remove button
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.addEventListener('click', () => {
                    delete cart[product];
                    updateCart();
                });

                listItem.appendChild(removeButton);
                cartItems.appendChild(listItem);
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

// Add to Cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        if (cart[product]) {
            cart[product]++;
        } else {
            cart[product] = 1;
        }
        updateCart();
        alert(`${product} added to cart!`);
    });
});

// Reset Cart functionality
document.getElementById('reset-cart')?.addEventListener('click', () => {
    for (const product in cart) {
        delete cart[product];
    }
    localStorage.removeItem('cart');
    updateCart();
});

// Checkout functionality (Placeholder)
document.getElementById('checkout')?.addEventListener('click', () => {

});

document.addEventListener('DOMContentLoaded', updateCart);



function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCounter = document.getElementById('cart-counter');
    let totalItems = 0;

    if (cartItems) {
        cartItems.innerHTML = ''; 
        if (Object.keys(cart).length === 0) {
            const emptyMessage = document.createElement('li');
            emptyMessage.textContent = 'Your cart is empty.';
            cartItems.appendChild(emptyMessage);
        } else {
            for (const product in cart) {
                const quantity = cart[product];
                totalItems += quantity;
                const listItem = document.createElement('li');
                listItem.textContent = `${product} (x${quantity})`;

                // Optional: Add remove button
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.addEventListener('click', () => {
                    delete cart[product];
                    updateCart();
                });

                listItem.appendChild(removeButton);
                cartItems.appendChild(listItem);
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    if (cartCounter) {
        cartCounter.textContent = totalItems;
    }
}

// Add to Cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        if (cart[product]) {
            cart[product]++;
        } else {
            cart[product] = 1;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    });
});

// Reset Cart functionality
document.getElementById('reset-cart')?.addEventListener('click', () => {
    for (const product in cart) {
        delete cart[product];
    }
    localStorage.removeItem('cart');
    updateCart();
});

// Checkout functionality (Placeholder)
document.getElementById('checkout')?.addEventListener('click', () => {
    
});


updateCart();

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCounter = document.getElementById('cart-counter');
    const cartTotal = document.getElementById('cart-total');
    let totalItems = 0;
    let totalPrice = 0;

    if (cartItems) {
        cartItems.innerHTML = ''; // Clear existing items
        if (Object.keys(cart).length === 0) {
            const emptyMessage = document.createElement('li');
            emptyMessage.textContent = 'Your cart is empty.';
            cartItems.appendChild(emptyMessage);
        } else {
            for (const product in cart) {
                const { quantity, price } = cart[product];
                totalItems += quantity;
                totalPrice += quantity * price;
                const listItem = document.createElement('li');
                listItem.textContent = `${product} (x${quantity}) - ${quantity * price}dt`;

                // Optional: Add remove button
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.addEventListener('click', () => {
                    delete cart[product];
                    updateCart();
                });

                listItem.appendChild(removeButton);
                cartItems.appendChild(listItem);
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    if (cartCounter) {
        cartCounter.textContent = totalItems;
    }

    if (cartTotal) {
        cartTotal.textContent = `${totalPrice}dt`;
    }
}

// Add to Cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = parseFloat(button.getAttribute('data-price'));
        if (cart[product]) {
            cart[product].quantity++;
        } else {
            cart[product] = { quantity: 1, price: price };
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    });
});

// Reset Cart functionality
document.getElementById('reset-cart')?.addEventListener('click', () => {
    for (const product in cart) {
        delete cart[product];
    }
    localStorage.removeItem('cart');
    updateCart();
});

// Checkout functionality (Placeholder)
document.getElementById('checkout')?.addEventListener('click', () => {
    alert('Checkout functionality not implemented yet.');
});

// Initial cart update on page load
updateCart();





