import React from "react";
import { ReactComponent as SquareIcon } from "../../icons/check-square.svg";
import { ReactComponent as ChekedIcon } from "../../icons/checked-square.svg";

const List = ({ todoList, category, checkItem, listId }) => {
  return (
    <>
      <div className="px-4 pt-1.5 text-left font-semibold text-gray-100">
        {category}
      </div>
      <div className="h-48 overflow-auto text-left p-2 text-xs text-gray-100">
        {todoList.map((item, index) => {
          let checkMark = <SquareIcon className="flex-none w-6 my-auto" />;
          let checkStyle = "capitalize";
          if (item.completed) {
            checkMark = <ChekedIcon className="flex-none w-6 my-auto" />;
            checkStyle = "line-through capitalize text-gray-500";
          }
          return (
            <div
              onClick={() => checkItem(listId, index)}
              className="flex justify-start items-center bg-default rounded-lg p-2 mb-2"
              key={index}
            >
              {checkMark}
              <p className={`ml-2 ${checkStyle}`}>{item.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
