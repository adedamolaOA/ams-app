import React from "react";
import SummaryItem from "./summary-item.component";
const summaryData = [
    {
        name: "Today",
        totalVisit: 10,
        backgroundColor: "today"
    },
    {
        name: "This Week",
        totalVisit: 23,
        backgroundColor: "this-week"
    },
    {
        name: "This Month",
        totalVisit: 153,
        backgroundColor: "this-month"
    }
]
const Summary = () => (
  <div className="summary">
  {
      summaryData.map( summary => <SummaryItem {...summary}/> )
  }
  </div>
);

export default Summary;
