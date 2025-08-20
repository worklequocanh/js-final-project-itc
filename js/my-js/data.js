// Khởi tạo dữ liệu sản phẩm
function initializeData() {
  if (!localStorage.getItem('products')) {
    const products = [
      {
        "id": 1,
        "name": "Áo Thun Nam Basic",
        "price": 150000,
        "category": "Áo thun",
        "images": ["ao-thun-1a.jpg", "ao-thun-1b.jpg", "ao-thun-1c.jpg"],
        "description": "Áo thun nam cotton 100%, form rộng, thoáng mát.",
        "variants": {
          "color": ["Trắng", "Đen", "Xanh"],
          "size": ["S", "M", "L", "XL"]
        },
        "stock": 20,
        "featured": true
      },
      {
        "id": 2,
        "name": "Áo Sơ Mi Nữ Công Sở",
        "price": 280000,
        "category": "Áo sơ mi",
        "images": ["ao-somi-nu-1a.jpg", "ao-somi-nu-1b.jpg", "ao-somi-nu-1c.jpg"],
        "description": "Áo sơ mi nữ chất liệu linen cao cấp, thiết kế thanh lịch phù hợp đi làm.",
        "variants": {
          "color": ["Trắng", "Hồng nhạt", "Xanh navy"],
          "size": ["S", "M", "L"]
        },
        "stock": 15,
        "featured": true
      },
      {
        "id": 3,
        "name": "Quần Jean Nam Slim Fit",
        "price": 450000,
        "category": "Quần jean",
        "images": ["quan-jean-nam-1a.jpg", "quan-jean-nam-1b.jpg", "quan-jean-nam-1c.jpg"],
        "description": "Quần jean nam form slim fit, chất liệu denim cao cấp, bền màu.",
        "variants": {
          "color": ["Xanh đậm", "Xanh nhạt", "Đen"],
          "size": ["29", "30", "31", "32", "33", "34"]
        },
        "stock": 12,
        "featured": false
      },
      {
        "id": 4,
        "name": "Váy Maxi Hoa Nhí",
        "price": 320000,
        "category": "Váy",
        "images": ["vay-maxi-1a.jpg", "vay-maxi-1b.jpg", "vay-maxi-1c.jpg"],
        "description": "Váy maxi họa tiết hoa nhí dịu dàng, chất liệu voan mềm mại.",
        "variants": {
          "color": ["Hồng", "Trắng", "Xanh mint"],
          "size": ["S", "M", "L"]
        },
        "stock": 8,
        "featured": true
      },
      {
        "id": 5,
        "name": "Áo Hoodie Unisex",
        "price": 380000,
        "category": "Áo hoodie",
        "images": ["hoodie-1a.jpg", "hoodie-1b.jpg", "hoodie-1c.jpg"],
        "description": "Áo hoodie unisex, chất liệu nỉ cotton ấm áp, phù hợp mùa đông.",
        "variants": {
          "color": ["Đen", "Xám", "Trắng", "Nâu"],
          "size": ["S", "M", "L", "XL", "XXL"]
        },
        "stock": 25,
        "featured": true
      },
      {
        "id": 6,
        "name": "Chân Váy Bút Chì",
        "price": 180000,
        "category": "Chân váy",
        "images": ["chan-vay-1a.jpg", "chan-vay-1b.jpg", "chan-vay-1c.jpg"],
        "description": "Chân váy bút chì cơ bản, phù hợp đi làm và dạo phố.",
        "variants": {
          "color": ["Đen", "Xám", "Navy"],
          "size": ["S", "M", "L"]
        },
        "stock": 18,
        "featured": false
      },
      {
        "id": 7,
        "name": "Áo Blazer Nữ",
        "price": 520000,
        "category": "Áo blazer",
        "images": ["blazer-nu-1a.jpg", "blazer-nu-1b.jpg", "blazer-nu-1c.jpg"],
        "description": "Áo blazer nữ công sở, thiết kế thanh lịch, chất liệu cao cấp.",
        "variants": {
          "color": ["Đen", "Trắng", "Be"],
          "size": ["S", "M", "L", "XL"]
        },
        "stock": 10,
        "featured": true
      },
      {
        "id": 8,
        "name": "Quần Short Kaki Nam",
        "price": 220000,
        "category": "Quần short",
        "images": ["short-kaki-1a.jpg", "short-kaki-1b.jpg", "short-kaki-1c.jpg"],
        "description": "Quần short kaki nam, chất liệu thoáng mát, phù hợp mùa hè.",
        "variants": {
          "color": ["Xanh kaki", "Be", "Xám"],
          "size": ["S", "M", "L", "XL"]
        },
        "stock": 22,
        "featured": false
      },
      {
        "id": 9,
        "name": "Đầm Công Sở Tay Dài",
        "price": 420000,
        "category": "Đầm",
        "images": ["dam-cong-so-1a.jpg", "dam-cong-so-1b.jpg", "dam-cong-so-1c.jpg"],
        "description": "Đầm công sở tay dài, thiết kế sang trọng, chất liệu polyester cao cấp.",
        "variants": {
          "color": ["Đen", "Navy", "Đỏ đô"],
          "size": ["S", "M", "L"]
        },
        "stock": 14,
        "featured": true
      },
      {
        "id": 10,
        "name": "Áo Polo Nam",
        "price": 190000,
        "category": "Áo polo",
        "images": ["polo-nam-1a.jpg", "polo-nam-1b.jpg", "polo-nam-1c.jpg"],
        "description": "Áo polo nam cotton pique, form chuẩn, thích hợp đi làm và dạo phố.",
        "variants": {
          "color": ["Trắng", "Navy", "Xám", "Đen"],
          "size": ["S", "M", "L", "XL"]
        },
        "stock": 30,
        "featured": false
      },
      {
        "id": 11,
        "name": "Quần Legging Nữ",
        "price": 120000,
        "category": "Quần legging",
        "images": ["legging-nu-1a.jpg", "legging-nu-1b.jpg", "legging-nu-1c.jpg"],
        "description": "Quần legging nữ co giãn 4 chiều, chất liệu spandex thoáng khí.",
        "variants": {
          "color": ["Đen", "Xám", "Navy"],
          "size": ["S", "M", "L", "XL"]
        },
        "stock": 35,
        "featured": false
      },
      {
        "id": 12,
        "name": "Áo Khoác Bomber",
        "price": 480000,
        "category": "Áo khoác",
        "images": ["bomber-1a.jpg", "bomber-1b.jpg", "bomber-1c.jpg"],
        "description": "Áo khoác bomber unisex, thiết kế trẻ trung, chất liệu dù cao cấp.",
        "variants": {
          "color": ["Đen", "Xanh rêu", "Đỏ đô"],
          "size": ["S", "M", "L", "XL"]
        },
        "stock": 16,
        "featured": true
      },
      {
        "id": 13,
        "name": "Quần Tây Nam",
        "price": 350000,
        "category": "Quần tây",
        "images": ["quan-tay-nam-1a.jpg", "quan-tay-nam-1b.jpg", "quan-tay-nam-1c.jpg"],
        "description": "Quần tây nam công sở, chất liệu wool blend, form slim fit.",
        "variants": {
          "color": ["Đen", "Xám", "Navy"],
          "size": ["29", "30", "31", "32", "33", "34"]
        },
        "stock": 11,
        "featured": false
      },
      {
        "id": 14,
        "name": "Áo Kiểu Nữ Hoa Nhí",
        "price": 240000,
        "category": "Áo kiểu",
        "images": ["ao-kieu-nu-1a.jpg", "ao-kieu-nu-1b.jpg", "ao-kieu-nu-1c.jpg"],
        "description": "Áo kiểu nữ họa tiết hoa nhí, chất liệu chiffon nhẹ nhàng, nữ tính.",
        "variants": {
          "color": ["Trắng", "Hồng", "Xanh pastel"],
          "size": ["S", "M", "L"]
        },
        "stock": 19,
        "featured": true
      },
      {
        "id": 15,
        "name": "Quần Jogger Nam",
        "price": 280000,
        "category": "Quần jogger",
        "images": ["jogger-nam-1a.jpg", "jogger-nam-1b.jpg", "jogger-nam-1c.jpg"],
        "description": "Quần jogger nam thể thao, chất liệu cotton blend thoải mái.",
        "variants": {
          "color": ["Đen", "Xám", "Navy", "Xanh rêu"],
          "size": ["S", "M", "L", "XL", "XXL"]
        },
        "stock": 28,
        "featured": false
      }
    ];
    localStorage.setItem('products', JSON.stringify(products));
  }
}

// Gọi khi trang load
initializeData();