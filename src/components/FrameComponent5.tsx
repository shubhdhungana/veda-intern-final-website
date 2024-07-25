import { FunctionComponent } from "react";
import "./FrameComponent5.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <section className={`hero-wrapper ${className}`}>
      <div className="hero">
      
        <div className="navigation-parent">
          <header className="navigation">
            <div className="navigation-container">
              <div className="logos">
                <h3 className="paw-prints">Paw Prints</h3>
              </div>
              <div className="top-menu">
                <div className="menu">
                  <div className="menu1">{`Campaigns & Topics`}</div>
                  <img className="chevron-icon2" alt="" src="/chevron-2.svg" />
                </div>
                <div className="menu2">
                  <div className="menu3">Animals</div>
                  <img className="chevron-icon3" alt="" src="/chevron-2.svg" />
                </div>
                <div className="menu4">
                  <div className="menu5">About Us</div>
                  <img className="chevron-icon4" alt="" src="/chevron-2.svg" />
                </div>
                <div className="menu6">
                  <div className="menu7">Contact</div>
                  <img className="chevron-icon5" alt="" src="/chevron1.svg" />
                </div>
              </div>
            </div>
            <div className="mobile-menu-button">
              <button className="button">
                <a className="menu8">Volunteer</a>
                <img className="arrow-icon" alt="" src="/arrow.svg" />
              </button>
              <button className="button1">
                <a className="menu9">Donate</a>
                <img className="arrow-icon1" alt="" src="/arrow1.svg" />
              </button>
            </div>
          </header>
          <div className="frame-parent">
            <div className="hero-text-wrapper">
              <div className="hero-text">
                <div className="poltica">
                  <div className="hero-paragraph">
                    <div className="saving-lives-every">
                      Saving lives every day
                    </div>
                    <h1 className="saving-lives-of">
                      Saving lives of cats and dogs across world
                    </h1>
                  </div>
                  <div className="we-advocate-for">
                    We advocate for vulnerable animals, providing safety while
                    promoting responsible pet ownership. We uplift both animals
                    and communities.
                  </div>
                </div>
                <button className="button2">
                  <div className="menu10">About Us</div>
                  <img className="arrow-icon2" alt="" src="/arrow1.svg" />
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-container">
                <div className="ai" />
                <img
                  className="animal-shelter-img-5-1-icon"
                  loading="lazy"
                  alt=""
                  src="/animalshelterimg5-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
