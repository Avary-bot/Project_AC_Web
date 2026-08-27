/* =========================================================
   SHOPX - Shared JavaScript
   Data: localStorage only
   ========================================================= */

const KEYS = {
  users: "shopx_users",
  products: "shopx_products",
  cart: "shopx_cart",
  orders: "shopx_orders",
  currentUser: "shopx_currentUser",
  theme: "shopx_theme",
};

function getData(key, fallback = []) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function setData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getUsers() {
  return getData(KEYS.users, []);
}
function getProducts() {
  return getData(KEYS.products, []);
}
function getCart() {
  return getData(KEYS.cart, []);
}
function getOrders() {
  return getData(KEYS.orders, []);
}
function getCurrentUser() {
  return getData(KEYS.currentUser, null);
}

function saveUsers(v) {
  setData(KEYS.users, v);
}
function saveProducts(v) {
  setData(KEYS.products, v);
}
function saveCart(v) {
  setData(KEYS.cart, v);
}
function saveOrders(v) {
  setData(KEYS.orders, v);
}

function escapeHTML(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (ch) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[ch],
  );
}

function seedProducts() {
  const products = getProducts();

  // Remove the old phone-category demo products while keeping customer-added
  // products from other categories intact.
  const phoneCategories = new Set([
    "IPhone", "Samsung", "Oppo", "XiaoMi", "Vivo", "Sony", "Accessories"
  ]);
  let cleaned = products.filter(p => !phoneCategories.has(String(p.category)));

  const clothingIds = new Set([3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010, 3011, 3012, 3013, 3014, 3015, 3016, 3017, 3018, 3019, 3020, 3021, 3022, 3023, 3024, 3025, 3026, 3027, 3028, 3029, 3030, 3031, 3032, 3033, 3034, 3035, 3036, 3037, 3038, 3039, 3040, 3041, 3042, 3043, 3044, 3045, 3046, 3047, 3048, 3049, 3050]);
  const hasClothing = cleaned.some(p => clothingIds.has(Number(p.id)));

  if (!hasClothing) {
    cleaned = cleaned.concat([
        {
                "id": 3001,
                "name": "Classic Oxford Shirt",
                "price": 39.99,
                "category": "Men Shirts",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
                "description": "Men's classic oxford shirt designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3002,
                "name": "Relaxed Linen Shirt",
                "price": 44.99,
                "category": "Men Shirts",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1626497764746-6dc36546b388?auto=format&fit=crop&w=900&q=80",
                "description": "Men's relaxed linen shirt designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3003,
                "name": "Premium Black Shirt",
                "price": 34.99,
                "category": "Men Shirts",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
                "description": "Men's premium black shirt designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3004,
                "name": "Casual Denim Shirt",
                "price": 42.99,
                "category": "Men Shirts",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=900&q=80",
                "description": "Men's casual denim shirt designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3005,
                "name": "Minimal White Tee",
                "price": 24.99,
                "category": "Men Shirts",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
                "description": "Men's minimal white tee designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3006,
                "name": "Slim Fit Chinos",
                "price": 49.99,
                "category": "Men Pants",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80",
                "description": "Men's slim fit chinos designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3007,
                "name": "Straight Blue Jeans",
                "price": 59.99,
                "category": "Men Pants",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80",
                "description": "Men's straight blue jeans designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3008,
                "name": "Tailored Trousers",
                "price": 64.99,
                "category": "Men Pants",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80",
                "description": "Men's tailored trousers designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3009,
                "name": "Relaxed Cargo Pants",
                "price": 54.99,
                "category": "Men Pants",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1517445312882-7d5f7a4a0e5a?auto=format&fit=crop&w=900&q=80",
                "description": "Men's relaxed cargo pants designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3010,
                "name": "Everyday Joggers",
                "price": 39.99,
                "category": "Men Pants",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=80",
                "description": "Men's everyday joggers designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3011,
                "name": "Classic Bomber Jacket",
                "price": 89.99,
                "category": "Men Jackets",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80",
                "description": "Men's classic bomber jacket designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3012,
                "name": "Leather Biker Jacket",
                "price": 129.99,
                "category": "Men Jackets",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1520975958225-7b7c6e6d4c6d?auto=format&fit=crop&w=900&q=80",
                "description": "Men's leather biker jacket designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3013,
                "name": "Lightweight Utility Jacket",
                "price": 79.99,
                "category": "Men Jackets",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=80",
                "description": "Men's lightweight utility jacket designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3014,
                "name": "Classic Denim Jacket",
                "price": 74.99,
                "category": "Men Jackets",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=900&q=80",
                "description": "Men's classic denim jacket designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3015,
                "name": "Wool Overcoat",
                "price": 149.99,
                "category": "Men Jackets",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=900&q=80",
                "description": "Men's wool overcoat designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3016,
                "name": "White Court Sneakers",
                "price": 69.99,
                "category": "Men Shoes",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
                "description": "Men's white court sneakers designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3017,
                "name": "Classic Leather Loafers",
                "price": 89.99,
                "category": "Men Shoes",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=80",
                "description": "Men's classic leather loafers designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3018,
                "name": "Everyday Running Shoes",
                "price": 79.99,
                "category": "Men Shoes",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80",
                "description": "Men's everyday running shoes designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3019,
                "name": "Suede Casual Sneakers",
                "price": 84.99,
                "category": "Men Shoes",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=80",
                "description": "Men's suede casual sneakers designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3020,
                "name": "Chelsea Boots",
                "price": 109.99,
                "category": "Men Shoes",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=900&q=80",
                "description": "Men's chelsea boots designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3021,
                "name": "Classic Leather Belt",
                "price": 29.99,
                "category": "Men Accessories",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=80",
                "description": "Men's classic leather belt designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3022,
                "name": "Minimal Wrist Watch",
                "price": 99.99,
                "category": "Men Accessories",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=80",
                "description": "Men's minimal wrist watch designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3023,
                "name": "Everyday Backpack",
                "price": 54.99,
                "category": "Men Accessories",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
                "description": "Men's everyday backpack designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3024,
                "name": "Classic Sunglasses",
                "price": 39.99,
                "category": "Men Accessories",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
                "description": "Men's classic sunglasses designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3025,
                "name": "Canvas Baseball Cap",
                "price": 22.99,
                "category": "Men Accessories",
                "gender": "Men",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=80",
                "description": "Men's canvas baseball cap designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3026,
                "name": "Elegant Midi Dress",
                "price": 69.99,
                "category": "Women Dresses",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80",
                "description": "Women's elegant midi dress designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3027,
                "name": "Floral Summer Dress",
                "price": 59.99,
                "category": "Women Dresses",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
                "description": "Women's floral summer dress designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3028,
                "name": "Classic Black Dress",
                "price": 79.99,
                "category": "Women Dresses",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80",
                "description": "Women's classic black dress designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3029,
                "name": "Satin Evening Dress",
                "price": 99.99,
                "category": "Women Dresses",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80",
                "description": "Women's satin evening dress designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3030,
                "name": "Relaxed Shirt Dress",
                "price": 64.99,
                "category": "Women Dresses",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&w=900&q=80",
                "description": "Women's relaxed shirt dress designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3031,
                "name": "Soft Knit Top",
                "price": 39.99,
                "category": "Women Tops",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=900&q=80",
                "description": "Women's soft knit top designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3032,
                "name": "Silk Blouse",
                "price": 54.99,
                "category": "Women Tops",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=900&q=80",
                "description": "Women's silk blouse designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3033,
                "name": "Classic White Blouse",
                "price": 44.99,
                "category": "Women Tops",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=80",
                "description": "Women's classic white blouse designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3034,
                "name": "Ribbed Casual Top",
                "price": 34.99,
                "category": "Women Tops",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=80",
                "description": "Women's ribbed casual top designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3035,
                "name": "Oversized Graphic Tee",
                "price": 29.99,
                "category": "Women Tops",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
                "description": "Women's oversized graphic tee designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3036,
                "name": "High Waist Jeans",
                "price": 59.99,
                "category": "Women Bottoms",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80",
                "description": "Women's high waist jeans designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3037,
                "name": "Pleated Wide Leg Pants",
                "price": 64.99,
                "category": "Women Bottoms",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1506629905607-d9a8d9d5b5a0?auto=format&fit=crop&w=900&q=80",
                "description": "Women's pleated wide leg pants designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3038,
                "name": "A-Line Midi Skirt",
                "price": 49.99,
                "category": "Women Bottoms",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1583496661160-fb5886a13d27?auto=format&fit=crop&w=900&q=80",
                "description": "Women's a-line midi skirt designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3039,
                "name": "Casual Denim Skirt",
                "price": 44.99,
                "category": "Women Bottoms",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1577900232427-18219b9166a0?auto=format&fit=crop&w=900&q=80",
                "description": "Women's casual denim skirt designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3040,
                "name": "Tailored Wide Pants",
                "price": 69.99,
                "category": "Women Bottoms",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80",
                "description": "Women's tailored wide pants designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3041,
                "name": "Cropped Denim Jacket",
                "price": 74.99,
                "category": "Women Jackets",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80",
                "description": "Women's cropped denim jacket designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3042,
                "name": "Classic Trench Coat",
                "price": 119.99,
                "category": "Women Jackets",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80",
                "description": "Women's classic trench coat designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3043,
                "name": "Soft Wool Coat",
                "price": 139.99,
                "category": "Women Jackets",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=900&q=80",
                "description": "Women's soft wool coat designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3044,
                "name": "Quilted Puffer Jacket",
                "price": 99.99,
                "category": "Women Jackets",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=900&q=80",
                "description": "Women's quilted puffer jacket designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3045,
                "name": "Tailored Blazer",
                "price": 89.99,
                "category": "Women Jackets",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=80",
                "description": "Women's tailored blazer designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3046,
                "name": "Classic White Sneakers",
                "price": 69.99,
                "category": "Women Shoes",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
                "description": "Women's classic white sneakers designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3047,
                "name": "Elegant Heels",
                "price": 79.99,
                "category": "Women Shoes",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
                "description": "Women's elegant heels designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3048,
                "name": "Ankle Boots",
                "price": 94.99,
                "category": "Women Shoes",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=900&q=80",
                "description": "Women's ankle boots designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3049,
                "name": "Casual Slip-On Shoes",
                "price": 59.99,
                "category": "Women Shoes",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
                "description": "Women's casual slip-on shoes designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        },
        {
                "id": 3050,
                "name": "Minimal Sandals",
                "price": 49.99,
                "category": "Women Shoes",
                "gender": "Women",
                "stock": 20,
                "image": "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=900&q=80",
                "description": "Women's minimal sandals designed for comfortable, stylish everyday wear.",
                "seller": "SHOPX",
                "reviews": []
        }
]);
  }

  saveProducts(cleaned);
  return cleaned;
}

function hashPassword(password) {
  // Demo-only obfuscation. Do not use this as production password security.
  return btoa(unescape(encodeURIComponent(password)));
}

function signupUser(name, email, password) {
  name = name.trim();
  email = email.trim().toLowerCase();
  password = password.trim();

  if (!name || !email || !password) {
    return { ok: false, message: "Please fill in all fields." };
  }
  if (password.length < 6) {
    return { ok: false, message: "Password must be at least 6 characters." };
  }

  const users = getUsers();
  if (users.some((u) => u.email === email)) {
    return { ok: false, message: "This email is already registered." };
  }

  const user = {
    id: Date.now(),
    name,
    email,
    password: hashPassword(password),
    role: "customer",
    createdAt: new Date().toISOString(),
  };

  users.push(user);
  saveUsers(users);
  localStorage.setItem(KEYS.currentUser, JSON.stringify(user));

  return { ok: true, user };
}

function loginUser(email, password) {
  email = email.trim().toLowerCase();
  const user = getUsers().find(
    (u) => u.email === email && u.password === hashPassword(password),
  );

  if (!user) return { ok: false, message: "Invalid email or password." };

  localStorage.setItem(KEYS.currentUser, JSON.stringify(user));
  return { ok: true, user };
}

function logoutUser() {
  localStorage.removeItem(KEYS.currentUser);
}

function requireLogin() {
  if (!getCurrentUser()) {
    location.href = "../auth/login.html";
    return false;
  }
  return true;
}

function requireAdmin() {
  const user = getCurrentUser();
  if (!user || user.role !== "admin") {
    location.href = "../auth/login.html";
    return false;
  }
  return true;
}

function ensureAdminDemo() {
  const users = getUsers();
  if (!users.some((u) => u.email === "admin@shopx.com")) {
    users.push({
      id: 1,
      name: "SHOPX Admin",
      email: "admin@shopx.com",
      password: hashPassword("admin123"),
      role: "admin",
      createdAt: new Date().toISOString(),
    });
    saveUsers(users);
  }
}

function productRating(product) {
  const reviews = product.reviews || [];
  if (!reviews.length) return 0;
  return (
    reviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) / reviews.length
  );
}

function stars(rating) {
  const n = Math.round(rating);
  return "★".repeat(n) + "☆".repeat(5 - n);
}

function addToCart(productId) {
  const products = getProducts();
  const product = products.find((p) => p.id === Number(productId));
  if (!product) return { ok: false, message: "Product not found." };
  if (product.stock <= 0)
    return { ok: false, message: "Product is out of stock." };

  const cart = getCart();
  const item = cart.find((i) => i.id === product.id);

  if (item) {
    if (item.qty >= product.stock) {
      return {
        ok: false,
        message: "You cannot add more than available stock.",
      };
    }
    item.qty++;
  } else {
    cart.push({ id: product.id, qty: 1 });
  }

  saveCart(cart);
  return { ok: true, message: `${product.name} added to cart.` };
}

function cartCount() {
  return getCart().reduce((sum, i) => sum + Number(i.qty), 0);
}

function cartTotal() {
  const products = getProducts();
  return getCart().reduce((sum, item) => {
    const p = products.find((x) => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function checkout(customerInfo = null) {
  const user = getCurrentUser();
  if (!user) return { ok: false, message: "Please login first." };

  const cart = getCart();
  if (!cart.length) return { ok: false, message: "Your cart is empty." };

  if (!customerInfo || !customerInfo.name || !customerInfo.phone || !customerInfo.address || !customerInfo.city || !customerInfo.payment) {
    return { ok: false, message: "Please complete your checkout information." };
  }

  const products = getProducts();
  const orderItems = [];

  // Check stock first so an order can never partially reduce inventory.
  for (const item of cart) {
    const product = products.find((p) => p.id === item.id);
    if (!product) continue;
    if (product.stock < item.qty) {
      return { ok: false, message: `Not enough stock for ${product.name}.` };
    }
    orderItems.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      qty: item.qty,
    });
  }

  const total = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Reduce stock only after every item has passed validation.
  orderItems.forEach(item => {
    const product = products.find(p => p.id === item.productId);
    if (product) product.stock -= item.qty;
  });

  const orders = getOrders();
  orders.push({
    id: "ORD-" + Date.now(),
    userId: user.id,
    customer: customerInfo.name,
    email: user.email,
    phone: customerInfo.phone,
    address: customerInfo.address,
    city: customerInfo.city,
    postalCode: customerInfo.postalCode || "",
    payment: customerInfo.payment,
    items: orderItems,
    total,
    status: "Completed",
    createdAt: new Date().toISOString(),
  });

  saveProducts(products);
  saveOrders(orders);
  saveCart([]);

  return { ok: true, message: "Order completed successfully!" };
}

function createProduct(data) {
  const user = getCurrentUser();
  if (!user) return { ok: false, message: "Please login first." };

  const products = getProducts();
  const product = {
    id: Date.now(),
    name: data.name.trim(),
    price: Number(data.price),
    category: data.category,
    stock: Number(data.stock),
    image: data.image.trim(),
    description: data.description.trim(),
    seller: user.name,
    sellerId: user.id,
    reviews: [],
  };

  if (
    !product.name ||
    product.price <= 0 ||
    product.stock < 0 ||
    !product.image
  ) {
    return { ok: false, message: "Please enter valid product information." };
  }

  products.unshift(product);
  saveProducts(products);
  return { ok: true, product };
}

function deleteProduct(productId) {
  const products = getProducts().filter((p) => p.id !== Number(productId));
  saveProducts(products);
}

function showToast(message, type = "success") {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);
  }
  toast.className = `toast ${type}`;
  toast.textContent = message;
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => toast.classList.remove("show"), 2600);
}

function applyTheme() {
  const theme = localStorage.getItem(KEYS.theme) || "light";
  document.documentElement.dataset.theme = theme;
  const icon = document.getElementById("themeIcon");
  if (icon)
    icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
}

function toggleTheme() {
  const current = localStorage.getItem(KEYS.theme) || "light";
  localStorage.setItem(KEYS.theme, current === "dark" ? "light" : "dark");
  applyTheme();
}

document.addEventListener("DOMContentLoaded", () => {
  seedProducts();
  ensureAdminDemo();
  applyTheme();
});

