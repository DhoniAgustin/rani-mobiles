import React from "react";
import "./App.css";

const PHONE = "8525090631";
const WHATSAPP = "918525090631";
const EMAIL = "ranimobiles6861@gmail.com";

const MAPS_URL =
  "https://maps.app.goo.gl/RBjBZ1QJvgKF6HdP8?g_st=ac";

const MESSAGE =
  "Hello Rani Mobiles and Internet! I would like to know more about your services.";

const services = [
  {
    icon: "mobile",
    title: "Mobile Services",
    description:
      "Get help with mobile-related services, device support and everyday mobile needs.",
    features: [
      "Mobile support",
      "Device assistance",
      "Mobile-related help",
    ],
  },
  {
    icon: "globe",
    title: "Online Services",
    description:
      "Convenient assistance with online forms, applications and digital tasks.",
    features: [
      "Online applications",
      "Form assistance",
      "Digital support",
    ],
  },
  {
    icon: "file",
    title: "Typing & Documents",
    description:
      "Get help preparing clean, professional documents for your personal needs.",
    features: [
      "Resume preparation",
      "Document typing",
      "PDF assistance",
    ],
  },
  {
    icon: "code",
    title: "Web & Digital",
    description:
      "Explore website development and digital solutions for individuals and businesses.",
    features: [
      "Website solutions",
      "Web development",
      "Digital assistance",
    ],
  },
];

function ServiceIcon({ type }) {
  const common = {
    width: 30,
    height: 30,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  return (
    <svg {...common}>
      {type === "mobile" && (
        <>
          <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
          <path d="M10 5.5h4" />
          <path d="M11 18.5h2" />
        </>
      )}

      {type === "globe" && (
        <>
          <circle cx="12" cy="12" r="9.5" />
          <path d="M2.8 9h18.4M2.8 15h18.4" />
          <path d="M12 2.5c2.5 2.5 3.7 5.7 3.7 9.5s-1.2 7-3.7 9.5" />
          <path d="M12 2.5C9.5 5 8.3 8.2 8.3 12s1.2 7 3.7 9.5" />
        </>
      )}

      {type === "file" && (
        <>
          <path d="M6 2.5h8l4 4V21H6z" />
          <path d="M14 2.5V7h4" />
          <path d="M9 12h6M9 15.5h6M9 18h4" />
        </>
      )}

      {type === "code" && (
        <>
          <path d="m8 7-5 5 5 5M16 7l5 5-5 5" />
          <path d="m14 4-4 16" />
        </>
      )}
    </svg>
  );
}

function Header() {
  return (
    <header className="header">
      <a href="#home" className="brand">
        <img
          src="/ranimobiles.png"
          alt="Rani Mobiles and Internet Logo"
          className="brand-logo"
        />
        <span>
          <strong>RANI MOBILES</strong>
          <small>AND INTERNET</small>
        </span>
      </a>

      <a className="nav-contact" href="#contact">
        Contact Us ↗
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
          Explore Services →
        </a>

        <a className="button secondary" href="#contact">
          Contact Us
        </a>
      </div>

      <a
        className="location directions-link"
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        📍 Main Road, Athisayapuram
        <span>Get Directions ↗</span>
      </a>
    </section>
  );
}

function BigLogoSection() {
  return (
    <section className="big-logo-section">
      <div className="big-logo-circle">
        <img
          src="/ranimobiles.png"
          alt="Rani Mobiles and Internet Logo"
          className="big-logo"
        />
      </div>

      <p className="eyebrow">YOUR TRUSTED LOCAL SHOP</p>

      <h2>RANI MOBILES AND INTERNET</h2>

      <p>
        Mobile Services · Online Services · Digital Solutions
      </p>
    </section>
  );
}

function Services() {
  return (
    <section className="services section" id="services">
      <p className="eyebrow">WHAT WE OFFER</p>

      <h2>Services Designed Around You</h2>

      <p className="section-text">
        Reliable support for your mobile, online and everyday
        digital needs — all in one convenient place.
      </p>

      <div className="service-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <div className="service-card-top">
              <span className="service-icon">
                <ServiceIcon type={service.icon} />
              </span>

              <span className="service-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3>{service.title}</h3>

            <p className="service-description">
              {service.description}
            </p>

            <ul className="service-features">
              {service.features.map((feature) => (
                <li key={feature}>
                  <span className="feature-check">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              className="service-link"
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                `Hello Rani Mobiles and Internet, I would like to enquire about ${service.title}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire Now <span>↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const whatsappUrl =
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <section className="contact section" id="contact">
      <p className="eyebrow">WE ARE HERE TO HELP</p>

      <h2>Let's Connect!</h2>

      <p>
        Have a question about our services?
        Contact us directly. We will be happy to help.
      </p>

      <div className="contact-actions">
        <a
          className="button whatsapp-button"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Rani Mobiles on WhatsApp"
        >
          💬 Chat on WhatsApp
        </a>

        <a
          className="button call-button"
          href={`tel:${PHONE}`}
          aria-label="Call Rani Mobiles and Internet"
        >
          ☎ Call Now
        </a>
      </div>

      <div className="contact-details">
        <p>
          📞 <a href={`tel:${PHONE}`}>{PHONE}</a>
        </p>

        <p>📍 Main Road, Athisayapuram</p>

        <p>
          ✉️ <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>

        <a
          className="directions-button"
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          📍 Open Google Maps
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        © 2021- {new Date().getFullYear()} Rani Mobiles and Internet
      </p>
      <p>Mobile Services · Online Services · Digital Solutions</p>
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
  <BigLogoSection />
  <Services />
  <Contact />
</main>
      <Footer />
    </>
  );
}