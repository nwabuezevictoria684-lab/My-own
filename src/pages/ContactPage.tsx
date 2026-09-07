import  { useState } from "react";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React . ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React. FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .contact-page {
          min-height: 100vh;
          background: #f8faf7;
          color: #222;
          font-family: Arial, sans-serif;
        }

        /* Hero Section */
        .contact-hero {
          background:
            linear-gradient(
              rgba(20, 90, 45, 0.9),
              rgba(20, 90, 45, 0.9)
            ),
            url("https://images.unsplash.com/photo-1542838132-92c53300491e")
            center/cover;

          min-height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 50px 20px;
          color: white;
        }

        .contact-hero h1 {
          font-size: 48px;
          margin: 0 0 15px;
          font-weight: 700;
        }

        .contact-hero p {
          max-width: 600px;
          margin: auto;
          font-size: 18px;
          line-height: 1.6;
        }

        /* Main Container */
        .contact-container {
          width: 90%;
          max-width: 1150px;
          margin: 70px auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
        }

        /* Contact Information */
        .contact-info h2,
        .contact-form-wrapper h2 {
          color: #145a2d;
          font-size: 30px;
          margin-bottom: 15px;
        }

        .intro {
          color: #666;
          line-height: 1.7;
          margin-bottom: 35px;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          margin-bottom: 28px;
        }

        .info-icon {
          width: 48px;
          height: 48px;
          min-width: 48px;
          border-radius: 50%;
          background: #e5f4e9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 21px;
        }

        .info-item h3 {
          margin: 0 0 6px;
          color: #333;
          font-size: 17px;
        }

        .info-item p {
          margin: 3px 0;
          color: #666;
          line-height: 1.5;
        }

        /* Form */
        .contact-form-wrapper {
          background: white;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          margin-bottom: 22px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #333;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 14px 15px;
          font-size: 15px;
          font-family: inherit;
          outline: none;
          transition: 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #1d7a3b;
          box-shadow: 0 0 0 3px rgba(29, 122, 59, 0.1);
        }

        .form-group textarea {
          resize: vertical;
        }

        /* Button */
        .submit-btn {
          width: 100%;
          border: none;
          background: #145a2d;
          color: white;
          padding: 15px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .submit-btn:hover {
          background: #0e4220;
          transform: translateY(-1px);
        }

        /* Success Message */
        .success-message {
          background: #e7f7eb;
          color: #17652e;
          border: 1px solid #b8e4c2;
          padding: 14px;
          border-radius: 8px;
          margin-bottom: 20px;
          font-size: 14px;
        }

        /* Tablet */
        @media (max-width: 800px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 40px;
            margin: 45px auto;
          }

          .contact-hero h1 {
            font-size: 38px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .contact-form-wrapper {
            padding: 25px;
          }
        }

        /* Mobile */
        @media (max-width: 500px) {
          .contact-hero {
            min-height: 230px;
          }

          .contact-hero h1 {
            font-size: 32px;
          }

          .contact-hero p {
            font-size: 15px;
          }

          .contact-container {
            width: 92%;
          }

          .contact-info h2,
          .contact-form-wrapper h2 {
            font-size: 25px;
          }
        }
      `}</style>

      <div className="contact-page">

        {/* Hero Section */}
        <section className="contact-hero">
          <div>
            <h1>Contact Us</h1>

            <p>
              Have a question about our products or your order?
              We would love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-container">

          {/* Contact Information */}
          <div className="contact-info">

            <h2>Get In Touch</h2>

            <p className="intro">
              Whether you need help with an order, want to know
              more about our products, or simply have a question,
              feel free to contact us.
            </p>

            <div className="info-item">
              <div className="info-icon">📍</div>

              <div>
                <h3>Our Address</h3>
                <p>
                 Itu umuala olokoro, umuahia,
                  Abia State, Nigeria
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>

              <div>
                <h3>Phone Number</h3>
                <p>+234 70 310 797 88</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉️</div>

              <div>
                <h3>Email Address</h3>
                <p>lizzyprovisionstore@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕒</div>

              <div>
                <h3>Opening Hours</h3>
                <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
                <p>Sunday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">

            <h2>Send Us a Message</h2>

            {submitted && (
              <div className="success-message">
                Your message has been sent successfully! 🎉
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn"
              >
                Send Message
              </button>

            </form>
          </div>

        </section>
        <Footer />
      </div>
    </>
  );
};

export default Contact;