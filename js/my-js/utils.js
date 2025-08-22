// reset tất cả form
$("form").each(function () {
  this.reset();
});

// Functions dùng chung cho tất cả trang
function getProducts() {
  return JSON.parse(localStorage.getItem('products')) || [];
}

function getProductById(id) {
  const products = getProducts();
  return products.find(product => product.id === parseInt(id));
}

function getFeaturedProducts() {
  try {
    const allProducts = getProducts();
    const featuredProducts = allProducts.filter(product => product.featured === true);

    console.log(`Tìm thấy ${featuredProducts.length} sản phẩm nổi bật`);
    return featuredProducts;
  } catch (error) {
    console.error('Lỗi khi lấy sản phẩm nổi bật:', error);
    return [];
  }
}

function updateProduct(updatedProduct) {
  const products = getProducts();
  const index = products.findIndex(p => p.id === updatedProduct.id);
  if (index !== -1) {
    products[index] = updatedProduct;
    localStorage.setItem('products', JSON.stringify(products));
  }
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product, size, color, qty) {
  let cart = getCart();

  // Tìm sản phẩm đã có trong giỏ (so sánh id + size + color)
  let index = cart.findIndex(item =>
    item.id === product.id &&
    item.size === size &&
    item.color === color
  );

  if (index !== -1) {
    // Nếu đã có rồi thì tăng số lượng
    cartQty = Number(cart[index].qty);
    cartQty += Number(qty);
    cart[index].qty = cartQty;
  } else {
    // Nếu chưa có thì thêm mới
    cart.push({
      id: product.id,
      name: product.name,
      avatar: product.images[0],
      price: Number(product.price),
      size: size || null,
      color: color || null,
      qty: Number(qty) || 1
    });
  }

  // Lưu lại vào localStorage
  saveCart(cart);
  alert("Đã thêm vào giỏ hàng!");
}

function updateQty(productId, size, color, newQty) {
  let cart = getCart();
  let index = cart.findIndex(
    (item) => item.id === productId &&
      item.size === size &&
      item.color === color
  );

  if (index !== -1) {
    console.log("Before update:", typeof cart[index].id);
    cart[index].qty = newQty > 0 ? newQty : 1;
    saveCart(cart);
  }
  else {
    console.warn("Product not found in cart for update:", productId, size, color);
  }
  console.log("Updated cart:", cart);
  renderCartInfo();
}

function removeFromCart(productId, size, color) {
  let cart = getCart();
  cart = cart.filter(
    (item) => !(item.id === productId && item.size === size && item.color === color)
  );
  saveCart(cart);
}

function clearCart() {
  localStorage.removeItem("cart");
}

function getCartTotal() {
  let cart = getCart();
  return cart.reduce((total, item) => {
    let price = Number(item.price) || 0;
    let qty = Number(item.qty) || 0;
    return total + price * qty;
  }, 0);
}

function getCartItemCount() {
  let cart = getCart();
  return cart.length;
}

function getCartQuantity() {
  let cart = getCart();
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function formatPrice(price) {
  return price.toLocaleString('vi-VN') + 'đ';
}


function getWishlist() {
  const data = localStorage.getItem("wishlist");
  return data ? new Set(JSON.parse(data)) : new Set();
}

function saveWishlist(list) {
  localStorage.setItem("wishlist", JSON.stringify(Array.from(list)));
}

function toggleWishlist(productId) {
  let wishlist = getWishlist();

  if (wishlist.has(productId)) {
    wishlist.delete(productId);
    saveWishlist(wishlist);
    return false;
  } else {
    wishlist.add(productId);
    saveWishlist(wishlist);
    return true;
  }
}

// Lưu orders
function saveOrders(orders) {
  localStorage.setItem("orders", JSON.stringify(orders));
}


// Get contacts
function getContacts() {
  return JSON.parse(localStorage.getItem("contact")) || [];
}

// Save contact messages
function addToContact(name, email, message) {
  let contacts = JSON.parse(localStorage.getItem("contact")) || [];
  contacts.push({
    id: Date.now(),
    name,
    email,
    message,
    date: new Date().toLocaleString("vi-VN")
  });
  localStorage.setItem("contact", JSON.stringify(contacts));
}
