import React from "react";

const Header = () => {
  return (
    <header
      id="bringer-header"
      className="is-frosted is-sticky"
      data-appear="fade-down"
      data-unload="fade-up"
    >
      {/* Desktop Header */}
      <div className="bringer-header-inner">
        {/* Header Logo */}
        <div className="bringer-header-lp">
          <a href="/" className="bringer-logo">
            <img src="/img/logo.png" alt="bringer." width="88" height="24" />
          </a>
        </div>
        {/* Main Menu */}
        <div className="bringer-header-mp">
          <nav className="bringer-nav">
            <ul
              className="main-menu"
              data-stagger-appear="fade-down"
              data-stagger-delay="75"
            >
              <li>
                <a href="#">Services</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Software Development</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Software Consulting</a>
                      </li>
                      <li>
                        <a href="#">ERP Software Development</a>
                      </li>
                      <li>
                        <a href="#">Custom CRM Development</a>
                      </li>
                      <li>
                        <a href="#">AR/VR Development</a>
                      </li>
                      <li>
                        <a href="#">IoT Development</a>
                      </li>
                      <li>
                        <a href="#">Microservices</a>
                      </li>
                      <li>
                        <a href="#">Product Development</a>
                      </li>
                      <li>
                        <a href="#">Maintenance & Support</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">Application Development</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Web Application</a>
                      </li>
                      <li>
                        <a href="#">Custom Application</a>
                      </li>
                      <li>
                        <a href="#">Application Modernization</a>
                      </li>
                      <li>
                        <a href="#">Application Management</a>
                      </li>
                      <li>
                        <a href="#">Application Maintenance</a>
                      </li>
                      <li>
                        <a href="#">Cloud Application</a>
                      </li>
                      <li>
                        <a href="#">Application Integration</a>
                      </li>
                      <li>
                        <a href="#">Ecommerce Application</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">Other Services</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Mobile App Development</a>
                      </li>
                      <li>
                        <a href="#">Hire Dedicated Developers</a>
                      </li>
                      <li>
                        <a href="#">Full Stack Development</a>
                      </li>
                      <li>
                        <a href="#">SaaS Development</a>
                      </li>
                      <li>
                        <a href="#">Artificial Intelligence</a>
                      </li>
                      <li>
                        <a href="#">Data Analytics</a>
                      </li>
                      <li>
                        <a href="#">Business Intelligence</a>
                      </li>
                      <li>
                        <a href="#">UX/UI Design</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">Industries</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Industries</a>
                    <ul className="sub-menu">
                      {/* Group 1 */}
                      <li>
                        <a href="#">Business & Services</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="#">Retail</a>
                          </li>
                          <li>
                            <a href="#">Healthcare</a>
                          </li>
                          <li>
                            <a href="#">E-commerce</a>
                          </li>
                          <li>
                            <a href="#">Education / eLearning</a>
                          </li>
                          <li>
                            <a href="#">Manufacturing</a>
                          </li>
                          <li>
                            <a href="#">Real Estate</a>
                          </li>
                          <li>
                            <a href="#">Logistics & Distribution</a>
                          </li>
                          <li>
                            <a href="#">Fintech</a>
                          </li>
                        </ul>
                      </li>

                      {/* Group 2 */}
                      <li>
                        <a href="#">Lifestyle & On-Demand</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="#">Restaurant App</a>
                          </li>
                          <li>
                            <a href="#">Beauty & Lifestyle</a>
                          </li>
                          <li>
                            <a href="#">Travel & Hospitality</a>
                          </li>
                          <li>
                            <a href="#">Fitness App</a>
                          </li>
                          <li>
                            <a href="#">Social Media App</a>
                          </li>
                          <li>
                            <a href="#">Beauty Services App</a>
                          </li>
                          <li>
                            <a href="#">On-Demand App</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="bringer-menu-divider"></li>

                  <li>
                    <a href="#">Download Ebook</a>
                  </li>
                </ul>
              </li>

              {/* First Root Menu */}
              <li>
                <a href="#">Discover</a>
                <ul className="sub-menu">
                  {/* Featured */}
                  <li>
                    <a href="#">Featured</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Vision & Roadmap</a>
                      </li>
                      <li>
                        <a href="#">Collaboration Models</a>
                      </li>
                    </ul>
                  </li>

                  {/* Resources */}
                  <li>
                    <a href="#">Resources</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Stories</a>
                      </li>
                      <li>
                        <a href="#">Case Study</a>
                      </li>
                      <li>
                        <a href="#">News</a>
                      </li>
                      <li>
                        <a href="/blog">Blog</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* Second Root Menu */}
              <li>
                <a href="#">Company</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Team Extension</a>
                  </li>
                  <li>
                    <a href="#">How We Work</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Startup</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">Careers</a>
                <ul className="sub-menu">
                  <li>
                    <a href="/careers/internship">Internship</a>
                  </li>
                  <li>
                    <a href="#">Jobs</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="/careers/jobs/tech">Tech Roles</a>
                      </li>
                      <li>
                        <a href="/careers/jobs/nontech">Non-Tech Roles</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        {/* Header Button */}
        <div className="bringer-header-rp">
          <a href="/contact" className="bringer-button">
            <b>Let's Build Together</b>
          </a>
        </div>
      </div>
      {/* Mobile Header */}
      <div className="bringer-mobile-header-inner">
        <a href="/" className="bringer-logo">
          <img src="/img/logo.png" alt="bringer." width="88" height="24" />
        </a>
        <a href="#" className="bringer-mobile-menu-toggler">
          <i className="bringer-menu-toggler-icon">
            <span></span>
            <span></span>
            <span></span>
          </i>
        </a>
      </div>
    </header>
  );
};

export default Header;
