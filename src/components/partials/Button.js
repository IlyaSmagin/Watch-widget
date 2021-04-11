import React from "react";
import { Link } from "react-router-dom";

function IconButton({ link = "/", icon, color = "default", extended = false }) {
  return (
    <Link
      to={link}
      className={`w-20 bg-${color} text-2xl font-bold text-white rounded-lg`}
    >
      <div className="py-3.5">{icon}</div>
      {extended && (
        <div className="extended">
          <hr /> <div className="p-0.5">{extended}</div>
        </div>
      )}
    </Link>
  );
}

export default IconButton; // Don’t forget to use export default!
