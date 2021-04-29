import React from "react";
import SubHeader from "./partials/subHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Virtual } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import List from "./partials/List";
function Todo({ onTodoChange, todos }) {
  SwiperCore.use([Navigation, Pagination, Virtual]);
  const categories = todos.map((el) => el.name);
  function checkItem(id, ChekedId) {
    let newTodos = todos;
    newTodos[id].list[ChekedId].completed = !newTodos[id].list[ChekedId]
      .completed;
    onTodoChange([...newTodos]);
  }
  return (
    <>
      <SubHeader pageName={"Goals"} />
      <div className="h-56">
        <Swiper
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          /* onSwiper={(swiper) => console.log("wowsers")} */
          virtual
        >
          {todos.map((slideContent, index) => {
            return (
              <SwiperSlide key={index} virtualIndex={index}>
                <List
                  todoList={slideContent.list}
                  category={categories[index]}
                  checkItem={checkItem}
                  listId={index}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default Todo; // Don’t forget to use export default!
