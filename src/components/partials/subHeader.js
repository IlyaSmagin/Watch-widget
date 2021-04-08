import { ReactComponent as BackIcon } from "../../icons/back.svg";
import { Link } from "react-router-dom";
import Time from "./Time.js";
function SubHeader({ pageName = "Back" }) {
  return (
    <div className="flex justify-between px-4 pt-3">
      <Link to={"/"}>
        <div className="text-sm align-bottom text-gray-300">
          <BackIcon
            className="h-5 inline-block pb-1.5 mr-2 "
            strokeWidth={1.5}
          />
          {pageName}
        </div>
      </Link>
      <div className="text-sm text-gray-100">
        <Time />
      </div>
    </div>
  );
}
export default SubHeader;
