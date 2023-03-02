import React from "react";
import { Link } from "react-router-dom";
import Time from "./partials/Time.js";
import ProgressBar from "./partials/ProgressBar.js";
function Progress({ leftTasks }) {
  const CompletedPerc = 100 - leftTasks * 5;
  return (
    <>
      <div className="p-3 text-sm text-gray-100">
        <Time />
      </div>
      <div>
        <div className="text-base font-semibold text-gray-100">Goals</div>
        <Link to={"/todo"}>
        <ProgressBar
          progress={CompletedPerc}
          size={100}
          strokeWidth={9}
          circleOneStroke="#2833A4"
          circleTwoStroke="#3346FF"
        />
          <div className="pt-0.5 text-sm text-gray-100">
            {leftTasks} goals to go
          </div>
        </Link>
      </div>
    </>
  );
}
export default Progress; // Don’t forget to use export default!
