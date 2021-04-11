import React from "react";
import { useParams } from "react-router-dom";
import SubHeader from "./partials/subHeader.js";
import { ReactComponent as LocationIcon } from "../icons/location.svg";
import { ReactComponent as Users } from "../icons/users.svg";
function Details({
  event = {
    name: "Interview with Ilya",
    time: "14:15 - 15:00",
    location: "Tech room",
    participants: ["You", "Ilya"],
  },
}) {
  const { name } = useParams();
  if (name) {
    event.name = name;
  }
  return (
    <>
      <SubHeader pageName={"Details"} />
      <div className="p-4 text-left text-gray-100">
        <div className="text-2xl font-semibold">{event.name}</div>
        <div className="mt-1 text-sm text-gray-400">{event.time}</div>
        <div className="my-4">
          <LocationIcon className="h-4 w-4 mr-2 inline-block" strokeWidth={2} />
          <div className="inline-block text-sm">{event.location}</div>
        </div>
        <div className="my-4">
          <Users className="w-8 mr-2 inline-block" />
          <div className="inline-block text-sm">
            {event.participants.length} people
          </div>
        </div>
      </div>
    </>
  );
}

export default Details; // Don’t forget to use export default!
