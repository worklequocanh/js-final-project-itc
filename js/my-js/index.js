'use strict';

(function ($) {
    let { set } = getWishlist();
    console.log('Wishlist:', set);

    loadFeaturedProducts();

    function loadFeaturedProducts() {
        const featuredProducts = getFeaturedProducts();

        console.log('Featured Products:', featuredProducts);
        const $featureList = $('.feature__list');

        // Clear existing content
        $featureList.empty();
        if (featuredProducts.length === 0) {
            $featureList.html('<p class="text-center">Không có sản phẩm nổi bật nào.</p>');
            return;
        }

        featuredProducts.forEach(function (product) {
            // Tạo label cho sản phẩm
            const label = product.featured ? 'Hot' : 'New';

            const productHTML = `
            <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals" data-id="${product.id}">
                <div class="product__item">
                    <div class="product__item__pic set-bg" data-setbg="img/product/${product.images[0]}" style='background-image: url("img/product/${product.images[0]}");'>
                        <span class="label">${label}</span>
                        <ul class="product__hover">
                            <li>
                                <a href="#" class="add-wishlist" data-id="${product.id}">
                                    <img src="img/icon/heart.png" alt="" />
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
                        <h5>${formatPrice(product.price)}</h5>
                    </div>
                </div>
            </div>
        `;

            $featureList.append(productHTML);
        });

    }

    // set background images 
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

})(jQuery);