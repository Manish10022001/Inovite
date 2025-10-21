import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ContactAboutUsSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/data/contact-about-us.json")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch About Us data:", err);
      });
  }, []);

  if (!data) return null;

  return (
    <section>
      {/* Section Title */}
      <div className="stg-row stg-bottom-gap">
        <div className="stg-col-8">
          <h2 data-split-appear="fade-up" data-unload="fade-up">
            {data.title}
          </h2>
        </div>
        <div className="stg-col-4"></div>
      </div>

      {/* Section Content */}
      <div className="stg-row stg-bottom-gap-l">
        <div
          className="stg-col-6 stg-offset-6"
          data-appear="fade-up"
          data-delay="200"
          data-unload="fade-up"
        >
          <p>{data.description}</p>
        </div>
      </div>

      {/* Grid Gallery */}
      <div
        className="bringer-grid-3cols bringer-parallax-media bringer-m-grid-3cols stg-m-small-gap"
        data-stagger-appear="fade-up"
        data-delay="200"
        data-stagger-unload="fade-up"
      >
        {data.images.map((imgSrc, index) => (
          <a
            key={index}
            href={imgSrc}
            className="bringer-lightbox-link"
            data-size="960x960"
          >
            <img
              className="bringer-lazy"
              src={imgSrc}
              alt={`Bringer Image ${index + 1}`}
              width="960"
              height="960"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
