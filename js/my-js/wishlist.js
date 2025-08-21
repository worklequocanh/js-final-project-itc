'use strict';
const WISHLIST_KEY = "wishlist";

function getWishlist() {
  const data = localStorage.getItem("wishlist");
  return data ? new Set(JSON.parse(data)) : new Set();
}

function saveWishlist(list) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(Array.from(list)));
}

function toggleWishlist(productId) {
  let wishlist = getWishlist();

  if (wishlist.has(productId)) {
    wishlist.delete(productId);   // Nếu có rồi thì xóa
    saveWishlist(wishlist);
    return false; // false = đã xóa
  } else {
    wishlist.add(productId);      // Nếu chưa có thì thêm
    saveWishlist(wishlist);
    return true; // true = đã thêm
  }
}