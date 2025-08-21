// Khởi tạo dữ liệu sản phẩm
function initializeData() {
  if (!localStorage.getItem('products')) {
    const products = [
      {
        "id": 1,
        "name": "Áo Thun Nam Basic",
        "price": 150000,
        "category": "Áo thun",
        "images": ["product-1.jpg", "product-2.jpg", "product-3.jpg"],
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
        "images": ["product-2.jpg", "product-3.jpg", "product-4.jpg"],
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
        "images": ["product-3.jpg", "product-4.jpg", "product-5.jpg"],
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
        "images": ["product-4.jpg", "product-5.jpg", "product-6.jpg"],
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
        "images": ["product-5.jpg", "product-6.jpg", "product-7.jpg"],
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
        "images": ["product-6.jpg", "product-7.jpg", "product-8.jpg"],
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
        "images": ["product-7.jpg", "product-8.jpg", "product-9.jpg"],
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
        "images": ["product-8.jpg", "product-9.jpg", "product-10.jpg"],
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
        "images": ["product-9.jpg", "product-10.jpg", "product-11.jpg"],
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
        "images": ["product-10.jpg", "product-11.jpg", "product-12.jpg"],
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
        "images": ["product-11.jpg", "product-12.jpg", "product-13.jpg"],
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
        "images": ["product-12.jpg", "product-13.jpg", "product-14.jpg"],
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
        "images": ["product-13.jpg", "product-14.jpg", "product-1.jpg"],
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
        "images": ["product-14.jpg", "product-1.jpg", "product-2.jpg"],
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
        "images": ["product-1.jpg", "product-2.jpg", "product-3.jpg"],
        "description": "Quần jogger nam thể thao, chất liệu cotton blend thoải mái.",
        "variants": {
          "color": ["Đen", "Xám", "Navy", "Xanh rêu"],
          "size": ["S", "M", "L", "XL", "XXL"]
        },
        "stock": 28,
        "featured": false
      },
      {
        "id": 16,
        "name": "Áo Thun Nam Basic",
        "price": 180000,
        "category": "Áo thun",
        "images": ["product-5.jpg", "product-12.jpg", "product-3.jpg"],
        "description": "Áo thun nam cotton thoáng mát, form rộng dễ phối đồ.",
        "variants": {
          "color": ["Trắng", "Đen", "Xanh dương"],
          "size": ["M", "L", "XL"]
        },
        "stock": 25,
        "featured": false
      },
      {
        "id": 17,
        "name": "Quần Jean Nữ Skinny",
        "price": 350000,
        "category": "Quần jean",
        "images": ["product-1.jpg", "product-8.jpg", "product-14.jpg"],
        "description": "Quần jean nữ ôm body, co giãn nhẹ tạo cảm giác thoải mái.",
        "variants": {
          "color": ["Xanh nhạt", "Xanh đậm", "Đen"],
          "size": ["S", "M", "L", "XL"]
        },
        "stock": 18,
        "featured": true
      },
      {
        "id": 18,
        "name": "Váy Nữ Dáng Suông",
        "price": 420000,
        "category": "Váy",
        "images": ["product-6.jpg", "product-2.jpg", "product-10.jpg"],
        "description": "Váy suông nữ tính, chất liệu voan mỏng nhẹ, phù hợp dạo phố.",
        "variants": {
          "color": ["Hồng pastel", "Trắng", "Be"],
          "size": ["S", "M", "L"]
        },
        "stock": 12,
        "featured": false
      },
      {
        "id": 19,
        "name": "Áo Khoác Gió Nam",
        "price": 500000,
        "category": "Áo khoác",
        "images": ["product-9.jpg", "product-4.jpg", "product-11.jpg"],
        "description": "Áo khoác gió chống nước, thiết kế thể thao cho nam.",
        "variants": {
          "color": ["Đen", "Xanh navy", "Xám"],
          "size": ["M", "L", "XL"]
        },
        "stock": 20,
        "featured": true
      },
      {
        "id": 20,
        "name": "Chân Váy Nữ Midi",
        "price": 300000,
        "category": "Chân váy",
        "images": ["product-13.jpg", "product-1.jpg", "product-7.jpg"],
        "description": "Chân váy midi xếp ly, phù hợp mặc công sở hoặc đi chơi.",
        "variants": {
          "color": ["Be", "Đen", "Xanh navy"],
          "size": ["S", "M", "L"]
        },
        "stock": 10,
        "featured": false
      },

      {
        "id": 21,
        "name": "Áo Polo Nam",
        "price": 260000,
        "category": "Áo polo",
        "images": ["product-7.jpg", "product-14.jpg", "product-5.jpg"],
        "description": "Áo polo nam cổ bẻ, chất liệu thấm hút mồ hôi.",
        "variants": {
          "color": ["Trắng", "Xanh navy", "Đỏ"],
          "size": ["M", "L", "XL"]
        },
        "stock": 30,
        "featured": false
      },
      {
        "id": 22,
        "name": "Áo Hoodie Unisex",
        "price": 550000,
        "category": "Áo hoodie",
        "images": ["product-13.jpg", "product-3.jpg", "product-8.jpg"],
        "description": "Áo hoodie unisex form rộng, chất nỉ bông giữ ấm tốt.",
        "variants": {
          "color": ["Đen", "Trắng", "Xám"],
          "size": ["M", "L", "XL", "XXL"]
        },
        "stock": 14,
        "featured": true
      },
      {
        "id": 23,
        "name": "Quần Tây Nam",
        "price": 400000,
        "category": "Quần tây",
        "images": ["product-10.jpg", "product-2.jpg", "product-13.jpg"],
        "description": "Quần tây nam lịch sự, phù hợp công sở hoặc dự tiệc.",
        "variants": {
          "color": ["Đen", "Xám", "Xanh navy"],
          "size": ["M", "L", "XL"]
        },
        "stock": 16,
        "featured": false
      },
      {
        "id": 24,
        "name": "Váy Maxi Nữ",
        "price": 600000,
        "category": "Váy",
        "images": ["product-6.jpg", "product-12.jpg", "product-9.jpg"],
        "description": "Váy maxi dài, phong cách bohemian dành cho mùa hè.",
        "variants": {
          "color": ["Trắng", "Xanh biển", "Hồng"],
          "size": ["S", "M", "L"]
        },
        "stock": 9,
        "featured": true
      },
      {
        "id": 25,
        "name": "Áo Len Dệt Kim",
        "price": 450000,
        "category": "Áo len",
        "images": ["product-11.jpg", "product-14.jpg", "product-4.jpg"],
        "description": "Áo len dệt kim dáng ôm, giữ ấm và thời trang.",
        "variants": {
          "color": ["Be", "Nâu", "Xám"],
          "size": ["S", "M", "L"]
        },
        "stock": 11,
        "featured": false
      },

      {
        "id": 26,
        "name": "Áo Croptop Nữ",
        "price": 220000,
        "category": "Áo croptop",
        "images": ["product-8.jpg", "product-2.jpg", "product-7.jpg"],
        "description": "Áo croptop nữ cá tính, dễ phối cùng quần short.",
        "variants": {
          "color": ["Trắng", "Đen", "Hồng"],
          "size": ["S", "M", "L"]
        },
        "stock": 28,
        "featured": false
      },
      {
        "id": 27,
        "name": "Quần Jogger Nam",
        "price": 320000,
        "category": "Quần jogger",
        "images": ["product-3.jpg", "product-5.jpg", "product-12.jpg"],
        "description": "Quần jogger nam phong cách thể thao, vải thun co giãn.",
        "variants": {
          "color": ["Đen", "Xám", "Xanh navy"],
          "size": ["M", "L", "XL"]
        },
        "stock": 22,
        "featured": false
      },
      {
        "id": 28,
        "name": "Set Đồ Bộ Nữ",
        "price": 380000,
        "category": "Đồ bộ",
        "images": ["product-13.jpg", "product-9.jpg", "product-6.jpg"],
        "description": "Set đồ bộ nữ thoải mái, thích hợp mặc ở nhà hoặc đi dạo.",
        "variants": {
          "color": ["Hồng", "Xám", "Trắng"],
          "size": ["S", "M", "L", "XL"]
        },
        "stock": 19,
        "featured": true
      },
      {
        "id": 29,
        "name": "Áo Sát Nách Nam",
        "price": 200000,
        "category": "Áo ba lỗ",
        "images": ["product-1.jpg", "product-13.jpg", "product-11.jpg"],
        "description": "Áo sát nách nam, phù hợp mặc tập gym hoặc mùa hè.",
        "variants": {
          "color": ["Trắng", "Đen", "Xám"],
          "size": ["M", "L", "XL"]
        },
        "stock": 27,
        "featured": false
      },
      {
        "id": 30,
        "name": "Quần Short Jean Nữ",
        "price": 280000,
        "category": "Quần short",
        "images": ["product-7.jpg", "product-4.jpg", "product-10.jpg"],
        "description": "Quần short jean nữ cá tính, phong cách trẻ trung.",
        "variants": {
          "color": ["Xanh nhạt", "Trắng", "Đen"],
          "size": ["S", "M", "L"]
        },
        "stock": 24,
        "featured": false
      },

      {
        "id": 31,
        "name": "Áo Khoác Dạ Nữ",
        "price": 720000,
        "category": "Áo khoác",
        "images": ["product-2.jpg", "product-12.jpg", "product-9.jpg"],
        "description": "Áo khoác dạ sang trọng, giữ ấm mùa đông.",
        "variants": {
          "color": ["Be", "Xám", "Đen"],
          "size": ["S", "M", "L", "XL"]
        },
        "stock": 7,
        "featured": true
      },
      {
        "id": 32,
        "name": "Áo Sơ Mi Nam Kẻ Caro",
        "price": 330000,
        "category": "Áo sơ mi",
        "images": ["product-14.jpg", "product-5.jpg", "product-3.jpg"],
        "description": "Áo sơ mi caro trẻ trung, phù hợp đi học hoặc đi chơi.",
        "variants": {
          "color": ["Đỏ caro", "Xanh caro", "Đen"],
          "size": ["M", "L", "XL"]
        },
        "stock": 21,
        "featured": false
      },
      {
        "id": 33,
        "name": "Áo Cardigan Nữ",
        "price": 480000,
        "category": "Áo cardigan",
        "images": ["product-6.jpg", "product-13.jpg", "product-8.jpg"],
        "description": "Áo cardigan dáng dài, phong cách Hàn Quốc.",
        "variants": {
          "color": ["Be", "Trắng", "Xám"],
          "size": ["S", "M", "L"]
        },
        "stock": 13,
        "featured": false
      },
      {
        "id": 34,
        "name": "Quần Legging Nữ",
        "price": 250000,
        "category": "Quần legging",
        "images": ["product-11.jpg", "product-2.jpg", "product-7.jpg"],
        "description": "Quần legging nữ co giãn, phù hợp tập yoga hoặc gym.",
        "variants": {
          "color": ["Đen", "Xám", "Xanh navy"],
          "size": ["S", "M", "L", "XL"]
        },
        "stock": 26,
        "featured": false
      },
      {
        "id": 35,
        "name": "Váy Body Nữ",
        "price": 500000,
        "category": "Váy",
        "images": ["product-1.jpg", "product-9.jpg", "product-12.jpg"],
        "description": "Váy body ôm dáng, tôn đường cong quyến rũ.",
        "variants": {
          "color": ["Đỏ", "Đen", "Trắng"],
          "size": ["S", "M", "L"]
        },
        "stock": 8,
        "featured": true
      },

      {
        "id": 36,
        "name": "Áo Gile Len",
        "price": 300000,
        "category": "Áo len",
        "images": ["product-4.jpg", "product-13.jpg", "product-6.jpg"],
        "description": "Áo gile len phối sơ mi, phong cách vintage.",
        "variants": {
          "color": ["Be", "Xám", "Đen"],
          "size": ["S", "M", "L"]
        },
        "stock": 15,
        "featured": false
      },
      {
        "id": 37,
        "name": "Áo Peplum Nữ",
        "price": 380000,
        "category": "Áo kiểu",
        "images": ["product-10.jpg", "product-2.jpg", "product-13.jpg"],
        "description": "Áo peplum nữ thanh lịch, tôn dáng eo.",
        "variants": {
          "color": ["Trắng", "Đen", "Đỏ"],
          "size": ["S", "M", "L"]
        },
        "stock": 12,
        "featured": true
      },
      {
        "id": 38,
        "name": "Quần Culottes Nữ",
        "price": 350000,
        "category": "Quần",
        "images": ["product-8.jpg", "product-7.jpg", "product-14.jpg"],
        "description": "Quần culottes ống rộng, dễ chịu và phong cách.",
        "variants": {
          "color": ["Be", "Xám", "Đen"],
          "size": ["S", "M", "L", "XL"]
        },
        "stock": 20,
        "featured": false
      },
      {
        "id": 39,
        "name": "Áo Tanktop Nam",
        "price": 190000,
        "category": "Áo ba lỗ",
        "images": ["product-3.jpg", "product-11.jpg", "product-5.jpg"],
        "description": "Áo tanktop thể thao, vải co giãn thoáng mát.",
        "variants": {
          "color": ["Đen", "Trắng", "Xanh"],
          "size": ["M", "L", "XL"]
        },
        "stock": 29,
        "featured": false
      },
      {
        "id": 40,
        "name": "Set Vest Nữ",
        "price": 850000,
        "category": "Vest",
        "images": ["product-12.jpg", "product-6.jpg", "product-1.jpg"],
        "description": "Set vest nữ công sở hiện đại, phong cách sang trọng.",
        "variants": {
          "color": ["Đen", "Xám", "Trắng"],
          "size": ["S", "M", "L"]
        },
        "stock": 6,
        "featured": true
      },

      {
        "id": 41,
        "name": "Áo Dài Cách Tân",
        "price": 900000,
        "category": "Áo dài",
        "images": ["product-14.jpg", "product-9.jpg", "product-3.jpg"],
        "description": "Áo dài cách tân hiện đại, phù hợp dịp lễ Tết.",
        "variants": {
          "color": ["Đỏ", "Hồng", "Xanh"],
          "size": ["S", "M", "L", "XL"]
        },
        "stock": 5,
        "featured": true
      },
      {
        "id": 42,
        "name": "Áo Sơ Mi Lụa Nữ",
        "price": 420000,
        "category": "Áo sơ mi",
        "images": ["product-13.jpg", "product-2.jpg", "product-7.jpg"],
        "description": "Áo sơ mi lụa mềm mịn, mang lại cảm giác sang trọng.",
        "variants": {
          "color": ["Trắng", "Be", "Hồng"],
          "size": ["S", "M", "L"]
        },
        "stock": 17,
        "featured": false
      },
      {
        "id": 43,
        "name": "Váy Xòe Nữ",
        "price": 480000,
        "category": "Váy",
        "images": ["product-5.jpg", "product-11.jpg", "product-10.jpg"],
        "description": "Váy xòe công chúa, tạo cảm giác trẻ trung, nữ tính.",
        "variants": {
          "color": ["Trắng", "Hồng", "Xanh"],
          "size": ["S", "M", "L"]
        },
        "stock": 14,
        "featured": false
      },
      {
        "id": 44,
        "name": "Áo Thun Unisex In Hình",
        "price": 250000,
        "category": "Áo thun",
        "images": ["product-4.jpg", "product-12.jpg", "product-1.jpg"],
        "description": "Áo thun unisex in hình cá tính, chất liệu cotton.",
        "variants": {
          "color": ["Trắng", "Đen", "Xanh"],
          "size": ["M", "L", "XL"]
        },
        "stock": 32,
        "featured": false
      },
      {
        "id": 45,
        "name": "Quần Kaki Nam",
        "price": 370000,
        "category": "Quần kaki",
        "images": ["product-2.jpg", "product-14.jpg", "product-6.jpg"],
        "description": "Quần kaki nam lịch lãm, thích hợp mặc đi làm.",
        "variants": {
          "color": ["Be", "Xám", "Đen"],
          "size": ["M", "L", "XL"]
        },
        "stock": 18,
        "featured": false
      },

      {
        "id": 46,
        "name": "Áo Blazer Nữ",
        "price": 750000,
        "category": "Blazer",
        "images": ["product-9.jpg", "product-13.jpg", "product-7.jpg"],
        "description": "Áo blazer nữ phong cách châu Âu, dễ phối cùng chân váy.",
        "variants": {
          "color": ["Đen", "Trắng", "Be"],
          "size": ["S", "M", "L"]
        },
        "stock": 10,
        "featured": true
      },
      {
        "id": 47,
        "name": "Áo Phông Oversize",
        "price": 230000,
        "category": "Áo thun",
        "images": ["product-14.jpg", "product-8.jpg", "product-5.jpg"],
        "description": "Áo phông oversize phong cách streetwear.",
        "variants": {
          "color": ["Trắng", "Đen", "Xanh"],
          "size": ["M", "L", "XL", "XXL"]
        },
        "stock": 35,
        "featured": false
      },
      {
        "id": 48,
        "name": "Đầm Dạ Hội",
        "price": 1200000,
        "category": "Đầm",
        "images": ["product-6.jpg", "product-10.jpg", "product-2.jpg"],
        "description": "Đầm dạ hội cao cấp, dành cho sự kiện trang trọng.",
        "variants": {
          "color": ["Đỏ", "Đen", "Vàng"],
          "size": ["S", "M", "L"]
        },
        "stock": 4,
        "featured": true
      },
      {
        "id": 49,
        "name": "Áo Bomber Nam",
        "price": 680000,
        "category": "Áo khoác",
        "images": ["product-3.jpg", "product-11.jpg", "product-12.jpg"],
        "description": "Áo bomber nam cá tính, phù hợp đi chơi và đi học.",
        "variants": {
          "color": ["Đen", "Xanh rêu", "Xám"],
          "size": ["M", "L", "XL"]
        },
        "stock": 15,
        "featured": false
      },
      {
        "id": 50,
        "name": "Áo Thun Crop Nữ",
        "price": 210000,
        "category": "Áo thun",
        "images": ["product-1.jpg", "product-7.jpg", "product-13.jpg"],
        "description": "Áo thun crop nữ, trẻ trung và năng động.",
        "variants": {
          "color": ["Trắng", "Đen", "Hồng"],
          "size": ["S", "M", "L"]
        },
        "stock": 23,
        "featured": false
      }
    ];
    localStorage.setItem('products', JSON.stringify(products));
  }
}

// Gọi khi trang load
initializeData();