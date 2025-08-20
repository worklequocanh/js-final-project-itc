'use strict';

(function ($) {
  // $(window).on('load', function () {

  // });

  // 
  $(document).ready(function () {
    loadFeaturedProducts();
  });

  function loadFeaturedProducts() {
    const featuredProducts = getFeaturedProducts();
    const $featureList = $('.feature__list');

    // Clear existing content
    $featureList.empty();

    if (featuredProducts.length === 0) {
      $featureList.html('<p class="text-center">Không có sản phẩm nổi bật nào.</p>');
      return;
    }

    featuredProducts.forEach(function (product) {
      // Tạo color options từ variants
      const colorOptions = createColorOptions(product.variants.color, product.id);

      // Tạo label cho sản phẩm
      const label = product.featured ? 'Hot' : 'New';

      const productHTML = `
            <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals" data-id="${product.id}">
                <div class="product__item">
                    <div class="product__item__pic set-bg" data-setbg="img/product/${product.images[0]}">
                        <span class="label">${label}</span>
                        <ul class="product__hover">
                            <li>
                                <a href="#" class="add-wishlist" data-id="${product.id}">
                                    <img src="img/icon/heart.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#" class="add-compare" data-id="${product.id}">
                                    <img src="img/icon/compare.png" alt="" />
                                    <span>Compare</span>
                                </a>
                            </li>
                            <li>
                                <a href="product-detail.html?id=${product.id}" class="quick-view" data-id="${product.id}">
                                    <img src="img/icon/search.png" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6>${product.name}</h6>
                        <a href="#" class="add-cart" data-id="${product.id}">+ Add To Cart</a>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <h5>${formatPrice(product.price)}</h5>
                        <div class="product__color__select">
                            ${colorOptions}
                        </div>
                    </div>
                </div>
            </div>
        `;

      $featureList.append(productHTML);
    });

    // Set background images (nếu template của bạn có function setBackground)
    if (typeof setBackground === 'function') {
      setBackground();
    } else {
      // Fallback: set background manually
      $('.set-bg').each(function () {
        const bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
      });
    }

    // Bind events sau khi load xong
    bindProductEvents();
  }

  function createColorOptions(colors, productId) {
    if (!colors || colors.length === 0) return '';

    let colorHTML = '';
    colors.forEach(function (color, index) {
      const colorClass = getColorClass(color);
      const isActive = index === 0 ? 'active' : '';
      const inputId = `pc-${productId}-${index}`;

      colorHTML += `
            <label class="${isActive} ${colorClass}" for="${inputId}">
                <input type="radio" id="${inputId}" name="color-${productId}" value="${color}" />
            </label>
        `;
    });

    return colorHTML;
  }

  function getColorClass(colorName) {
    const colorMap = {
      'Đen': 'black',
      'Trắng': 'white',
      'Xám': 'grey',
      'Xanh': 'blue',
      'Đỏ': 'red',
      'Hồng': 'pink',
      'Nâu': 'brown',
      'Xanh navy': 'navy',
      'Be': 'beige'
    };

    return colorMap[colorName] || 'default';
  }

  function bindProductEvents() {
    // Add to cart
    $('.add-cart').off('click').on('click', function (e) {
      e.preventDefault();
      const productId = $(this).data('id');
      const selectedColor = $(this).closest('.product__item').find('input[type="radio"]:checked').val();

      addToCart(productId, 1, selectedColor);

      // Show notification
      showNotification('Đã thêm sản phẩm vào giỏ hàng!', 'success');
    });

    // Add to wishlist
    $('.add-wishlist').off('click').on('click', function (e) {
      e.preventDefault();
      const productId = $(this).data('id');
      addToWishlist(productId);
      showNotification('Đã thêm vào danh sách yêu thích!', 'info');
    });

    // Add to compare
    $('.add-compare').off('click').on('click', function (e) {
      e.preventDefault();
      const productId = $(this).data('id');
      addToCompare(productId);
      showNotification('Đã thêm vào danh sách so sánh!', 'info');
    });

    // Color selection
    $('.product__color__select input[type="radio"]').on('change', function () {
      $(this).closest('.product__color__select').find('label').removeClass('active');
      $(this).parent('label').addClass('active');
    });
  }

  function addToCart(productId, quantity = 1, selectedColor = null) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartItem = {
      productId: parseInt(productId),
      quantity: quantity,
      color: selectedColor,
      addedAt: new Date().toISOString()
    };

    // Check if item already exists
    const existingIndex = cart.findIndex(item =>
      item.productId === cartItem.productId &&
      item.color === cartItem.color
    );

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
  }

  function addToWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    if (!wishlist.includes(parseInt(productId))) {
      wishlist.push(parseInt(productId));
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
  }

  function addToCompare(productId) {
    let compareList = JSON.parse(localStorage.getItem('compare')) || [];

    if (!compareList.includes(parseInt(productId))) {
      if (compareList.length >= 3) {
        showNotification('Chỉ có thể so sánh tối đa 3 sản phẩm!', 'warning');
        return;
      }
      compareList.push(parseInt(productId));
      localStorage.setItem('compare', JSON.stringify(compareList));
    }
  }

  function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Update cart counter in header (adjust selector theo template của bạn)
    $('.cart-counter, .cart-count, #cart-count').text(totalItems);
  }

  function showNotification(message, type = 'info') {
    // Simple notification - bạn có thể thay bằng toast library
    const notification = $(`
        <div class="notification ${type}" style="position: fixed; top: 20px; right: 20px; z-index: 9999; padding: 10px 20px; background: #28a745; color: white; border-radius: 4px;">
            ${message}
        </div>
    `);

    $('body').append(notification);

    setTimeout(function () {
      notification.fadeOut(function () {
        $(this).remove();
      });
    }, 3000);
  }

  // Helper function để format giá
  function formatPrice(price) {
    return price.toLocaleString('vi-VN') + 'đ';
  }

  // Gọi khi document ready
  $(document).ready(function () {
    updateCartCounter(); // Update cart counter khi load trang
  });
})(jQuery);