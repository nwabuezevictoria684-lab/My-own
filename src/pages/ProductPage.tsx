import { useState } from "react";
import Footer from "../components/Footer";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

const products = [
  {
    id: 1,
    name: "Golden Penny Spaghetti",
    price: "₦1,200",
    category: "Food",
    image: "spaghetti.jpg",
  },
  {
    id: 2,
    name: "Indomie Instant Noodles",
    price: "₦800",
    category: "Food",
    image: "indo.jpg",
  },
  {
    id: 3,
    name: "Peak Milk",
    price: "₦1,500",
    category: "Drinks",
    image: "peak.jpg",
  },
  {
    id: 4,
    name: "Coca-Cola",
    price: "₦900",
    category: "Drinks",
    image: "coca.jpg",
  },
  {
    id: 5,
    name: "Bread",
    price: "₦1,000",
    category: "Food",
    image: "bread.jpg",
  },
  {
    id: 6,
    name: "Premium Rice",
    price: "₦3,500",
    category: "Food",
    image: "rice.jpg",
  },
  {
    id: 7,
    name: "Tomato Paste",
    price: "₦700",
    category: "Food",
    image: "tom.jpg",
  },
  {
    id: 8,
    name: "Milo Chocolate Drink",
    price: "₦2,800",
    category: "Drinks",
    image: "milo.jpg",
  },
  {
    id: 9,
    name: "Sugar",
    price: "₦1,800",
    category: "Food",
    image: "sugar.jpg",
  },
  {
    id: 10,
    name: "Cooking Oil",
    price: "₦4,500",
    category: "Food",
    image: "cooking-oil.jpg",
  },
  {
    id: 11,
    name: "Peak Yoghurt",
    price: "₦1,200",
    category: "Drinks",
    image: "yoh.jpg",
  },
  {
    id: 12,
    name: "Biscuit Pack",
    price: "₦1400",
    category: "Snacks",
    image: "cabin.jpg",
  },
  {
    id: 13,
    name: "Potato Chips",
    price: "₦1,000",
    category: "Snacks",
    image: "stack.jpg",
  },
  {
    id: 14,
    name: "Mineral Water",
    price: "₦300",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500",
  },
  {
    id: 15,
    name: "Corn Flakes",
    price: "₦3,200",
    category: "Food",
    image: "corn.jpg",
  },
  {
    id: 16,
    name: "Chocolate Bar",
    price: "₦900",
    category: "Snacks",
    image: "choco.jpg",
  },
  {
    id: 17,
    name: "Detergent",
    price: "₦2,000",
    category: "Household",
    image: "viva.jpg",
  },
  {
    id: 18,
    name: "Bathing Soap",
    price: "₦700",
    category: "Personal Care",
    image: "soap.jpg",
  },
  {
    id: 19,
    name: "Toothpaste",
    price: "₦1,000",
    category: "Personal Care",
    image: "paste.jpg",
  },
  {
    id: 20,
    name: "Tissue Paper",
    price: "₦1,500",
    category: "Household",
    image: "tissue.jpg",
  },
];


const addToCart = (product: {
  id: number;
  name: string;
  price: string;
  image: string;
}) => {
  const existingCart = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );

  const existingProduct = existingCart.find(
    (item: any) => item.id === product.id
  );

  let updatedCart;

  if (existingProduct) {
    updatedCart = existingCart.map((item: any) =>
      item.id === product.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
  } else {
    updatedCart = [
      ...existingCart,
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      },
    ];
  }

  localStorage.setItem(
    "cart",
    JSON.stringify(updatedCart)
  );

  alert(`${product.name} added to cart!`);
};

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: Arial, sans-serif;
          background: #f5f7f6;
        }

        .products-page {
          min-height: 100vh;
        }

        /* HERO */
        .products-hero {
          background: linear-gradient(
            135deg,
            #087f5b,
            #0ca678
          );
          padding: 70px 20px;
          text-align: center;
          color: white;
        }

        .products-hero h1 {
          font-size: 45px;
          margin-bottom: 15px;
        }

        .products-hero p {
          font-size: 18px;
          max-width: 650px;
          margin: auto;
          line-height: 1.6;
        }

        /* SEARCH */
        .search-area {
          max-width: 1000px;
          margin: -30px auto 40px;
          padding: 0 20px;
          position: relative;
        }

        .search-box {
          background: white;
          padding: 15px;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.12);
          display: flex;
          gap: 10px;
        }

        .search-box input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 16px;
          padding: 12px;
        }

        .search-box button {
          background: #087f5b;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 8px;
          cursor: pointer;
        }

        /* CATEGORY */
        .category-area {
          text-align: center;
          margin-bottom: 35px;
          padding: 0 15px;
        }

        .category-area h2 {
          margin-bottom: 20px;
          color: #222;
        }

        .categories {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .category-btn {
          border: 1px solid #087f5b;
          background: white;
          color: #087f5b;
          padding: 10px 20px;
          border-radius: 25px;
          cursor: pointer;
          transition: 0.3s;
        }

        .category-btn:hover,
        .category-btn.active {
          background: #087f5b;
          color: white;
        }

        /* PRODUCTS */
        .products-container {
          max-width: 1200px;
          margin: auto;
          padding: 20px;
        }

        .products-container h2 {
          margin-bottom: 25px;
          color: #222;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        /* CARD */
        .product-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          transition: 0.3s;
          position: relative;
        }

        .product-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .product-image {
          width: 100%;
          height: 210px;
          object-fit: cover;
        }

        .discount {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #e03131;
          color: white;
          padding: 6px 10px;
          border-radius: 5px;
          font-size: 12px;
          font-weight: bold;
        }

        .product-info {
          padding: 18px;
        }

        .product-info h3 {
          font-size: 18px;
          margin-bottom: 10px;
          color: #222;
        }

        .category-name {
          font-size: 13px;
          color: #777;
          margin-bottom: 12px;
        }

        .price {
          font-size: 20px;
          font-weight: bold;
          color: #087f5b;
          margin-bottom: 15px;
        }

        .cart-btn {
          width: 100%;
          border: none;
          background: #087f5b;
          color: white;
          padding: 12px;
          border-radius: 8px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .cart-btn:hover {
          background: #055c42;
        }

        /* BOTTOM SECTION */
        .shopping-banner {
          max-width: 1160px;
          margin: 60px auto;
          padding: 45px 25px;
          background: #e6fcf5;
          border-radius: 18px;
          text-align: center;
        }

        .shopping-banner h2 {
          color: #087f5b;
          margin-bottom: 10px;
          font-size: 30px;
        }

        .shopping-banner p {
          color: #555;
          margin-bottom: 20px;
        }

        .shop-btn {
          display: inline-block;
          background: #087f5b;
          color: white;
          padding: 13px 28px;
          border-radius: 8px;
          text-decoration: none;
        }

        .no-products {
          text-align: center;
          padding: 50px;
          color: #777;
          grid-column: 1 / -1;
        }

        /* RESPONSIVE */
        @media (max-width: 1000px) {
          .products-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 750px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .products-hero h1 {
            font-size: 35px;
          }
        }

        @media (max-width: 500px) {
          .products-grid {
            grid-template-columns: 1fr;
          }

          .products-hero {
            padding: 50px 15px;
          }

          .products-hero h1 {
            font-size: 30px;
          }

          .search-box {
            flex-direction: column;
          }

          .search-box button {
            width: 100%;
          }
        }
      `}</style>

      <div className="products-page">

        {/* HERO */}
        <section className="products-hero">
          <h1>Our Products 🛒</h1>
          <p>
            Shop quality food, drinks, groceries and household essentials
            at affordable prices.
          </p>
        </section>

        {/* SEARCH */}
        <div className="search-area">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search for products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button>🔍 Search</button>
          </div>
        </div>

        {/* CATEGORIES */}
        <section className="category-area">
          <h2>Shop by Category</h2>

          <div className="categories">
            {["All", "Food", "Drinks", "Bakery", "Vegetables"].map(
              (item) => (
                <button
                  key={item}
                  className={`category-btn ${
                    category === item ? "active" : ""
                  }`}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="products-container">
          <h2>Popular Products</h2>

          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div className="product-card" key={product.id}>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />

                  <div className="product-info">
                    <h3>{product.name}</h3>

                    <p className="category-name">
                      {product.category}
                    </p>

                    <p className="price">
                      {product.price}
                    </p>

                    <button
                      className="cart-btn"
                      onClick={() =>
                       addToCart(product)
                      }
                    >
                      🛒 Add to Cart
                    </button>
                  </div>

                </div>
              ))
            ) : (
              <div className="no-products">
                <h3>No products found</h3>
                <p>Try searching for another product.</p>
              </div>
            )}
          </div>
        </section>

        {/* BOTTOM BANNER */}
        <section className="shopping-banner">
          <h2>Everything You Need in One Place</h2>
          <p>
            Get your everyday groceries without stress.
            Quality products, great prices and convenient shopping.
          </p>

          <a href="/contact" className="shop-btn">
            Contact Us
          </a>
        </section>
 <Footer />
      </div>
    </>
  );
}

export default Products;