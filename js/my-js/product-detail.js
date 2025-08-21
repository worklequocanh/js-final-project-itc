'use strict';

(function ($) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) {
    console.error("Product ID is missing in the URL.");
    return;
  }
  console.log("Product ID:", id);

  const product = getProductById(1);
  console.log("Product Details:", product);

  loadProductDetails();

  function loadProductDetails() {
    const $navTabs = $('#nav-tabs');
    $navTabs.empty();

    let htmlNavTabs = '';
    product.images.forEach((image, index) => {
      htmlNavTabs += `
        <li class="nav-item">
          <a
            class="nav-link ${index === 0 ? 'active' : ''}"
            data-toggle="tab"
            href="#tabs-1"
            role="tab"
          >
            <div
              class="product__thumb__pic set-bg"
              data-setbg="img/products/${image}"
            ></div>
          </a>
        </li>
      `
    })

    // $navTabs.append(htmlNavTabs);

  }

})(jQuery);