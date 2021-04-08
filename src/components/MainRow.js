import React from "react";
import HomePage from "./HomePage.js";
import Calendar from "./Calendar.js";
import Progress from "./Progress.js";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
function MainRow({ WorkList, PersonalList }) {
  SwiperCore.use([Navigation, Pagination]);
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() =>
        console.log("slide change")
      } /* 
      onSwiper={(swiper) => console.log(swiper.activeIndex)} */
    >
      <SwiperSlide>
        <HomePage />
      </SwiperSlide>
      <SwiperSlide>
        <Calendar workProp={WorkList} personalProp={PersonalList} />
      </SwiperSlide>
      <SwiperSlide>
        <Progress leftTasks={WorkList.items} />
      </SwiperSlide>
    </Swiper>
  );
}

export default MainRow; // Don’t forget to use export default!
