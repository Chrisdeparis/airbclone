import React from "react";
import DateArrivee from "./DateArrivee";
import DateDepart from "./DateDepart";

function Periode() {
  return (
    <div className="col-2">
      <DateArrivee />
      <DateDepart />
    </div>
  );
}

export default Periode;
