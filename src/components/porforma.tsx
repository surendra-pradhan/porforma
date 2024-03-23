import React, { useEffect, useState } from "react";
import moment from "moment";

interface Props {
  startDate: string;
  endDate: string;
}

const MonthGrid: React.FC<Props> = ({ startDate, endDate }) => {
  const months = moment.months();
  const [borderWidth, setBorderWidth] = useState<number>(0);

  useEffect(() => {
    const childDiv = document.querySelector('.month-grid');
    const computedStyle = window.getComputedStyle(childDiv!);
    const borderLeftWidth = parseInt(computedStyle.borderLeftWidth || '0', 10);
    setBorderWidth(borderLeftWidth);
  }, []);

  const startMonth = moment(startDate).month();
  const endMonth = moment(endDate).month();
  const startDay = moment(startDate).date();
  const endDay = moment(endDate).date();

  const screenWidth = window.innerWidth;
  const monthDivWidth = 100 / 12; // Each month grid width as a percentage of the screen width

  // Calculate left position for the date range line
  const left = startMonth * monthDivWidth + ((startDay - 1) / moment(startDate).daysInMonth()) * monthDivWidth - borderWidth / screenWidth * 100;

  // Calculate width for the date range line
  const width = ((endMonth - startMonth) * monthDivWidth) + (endDay / moment(endDate).daysInMonth()) * monthDivWidth - ((startDay - 1) / moment(startDate).daysInMonth()) * monthDivWidth + borderWidth / screenWidth * 100;

  return (
    <div className="month-grid-container" style={{ width: "100%" }}>
      {months.map((month, index) => (
        <div key={month} className="month-grid">
          {month}
        </div>
      ))}
      <div
        className="date-range-line"
        style={{
          left: `${left}%`,
          width: `${width}%`
        }}
      ></div>
    </div>
  );
};

export default MonthGrid;
