
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
    (item) => item.id === productId && item.size === size && item.color === color
  );

  if (index !== -1) {
    cart[index].qty = newQty > 0 ? newQty : 1;
    saveCart(cart);
  }
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

function renderCartInfo() {
  // Offcanvas cart info
  $('.offcanvas__nav__option a:has(img[src*="cart.png"]) span').text(getCartQuantity());
  $('.offcanvas__nav__option .price').text(formatPrice(getCartTotal()));

  // Header cart info
  $('.header__nav__option a:has(img[src*="cart.png"]) span').text(getCartQuantity());
  $('.header__nav__option .price').text(formatPrice(getCartTotal()));
}

renderCartInfo();
