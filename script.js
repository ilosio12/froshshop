// Product Data - All iPhone Series
const products = [
    // iPhone 16 Series
    {
        id: 1,
        name: "iPhone 16 Pro Max",
        price: 23990000,
        oldPrice: 25990000,
        emoji: "📱"
    },
    {
        id: 2,
        name: "iPhone 16 Pro",
        price: 19990000,
        oldPrice: 21990000,
        emoji: "📱"
    },
    {
        id: 3,
        name: "iPhone 16",
        price: 14990000,
        oldPrice: 16990000,
        emoji: "📱"
    },
    {
        id: 4,
        name: "iPhone 16 Plus",
        price: 17490000,
        oldPrice: 19490000,
        emoji: "📱"
    },
    // iPhone 15 Series
    {
        id: 5,
        name: "iPhone 15 Pro Max",
        price: 18490000,
        oldPrice: 20990000,
        emoji: "📱"
    },
    {
        id: 6,
        name: "iPhone 15 Pro",
        price: 15490000,
        oldPrice: 17990000,
        emoji: "📱"
    },
    {
        id: 7,
        name: "iPhone 15",
        price: 12490000,
        oldPrice: 14990000,
        emoji: "📱"
    },
    {
        id: 8,
        name: "iPhone 15 Plus",
        price: 14490000,
        oldPrice: 16990000,
        emoji: "📱"
    },
    // iPhone 14 Series
    {
        id: 9,
        name: "iPhone 14 Pro Max",
        price: 14490000,
        oldPrice: 16990000,
        emoji: "📱"
    },
    {
        id: 10,
        name: "iPhone 14 Pro",
        price: 12490000,
        oldPrice: 14990000,
        emoji: "📱"
    },
    {
        id: 11,
        name: "iPhone 14",
        price: 9490000,
        oldPrice: 11990000,
        emoji: "📱"
    },
    {
        id: 12,
        name: "iPhone 14 Plus",
        price: 11490000,
        oldPrice: 13990000,
        emoji: "📱"
    },
    // iPhone 13 Series
    {
        id: 13,
        name: "iPhone 13",
        price: 7490000,
        oldPrice: 8990000,
        emoji: "📱"
    },
    {
        id: 14,
        name: "iPhone 13 mini",
        price: 6490000,
        oldPrice: 7990000,
        emoji: "📱"
    },
    // iPhone SE Series
    {
        id: 15,
        name: "iPhone SE (2022)",
        price: 4490000,
        oldPrice: 5490000,
        emoji: "📱"
    },
    // ========== AKSESORIS IPHONE ==========
    // Chargers
    {
        id: 16,
        name: "Apple Charger 20W USB-C",
        price: 350000,
        oldPrice: 450000,
        emoji: "🔌"
    },
    {
        id: 17,
        name: "Apple Charger 35W Dual USB-C",
        price: 650000,
        oldPrice: 800000,
        emoji: "🔌"
    },
    {
        id: 18,
        name: "Apple Charger 96W MacBook",
        price: 950000,
        oldPrice: 1200000,
        emoji: "🔌"
    },
    {
        id: 19,
        name: "Anker 20W Charger",
        price: 180000,
        oldPrice: 250000,
        emoji: "🔌"
    },
    {
        id: 20,
        name: "Anker 65W Charger",
        price: 450000,
        oldPrice: 550000,
        emoji: "🔌"
    },
    // Cables
    {
        id: 21,
        name: "Apple Cable USB-C to Lightning 1m",
        price: 290000,
        oldPrice: 390000,
        emoji: "🔗"
    },
    {
        id: 22,
        name: "Apple Cable USB-C to Lightning 2m",
        price: 390000,
        oldPrice: 490000,
        emoji: "🔗"
    },
    {
        id: 23,
        name: "Apple Cable USB-C to USB-C 1m",
        price: 350000,
        oldPrice: 450000,
        emoji: "🔗"
    },
    {
        id: 24,
        name: "Anker Cable USB-C to Lightning",
        price: 150000,
        oldPrice: 200000,
        emoji: "🔗"
    },
    {
        id: 25,
        name: "Anker Cable USB-C to USB-C 2m",
        price: 180000,
        oldPrice: 250000,
        emoji: "🔗"
    },
    // Cases
    {
        id: 26,
        name: "Apple Clear Case iPhone 16",
        price: 450000,
        oldPrice: 550000,
        emoji: "📱"
    },
    {
        id: 27,
        name: "Apple Silicone Case iPhone 16",
        price: 550000,
        oldPrice: 650000,
        emoji: "📱"
    },
    {
        id: 28,
        name: "Apple FineWoven Case iPhone 16",
        price: 650000,
        oldPrice: 750000,
        emoji: "📱"
    },
    {
        id: 29,
        name: "Spigen Ultra Hybrid Case",
        price: 150000,
        oldPrice: 200000,
        emoji: "📱"
    },
    {
        id: 30,
        name: "Spigen Liquid Air Case",
        price: 120000,
        oldPrice: 170000,
        emoji: "📱"
    },
    {
        id: 31,
        name: "OtterBox Defender Case",
        price: 450000,
        oldPrice: 550000,
        emoji: "📱"
    },
    // Screen Protector
    {
        id: 32,
        name: "Apple Screen Protector Glass",
        price: 350000,
        oldPrice: 450000,
        emoji: "🛡️"
    },
    {
        id: 33,
        name: "Spigen Glass Screen Protector",
        price: 120000,
        oldPrice: 170000,
        emoji: "🛡️"
    },
    {
        id: 34,
        name: "Belkin Glass Screen Protector",
        price: 250000,
        oldPrice: 350000,
        emoji: "🛡️"
    },
    // AirPods
    {
        id: 35,
        name: "AirPods Pro 2nd Gen",
        price: 3290000,
        oldPrice: 3590000,
        emoji: "🎧"
    },
    {
        id: 36,
        name: "AirPods 3rd Gen",
        price: 2490000,
        oldPrice: 2790000,
        emoji: "🎧"
    },
    {
        id: 37,
        name: "AirPods 2nd Gen",
        price: 1690000,
        oldPrice: 1990000,
        emoji: "🎧"
    },
    {
        id: 38,
        name: "AirPods Max",
        price: 7490000,
        oldPrice: 8490000,
        emoji: "🎧"
    },
    // Power Bank
    {
        id: 39,
        name: "Anker PowerCore 10000mAh",
        price: 350000,
        oldPrice: 450000,
        emoji: "🔋"
    },
    {
        id: 40,
        name: "Anker PowerCore 20000mAh",
        price: 550000,
        oldPrice: 700000,
        emoji: "🔋"
    },
    {
        id: 41,
        name: "MagSafe Battery Pack",
        price: 1150000,
        oldPrice: 1350000,
        emoji: "🔋"
    },
    // MagSafe Accessories
    {
        id: 42,
        name: "MagSafe Charger",
        price: 550000,
        oldPrice: 700000,
        emoji: "🧲"
    },
    {
        id: 43,
        name: "MagSafe Duo Charger",
        price: 1150000,
        oldPrice: 1400000,
        emoji: "🧲"
    },
    {
        id: 44,
        name: "MagSafe Wallet",
        price: 450000,
        oldPrice: 550000,
        emoji: "👛"
    },
    // Apple Watch Accessories
    {
        id: 45,
        name: "Apple Watch Sport Band",
        price: 350000,
        oldPrice: 450000,
        emoji: "⌚"
    },
    {
        id: 46,
        name: "Apple Watch Nike Sport Band",
        price: 450000,
        oldPrice: 550000,
        emoji: "⌚"
    },
    {
        id: 47,
        name: "Apple Watch Hermès Band",
        price: 2500000,
        oldPrice: 3000000,
        emoji: "⌚"
    },
    // Car Accessories
    {
        id: 48,
        name: "MagSafe Car Charger",
        price: 450000,
        oldPrice: 550000,
        emoji: "🚗"
    },
    {
        id: 49,
        name: "Apple CarPlay Adapter",
        price: 850000,
        oldPrice: 1050000,
        emoji: "🚗"
    },
    // Audio
    {
        id: 50,
        name: "HomePod mini",
        price: 1490000,
        oldPrice: 1790000,
        emoji: "🔊"
    },
    {
        id: 51,
        name: "HomePod (2nd Gen)",
        price: 4490000,
        oldPrice: 4990000,
        emoji: "🔊"
    },
    {
        id: 52,
        name: "Beats Studio Pro",
        price: 3490000,
        oldPrice: 3990000,
        emoji: "🎧"
    },
    {
        id: 53,
        name: "Beats Fit Pro",
        price: 2490000,
        oldPrice: 2990000,
        emoji: "🎧"
    },
    {
        id: 54,
        name: "Beats Solo 4",
        price: 1990000,
        oldPrice: 2490000,
        emoji: "🎧"
    }
];

// Cart State
let cart = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});

// Render Products
function renderProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="price">
                    Rp ${formatRupiah(product.price)}
                    ${product.oldPrice ? `<span class="old-price">Rp ${formatRupiah(product.oldPrice)}</span>` : ''}
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Tambah ke Keranjang
                </button>
            </div>
        </div>
    `).join('');
}

// Format Rupiah
function formatRupiah(number) {
    return number.toLocaleString('id-ID');
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartUI();
    showNotification(`${product.name} ditambahkan ke keranjang!`);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

// Update Cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    // Update count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update items
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Keranjang masih kosong</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="price">Rp ${formatRupiah(item.price)}</div>
                    <div class="quantity-controls">
                        <button onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `Rp ${formatRupiah(total)}`;
}

// Toggle Cart
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    
    cartSidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        showNotification('Keranjang masih kosong!', 'error');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    alert(`Terima kasih telah berbelanja di FroshShop!\n\nTotal: Rp ${formatRupiah(total)}\nItem: ${totalItems} produk\n\nTim kami akan menghubungi Anda untuk konfirmasi.`);
    
    cart = [];
    updateCartUI();
    toggleCart();
}

// Notification
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? '#ef4444' : '#10b981'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: 500;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add keyframe animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);