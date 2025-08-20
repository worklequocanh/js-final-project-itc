// Functions dùng chung cho tất cả trang
function getProducts() {
  return JSON.parse(localStorage.getItem('products')) || [];
}

function getProductById(id) {
  const products = getProducts();
  return products.find(product => product.id === parseInt(id));
}

function getFeaturedProducts() {
  try {
    const allProducts = getProducts();
    const featuredProducts = allProducts.filter(product => product.featured === true);

    console.log(`Tìm thấy ${featuredProducts.length} sản phẩm nổi bật`);
    return featuredProducts;
  } catch (error) {
    console.error('Lỗi khi lấy sản phẩm nổi bật:', error);
    return [];
  }
}

function updateProduct(updatedProduct) {
  const products = getProducts();
  const index = products.findIndex(p => p.id === updatedProduct.id);
  if (index !== -1) {
    products[index] = updatedProduct;
    localStorage.setItem('products', JSON.stringify(products));
  }
}

function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function addToCart(productId, quantity = 1) {
  // Logic thêm vào giỏ hàng
}