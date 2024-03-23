import React, { useEffect, useState } from "react";
import moment from "moment";
interface Props {
  startDate: string;
  endDate: string;
  sticky: boolean;
  todayLine: boolean;
}
const MonthGrid: React.FC<Props> = ({
  startDate,
  endDate,
  sticky,
  todayLine,
}) => {
  const months = moment.months();
  const [borderWidth, setBorderWidth] = useState<number>(0);
  useEffect(() => {
    const childDiv = document.querySelector(".month-grid");
    const computedStyle = window.getComputedStyle(childDiv!);
    const borderLeftWidth = parseInt(computedStyle.borderLeftWidth || "0", 10);
    setBorderWidth(borderLeftWidth);
  }, []);
  const startMonth = moment(startDate).month();
  const endMonth = moment(endDate).month();
  const startDay = moment(startDate).date();
  const endDay = moment(endDate).date();
  const screenWidth = window.innerWidth;
  console.log(screenWidth);
  console.log();
  const monthDivWidth = 100 / 12; // Each month grid width as a percentage of the screen width
  // Calculate left position for the date range line
  const left =
    startMonth * monthDivWidth +
    ((startDay - 1) / moment(startDate).daysInMonth()) * monthDivWidth -
    (borderWidth / screenWidth) * 100; // Calculate width for the date range line
  const width =
    (endMonth - startMonth) * monthDivWidth +
    (endDay / moment(endDate).daysInMonth()) * monthDivWidth -
    ((startDay - 1) / moment(startDate).daysInMonth()) * monthDivWidth +
    (borderWidth / screenWidth) * 100;
  const today = "2023-05-15";
  const startMonthleftToday = moment(today).month();
  const startDayleftToday = moment(today).date();
  const leftToday =
    startMonthleftToday * monthDivWidth +
    ((startDayleftToday - 0.7) / moment(startDayleftToday).daysInMonth()) *
      monthDivWidth -
    (borderWidth / screenWidth) * 100;
  return (
    <div>
      {" "}
      <div
        className="month-grid-container"
        style={
          sticky
            ? { width: "100%", position: "sticky", top: "0", border: "none" }
            : { width: "100%" }
        }
      >
        {" "}
        {/* <div style={todayLine ?{ left: `${leftToday}%`, width: `2px`, textOverflow:'ellipsis', position:'absolute', color:'red', backgroundColor:'red', height:'100px', zIndex:1 }: { width: `1px` }} ></div> */}
        {months.map((month, index) => (
          <div
            key={month}
            className="month-grid"
            style={sticky ? { border: "none" } : { top: "0" }}
          >
            {" "}
            {sticky ? (
              <span
                style={
                  month == moment().format("MMMM")
                    ? { fontWeight: "bold" }
                    : { fontWeight: "normal" }
                }
              >
                {month}
                {}
              </span>
            ) : (
              ""
            )}{" "}
          </div>
        ))}
        <div
          className="date-range-line"
          style={{
            left: `${left}%`,
            width: `${width}%`,
            textOverflow: "ellipsis",
          }}
        >
          {sticky ? "" : "s"}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default MonthGrid;
