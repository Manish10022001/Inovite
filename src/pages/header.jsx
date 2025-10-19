import React from "react";

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="stg-container container-fluid">
      {/* Section: About */}
      <section className="divider-bottom">
        <div className="stg-row stg-large-gap stg-m-normal-gap">
          <div className="stg-col-6 stg-tp-bottom-gap-l stg-m-bottom-gap">
            <div
              className="bringer-parallax-media"
              data-appear="fade-right"
              data-unload="fade-left"
            >
              <img
                src="/img/null.png"
                data-src="/img/home/about-1.jpeg"
                alt="About Us"
                className="bringer-lazy"
                width="960"
                height="960"
              />
            </div>
          </div>
          <div
            className="stg-col-6 stg-vertical-space-between"
            data-appear="fade-left"
            data-unload="fade-right"
          >
            <div>
              <h3>We are a passionate team of designers and developers.</h3>
              <p className="bringer-large-text">
                We are a passionate team of designers and developers who believe
                in the power of creativity.
              </p>
              <p>
                We are a team of passionate and experienced designers,
                developers, and marketers who specialize in helping businesses
                of all sizes achieve their goals. We believe that creativity is
                the key to success, and we are committed to helping our clients
                unleash their full potential.
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

      {/* Section: Services */}
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
                We offer a wide range of creative services to help businesses of
                all sizes achieve their goals. Our services include:
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
            {/* Item 01 */}
            <div
              className="bringer-lwp-item bringer-block"
              data-appear="fade-left"
            >
              <img
                src="/img/home/service01.jpg"
                alt="Branding"
                width="800"
                height="1200"
              />
              <div className="bringer-lwp-item-content">
                <h5>
                  Branding<span className="bringer-accent">.</span>
                </h5>
                <p>
                  We weave visual stories and craft strategic messaging that
                  resonate at heartstrings, build unwavering trust, and turn
                  customers into fervent brand champions.
                </p>
              </div>
            </div>

            {/* Item 02 */}
            <div
              className="bringer-lwp-item bringer-block"
              data-appear="fade-left"
            >
              <img
                src="/img/home/service02.jpg"
                alt="Marketing"
                width="800"
                height="1200"
              />
              <div className="bringer-lwp-item-content">
                <h5>
                  Marketing<span className="bringer-accent">.</span>
                </h5>
                <p>
                  We design data-driven campaigns that crackle with energy,
                  ignite engagement like wildfire, and turn clicks into
                  conversions. We're the storm that promote your brand.
                </p>
              </div>
            </div>

            {/* Item 03 */}
            <div
              className="bringer-lwp-item bringer-block"
              data-appear="fade-left"
            >
              <img
                src="/img/home/service03.jpg"
                alt="Web Design"
                width="800"
                height="1200"
              />
              <div className="bringer-lwp-item-content">
                <h5>
                  Web Design<span className="bringer-accent">.</span>
                </h5>
                <p>
                  We sculpt user-friendly websites that convert visitors into
                  loyal devotees.s with intuitive navigation and flawless
                  experiences for every screen. We craft that digital haven.
                </p>
              </div>
            </div>

            {/* Item 04 */}
            <div
              className="bringer-lwp-item bringer-block"
              data-appear="fade-left"
            >
              <img
                src="/img/home/service04.jpg"
                alt="Graphic Design"
                width="800"
                height="1200"
              />
              <div className="bringer-lwp-item-content">
                <h5>
                  Graphic Design<span className="bringer-accent">.</span>
                </h5>
                <p>
                  We craft visual masterpieces that sing your brand's story in
                  vibrant colors and captivating shapes. From logos that lodge
                  in minds to infographics that make complex ideas sing.
                </p>
              </div>
            </div>

            {/* Learn More */}
            <div className="align-right">
              <a href="#" className="bringer-arrow-link">
                Discover all services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Marquee */}
      <section className="is-fullwidth is-stretched" data-padding="none">
        <div className="bringer-marquee" data-speed="5000">
          <div className="bringer-marquee-inner">
            <ul className="bringer-marquee-list">
              <li>
                <h2>Branding</h2>
              </li>
              <li>
                <h2>Marketing</h2>
              </li>
              <li>
                <h2>Graphic Design</h2>
              </li>
              <li>
                <h2>Web Design</h2>
              </li>
              <li>
                <h2>UX/UI</h2>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Why Choose Us */}
      <section>
        <div className="stg-row stg-large-gap">
          <div
            className="stg-col-6 stg-tp-bottom-gap-l"
            data-unload="fade-left"
          >
            <div className="bringer-sticky-block">
              <h2>Why Choose Us</h2>
              <p className="bringer-large-text">
                We are a passionate team of designers and developers who believe
                in the power of creativity. We help creative professionals
                create a strong online presence that showcases their work and
                tells their story.
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
                  Tired of bland marketing and cookie-cutter websites? We infuse
                  your brand with bold ideas and strategic brilliance, igniting
                  campaigns that capture hearts and drive tangible results.
                  Forget sparklers, we're here to light galaxies on fire.
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
                  We're not just artistic dreamers, we're strategic alchemists.
                  We blend data-driven insights with unbridled passion, ensuring
                  your campaigns reach the right audience, hit the right chords,
                  and deliver measurable results. Because passion without
                  direction is a beautiful mess.
                </p>
              </div>

              {/* Card Item */}
              <div className="bringer-block">
                <h4>
                  We craft{" "}
                  <span className="bringer-accent">emotional connections</span>,
                  not just visuals and copy
                  <span className="bringer-accent">.</span>
                </h4>
                <p>
                  We delve deeper than pixels and prose. We understand the human
                  heart, the language of emotions. We weave stories that
                  resonate, visuals that linger in minds, and content that
                  sparks conversations. Because true connection is the
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
                  becoming an extension of your team. Your goals are our canvas,
                  your success our masterpiece. We paint your dreams into
                  reality, together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Counters */}
      <section data-padding="none">
        <div
          className="bringer-hero-media-wrap stg-bottom-gap stg-tp-bottom-gap-l"
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
              <div className="bringer-block">
                <img src="/img/partners/partner01.png" alt="Partner Logo" />
              </div>
              <div className="bringer-block">
                <img src="/img/partners/partner02.png" alt="Partner Logo" />
              </div>
              <div className="bringer-block">
                <img src="/img/partners/partner03.png" alt="Partner Logo" />
              </div>
              <div className="bringer-block">
                <img src="/img/partners/partner04.png" alt="Partner Logo" />
              </div>
              <div className="bringer-block">
                <img src="/img/partners/partner05.png" alt="Partner Logo" />
              </div>
              <div className="bringer-block">
                <img src="/img/partners/partner06.png" alt="Partner Logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Portfolio */}
      <section className="is-fullwidth is-stretched">
        {/* Section Title */}
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
        <div
          className="swiper bringer-carousel stg-bottom-gap-l"
          data-appear="fade-up"
          data-unload="fade-up"
          data-delay="200"
          data-count="4"
          data-m-count="1.5"
        >
          <div className="swiper-wrapper">
            {/* Card Item 01 */}
            <div className="bringer-block bringer-portfolio-card swiper-slide">
              <div className="bringer-portfolio-card-image">
                <img
                  className="bringer-lazy"
                  src="/img/null.png"
                  data-src="/img/portfolio/portfolio01.jpg"
                  alt=""
                  width="1200"
                  height="1200"
                />
              </div>
              <div className="bringer-portfolio-card-footer">
                <div className="bringer-portfolio-card-title">
                  <span className="bringer-meta">Branding</span>
                  <h6>Curology</h6>
                </div>
                <span className="bringer-icon bringer-icon-explore"></span>
              </div>
              <a href="portfolio-post01.html"></a>
            </div>

            {/* Card Item 02 */}
            <div className="bringer-block bringer-portfolio-card swiper-slide">
              <div className="bringer-portfolio-card-image">
                <img
                  className="bringer-lazy"
                  src="/img/null.png"
                  data-src="/img/portfolio/portfolio02.jpg"
                  alt=""
                  width="1200"
                  height="1200"
                />
              </div>
              <div className="bringer-portfolio-card-footer">
                <div className="bringer-portfolio-card-title">
                  <span className="bringer-meta">Advertising</span>
                  <h6>Cookie Dough</h6>
                </div>
                <span className="bringer-icon bringer-icon-explore"></span>
              </div>
              <a href="portfolio-post02.html"></a>
            </div>

            {/* Card Item 03 */}
            <div className="bringer-block bringer-portfolio-card swiper-slide">
              <div className="bringer-portfolio-card-image">
                <img
                  className="bringer-lazy"
                  src="/img/null.png"
                  data-src="/img/portfolio/portfolio03.jpg"
                  alt=""
                  width="1200"
                  height="1200"
                />
              </div>
              <div className="bringer-portfolio-card-footer">
                <div className="bringer-portfolio-card-title">
                  <span className="bringer-meta">Marketing</span>
                  <h6>Gaming Power</h6>
                </div>
                <span className="bringer-icon bringer-icon-explore"></span>
              </div>
              <a href="portfolio-post03.html"></a>
            </div>

            {/* Card Item 04 */}
            <div className="bringer-block bringer-portfolio-card swiper-slide">
              <div className="bringer-portfolio-card-image">
                <img
                  className="bringer-lazy"
                  src="/img/null.png"
                  data-src="/img/portfolio/portfolio04.jpg"
                  alt=""
                  width="1200"
                  height="1200"
                />
              </div>
              <div className="bringer-portfolio-card-footer">
                <div className="bringer-portfolio-card-title">
                  <span className="bringer-meta">Advertising</span>
                  <h6>Riot Energy</h6>
                </div>
                <span className="bringer-icon bringer-icon-explore"></span>
              </div>
              <a href="portfolio-post04.html"></a>
            </div>

            {/* Card Item 05 */}
            <div className="bringer-block bringer-portfolio-card swiper-slide">
              <div className="bringer-portfolio-card-image">
                <img
                  className="bringer-lazy"
                  src="/img/null.png"
                  data-src="/img/portfolio/portfolio05.jpg"
                  alt=""
                  width="1200"
                  height="1200"
                />
              </div>
              <div className="bringer-portfolio-card-footer">
                <div className="bringer-portfolio-card-title">
                  <span className="bringer-meta">Marketing</span>
                  <h6>Smoothie</h6>
                </div>
                <span className="bringer-icon bringer-icon-explore"></span>
              </div>
              <a href="portfolio-post05.html"></a>
            </div>

            {/* Card Item 06 */}
            <div className="bringer-block bringer-portfolio-card swiper-slide">
              <div className="bringer-portfolio-card-image">
                <img
                  className="bringer-lazy"
                  src="/img/null.png"
                  data-src="/img/portfolio/portfolio06.jpg"
                  alt=""
                  width="1200"
                  height="1200"
                />
              </div>
              <div className="bringer-portfolio-card-footer">
                <div className="bringer-portfolio-card-title">
                  <span className="bringer-meta">Branding</span>
                  <h6>Positive Beverage</h6>
                </div>
                <span className="bringer-icon bringer-icon-explore"></span>
              </div>
              <a href="portfolio-post06.html"></a>
            </div>

            {/* Card Item 07 */}
            <div className="bringer-block bringer-portfolio-card swiper-slide">
              <div className="bringer-portfolio-card-image">
                <img
                  className="bringer-lazy"
                  src="/img/null.png"
                  data-src="/img/portfolio/portfolio07.jpg"
                  alt=""
                  width="1200"
                  height="1200"
                />
              </div>
              <div className="bringer-portfolio-card-footer">
                <div className="bringer-portfolio-card-title">
                  <span className="bringer-meta">Branding</span>
                  <h6>Fashion Makeup</h6>
                </div>
                <span className="bringer-icon bringer-icon-explore"></span>
              </div>
              <a href="portfolio-post07.html"></a>
            </div>
          </div>
          {/* Pagination */}
          <div className="swiper-pagination bringer-dots"></div>
        </div>
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

      {/* Section: Testimonials */}
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
                Here are some of the most inspiring reviews from our clients.
                Your opinion is very important to us 'cause we have always try
                to evolve and improve in the professional field and work on
                mistakes.
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
              {/* Card Item */}
              <div
                className="bringer-block bringer-tetimonials-card"
                data-appear="zoom-out"
                data-unload="fade-right"
                data-threshold="0.75"
              >
                <div className="bringer-tetimonials-card-descr">
                  "Before working with Bringer, our brand felt lost in the
                  crowd. They not only gave us a stunning logo and website, but
                  they also crafted a brand story that resonated with our
                  customers. Now, we're seeing a surge in loyalty and
                  engagement, and it all started with a spark!"
                </div>
                <div className="bringer-tetimonials-card-footer">
                  <div className="bringer-tetimonials-card-name">
                    <h6>Sarah Janson</h6>
                    <span className="bringer-meta">CEO of Bloom Eco-Spa</span>
                  </div>
                  <div className="bringer-tetimonials-card-rate">
                    <span className="bringer-tetimonials-stars5"></span>
                  </div>
                </div>
              </div>

              {/* Card Item */}
              <div
                className="bringer-block bringer-tetimonials-card"
                data-appear="zoom-out"
                data-unload="fade-right"
                data-threshold="0.75"
              >
                <div className="bringer-tetimonials-card-descr">
                  "We knew we needed a digital boost, but we had no idea where
                  to start. Bringer came in like a team of data-driven
                  superheroes! They built targeted campaigns that reached our
                  ideal audience, and the results were incredible. Our leads
                  skyrocketed, and our conversion rates doubled. They truly
                  understand the power of digital!"
                </div>
                <div className="bringer-tetimonials-card-footer">
                  <div className="bringer-tetimonials-card-name">
                    <h6>Michael Kaper</h6>
                    <span className="bringer-meta">
                      VP of Marketing, Tech Inc.
                    </span>
                  </div>
                  <div className="bringer-tetimonials-card-rate">
                    <span className="bringer-tetimonials-stars5"></span>
                  </div>
                </div>
              </div>

              {/* Card Item */}
              <div
                className="bringer-block bringer-tetimonials-card"
                data-appear="zoom-out"
                data-unload="fade-right"
                data-threshold="0.75"
              >
                <div className="bringer-tetimonials-card-descr">
                  "Words cannot express how pleased we are with the visuals
                  Bringer created for our brand. From the captivating
                  infographics to the social media graphics that pop off the
                  screen, they've injected an emotional punch into our
                  communication that resonates deeply with our audience. Now,
                  every visual tells our story with stunning clarity."
                </div>
                <div className="bringer-tetimonials-card-footer">
                  <div className="bringer-tetimonials-card-name">
                    <h6>Anna Larson</h6>
                    <span className="bringer-meta">
                      Founder of StoryCraft Books
                    </span>
                  </div>
                  <div className="bringer-tetimonials-card-rate">
                    <span className="bringer-tetimonials-stars4"></span>
                  </div>
                </div>
              </div>

              {/* Card Item */}
              <div
                className="bringer-block bringer-tetimonials-card"
                data-appear="zoom-out"
                data-unload="fade-right"
                data-threshold="0.75"
              >
                <div className="bringer-tetimonials-card-descr">
                  "Our old website was a confusing maze. Bringer transformed it
                  into a user-friendly paradise! They crafted a streamlined
                  navigation that makes finding information a breeze, and the
                  mobile experience is flawless. The result? Increased traffic,
                  higher engagement, and happier customers. They've truly
                  reimagined the digital experience."
                </div>
                <div className="bringer-tetimonials-card-footer">
                  <div className="bringer-tetimonials-card-name">
                    <h6>David Madison</h6>
                    <span className="bringer-meta">
                      CTO of GreenTech Solutions
                    </span>
                  </div>
                  <div className="bringer-tetimonials-card-rate">
                    <span className="bringer-tetimonials-stars4"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: CTA */}
      <section data-padding="bottom">
        <div
          className="bringer-masked-cta bringer-masked-block"
          data-unload="fade-down"
        >
          <form
            action="https://demo.shadow-themes.com/html/bringer/mail-short.php"
            method="post"
            data-fill-error="Please, fill out the form."
            className="bringer-contact-form is-short bringer-masked-media"
            data-appear="fade-up"
            onSubmit={handleSubmit}
          >
            <div className="bringer-form-content bringer-cta-form">
              <div
                className="bringer-cta-form-content"
                data-appear="fade-up"
                data-delay="100"
              >
                <div className="bringer-cta-title">
                  Ready to set your Brand ablaze?
                </div>
                <input
                  type="email"
                  id="subscribe_email"
                  name="subscribe_email"
                  placeholder="email@example.com"
                  required
                />
              </div>
              <div
                className="bringer-cta-form-button"
                data-appear="fade-up"
                data-delay="200"
              >
                <button type="submit">
                  <span className="bringer-icon bringer-icon-arrow-submit"></span>
                </button>
              </div>
              <div className="bringer-contact-form__response"></div>
            </div>
            <span className="bringer-form-spinner"></span>
          </form>
          <div className="bringer-masked-cta-content bringer-masked-content at-top-right">
            <p className="bringer-large-text" data-appear="fade-down">
              Let's craft a visual identity that ignites passion and loyalty. ✨
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
