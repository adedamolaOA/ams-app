import React from "react";
const SummaryItem = ({name, totalVisit, backgroundColor}) => (
  <div className={`${backgroundColor} summary-item`}>
    <div className="summary-item-inner">
      <h2>{name}</h2>
      <span>{totalVisit}</span>
    </div>
  </div>
);

export default SummaryItem;
