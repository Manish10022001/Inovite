import React from "react";
import ContactForm from "../components/Contact/ContactForm";
import ContactCard from "../components/Contact/ContactCard";
import ContactAboutUsSection from "../components/Contact/ContactAboutUsSection";
export default function Contact() {
  return (
    <div className="stg-container">
      {/* Section: */}
      <ContactAboutUsSection />

      {/* Section: CTA Form */}
      <section className="backlight-top is-fullwidth">
        <div className="stg-row stg-valign-middle stg-cta-with-image stg-tp-column-reverse">
          <div className="stg-col-5" data-unload="fade-left">
            <div
              className="bringer-offset-image"
              data-bg-src="img/cta/contact-section-bg.jpg"
              data-appear="fade-up"
              data-threshold="0.25"
            ></div>
            <ContactForm />
          </div>
          <div className="stg-col-6 stg-offset-1" data-unload="fade-right">
            <div className="bringer-cta-form-content">
              <div
                className="bringer-cta-form-title"
                data-split-appear="fade-up"
                data-split-delay="100"
                data-split-by="line"
              >
                Let's discuss your next creative project.
              </div>
              <div className="bringer-cta-text">
                <div className="stg-row stg-valign-middle">
                  <div
                    className="stg-col-2 stg-offset-2 stg-tp-col-1 stg-tp-offset-3 stg-m-col-1 stg-m-offset-2"
                    data-appear="fade-right"
                  >
                    <i className="bringer-cta-icon"></i>
                  </div>
                  <div
                    className="stg-col-8 stg-tp-col-7 stg-m-col-8 stg-m-offset-1"
                    data-appear="fade-left"
                  >
                    <p className="bringer-large-text">
                      We help creative agencies, designers, and other creative
                      people showcase their perfect work.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bringer-cta-counters bringer-grid-3cols bringer-m-grid-3cols"
                data-stagger-appear="fade-up"
                data-stagger-delay="100"
              >
                <div
                  className="bringer-counter bringer-small-counter"
                  data-delay="3000"
                >
                  <div className="bringer-counter-number">420</div>
                  <div className="bringer-counter-label">Projects Done</div>
                </div>
                <div
                  className="bringer-counter bringer-small-counter"
                  data-delay="3000"
                >
                  <div className="bringer-counter-number" data-suffix="K+">
                    8
                  </div>
                  <div className="bringer-counter-label">Happy Clients</div>
                </div>
                <div
                  className="bringer-counter bringer-small-counter"
                  data-delay="3000"
                >
                  <div className="bringer-counter-number" data-suffix="+">
                    12
                  </div>
                  <div className="bringer-counter-label">Years in Work</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Let's Talk */}
      <section className="backlight-top divider-bottom">
        <div className="stg-row bringer-section-title">
          <div className="stg-col-8 stg-offset-2">
            <div className="align-center">
              <h2 data-appear="fade-up" data-unload="fade-up">
                Let's 🗣 talk!
              </h2>
              <p
                className="bringer-large-text"
                data-appear="fade-up"
                data-delay="100"
                data-unload="fade-up"
              >
                Here's how you can connect with the Bringer team:
              </p>
            </div>
          </div>
        </div>
        <div
          className="stg-row "
          data-stagger-appear="fade-up"
          data-delay="200"
          data-stagger-unload="fade-up"
        >
          <div className="stg-col-4 stg-tp-col-6 stg-tp-bottom-gap">
            <ContactCard
              href="tel:+12345556789"
              title="Phone"
              subtitle="+1 (234) 555-67-89"
              description="Give us a call and chat directly with our friendly team. We're always happy to answer any questions."
            />
          </div>
          <div className="stg-col-4 stg-tp-col-6 stg-tp-bottom-gap">
            <ContactCard
              href="mailto:bringer@example.com"
              title="Email"
              subtitle="bringer@example.com"
              description="Send us a detailed message. We'll get back to you as soon as possible to discuss your creative project further."
            />
          </div>
          <div className="stg-col-4 stg-tp-col-12">
            <div className="bringer-block stg-aspect-square stg-tp-aspect-rectangle stg-vertical-space-between">
              <div>
                <h5>
                  Social Media<span className="bringer-accent">.</span>
                </h5>
                <ul
                  className="bringer-socials-list stg-small-gap"
                  data-stagger-appear="fade-up"
                  data-stagger-delay="75"
                >
                  {["facebook", "instagram", "x", "tiktok", "patreon"].map(
                    (social) => (
                      <li key={social}>
                        <a
                          href="#"
                          target="_blank"
                          rel="noreferrer"
                          className={`bringer-socials-${social}`}
                        >
                          <i></i>
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <p>
                Follow us on Social Media Platforms for a glimpse into our
                creative world, industry insights, and projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section>
        <div className="stg-row bringer-section-title">
          <div className="stg-col-8 stg-offset-2">
            <div className="align-center">
              <h2 data-appear="fade-up" data-unload="fade-up">
                Visit our Studio
              </h2>
              <p
                className="bringer-large-text"
                data-appear="fade-up"
                data-delay="100"
                data-unload="fade-up"
              >
                Come visit! We love welcoming potential collaborators into our
                vibrant space. Schedule a tour and get inspired by our creative
                energy.
              </p>
            </div>
          </div>
        </div>
        <div className="stg-row">
          <div
            className="stg-col-4 stg-tp-col-6 stg-m-bottom-gap"
            data-appear="fade-right"
            data-delay="100"
            data-unload="fade-left"
          >
            <ContactCard
              href="https://maps.app.goo.gl/WbTG6EKuF9dE1Xuy8"
              title="Address"
              subtitle="1250 Welton St, Denver,<br />CO 80204"
              description="Drop by our vibrant studio. We'd love to welcome you and share our creative vibe. Let's fuel your vision!"
            />
          </div>
          <div
            className="stg-col-8 stg-tp-col-6"
            data-appear="fade-left"
            data-delay="200"
            data-unload="fade-right"
          >
            <iframe
              className="bringer-google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.943072055294!2d-104.99509669999999!3d39.7409296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78d2480272f1%3A0x1b2acd6e38844602!2s1250%20Welton%20St%2C%20Denver%2C%20CO%2080204%2C%20USA!5e0!3m2!1sen!2sua!4v1705074190340!5m2!1sen!2sua"
              width="790"
              height="379"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bringer Studio Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
