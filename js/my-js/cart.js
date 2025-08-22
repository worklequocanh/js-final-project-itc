
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
      <tr id="row-${item.id}" data-size="${item.size || ''}" data-color="${item.color || ''}">
        <td class="product__cart__item">
          <div class="product__cart__item__pic">
            <img class="w-90" src="img/product/${item.avatar}" alt="" />
          </div>
          <div class="product__cart__item__text">
            <h6>${item.name}</h6>
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

  $(".cart__total li span").text(
    grandTotal.toLocaleString("vi-VN") + "đ"
  );
}

// clearCart();
renderCartInfo();
renderCart();

// Update qty in cart page
var proQty = $('.pro-qty-2');
proQty.prepend('<span class="fa fa-angle-left dec qtybtn"></span>');
proQty.append('<span class="fa fa-angle-right inc qtybtn"></span>');
proQty.on('click', '.qtybtn', function () {
  var $button = $(this);
  var oldValue = $button.parent().find('input').val();
  let newVal = oldValue;

  const $row = $button.closest('tr');
  const rowId = $row.attr("id");
  const productId = Number(rowId.split("-")[1]);

  const size = $row.data("size");
  const color = $row.data("color");

  if ($button.hasClass('inc')) {
    newVal = parseFloat(oldValue) + 1;
  } else {
    if (oldValue > 1) {
      newVal = parseFloat(oldValue) - 1;
    } else {
      if (confirm("Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng không?")) {
        newVal = 0;
        removeFromCart(productId, size, color);
        $row.remove();
      }
    }
  }

  // lấy giá gốc từ text
  let priceText = $row.find(".product__cart__item__text h5")
    .text()
    .replace("đ", "")
    .replace(/\./g, "");
  let price = parseInt(priceText, 10);

  // tính lại tổng
  let total = price * newVal;
  $row.find(".cart__price").text(total.toLocaleString("vi-VN") + "đ");

  // cập nhật localStorage
  updateQty(productId, size, color, newVal);

  $button.parent().find('input').val(newVal);
});

// Remove item from cart
$(document).on("click", ".cart__close i", function () {
  const $row = $(this).closest("tr");
  const productId = Number($row.attr("id").split("-")[1]);
  const size = $row.data("size");
  const color = $row.data("color");

  if (confirm("Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng không?")) {
    removeFromCart(productId, size, color);
    $row.remove();
  }
});

$(document).on("click", ".update__btn i", (e) => {
  e.prependtDefault();
  console.log("Button clicked!");
  renderCart();
});