import React, { useState } from "react";
import axios from "axios";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setResponseMessage("Please, fill out the form.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://demo.shadow-themes.com/html/bringer/mail-short.php",
        {
          subscribe_email: email,
        }
      );

      if (response.status === 200) {
        setResponseMessage("Thank you for subscribing!");
      } else {
        setResponseMessage(
          "There was an issue with your submission. Please try again."
        );
      }
    } catch (error) {
      setResponseMessage("There was an error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section data-padding="bottom">
      <div
        className="bringer-masked-cta bringer-masked-block"
        data-unload="fade-down"
      >
        <form
          onSubmit={handleSubmit}
          className="bringer-contact-form is-short bringer-masked-media"
          data-appear="fade-up"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                required
              />
            </div>
            <div
              className="bringer-cta-form-button"
              data-appear="fade-up"
              data-delay="200"
            >
              <button type="submit" disabled={loading}>
                <span className="bringer-icon bringer-icon-arrow-submit"></span>
              </button>
            </div>
            <div className="bringer-contact-form__response">
              {responseMessage && <p>{responseMessage}</p>}
            </div>
          </div>
          {loading && <span className="bringer-form-spinner"></span>}
        </form>
        <div className="bringer-masked-cta-content bringer-masked-content at-top-right">
          <p className="bringer-large-text" data-appear="fade-down">
            Let's craft a visual identity that ignites passion and loyalty. ✨
          </p>
        </div>
      </div>
    </section>
  );
}
