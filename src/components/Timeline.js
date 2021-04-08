import React from "react";
import SubHeader from "./partials/subHeader";
function Timeline({ list = [] }) {
  return (
    <>
      <SubHeader pageName={"Calendar"} />
      <div className="h-56 overflow-auto text-left p-4 text-base text-gray-100">
        {list.map((item, index) => {
          let checkStyle = "capitalize";
          const time = (index % 12) + 8 + ":00 - " + ((index % 12) + 9) + ":00";
          if (item.completed) {
            checkStyle += " bg-green";
          }
          return (
            <>
              <div className="border-l-2 border-dashed border-gray-100 border-opacity-50 p-2 text-gray-300 text-opacity-50 text-xs">
                {time.split("-")[1]}
              </div>
              <div
                className={
                  checkStyle +
                  " p-2 bg-blue rounded-l-sm rounded-lg border-l-2 border-white border-opacity-50"
                }
                key={index}
              >
                <p className={"font-semibold"}>{item.title}</p>
                <p className="text-white text-opacity-70 text-xs">{time}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Timeline; // Don’t forget to use export default!
