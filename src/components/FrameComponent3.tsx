import { FunctionComponent } from "react";
import Card from "./Card";
import "./FrameComponent3.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section className={`cause-wrapper ${className}`}>
      <div className="cause">
        <div className="cause-container">
          <div className="cause-paragraphs-parent">
            <div className="cause-paragraphs">
              <div className="cause-heading">
                <div className="cause-title">
                  <div className="a-help-to">A Help to those who need it</div>
                </div>
                <h1 className="each-donation-is">
                  Each donation is an essential
                </h1>
              </div>
            </div>
            <div className="we-advocate-for2">
              We advocate for vulnerable animals, providing safety while
              promoting responsible pet ownership. We uplift both animals and
              communities.
            </div>
          </div>
        </div>
        <div className="cause-cards">
          <Card
            cardImage="/rectangle-5@2x.png"
            prop=" :"
            prop1=" $"
            newChanceForAnimals="New chance for animals"
          />
          <Card
            cardImage="/rectangle-5-1@2x.png"
            prop=" :"
            prop1=" $"
            newChanceForAnimals="Help the eco system"
          />
          <Card
            cardImage="/rectangle-5-2@2x.png"
            prop=" : "
            prop1="$"
            newChanceForAnimals="New Sustainability"
          />
        </div>
        <div className="view-all-button">
          <button className="button4">
            <div className="menu12">View All Cause</div>
            <div className="arrow-container">
              <img className="arrow-icon5" alt="" src="/arrow1.svg" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
