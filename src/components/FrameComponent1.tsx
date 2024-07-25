import { FunctionComponent } from "react";
import "./FrameComponent1.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={`events-wrapper ${className}`}>
      <div className="events">
        <div className="heading1">
          <div className="event-title-container">
            <div className="calender">Calender</div>
            <h1 className="event-schedule">Event Schedule</h1>
          </div>
          <div className="we-advocate-for3">
            We advocate for vulnerable animals, providing safety while promoting
            responsible pet ownership. We uplift both animals and communities.
          </div>
        </div>
        <div className="event-list-container">
          <div className="frame-parent1">
            <div className="event-icon-placeholder-parent">
              <div className="event-icon-placeholder">08</div>
              <div className="june">June</div>
            </div>
            <div className="disaster-relief-for-animals-parent">
              <h3 className="disaster-relief-for">
                Disaster Relief for Animals
              </h3>
              <div className="am-1000-pm-parent">
                <div className="am-1000">07:00 AM - 10:00 PM</div>
                <div className="kathmandu">Kathmandu</div>
              </div>
            </div>
          </div>
          <div className="frame-parent2">
            <div className="parent">
              <div className="div7">12</div>
              <div className="june1">June</div>
            </div>
            <div className="rapid-response-for-animals-parent">
              <h3 className="rapid-response-for">Rapid Response for Animals</h3>
              <div className="am-1000-pm-group">
                <div className="am-10001">07:00 AM - 10:00 PM</div>
                <div className="kathmandu1">Kathmandu</div>
              </div>
            </div>
          </div>
          <div className="frame-parent3">
            <div className="group">
              <div className="div8">17</div>
              <div className="june2">June</div>
            </div>
            <div className="disaster-relief-for-animals-group">
              <h3 className="disaster-relief-for1">
                Disaster Relief for Animals
              </h3>
              <div className="am-1000-pm-container">
                <div className="am-10002">07:00 AM - 10:00 PM</div>
                <div className="kathmandu2">Kathmandu</div>
              </div>
            </div>
          </div>
        </div>
        <button className="button6">
          <div className="menu14">View All</div>
          <img className="arrow-icon7" alt="" src="/arrow1.svg" />
        </button>
      </div>
    </section>
  );
};

export default FrameComponent1;
