import { FunctionComponent } from "react";
import "./FrameComponent4.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section className={`about-us-wrapper ${className}`}>
      <div className="about-us">
        <div className="heading">
          <div className="who-we-are-and-our-mission-parent">
            <div className="who-we-are">Who we are and our mission</div>
            <h1 className="about-our-shelter">About our shelter and values</h1>
          </div>
          <div className="we-advocate-for1">
            We advocate for vulnerable animals, providing safety while promoting
            responsible pet ownership. We uplift both animals and communities.
          </div>
        </div>
        <div className="content">
          <div className="about-paragraph">
            <div className="your-donations-help-us-run-imp-parent">
              <h1 className="your-donations-help">
                Your donations help us run important projects
              </h1>
              <div className="as-a-pioneer-container">
                <span className="as-a-pioneer-container1">
                  <span>{`As a pioneer of the no-kill movement, `}</span>
                  <span className="paw-print">Paw Print</span>
                  <span>
                    {" "}
                    leads the way with national and international programs
                    designed to increase adoptions and raise awareness about the
                    plight of homeless animals, continuing to make a significant
                    impact.
                  </span>
                </span>
              </div>
            </div>
            <button className="button3">
              <div className="menu11">Donate for pets</div>
              <img className="arrow-icon3" alt="" src="/arrow1.svg" />
            </button>
          </div>
          <img
            className="about-image-icon"
            loading="lazy"
            alt=""
            src="/rectangle-4@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
