import { FunctionComponent } from "react";
import "./FrameComponent2.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={`impact-content-wrapper ${className}`}>
      <div className="impact-content">
        <div className="impact-container">
          <img
            className="footer-branding-icon"
            alt=""
            src="/footer-branding@2x.png"
          />
          <img
            className="logos-icon"
            loading="lazy"
            alt=""
            src="/logos@2x.png"
          />
        </div>
        <div className="impact-paragraphs-wrapper">
          <div className="impact-paragraphs">
            <div className="impact-heading">
              <div className="impact-title">
                <div className="a-help-to1">A Help to those who need it</div>
                <h1 className="transform-lives-with">
                  Transform lives with donations
                </h1>
              </div>
              <div className="your-donation-can">
                Your donation can save lives. Help us provide care and find
                loving homes for rescued animals. Every contribution counts.
                Donate now!
              </div>
            </div>
            <div className="donation-progress">
              <div className="progress-container">
                <div className="progress-bars">
                  <div className="progress-bars-child" />
                  <div className="progress-bar">
                    <div className="empty-bar">60%</div>
                  </div>
                </div>
                <div className="progress-labels">
                  <div className="goal-1340-container1">
                    <span className="goal-1340-container2">
                      <span className="goal2">
                        <span className="goal3">
                          <span className="goal4">Goal</span>
                          <span className="span2">{` `}</span>
                        </span>
                        <span className="span3">:</span>
                        <span className="span4">{` `}</span>
                        <span>$</span>
                      </span>
                      <span>1340</span>
                    </span>
                  </div>
                  <div className="raised-800-container1">
                    <span className="raised-800-container2">
                      <span className="raised2">
                        <span className="raised3">
                          <span>Raised</span>
                          <span className="span5">{` `}</span>
                        </span>
                        <span className="span6">:</span>
                        <span className="span7">{` `}</span>
                        <span>$</span>
                      </span>
                      <span>800</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="progress-bars1">
                <div className="progress-bar-container">
                  <div className="frame-group">
                    <div className="wrapper">
                      <div className="div1">$</div>
                    </div>
                    <div className="progress-indicator-wrapper">
                      <input
                        className="progress-indicator"
                        placeholder="10.00"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="frame-container">
                    <div className="container">
                      <div className="div2">$ 10.00</div>
                    </div>
                    <div className="frame">
                      <div className="div3">$ 25.00</div>
                    </div>
                  </div>
                </div>
                <div className="frame-div">
                  <div className="div4">$ 50.00</div>
                </div>
                <div className="wrapper1">
                  <div className="div5">$ 100.00</div>
                </div>
                <div className="wrapper2">
                  <div className="div6">$ 250.00</div>
                </div>
              </div>
            </div>
            <button className="button5">
              <div className="menu13">Donate Now</div>
              <div className="action-icon-container">
                <img className="arrow-icon6" alt="" src="/arrow1.svg" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
