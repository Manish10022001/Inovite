import react from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import HeroSection from "../components/Home/HeroSection";
import ServiceList from "../components/Home/ServiceList";
import PortfolioCarousel from "../components/Home/PortfolioCarousel";
import TestimonialCard from "../components/Home/TestimonialCard";
import CTA from "../components/Home/CTA";

export default function Home() {
  const services = [
    {
      imgSrc: "/img/home/service01.jpg",
      alt: "Branding",
      title: "Branding",
      description:
        "We weave visual stories and craft strategic messaging that resonate at heartstrings, build unwavering trust, and turn customers into fervent brand champions.",
    },
    {
      imgSrc: "/img/home/service02.jpg",
      alt: "Marketing",
      title: "Marketing",
      description:
        "We design data-driven campaigns that crackle with energy, ignite engagement like wildfire, and turn clicks into conversions. We're the storm that promote your brand.",
    },
    {
      imgSrc: "/img/home/service03.jpg",
      alt: "Web Design",
      title: "Web Design",
      description:
        "We sculpt user-friendly websites that convert visitors into loyal devotees with intuitive navigation and flawless experiences for every screen. We craft that digital haven.",
    },
    {
      imgSrc: "/img/home/service04.jpg",
      alt: "Graphic Design",
      title: "Graphic Design",
      description:
        "We craft visual masterpieces that sing your brand's story in vibrant colors and captivating shapes. From logos that lodge in minds to infographics that make complex ideas sing.",
    },
  ];

  const marqueeList = [
    { title: "Branding" },
    { title: "Marketing" },
    { title: "Graphic Design" },
    { title: "Web Design" },
    { title: "UX/UI" },
  ];

  const [partners, setPartners] = useState([]);
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    axios.get("/data/partners.json").then((response) => {
      setPartners(response.data);
    });

    axios
      .get("/data/portfolio.json")
      .then((res) => setPortfolioItems(res.data));

    axios.get("/data/testimonials.json").then((response) => {
      setTestimonials(response.data);
    });
  }, []);
  return (
    <>
      <Header />
      <main id="bringer-main">
        <div className="stg-container">
          {/* Hero Section */}
          <HeroSection />

          {/* About Section */}
          <section className="divider-bottom">
            <div className="stg-row stg-large-gap stg-m-normal-gap">
              <div className="stg-col-6 stg-tp-bottom-gap-1 stg-m-bottom-gap">
                <div
                  className="bringer-parallax-media"
                  data-appear="fade-right"
                  data-unload="fade-left"
                >
                  <img
                    src="/img/null.png"
                    data-src="/img/home/about-1.jpeg"
                    alt="about Us"
                    className="bringer-lazy"
                    width="960"
                    height="960"
                  ></img>
                </div>
              </div>
              <div
                className="stg-col-6 stg-vertical-space-between"
                data-appear="fade-left"
                data-unload="fade-right"
              >
                <div>
                  <h3>We are passionate team of designers and developers.</h3>
                  <p className="bringer-large-text">
                    We are a passionate team of designers and developers who
                    believe in the power of creativity.
                  </p>
                  <p>
                    We are a team of passionate and experienced designers,
                    developers, and marketers who specialize in helping
                    businesses of all sizes achieve their goals. We believe that
                    creativity is the key to success, and we are committed to
                    helping our clients unleash their full potential.
                  </p>
                </div>
                <a
                  href="/about-us"
                  className="bringer-icon-link"
                  data-appear="fade-left"
                >
                  <div className="bringer-icon-wrap">
                    <i className="bringer-icon bringer-icon-explore"></i>
                  </div>
                  <div className="bringer-icon-link-content">
                    <h6>
                      We are
                      <br />
                      Passionate Team
                    </h6>
                    <span className="bringer-label">Learn More About Us</span>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* Service Section */}
          <section className="backlight-bottom">
            {/* Section Title */}
            <div className="stg-row bringer-section-title">
              <div className="stg-col-8 stg-offset-2">
                <div className="align-center">
                  <h2 data-appear="fade-up" data-unload="fade-up">
                    Our Services
                  </h2>
                  <p
                    className="bringer-large-text"
                    data-appear="fade-up"
                    data-unload="fade-up"
                    data-delay="100"
                  >
                    We offer a wide range of creative services to help
                    businesses of all sizes achieve their goals. Our services
                    include:
                  </p>
                </div>
              </div>
            </div>

            {/* List with Preview */}
            <div
              className="bringer-list-with-preview"
              data-preview-position="left"
              data-unload="fade-up"
              data-delay="200"
            >
              <div className="bringer-lwp-roster">
                {services.map((service, index) => (
                  <ServiceList
                    key={index}
                    imgSrc={service.imgSrc}
                    alt={service.alt}
                    title={service.title}
                    description={service.description}
                  />
                ))}

                {/* Learn More */}
                <div className="align-right">
                  <a href="#" className="bringer-arrow-link">
                    Discover all services
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section : Marquee */}
          <section className="is-fullwidth is stretched" data-padding="none">
            <div className="bringer-marquee" data-speed="5000">
              <div className="bringer-marquee-inner">
                <ul className="bringer-marquee-list">
                  {marqueeList.map((item, index) => (
                    <li key={index}>
                      <h2>{item.title}</h2>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section :Why CHoose us */}
          <section>
            <div className="stg-row stg-large-gap">
              <div
                className="stg-col-6 stg-tp-bottom-gap-1"
                data-unload="fade-left"
              >
                <div className="bringer-sticky-block">
                  <h2>Why Choose Us</h2>
                  <p className="bringer-large-text">
                    We are a passionate team of designers and developers who
                    believe in the power of creativity. We help creative
                    professionals create a strong online presence that showcases
                    their work and tells their story.
                  </p>
                  <div className="align-right">
                    <a href="/about-us" className="bringer-arrow-link">
                      Learn More About Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="stg-col-6">
                <div
                  className="bringer-grid-1col stg-normal-gap"
                  data-stagger-appear="zoom-in"
                  data-stagger-unload="zoom-out"
                  data-threshold="0.5"
                  data-stagger-delay="150"
                >
                  {/* Card Item */}
                  <div className="bringer-block">
                    <h4>
                      We don't just design, we{" "}
                      <span className="bringer-accent">unleash creative</span>{" "}
                      firestorms<span className="bringer-accent">.</span>
                    </h4>
                    <p>
                      Tired of bland marketing and cookie-cutter websites? We
                      infuse your brand with bold ideas and strategic
                      brilliance, igniting campaigns that capture hearts and
                      drive tangible results. Forget sparklers, we're here to
                      light galaxies on fire.
                    </p>
                  </div>

                  {/* Card Item */}
                  <div className="bringer-block">
                    <h4>
                      We <span className="bringer-accent">fuel creativity</span>{" "}
                      with data, guide passion with precision
                      <span className="bringer-accent">.</span>
                    </h4>
                    <p>
                      We're not just artistic dreamers, we're strategic
                      alchemists. We blend data-driven insights with unbridled
                      passion, ensuring your campaigns reach the right audience,
                      hit the right chords, and deliver measurable results.
                      Because passion without direction is a beautiful mess.
                    </p>
                  </div>

                  {/* Card Item */}
                  <div className="bringer-block">
                    <h4>
                      We craft{" "}
                      <span className="bringer-accent">
                        emotional connections
                      </span>
                      , not just visuals and copy
                      <span className="bringer-accent">.</span>
                    </h4>
                    <p>
                      We delve deeper than pixels and prose. We understand the
                      human heart, the language of emotions. We weave stories
                      that resonate, visuals that linger in minds, and content
                      that sparks conversations. Because true connection is the
                      foundation of brand loyalty.
                    </p>
                  </div>

                  {/* Card Item */}
                  <div className="bringer-block">
                    <h4>
                      We don't just work with you, we become your{" "}
                      <span className="bringer-accent">creative champions</span>
                      <span className="bringer-accent">.</span>
                    </h4>
                    <p>
                      We don't see clients, we see collaborators. We believe in
                      building partnerships, in understanding your vision, and
                      becoming an extension of your team. Your goals are our
                      canvas, your success our masterpiece. We paint your dreams
                      into reality, together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section :Counters */}
          <section data-padding="none">
            <div
              className="bringer-hero-media-wrap stg-bottom-gap stg-tp-bottom-gap-1"
              data-appear="fade-up"
              data-unload="zoom-out"
            ></div>
            <div
              className="bringer-hero-block bringer-hero-type08"
              style={{ paddingTop: 0, marginTop: 0 }}
            >
              {/* Partners Section */}
              <div className="bringer-partners">
                <span
                  className="bringer-label"
                  data-appear="fade-up"
                  data-unload="fade-up"
                >
                  Trusted by Industry Leaders
                </span>
                <div
                  className="bringer-grid-6cols bringer-tp-grid-3cols bringer-m-grid-2cols stg-top-gap-s"
                  data-stagger-appear="fade-up"
                  data-stagger-unload="fade-up"
                  data-stagger-delay="100"
                  data-delay="100"
                >
                  {partners.map((partner, index) => (
                    <div className="bringer-block" key={index}>
                      <img src={partner.image} alt={partner.alt} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section Portfolio */}
          <section className="is-fullwidth is stretched">
            {/* Section title */}
            <div className="stg-row bringer-section-title is-boxed">
              <div className="stg-col-8 stg-offset-2">
                <div className="align-center">
                  <h2 data-appear="fade-up" data-unload="fade-up">
                    Our Work
                  </h2>
                  <p
                    className="bringer-large-text"
                    data-appear="fade-up"
                    data-unload="fade-up"
                    data-delay="100"
                  >
                    We are proud of our work, and we are always looking for new
                    challenges. Take a look at some of our recent portfolio:
                  </p>
                </div>
              </div>
            </div>

            {/* Portfolio Carousel */}
            <PortfolioCarousel portfolioItems={portfolioItems} />

            <div
              className="align-center"
              data-appear="fade-up"
              data-unload="fade-up"
              data-delay="100"
            >
              <a href="portfolio-slider.html" className="bringer-button">
                Discover Full Portfolio
              </a>
            </div>
          </section>

          {/* Section : Testimonials */}
          <section className="backlight-top">
            <div className="bringer-expand-on-scroll">
              <img
                src="/img/home/about-2.jpeg"
                alt="Testimonials"
                data-unload="fade-up"
              />
            </div>
            <div className="stg-row stg-large-gap stg-top-gap-l">
              <div
                className="stg-col-6 stg-tp-bottom-gap-l"
                data-unload="fade-left"
              >
                <div className="bringer-sticky-block">
                  <h2>What Clients Say</h2>
                  <p className="bringer-large-text">
                    Here are some of the most inspiring reviews from our
                    clients. Your opinion is very important to us 'cause we have
                    always try to evolve and improve in the professional field
                    and work on mistakes.
                  </p>
                  <div className="align-right">
                    <a href="testimonials.html" className="bringer-arrow-link">
                      Read all Testimonials
                    </a>
                  </div>
                </div>
              </div>
              <div className="stg-col-6">
                <div className="bringer-grid-1col stg-normal-gap">
                  {testimonials.map((t, index) => (
                    <TestimonialCard
                      key={index}
                      description={t.description}
                      name={t.name}
                      position={t.position}
                      rating={t.rating}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
          <CTA />
        </div>
      </main>
    </>
  );
}
