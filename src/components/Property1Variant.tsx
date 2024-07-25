import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Property1Variant.css";

export type Property1VariantType = {
  className?: string;
  frame70?: string;
  fromTheMomentIStartedUsin?: string;
  liamK?: string;
  chevron?: string;
  chevron1?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
};

const Property1Variant: FunctionComponent<Property1VariantType> = ({
  className = "",
  frame70,
  fromTheMomentIStartedUsin,
  liamK,
  chevron,
  chevron1,
  propAlignSelf,
  propFlex,
}) => {
  const property1Variant5Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  return (
    <div
      className={`property-1variant5 ${className}`}
      style={property1Variant5Style}
    >
      <div className="property-1variant5-inner">
        <img className="frame-child" loading="lazy" alt="" src={frame70} />
      </div>
      <div className="property-1variant5-child">
        <div className="quote-parent">
          <img className="quote-icon" loading="lazy" alt="" src="/quote.svg" />
          <div className="from-the-moment">{fromTheMomentIStartedUsin}</div>
          <div className="liam-k">{liamK}</div>
          <div className="frame-parent5">
            <div className="chevron-wrapper">
              <img
                className="chevron-icon6"
                loading="lazy"
                alt=""
                src={chevron}
              />
            </div>
            <div className="chevron-container">
              <img
                className="chevron-icon7"
                loading="lazy"
                alt=""
                src={chevron1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1Variant;
