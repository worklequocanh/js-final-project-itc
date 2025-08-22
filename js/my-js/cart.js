
function renderCartInfo() {
  // Offcanvas cart info
  $('.offcanvas__nav__option a:has(img[src*="cart.png"]) span').text(getCartQuantity());
  $('.offcanvas__nav__option .price').text(formatPrice(getCartTotal()));

  // Header cart info
  $('.header__nav__option a:has(img[src*="cart.png"]) span').text(getCartQuantity());
  $('.header__nav__option .price').text(formatPrice(getCartTotal()));

  // Cart total
  const $cartTotal = $(".cart__total li span");
  if ($cartTotal) {
    $cartTotal.text(getCartTotal().toLocaleString("vi-VN") + "đ");
  }
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
  renderCartInfo();
});

$(document).on("click", ".update__btn a", (e) => {
  e.preventDefault();
  console.log("Button clicked!");
  renderCart();
});