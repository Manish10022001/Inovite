import { useState, useEffect } from "react";
import axios from "axios";

export default function HeroSection() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios.get("/data/tags.json").then((response) => {
      setTags(response.data);
    });
  }, []);

  return (
    <section className="backlight-bottom">
      <div className="bringer-hero-block bringer-hero-type03">
        {/* Main row */}
        <div className="bringer-hero-title-wrap">
          {/* Title */}
          <h1
            className="bringer-page-title"
            data-split-appear="fade-up"
            data-split-delay="100"
            data-split-by="line"
            data-split-unload="fade-up"
          >
            Bring your creative ideas into reality!
          </h1>
          {/* Additional Media */}
          <div
            className="stg-m-hide"
            data-appear="fade-left"
            data-unload="fade-right"
          >
            {/* Model Viewer */}
            <div
              className="stg-m-hide robot-3d-wrap"
              data-appear="fade-left"
              data-unload="fade-right"
            >
              <model-viewer
                src="/img/home/robot_3d_character.glb"
                alt="3D Robot Character"
                auto-rotate
                camera-controls
              ></model-viewer>
            </div>

            <style>{`
                .robot-3d-wrap {
                  display: flex;
                  justify-content: flex-start;
                  margin-left: -40px;
                  margin-bottom: -40px;
                  width: 400px;
                  height: 250px;
                  overflow: hidden;
                }

                .robot-3d-wrap model-viewer {
                  width: 400px;
                  height: 250px;
                }
              `}</style>
          </div>
        </div>

        {/* Masked Media Container */}
        <div className="bringer-hero-media-wrap bringer-masked-block">
          {/* Masked Media */}
          <div
            className="bringer-hero-media bringer-masked-media"
            data-appear="fade-right"
            data-unload="fade-left"
            data-delay="150"
            data-threshold="0"
          >
            <video
              src="/video/home03.mp4"
              poster="/img/home/home03-hero2.jpg"
              playsInline
              muted
              loop
              autoPlay
            />
          </div>

          {/* Content */}
          <div className="bringer-hero-media-content bringer-masked-content at-top-right">
            <div
              className="bringer-hero-media-content-inner m-align-center"
              data-appear="fade-left"
              data-unload="fade-right"
              data-delay="100"
              data-threshold="0"
            >
              We help creative agencies, designers, and other creative people
              showcase their work and connect with clients.
            </div>
          </div>

          {/* Tags List */}
          <ul
            className="bringer-tags-list"
            data-unload="fade-left"
            data-delay="150"
          >
            {tags.map((tag, index) => (
              <li key={index} data-appear="fade-up" data-delay={tag.delay}>
                <a href="#">{tag.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
