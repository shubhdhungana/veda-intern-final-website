import { FunctionComponent } from "react";
import "./Footer.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="top">
        <div className="logos1">
          <h2 className="pawprints">Pawprints</h2>
        </div>
        <div className="links">
          <div className="menu-container">
            <div className="h3-title">Quick Links</div>
            <div className="list">
              <div className="about-us1">About Us</div>
              <div className="get-involved1">Get Involved</div>
              <div className="contact-us">Contact Us</div>
              <div className="media">Media</div>
            </div>
          </div>
          <div className="menu-container1">
            <div className="h3-title1">Resources</div>
            <div className="list1">
              <div className="animal-safty">Animal Safty</div>
              <div className="programs">Programs</div>
              <div className="events1">Events</div>
              <div className="alumni">Alumni</div>
            </div>
          </div>
          <div className="menu-container2">
            <div className="h3-title2">Ways to give</div>
            <div className="list2">
              <div className="find-a-family">Find a Family</div>
              <div className="donation">Donation</div>
              <div className="volunteer">Volunteer</div>
              <div className="give-a-gift">Give a Gift</div>
            </div>
          </div>
          <div className="information-detail-contain">
            <div className="footer-list">
              <div className="h3-title3">Social Media</div>
            </div>
            <div className="follow-us-on-container">
              <p className="follow-us-on">
                Follow us on social media to find out
              </p>
              <p className="the-latest-updates">
                the latest updates on our progress.
              </p>
            </div>
            <div className="social-media">
              <img
                className="twitter-icon"
                loading="lazy"
                alt=""
                src="/twitter.svg"
              />
              <img
                className="facebook-icon"
                loading="lazy"
                alt=""
                src="/facebook.svg"
              />
              <img
                className="insta-icon"
                loading="lazy"
                alt=""
                src="/insta.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="copyright-2024">
          Copyright © 2024 fourpaws. All Rights Reserved
        </div>
        <div className="list3">
          <div className="terms-of-service">Terms of Service</div>
          <div className="privacy-policy">Privacy Policy</div>
          <div className="security">Security</div>
          <div className="sitemap">Sitemap</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
