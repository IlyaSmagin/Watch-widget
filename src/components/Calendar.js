import React from "react";
import { Link } from "react-router-dom";
import IconButton from "./partials/Button.js";
import Time from "./partials/Time.js";
import rArrIcon from "../icons/arrow-right.svg";
function Calendar({ workProp, personalProp }) {
  return (
    <>
      <div className="p-3 text-sm text-gray-100">
        <Time />
      </div>
      <div className="text-base font-semibold text-gray-100">Calendar</div>
      <div className="mt-3.5 flex justify-evenly p-2">
        <IconButton
          link={"/calendar"}
          color={"blue"}
          extended={workProp.description}
          icon={workProp.items}
        />
        <IconButton
          link={"/calendar"}
          color={"green"}
          extended={personalProp.description}
          icon={personalProp.items}
        />
      </div>
      <Link to={"/calendar"}>
        <div className="mt-1">
          <img
            className="w-5 mr-1 inline-block"
            src={rArrIcon}
            alt="next"
          ></img>
          <div className="text-sm inline-block text-gray-100">
            Meeting 08:15
          </div>
        </div>
      </Link>
    </>
  );
}

export default Calendar; // Don’t forget to use export default!
