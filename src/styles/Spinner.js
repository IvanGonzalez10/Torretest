import React from "react";
import "./style.css";

export const Spinner = () => {
  return (
    <div className="lds-ripple">
      <div>Loading...</div>
      <div>Loading...</div>
    </div>
  );
};
