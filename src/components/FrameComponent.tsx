import { FunctionComponent } from "react";
import Property1Variant from "./Property1Variant";
import "./FrameComponent.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={`testimonials-content-wrapper ${className}`}>
      <div className="testimonials-content">
        <div className="testimonial-container">
          <div className="testimonial-inner-container">
            <div className="testimonial-wrapper">
              <div className="testimonial-content-wrapper">
                <div className="frame-parent4">
                  <div className="testimonials-wrapper">
                    <div className="testimonials">Testimonials</div>
                  </div>
                  <h1 className="check-what-our">
                    Check what our volunteers are saying
                  </h1>
                </div>
              </div>
              <div className="we-advocate-for4">
                We advocate for vulnerable animals, providing safety while
                promoting responsible pet ownership. We uplift both animals and
                communities.
              </div>
            </div>
          </div>
          <Property1Variant
            frame70="/frame-70@2x.png"
            fromTheMomentIStartedUsin="Volunteering with fourpaws is incredibly fulfilling. Seeing rescued animals thrive is rewarding beyond words. The dedication of the team inspires me daily, and this experience has enriched my life in countless, meaningful ways."
            liamK="Gal G."
            chevron="/chevron-5.svg"
            chevron1="/chevron-6.svg"
            propAlignSelf="stretch"
            propFlex="unset"
          />
        </div>
        <div className="cta">
          <img className="mask-group-icon" alt="" src="/mask-group.svg" />
          <div className="call-to-action-content">
            <div className="heading2">
              <h1 className="get-involved">Get Involved</h1>
              <div className="our-work-is">
                Our work is made possible by the generosity of people like you,
                who have contributed to our mission to improve the lives of all
                animals.
              </div>
            </div>
            <div className="button-parent">
              <button className="button7">
                <div className="menu15">{`Adopt & Donate to help us`}</div>
                <img className="arrow-icon8" alt="" src="/arrow-8.svg" />
              </button>
              <button className="button8">
                <div className="menu16">Volunteering opportunities</div>
                <img className="arrow-icon9" alt="" src="/arrow-8.svg" />
              </button>
            </div>
          </div>
          <div className="call-to-action-image-container">
            <img
              className="animal-shelter-img-5-1-icon1"
              alt=""
              src="/animalshelterimg5-1-1@2x.png"
            />
          </div>
          <img
            className="closeup-shot-cute-sitting-gold-icon"
            alt=""
            src="/closeupshotcutesittinggoldenretrieverpuppyisolatedwhitesurface-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
