import React from "react";

export default function Topsocial({ className }) {
  return (
    <div className={className}>
      <div className="weather mr-2">
        <img src="/assets/images/haze-fill1.svg" alt="weather" />
        <span>15 * c</span>
        <span>New York</span>
      </div>
      <div className="weather">
        <img src="/assets/images/clock.svg" alt="clock" />
        <span>Wednesday, 10 January 2021</span>
      </div>
    </div>
  );
}
