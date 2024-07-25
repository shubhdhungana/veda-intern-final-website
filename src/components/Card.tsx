import { FunctionComponent } from "react";
import "./Card.css";

export type CardType = {
  className?: string;
  cardImage?: string;
  prop?: string;
  prop1?: string;
  newChanceForAnimals?: string;
};

const Card: FunctionComponent<CardType> = ({
  className = "",
  cardImage,
  prop,
  prop1,
  newChanceForAnimals,
}) => {
  return (
    <div className={`card ${className}`}>
      <img className="card-image-icon" loading="lazy" alt="" src={cardImage} />
      <div className="card-content">
        <div className="card-header-parent">
          <div className="card-header">
            <div className="goal-1340-container">
              <span className="goal">
                <span className="goal1">
                  <span>Goal</span>
                  <span className="span">{` : `}</span>
                </span>
                <span>$</span>
              </span>
              <span>1340</span>
            </div>
            <div className="raised-800-container">
              <span className="raised">
                <span className="raised1">
                  <span>Raised</span>
                  <span className="span1">{prop}</span>
                </span>
                <span>{prop1}</span>
              </span>
              <span>800</span>
            </div>
          </div>
          <div className="card-footer">
            <div className="card-footer-child" />
            <div className="card-link">
              <div className="div">60%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h3 className="new-chance-for">{newChanceForAnimals}</h3>
        <div className="lorem-ipsum-dolor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="link">
          <div className="view-details">View Details</div>
          <div className="arrow-wrapper">
            <img className="arrow-icon4" alt="" src="/arrow-2.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
