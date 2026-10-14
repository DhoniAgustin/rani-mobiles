import React from "react";
import "./App.css";
import ranimobiles from './ranimobiles.png'

const services = [
  {
    icon: "📱",
    title: "Mobile Services",
    description: "Mobile support and related services",
  },
  {
    icon: "🌐",
    title: "Online Services",
    description: "Online forms and applications",
  },
  {
    icon: "📄",
    title: "Typing & Documents",
    description: "Resume, typing and PDF services",
  },
  {
    icon: "💻",
    title: "Web & Digital",
    description: "Website and digital solutions",
  },
];

function Header() {
  return (
    <header className="header">
      <a href="#home" className="brand">
        <span className="brand-icon">
          <img src={ranimobiles} alt="Rani" />
        </span>
        <span>
          <strong>RANI MOBILES</strong>
          <small>AND INTERNET</small>
        </span>
      </a>

      <a className="nav-contact" href="#contact">
        Contact Us
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <p className="eyebrow">WELCOME TO OUR SHOP</p>
      <h1>Mobile & Digital Services, All in One Place.</h1>
      <p className="hero-text">
        Your local destination for mobile support,
        online services and digital solutions.
      </p>
      <div className="hero-actions">
        <a className="button primary" href="#services">
          Our Services
        </a>
        <a className="button secondary" href="#contact">
          Contact Us
        </a>
      </div>
      <p className="location">📍 Main Road, Athisyapuram</p>
    </section>
  );
}

function Services() {
  return (
    <section className="services section" id="services">
      <p className="eyebrow">WHAT WE OFFER</p>
      <h2>Our Services</h2>
      <p className="section-text">
        Helpful digital services for your everyday needs.
      </p>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const phone = "918525090631";
  const message =
    "Hello Rani Mobiles and Internet, I need more information about your services.";

  return (
    <section className="contact section" id="contact">
      <p className="eyebrow">GET IN TOUCH</p>
      <h2>How can we help you?</h2>
      <p>
        Contact us to ask about our services and availability.
      </p>

      <a
        className="button primary"
        href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noreferrer"
      >
        Chat on WhatsApp
      </a>

      <p className="phone">📞 8525090631</p>
      <p>📍 Main Road, Athisyapuram</p>
      <p>✉️ ranimobiles6861@gmail.com</p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Rani Mobiles and Internet</p>
      <p>All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}