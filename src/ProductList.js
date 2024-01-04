const productList=[
    {
        "id": "furniture-product-1",
        "title": "Mid-Century Modern Sofa",
        "key": "mid-century-modern-sofa",
        "image": "https://plus.unsplash.com/premium_photo-1672136336540-2dd39fd4d1e2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "rating": 4,
        "price": 699.99
    },
    {
        "id": "furniture-product-2",
        "title": "Elegant Dining Table Set",
        "key": "elegant-dining-table-set",
        "image": "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1404&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "rating": 5,
        "price": 899.99
    },
    {
        "id": "furniture-product-3",
        "title": "Contemporary Coffee Table",
        "key": "contemporary-coffee-table",
        "image": "https://images.unsplash.com/photo-1571422065917-030a0f0e6350?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "rating": 3,
        "price": 249.99
    },
    {
        "id": "furniture-product-4",
        "title": "Cozy Recliner Armchair",
        "key": "cozy-recliner-armchair",
        "image": "https://plus.unsplash.com/premium_photo-1674574585307-d24795c9d5b2?q=80&w=1414&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "rating": 4,
        "price": 399.99
    },
    {
        "id": "furniture-product-5",
        "title": "Modern Bookshelf",
        "key": "modern-bookshelf",
        "image": "https://images.unsplash.com/photo-1543248939-4296e1fea89b?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "rating": 4,
        "price": 179.99
    },
    {
        "id": "electronic-product-6",
        "title": "4K Smart LED TV",
        "key": "4k-smart-led-tv",
        "image": "https://images.unsplash.com/photo-1601944177325-f8867652837f?q=80&w=1477&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "rating": 5,
        "price": 799.99
    },
    {
        "id": "electronic-product-7",
        "title": "Wireless Gaming Mouse",
        "key": "wireless-gaming-mouse",
        "image": "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "rating": 3,
        "price": 59.99
    },
    {
        "id": "electronic-product-8",
        "title": "Smart Wi-Fi Thermostat",
        "key": "smart-wifi-thermostat",
        "image": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41M7eXvtu6L._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
        "rating": 4,
        "price": 129.99
    },
    {
        "id": "electronic-product-9",
        "title": "Bluetooth Earbuds",
        "key": "bluetooth-earbuds",
        "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "rating": 5,
        "price": 79.99
    },
    {
        "id": "electronic-product-10",
        "title": "Ultra-Thin Laptop",
        "key": "ultra-thin-laptop",
        "image": "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "rating": 3,
        "price": 1299.99
    },
    {
        "id": "fitness-product-1",
        "title": "Adjustable Dumbbell Set",
        "key": "adjustable-dumbbell-set",
        "image": "https://cdn.shopify.com/s/files/1/0540/3236/7799/files/Ad-Dumbles-1_512x512.jpg?v=1694409690",
        "rating": 4,
        "price": 199.99
    },
    {
        "id": "fitness-product-2",
        "title": "Yoga Mat with Carrying Strap",
        "key": "yoga-mat",
        "image": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61JuryUOL5L._AC_UL400_.jpg",
        "rating": 5,
        "price": 29.99
    },
    {
        "id": "fitness-product-3",
        "title": "Resistance Band Set",
        "key": "resistance-band-set",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjKPWsP2KV-wsNd_wQ-cILkur5DAnLiZWJ8Q&usqp=CAU",
        "rating": 4,
        "price": 49.99
    },
    {
        "id": "fitness-product-4",
        "title": "Indoor Cycling Exercise Bike",
        "key": "indoor-cycling-exercise-bike",
        "image": "https://5.imimg.com/data5/SELLER/Default/2021/6/IB/RY/VT/102133864/chain-drive-indoor-cycling-trainer-spin-exercise-bike-500x500.jpg",
        "rating": 5,
        "price": 499.99
    },
    {
        "id": "fitness-product-5",
        "title": "Smart Fitness Tracker Watch",
        "key": "smart-fitness-tracker-watch",
        "image": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51E8Dwmr++L._AC_UF1000,1000_QL80_.jpg",
        "rating": 5,
        "price": 79.99
    },
    {
        "id": "clothing-product-1",
        "title": "Men's Casual Denim Jacket",
        "key": "mens-casual-denim-jacket",
        "image": "https://w7.pngwing.com/pngs/207/711/png-transparent-blue-jeans-jeans-trousers-casual-slim-fit-pants-fashion-men-s-jeans-folded-blue-png-material-taobao-thumbnail.png",
        "rating": 4,
        "price": 69.99
    },
    {
        "id": "clothing-product-2",
        "title": "Women's Running Shoes",
        "key": "womens-running-shoes",
        "image": "https://img.freepik.com/free-photo/sport-running-shoes_1203-3414.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=ais",
        "rating": 3,
        "price": 79.99
    },
    {
        "id": "clothing-product-3",
        "title": "Unisex Hooded Sweatshirt",
        "key": "unisex-hooded-sweatshirt",
        "image": "https://w7.pngwing.com/pngs/708/315/png-transparent-black-pullover-hoodie-illustration-t-shirt-hoodie-top-neckline-hoodie-hat-black-sweatshirt-thumbnail.png",
        "rating": 2,
        "price": 49.99
    },
    {
        "id": "clothing-product-5",
        "title": "Men's Classic Polo Shirt",
        "key": "mens-classic-polo-shirt",
        "image": "https://atlas-content-cdn.pixelsquid.com/stock-images/man-long-sleeve-shirt-lOov0X9-600.jpg",
        "rating": 5,
        "price": 29.99
    },
    {
        "id": "stationery-product-1",
        "title": "Premium Leather-bound Notebook",
        "key": "premium-leather-notebook",
        "image": "https://5.imimg.com/data5/SELLER/Default/2022/6/AI/YR/VU/16376/il-1140xn-3893174890-sbhg-250x250.jpg",
        "rating": 5,
        "price": 19.99
      },
      {
        "id": "stationery-product-2",
        "title": "Set of Colorful Gel Pens",
        "key": "colorful-gel-pens",
        "image": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81JTAjg+pIL.jpg",
        "rating": 4,
        "price": 9.99
      }
];

export default productList;