import React from "react";
import { Link } from "react-router-dom";

function PageLink({ link = "/", children }) {
  return (
    <Link to={link}>
      {children}
    </Link>
  );
}

export default PageLink; // Don’t forget to use export default!
