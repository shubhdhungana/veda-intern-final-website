import { FunctionComponent } from "react";
import "./Container.css";

export type ContainerType = {
  className?: string;
};

const Container: FunctionComponent<ContainerType> = ({ className = "" }) => {
  return (
    <section className={`container1 ${className}`}>
      <div className="footer-subscription-container">
        <div className="content1">
          <div className="text-and-supporting-text">
            <div className="subscription-title">Join our newsletter</div>
            <div className="supporting-text">
              Pawprint that has been for pets.
            </div>
          </div>
          <div className="email-capture">
            <div className="input-field">
              <div className="input-field-base">
                <div className="input-with-label">
                  <div className="label">Email</div>
                  <div className="input">
                    <div className="content2">
                      <img className="mail-icon" alt="" src="/mail.svg" />
                      <div className="input-label">Enter your email</div>
                    </div>
                    <img className="help-icon" alt="" src="/help-icon.svg" />
                  </div>
                </div>
                <div className="hint-text">
                  This is a hint text to help user.
                </div>
              </div>
            </div>
            <button className="button9">
              <div className="button-base">
                <div className="text">Subscribe</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="divider" />
    </section>
  );
};

export default Container;
