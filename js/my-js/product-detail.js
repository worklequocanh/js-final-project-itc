'use strict';

(function ($) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const colorMap = {
    "Trắng": "#ffffff",
    "Đen": "#000000",
    "Xanh": "#0080ff",         // xanh chung (blue)
    "Xanh dương": "#0066cc",  // nếu có
    "Xanh navy": "#001f3f",
    "Xanh đậm": "#003366",
    "Xanh nhạt": "#87CEEB",
    "Xanh pastel": "#a7c7e7",
    "Xanh mint": "#98ff98",
    "Xanh kaki": "#c3b091",
    "Xanh rêu": "#4b5320",
    "Xanh caro": "#1e90ff",    // khó định nghĩa, tạm chọn xanh dương
    "Xanh biển": "#1ca9c9",

    "Đỏ": "#ff0000",
    "Đỏ đô": "#8b0000",
    "Đỏ caro": "#b22222",

    "Hồng": "#ff69b4",
    "Hồng nhạt": "#ffb6c1",
    "Hồng pastel": "#ffd1dc",

    "Xám": "#808080",
    "Nâu": "#8B4513",
    "Be": "#f5f5dc",
    "Vàng": "#ffd700"
  };

  if (!id) {
    console.error("Product ID is missing in the URL.");
    return;
  }
  console.log("Product ID:", id);

  const product = getProductById(id);
  console.log("Product Details:", product);

  loadProductDetails();

  function loadProductDetails() {
    // Load nav tab
    const $navTabs = $('#nav-tabs');
    $navTabs.empty();
    let htmlNavTabs = '';
    product.images.forEach((image, index) => {
      htmlNavTabs += `
        <li class="nav-item">
          <a
            class="nav-link ${index === 0 ? 'active' : ''}"
            data-toggle="tab"
            href="#tabs-${index + 1}"
            role="tab"
          >
            <div
              class="product__thumb__pic set-bg"
              data-setbg="img/product/${image}"
            ></div>
          </a>
        </li>
      `
    })
    $navTabs.append(htmlNavTabs);

    // load tab content
    const $tabContent = $('#tabContent');
    $tabContent.empty();
    let htmlTabContent = '';
    product.images.forEach((image, index) => {
      htmlTabContent += `
        <div class="tab-pane ${index === 0 ? 'active' : ''}" id="tabs-${index + 1}" role="tabpanel">
          <div class="product__details__pic__item">
            <img src="img/product/${image}" alt="" />
          </div>
        </div>
      `;
    })
    $tabContent.append(htmlTabContent);

    // Load product details
    $('.product__details__text h4').text(product.name);
    $('.product__details__text h3').text(formatPrice(product.price));
    $('.product__details__text p').text(product.description);
    // Size options
    const $optionSize = $('.product__details__option__size');
    $optionSize.empty();
    let htmlOptionSize = '';
    product.variants.size.forEach((size, index) => {
      htmlOptionSize += `
        <label class="${index === 0 ? 'active' : ''}" for="${size}"
          >${size}
          <input type="radio" id="${size}" />
        </label>
      `;
    })
    $optionSize.append(htmlOptionSize);
    // Color options
    const $optionColor = $('.product__details__option__color');
    $optionColor.empty();
    let htmlOptionColor = '';
    product.variants.color.forEach((color, index) => {
      const colorCode = colorMap[color];
      console.log(`Color: ${color}, Code: ${colorCode}`);
      htmlOptionColor += `
        <label
          class="${index === 0 ? 'active' : ''}"
          for="sp-${index + 1}"
          style="background-color: ${colorCode};"
          data-color="${color}"
        >
          <input type="radio" id="sp-${index + 1}" />
        </label>
      `;
    })
    $optionColor.append(htmlOptionColor);

  }

  // add to cart
  $('.product__details__cart__option a').on("click", function (e) {
    e.preventDefault();

    // Lấy size đang active
    const activeSize = $(".product__details__option__size label.active");
    const size = activeSize.length ? activeSize.text().trim() : null;

    // Lấy màu đang active
    const activeColor = $(".product__details__option__color label.active");
    const color = activeColor.length ? activeColor.data("color") : null;

    // Lấy số lượng
    const qty = $(".pro-qty input").val();
    console.log(`Adding to cart: ID=${product.id}, Size=${size}, Color=${color}, Qty=${qty}`);

    console.log("Product Details:", product);
    addToCart(product, size, color, qty);
    renderCartInfo();
    console.log(getCart());
  });


  // add to wishlist
  $('.product__details__btns__option a').on("click", function (e) {
    e.preventDefault();

    let productId = product.id;
    let added = toggleWishlist(productId);

    if (added) {
      $(this).attr("style", "color: #ff0000");
      $(this).html("<i class='fa fa-heart'></i>IN WISHLIST");
      console.log(`Product ${productId} added to wishlist.`);
    } else {
      $(this).attr("style", "color: #3d3d3d");
      $(this).html("<i class='fa fa-heart'></i>ADD TO WISHLIST");
      console.log(`Product ${productId} removed from wishlist.`);
    }
  });

  // active color label
  const colorLabels = document.querySelectorAll(".product__details__option__color label");
  colorLabels.forEach(label => {
    label.addEventListener("click", () => {
      // Bỏ active ở tất cả
      colorLabels.forEach(l => l.classList.remove("active"));
      // Thêm active vào label vừa chọn
      label.classList.add("active");
    });
  });
  // set background images 
  $('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
  });
  // radio btn
  $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").on('click', function () {
    $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").removeClass('active');
    $(this).addClass('active');
  });

})(jQuery);