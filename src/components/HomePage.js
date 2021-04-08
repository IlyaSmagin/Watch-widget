import React from "react";
import IconButton from "./partials/Button.js";
import Time from "./partials/Time.js";
import msgIcon from "../icons/message.svg";
import notiIcon from "../icons/notification.svg";
function HomePage() {
  return (
    <>
      <div className="pt-8 text-5xl font-medium text-gray-100">
        <Time />
      </div>
      <div className="text-base pt-2 text-gray-100">Monday</div>
      <div className="text-sm text-gray-500">10 January 2020</div>
      <div className="mt-3.5 flex justify-evenly p-2">
        <IconButton
          link={"/details"}
          icon={<img className="w-9 m-auto" src={msgIcon} alt="messages"></img>}
        />
        <IconButton
          link={"/details"}
          icon={
            <img className="w-9 m-auto" src={notiIcon} alt="notification"></img>
          }
        />
      </div>
    </>
  );
}

export default HomePage; // Don’t forget to use export default!
