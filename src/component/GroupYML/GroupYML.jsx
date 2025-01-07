import React from "react";
import style from "./GroupYML.module.css";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { HiUserAdd } from "react-icons/hi";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { groupYML } from "../data";

const GroupYML = () => {
  return (
    <div className={style.group_you_may_like}>
      <div className={style.header}>
        <h2>Group you may like</h2>
        <BsThreeDots className={style.icon} />
      </div>
      <div className={style.Con}>
        <Swiper
          modules={[Navigation]}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          scrollbar={false}
          loop={false}
          slidesPerView={2}
          spaceBetween={0}
        >
          {groupYML.map((group, id) => (
            <SwiperSlide key={id}>
              <div className={style.group}>
                <Image
                  className={style.group_img}
                  src={group.img}
                  fill
                  alt="IMG"
                  sizes="100%"
                />
                <LiaTimesSolid className={style.icon} />
                <div className={style.group_details}>
                  <p className={style.name}>{group.name}</p>
                  <div className={style.add_btn}>
                    <div className={style.group_btns}>
                      <button>Join Group</button>
                      <button>Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GroupYML;
