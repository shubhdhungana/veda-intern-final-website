import { FunctionComponent } from "react";
import Property1Variant from "./Property1Variant";
import "./FrameComponent6.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <div className={`property-1frame-71-wrapper ${className}`}>
      <Property1Variant
        frame70="/frame-70@2x.png"
        fromTheMomentIStartedUsin="Volunteering with fourpaws is incredibly fulfilling. Seeing rescued animals thrive is rewarding beyond words. The dedication of the team inspires me daily, and this experience has enriched my life in countless, meaningful ways."
        liamK="Gal G."
        chevron="/chevron-5.svg"
        chevron1="/chevron-6.svg"
        propAlignSelf="unset"
        propFlex="1"
      />
    </div>
  );
};

export default FrameComponent6;
