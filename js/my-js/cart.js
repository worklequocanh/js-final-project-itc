
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

function renderCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let $tbody = $("#cart-table tbody");
  $tbody.empty();

  let grandTotal = 0;

  cart.forEach((item, index) => {
    let lineTotal = Number(item.price) * Number(item.qty);
    grandTotal += lineTotal;

    let row = `
      <tr id="row-${item.id}">
        <td class="product__cart__item">
          <div class="product__cart__item__pic">
            <img class="w-90" src="img/product/${item.avatar}" alt="" />
          </div>
          <div class="product__cart__item__text">
            <h6>Diagonal Textured Cap</h6>
            <h5>${formatPrice(item.price)}</h5>
          </div>
        </td>
        <td class="quantity__item">
          <div class="quantity">
            <div class="pro-qty-2">
              <input type="text" value="${item.qty}" />
            </div>
          </div>
        </td>
        <td class="cart__price">${formatPrice(lineTotal)}</td>
        <td class="cart__close"><i class="fa fa-close"></i></td>
      </tr>
    `;

    $tbody.append(row);
  });

  $("#cart-total").text("Tổng cộng: " + grandTotal.toLocaleString() + " đ");
}

// clearCart();
renderCartInfo();
renderCart();

var proQty = $('.pro-qty-2');
proQty.prepend('<span class="fa fa-angle-left dec qtybtn"></span>');
proQty.append('<span class="fa fa-angle-right inc qtybtn"></span>');
proQty.on('click', '.qtybtn', function () {
  var $button = $(this);
  var oldValue = $button.parent().find('input').val();
  if ($button.hasClass('inc')) {
    var newVal = parseFloat(oldValue) + 1;
  } else {
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
    }
  }
  $button.parent().find('input').val(newVal);
});