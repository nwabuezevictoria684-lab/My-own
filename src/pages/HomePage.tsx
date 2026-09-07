import Footer from "../components/Footer";

function Home() {
  const products = [
    {
      name: "Golden Penny Spaghetti",
      price: "₦1,200",
      image:
        "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Premium Rice",
      price: "₦2,500",
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Milk",
      price: "₦1,800",
      image:
        "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Fresh Bread",
      price: "₦1,500",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <>
      {/* ================= CSS ================= */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        .home {
          width: 100%;
          font-family: Arial, sans-serif;
          color: #222;
        }

        /* HERO */
        .hero {
          min-height: 620px;
          padding: 80px 8%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          background: linear-gradient(135deg, #f1fff5, #ffffff);
        }

        .hero-content {
          flex: 1;
          max-width: 600px;
        }

        .small-title {
          color: #159447;
          font-weight: bold;
          letter-spacing: 2px;
          margin-bottom: 15px;
        }

        .hero h1 {
          font-size: 55px;
          line-height: 1.1;
          margin: 0 0 25px;
        }

        .hero h1 span {
          color: #159447;
        }

        .hero-text {
          font-size: 18px;
          line-height: 1.7;
          color: #666;
          margin-bottom: 30px;
        }

        .hero-buttons {
          display: flex;
          gap: 15px;
        }

        .btn {
          display: inline-block;
          text-decoration: none;
          padding: 14px 25px;
          border-radius: 7px;
          font-weight: bold;
          transition: 0.3s;
        }

        .primary-btn {
          background: #159447;
          color: white;
        }

        .primary-btn:hover {
          background: #0e7136;
          transform: translateY(-2px);
        }

        .secondary-btn {
          color: #159447;
          border: 2px solid #159447;
        }

        .secondary-btn:hover {
          background: #159447;
          color: white;
        }

        .hero-image {
          flex: 1;
          max-width: 550px;
        }

        .hero-image img {
          width: 100%;
          height: 430px;
          object-fit: cover;
          border-radius: 25px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        /* SECTION HEADING */
        .section-heading {
          text-align: center;
          margin-bottom: 45px;
        }

        .section-heading p {
          color: #159447;
          font-weight: bold;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }

        .section-heading h2 {
          font-size: 36px;
          margin: 0 0 12px;
        }

        .section-heading span {
          color: #777;
        }

        /* WHY US */
        .why-us {
          padding: 90px 8%;
          background: white;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .feature-card {
          padding: 30px 20px;
          text-align: center;
          border-radius: 12px;
          background: #f8faf9;
          transition: 0.3s;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }

        .feature-icon {
          font-size: 40px;
          margin-bottom: 15px;
        }

        .feature-card h3 {
          margin-bottom: 10px;
        }

        .feature-card p {
          color: #777;
          line-height: 1.6;
        }

        /* PRODUCTS */
        .popular-products {
          padding: 90px 8%;
          background: #f7f9f8;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .product-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.07);
          transition: 0.3s;
        }

        .product-card:hover {
          transform: translateY(-7px);
        }

        .product-image {
          height: 220px;
          overflow: hidden;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.4s;
        }

        .product-card:hover img {
          transform: scale(1.05);
        }

        .product-info {
          padding: 20px;
        }

        .product-info h3 {
          margin: 0 0 20px;
        }

        .product-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .product-bottom strong {
          color: #159447;
          font-size: 18px;
        }

        .product-bottom button {
          border: none;
          background: #159447;
          color: white;
          padding: 9px 12px;
          border-radius: 5px;
          cursor: pointer;
        }

        .product-bottom button:hover {
          background: #0e7136;
        }

        .view-products {
          text-align: center;
          margin-top: 45px;
        }

        /* SPECIAL OFFER */
        .offer {
          padding: 90px 8%;
          background: #159447;
          color: white;
          text-align: center;
        }

        .offer-content {
          max-width: 700px;
          margin: auto;
        }

        .offer h2 {
          font-size: 42px;
          margin: 15px 0;
        }

        .offer p {
          line-height: 1.7;
        }

        .offer-btn {
          display: inline-block;
          margin-top: 20px;
          padding: 14px 30px;
          background: white;
          color: #159447;
          text-decoration: none;
          border-radius: 7px;
          font-weight: bold;
        }

        /* ABOUT */
        .about-home {
          padding: 100px 8%;
          display: flex;
          align-items: center;
          gap: 70px;
          background: white;
        }

        .about-image,
        .about-content {
          flex: 1;
        }

        .about-image img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 20px;
        }

        .about-content h2 {
          font-size: 40px;
          line-height: 1.2;
          margin: 10px 0 20px;
        }

        .about-content p:not(.small-title) {
          color: #666;
          line-height: 1.8;
          margin-bottom: 15px;
        }

        /* REVIEWS */
        .reviews {
          padding: 90px 8%;
          background: #f7f9f8;
        }

        .review-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .review-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
        }

        .stars {
          font-size: 20px;
          margin-bottom: 15px;
        }

        .review-card p {
          color: #666;
          line-height: 1.7;
          font-style: italic;
        }

        /* FINAL CTA */
        .final-cta {
          padding: 90px 8%;
          text-align: center;
          background: white;
        }

        .final-cta h2 {
          font-size: 40px;
          margin-bottom: 10px;
        }

        .final-cta p {
          color: #666;
          margin-bottom: 30px;
        }

        .cta-btn {
          display: inline-block;
          background: #159447;
          color: white;
          padding: 15px 30px;
          border-radius: 7px;
          text-decoration: none;
          font-weight: bold;
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .hero {
            flex-direction: column;
            text-align: center;
            padding: 60px 5%;
          }

          .hero h1 {
            font-size: 42px;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-image {
            max-width: 100%;
          }

          .features {
            grid-template-columns: repeat(2, 1fr);
          }

          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .about-home {
            flex-direction: column;
          }

          .about-content {
            text-align: center;
          }

          .review-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .hero {
            padding: 45px 5%;
          }

          .hero h1 {
            font-size: 34px;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .hero-image img {
            height: 300px;
          }

          .features {
            grid-template-columns: 1fr;
          }

          .product-grid {
            grid-template-columns: 1fr;
          }

          .section-heading h2 {
            font-size: 28px;
          }

          .offer h2 {
            font-size: 30px;
          }

          .about-content h2 {
            font-size: 30px;
          }

          .about-image img {
            height: 300px;
          }
        }
      `}</style>

      {/* ================= HOME PAGE ================= */}

      <div className="home">

        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <p className="small-title">WELCOME TO OUR STORE</p>

            <h1>
              Quality Provisions
              <span> At Affordable Prices</span>
            </h1>

            <p className="hero-text">
              Get your everyday food items, drinks, snacks and household
              essentials all in one place.
            </p>

            <div className="hero-buttons">
              <a href="/product" className="btn primary-btn">
                Shop Now
              </a>

              <a href="/about" className="btn secondary-btn">
                Learn More
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=900&q=80"
              alt="Provision store"
            />
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="why-us">
          <div className="section-heading">
            <p>WHY CHOOSE US</p>
            <h2>We Make Shopping Easy</h2>
          </div>

          <div className="features">
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Quality Products</h3>
              <p>We provide quality and trusted products.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Affordable Prices</h3>
              <p>Get your favourite provisions at good prices.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Get your orders quickly and conveniently.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">❤️</div>
              <h3>Trusted Service</h3>
              <p>Your satisfaction is important to us.</p>
            </div>
          </div>
        </section>

        {/* POPULAR PRODUCTS */}
        <section className="popular-products">
          <div className="section-heading">
            <p>OUR PRODUCTS</p>
            <h2>Popular Products</h2>
            <span>Check out some of our popular provisions.</span>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <div className="product-card" key={index}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>

                  <div className="product-bottom">
                    <strong>{product.price}</strong>

                    <button>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="view-products">
            <a href="/products" className="btn primary-btn">
              View All Products
            </a>
          </div>
        </section>

        {/* SPECIAL OFFER */}
        <section className="offer">
          <div className="offer-content">
            <p>SPECIAL OFFER</p>

            <h2>Get 10% Off Your First Order!</h2>

            <p>
              Shop your favourite provisions today and enjoy amazing deals.
            </p>

            <a href="/product" className="offer-btn">
              Shop Now
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-home">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&w=800&q=80"
              alt="Groceries"
            />
          </div>

          <div className="about-content">
            <p className="small-title">ABOUT OUR STORE</p>

            <h2>Everything You Need In One Place</h2>

            <p>
              Our provision store provides quality food items, beverages,
              snacks and household essentials.
            </p>

            <p>
              We make shopping simple, affordable and convenient for everyone.
            </p>

            <a href="/about" className="btn primary-btn">
              About Us
            </a>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="reviews">
          <div className="section-heading">
            <p>TESTIMONIALS</p>
            <h2>What Our Customers Say</h2>
          </div>

          <div className="review-grid">
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>
                "The products are always fresh and the prices are very good."
              </p>
              <h3>— Customer 1</h3>
            </div>

            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>
                "I love how easy it is to find everything I need in one place."
              </p>
              <h3>— Customer 2</h3>
            </div>

            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>
                "Very affordable and reliable. Their products are also
                delivered quickly."
              </p>
              <h3>— Customer 3</h3>
            </div>
          </div>
        </section>

        {/* FINAL SECTION */}
        <section className="final-cta">
          <h2>Ready To Shop?</h2>

          <p>Find everything you need for your home in one place.</p>

          <a href="/product" className="cta-btn">
            Browse Our Products
          </a>
        </section>
     <Footer />
      </div>
    </>
  );
}

export default Home;