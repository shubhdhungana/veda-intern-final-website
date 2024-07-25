import { FunctionComponent } from "react";
import FrameComponent6 from "../components/FrameComponent6";
import Property1Variant from "../components/Property1Variant";
import "./Scholorshipportal.css";

const Scholorshipportal: FunctionComponent = () => {
  return (
    <div className="scholorshipportal">
      <section className="component-1">
        <FrameComponent6 />
        <Property1Variant
          frame70="/frame-70-1@2x.png"
          fromTheMomentIStartedUsin="I've been using this service for the past six months, and it has completely transformed the way I manage my business. The team is incredibly responsive, and the platform is user-friendly and efficient. Highly recommended!"
          liamK="John D."
          chevron="/chevron-21.svg"
          chevron1="/chevron-6.svg"
          propAlignSelf="stretch"
          propFlex="unset"
        />
        <Property1Variant
          frame70="/frame-70-2@2x.png"
          fromTheMomentIStartedUsin="As someone who values quality and reliability, I can confidently say this product exceeds my expectations. The features are top-notch, and the customer support is always ready to help. Five stars from me!"
          liamK="Emily R."
          chevron="/chevron-21.svg"
          chevron1="/chevron-6.svg"
          propAlignSelf="stretch"
          propFlex="unset"
        />
        <Property1Variant
          frame70="/frame-70-3@2x.png"
          fromTheMomentIStartedUsin="I was skeptical at first, but after trying out this service, I'm a true believer. It has saved me countless hours and significantly improved my productivity. Worth every penny"
          liamK="Michael T."
          chevron="/chevron-21.svg"
          chevron1="/chevron-6.svg"
          propAlignSelf="stretch"
          propFlex="unset"
        />
        <Property1Variant
          frame70="/frame-70-4@2x.png"
          fromTheMomentIStartedUsin="From the moment I started using this service, I knew I had made the right choice. It's intuitive, efficient, and incredibly reliable. I can't imagine going back to how I managed things before. Highly satisfied!"
          liamK="Liam K."
          chevron="/chevron-21.svg"
          chevron1="/chevron-9.svg"
        />
      </section>
    </div>
  );
};

export default Scholorshipportal;
