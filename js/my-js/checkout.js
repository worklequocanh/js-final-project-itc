console.log('Cart: ', getCart());
console.log('Orders: ', getOrders());

const modalOrder = new bootstrap.Modal(document.getElementById('modalOrder'));

function renderCheckoutInfo() {
  const cartItems = getCart();
  const $checkoutTotalProducts = $("#checkout__total__products");
  $checkoutTotalProducts.empty();


  cartItems.forEach((item, index) => {
    const $item = `
      <li>${index + 1}. ${item.name} <span>${formatPrice(item.price)}</span></li>
    `;

    $checkoutTotalProducts.append($item);
  });

  $('.checkout__total__all span').text(formatPrice(getCartTotal()));
}

renderCheckoutInfo();

$("#diff-acc").on("change", function () {
  if ($(this).is(":checked")) {
    $(".checkout__input #order-notes").attr("disabled", false);
  } else {
    $(".checkout__input #order-notes").attr("disabled", true);
  }
});

$('#place-order').on('click', function (e) {
  e.preventDefault();

  let orderInfo = {
    name: $('#name').val().trim(),
    address: $('#address').val().trim(),
    phone: $('#phone').val().trim(),
    email: $('#email').val().trim(),
    note: $('#order-notes').val().trim() || '',
  }
  console.log("Order Info:", orderInfo);

  if (!orderInfo.name || !orderInfo.email || !orderInfo.phone || !orderInfo.address) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  cartItems = getCart();
  if (cartItems.length === 0) {
    alert("Giỏ hàng của bạn đang trống!");
    return;
  }

  // Tạo đơn hàng
  const order = {
    id: Date.now(),
    customer: orderInfo,
    items: cartItems,
    total: getCartTotal(),
    date: new Date().toLocaleString("vi-VN")
  };

  // Lưu vào localStorage
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  saveOrders(orders);

  // Hiển thị ra modal
  let html = `
    <p><b>Mã đơn:</b> ${order.id}</p>
    <p><b>Khách hàng:</b> ${order.customer.name}</p>
    <p><b>Điện thoại:</b> ${order.customer.phone}</p>
    <p><b>Địa chỉ:</b> ${order.customer.address}</p>
    <p><b>Ghi chú:</b> ${order.customer.note || "Không có"}</p>
    <p><b>Ngày đặt:</b> ${order.date}</p>
    <hr>
    <table class="table">
      <thead><tr><th>Sản phẩm</th><th>SL</th><th>Giá</th><th>Tạm tính</th></tr></thead>
      <tbody>
        ${order.items.map(item => `
          <tr>
            <td>${item.name}</td>
            <td>${item.qty}</td>
            <td>${item.price.toLocaleString("vi-VN")}đ</td>
            <td>${(item.price * item.qty).toLocaleString("vi-VN")}đ</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
    <h5 class="text-end">Tổng cộng: ${order.total.toLocaleString("vi-VN")}đ</h5>
  `;

  $("#modal-body").html(html);
  modalOrder.show();


  // Xóa giỏ hàng sau khi đặt hàng
  clearCart();
  renderCartInfo();
  renderCheckoutInfo();
});


// Tắt modal
$('#close-modal, .btn-close').on('click', function () {
  modalOrder.hide();
});
