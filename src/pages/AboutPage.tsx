import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .about-page {
          font-family: Arial, sans-serif;
          color: #222;
          background: #f8faf7;
          min-height: 100vh;
        }

        /* Hero Section */
        .about-hero {
          min-height: 320px;
          background:
            linear-gradient(
              rgba(20, 90, 45, 0.88),
              rgba(20, 90, 45, 0.88)
            ),
            url("https://images.unsplash.com/photo-1542838132-92c53300491e")
            center/cover;

          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 50px 20px;
        }

        .about-hero h1 {
          font-size: 50px;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .about-hero p {
          font-size: 18px;
          max-width: 650px;
          line-height: 1.7;
          margin: auto;
        }

        /* Main About Section */
        .about-container {
          width: 90%;
          max-width: 1150px;
          margin: 70px auto;
        }

        .about-intro {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 80px;
        }

        .about-image img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
        }

        .about-text h2 {
          font-size: 34px;
          color: #145a2d;
          margin-bottom: 20px;
        }

        .about-text p {
          color: #666;
          line-height: 1.8;
          font-size: 16px;
          margin-bottom: 18px;
        }

        .brand-name {
          color: #145a2d;
          font-weight: 700;
        }

        /* Mission and Vision */
        .mission-section {
          text-align: center;
          margin-bottom: 80px;
        }

        .mission-section > h2 {
          font-size: 34px;
          color: #145a2d;
          margin-bottom: 40px;
        }

        .mission-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .mission-card {
          background: white;
          padding: 35px 25px;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.07);
          transition: 0.3s;
        }

        .mission-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
        }

        .card-icon {
          width: 65px;
          height: 65px;
          margin: 0 auto 20px;
          border-radius: 50%;
          background: #e5f4e9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
        }

        .mission-card h3 {
          color: #145a2d;
          font-size: 21px;
          margin-bottom: 12px;
        }

        .mission-card p {
          color: #666;
          line-height: 1.7;
          font-size: 15px;
        }

        /* Why Choose Us */
        .why-section {
          background: #145a2d;
          color: white;
          padding: 70px 8%;
          margin-left: calc(-1 * ((100vw - 90vw) / 2));
          margin-right: calc(-1 * ((100vw - 90vw) / 2));
          text-align: center;
        }

        .why-section h2 {
          font-size: 34px;
          margin-bottom: 15px;
        }

        .why-section > p {
          max-width: 650px;
          margin: 0 auto 45px;
          line-height: 1.7;
          color: #e5f4e9;
        }

        .features {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .feature {
          padding: 20px;
        }

        .feature-icon {
          font-size: 35px;
          margin-bottom: 15px;
        }

        .feature h3 {
          font-size: 18px;
          margin-bottom: 10px;
        }

        .feature p {
          color: #d9ebde;
          line-height: 1.6;
          font-size: 14px;
        }

        /* Call To Action */
        .about-cta {
          text-align: center;
          padding: 80px 20px 20px;
        }

        .about-cta h2 {
          font-size: 32px;
          color: #145a2d;
          margin-bottom: 15px;
        }

        .about-cta p {
          color: #666;
          margin-bottom: 25px;
          line-height: 1.6;
        }

        .shop-btn {
          display: inline-block;
          background: #145a2d;
          color: white;
          text-decoration: none;
          padding: 14px 30px;
          border-radius: 8px;
          font-weight: 600;
          transition: 0.3s;
        }

        .shop-btn:hover {
          background: #0e4220;
          transform: translateY(-2px);
        }

        /* Tablet */
        @media (max-width: 900px) {
          .about-intro {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .mission-cards {
            grid-template-columns: 1fr 1fr;
          }

          .features {
            grid-template-columns: 1fr 1fr;
          }

          .about-image img {
            height: 350px;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .about-hero {
            min-height: 250px;
          }

          .about-hero h1 {
            font-size: 36px;
          }

          .about-hero p {
            font-size: 15px;
          }

          .about-container {
            width: 92%;
            margin: 45px auto;
          }

          .about-text h2,
          .mission-section > h2,
          .why-section h2 {
            font-size: 27px;
          }

          .about-image img {
            height: 280px;
          }

          .mission-cards {
            grid-template-columns: 1fr;
          }

          .features {
            grid-template-columns: 1fr;
          }

          .why-section {
            margin-left: -4%;
            margin-right: -4%;
            padding: 55px 20px;
          }

          .about-cta {
            padding-top: 55px;
          }

          .about-cta h2 {
            font-size: 27px;
          }
        }
      `}</style>

      <div className="about-page">

        {/* Hero */}
        <section className="about-hero">
          <div>
            <h1>About Lizzy</h1>

            <p>
              Your trusted destination for quality provisions,
              everyday essentials, and great value.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className="about-container">

          {/* Introduction */}
          <section className="about-intro">

            <div className="about-image">
              <img
                src="/riy.jpg"
                alt="Lizzy Provision Store"
              />
            </div>

            <div className="about-text">
              <h2>Welcome to Lizzy Provision Store</h2>

              <p>
                At <span className="brand-name">Lizzy</span>,
                we believe shopping for your everyday essentials
                should be simple, convenient, and affordable.
              </p>

              <p>
                We are a provision store dedicated to providing
                customers with quality food items, beverages,
                household products, snacks, and other everyday
                essentials.
              </p>

              <p>
                Whether you are stocking up your home, buying
                something for the family, or simply looking for
                a quick snack, Lizzy is here to make your shopping
                experience easy and enjoyable.
              </p>
            </div>

          </section>

          {/* Mission Cards */}
          <section className="mission-section">

            <h2>What We Stand For</h2>

            <div className="mission-cards">

              <div className="mission-card">
                <div className="card-icon">🎯</div>

                <h3>Our Mission</h3>

                <p>
                  To provide quality provisions and everyday
                  essentials at affordable prices while giving
                  our customers excellent service.
                </p>
              </div>

              <div className="mission-card">
                <div className="card-icon">👁️</div>

                <h3>Our Vision</h3>

                <p>
                  To become a trusted household name known for
                  quality products, convenience, affordability,
                  and customer satisfaction.
                </p>
              </div>

              <div className="mission-card">
                <div className="card-icon">❤️</div>

                <h3>Our Values</h3>

                <p>
                  We value honesty, quality, affordability,
                  customer satisfaction, and building strong
                  relationships with our community.
                </p>
              </div>

            </div>
          </section>

          {/* Why Choose Lizzy */}
          <section className="why-section">

            <h2>Why Choose Lizzy?</h2>

            <p>
              We are committed to making everyday shopping
              convenient while ensuring our customers get
              products they can trust.
            </p>

            <div className="features">

              <div className="feature">
                <div className="feature-icon">🛒</div>

                <h3>Quality Products</h3>

                <p>
                  We offer carefully selected products
                  for your everyday needs.
                </p>
              </div>

              <div className="feature">
                <div className="feature-icon">💰</div>

                <h3>Affordable Prices</h3>

                <p>
                  Get great value without compromising
                  on quality.
                </p>
              </div>

              <div className="feature">
                <div className="feature-icon">😊</div>

                <h3>Great Service</h3>

                <p>
                  Our customers are at the heart of
                  everything we do.
                </p>
              </div>

              <div className="feature">
                <div className="feature-icon">⚡</div>

                <h3>Convenience</h3>

                <p>
                  Find your everyday essentials quickly
                  and easily.
                </p>
              </div>

            </div>

          </section>

          {/* CTA */}
          <section className="about-cta">

            <h2>Ready to Shop with Lizzy?</h2>

            <p>
              Explore our products and find everything you
              need for your home and everyday life.
            </p>

            <a href="/shop" className="shop-btn">
              Shop Now
            </a>

          </section>

        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;