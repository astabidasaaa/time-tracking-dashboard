import React from "react";
import IconEllipsis from "../images/icon-ellipsis.svg";
import CardStyles from "../styles/CardStyles";
import CardIcon from "./CardIcon";

const CardUI = ({ datum, timeFrame, id }) => {
  let whatTimeFrame;
  let dayWeekOrMonth;

  switch (timeFrame) {
    case "daily":
      whatTimeFrame = datum.timeframes.daily;
      dayWeekOrMonth = "Day";
      break;
    case "weekly":
      whatTimeFrame = datum.timeframes.weekly;
      dayWeekOrMonth = "Week";
      break;
    case "monthly":
      whatTimeFrame = datum.timeframes.monthly;
      dayWeekOrMonth = "Month";
      break;
    default:
      return null;
  }

  return (
    <CardStyles id={id}>
      <CardIcon id={id} />
      <div className="card-inner">
        <div className="card-identifier">
          <h6>{datum.title}</h6>
          <IconEllipsis />
        </div>
        <div className="card-content">
          <h1>{whatTimeFrame.current}hrs</h1>
          <p className="subPara">
            Last {dayWeekOrMonth} - {whatTimeFrame.previous}hrs
          </p>
        </div>
      </div>
    </CardStyles>
  );
};

export default CardUI;
