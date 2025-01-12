"use client";
import React, { useEffect, useState } from "react";
import style from "./PeopleYMK.module.css";
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
import { peopleYMK } from "../data";
import axios from "axios";

const PeopleYMK = () => {
  const [allPeople, setAllPeople] = useState([]);
  const fetchPeople = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=20");
      if (response) {
        setAllPeople(response.data.results);
      }
    } catch (error) {
      console.log("ERROR:", error);
    }
  };
  useEffect(() => {
    fetchPeople();
  }, []);
  return (
    <div className={style.people_you_may_know}>
      <div className={style.header}>
        <h2>People yo may know</h2>
        <BsThreeDots className={style.icon} />
      </div>
      <div className={style.Con}>
        <Swiper
          modules={[Navigation]}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          scrollbar={false}
          loop={false}
          slidesPerView={3}
          spaceBetween={1}
        >
          {allPeople.map((people, id) => (
            <SwiperSlide key={id}>
              <div className={style.user}>
                <Image
                  className={style.user_img}
                  src={people.picture.large}
                  fill
                  alt="IMG"
                  sizes="100%"
                />
                <LiaTimesSolid className={style.icon} />
                <div className={style.user_details}>
                  <p
                    className={style.name}
                  >{`${people.name.first} ${people.name.first}`}</p>
                  <div className={style.add_btn}>
                    <HiUserAdd className={style.icon} />
                    <span>Add User</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className={style.see_all}>See all</p>
    </div>
  );
};

export default PeopleYMK;
