'use strict';

(function ($) {
  const shopProducts = getProducts();
  console.log('Shop Products:', shopProducts);
  let wishlist = getWishlist();
  console.log('Wishlist:', wishlist);

  let currentPage = 1;
  let perPage = 12;

  loadShopProducts();

  function loadShopProducts() {
    const $productList = $('#product-list');

    // Clear existing content
    $productList.empty();
    if (shopProducts.length === 0) {
      $productList.html('<p class="text-center">Không có sản phẩm nổi bật nào.</p>');
      return;
    }

    // Sort products by price
    let sortType = $('#sort').val();
    let sorted = [...shopProducts];
    if (sortType === 'lowToHigh') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortType === 'highToLow') {
      sorted.sort((a, b) => b.price - a.price);
    }

    let start = (currentPage - 1) * perPage;
    let end = start + perPage;
    let paginated = sorted.slice(start, end);

    paginated.forEach(function (product) {
      const productHTML = `
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="product__item">
                  <div
                    class="product__item__pic set-bg"
                    data-setbg="img/product/${product.images[0]}"
                    style='background-image: url("img/product/${product.images[0]}");'
                  >
                    <ul class="product__hover">
                      <li>
                        <a href="#" data-id="${product.id}">
                          <img src="img/icon/${wishlist.has(product.id) ? 'heart-red' : 'heart'}.png" alt="wishlist" />
                        </a>
                      </li>
                      <li>
                        <a href="product-detail.html?id=${product.id}"><img src="img/icon/search.png" alt="" /></a>
                      </li>
                    </ul>
                  </div>
                  <div class="product__item__text">
                    <h6>${product.name}</h6>
                    <h5>${formatPrice(product.price)}</h5>
                  </div>
                </div>
              </div>
        `;

      $productList.append(productHTML);
    });

    // Showing
    let total = shopProducts.length;
    let from = start + 1;
    let to = Math.min(end, total);
    $('.shop__product__option__left p').text(`Showing ${from} - ${to} of ${total} products`);

    renderPagination(total);
  }

  // Render pagination
  function renderPagination(total) {
    $("#pagination").empty();
    let totalPages = Math.ceil(total / perPage);

    for (let i = 1; i <= totalPages; i++) {
      let active = i === currentPage ? "active" : "";
      $("#pagination").append(`
        <a href="" class="${active}" data-page="${i}">${i}</a>
      `);
    }
  }

  $(document).on("click", "#pagination a", function (e) {
    e.preventDefault();
    let page = parseInt($(this).data("page"));
    if (!isNaN(page)) {
      currentPage = page;
      loadShopProducts();

      // Cuộn lên showing
      $('html, body').animate({
        scrollTop: $("#showing").offset().top - 20
      }, 400);
    }
  });

  $("#sort").on("change", function () {
    currentPage = 1;
    loadShopProducts();

    // Cuộn lên showing
    $('html, body').animate({
      scrollTop: $("#showing").offset().top - 20
    }, 400);
  });

  $(document).on("click", ".product__hover a[data-id]", function (e) {
    e.preventDefault();

    let productId = $(this).data("id");
    let added = toggleWishlist(productId);

    let img = $(this).find("img");
    if (added) {
      img.attr("src", "img/icon/heart-red.png");
    } else {
      img.attr("src", "img/icon/heart.png");
    }
  });

})(jQuery);