import React from 'react';
import style from './PeopleYMK.module.css';
import Image from 'next/image';
import { BsThreeDots } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { HiUserAdd } from "react-icons/hi";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const PeopleYMK = () => {
  return (
    <div className={style.people_you_may_know}>
        <div className={style.header}>
            <h2>People yo may know</h2>
            <BsThreeDots className={style.icon}/>
        </div>
      <div className={style.Con}>
      {
        Array(12).fill('').map((user, id)=>(
            <div className={style.user} key={id}>
          <Image className={style.user_img} src='/pic2.png' fill alt='IMG' sizes='100%' />
          <LiaTimesSolid className={style.icon}/>
          <div className={style.user_details}>
            <p className={style.name}>Daniel Brown</p>
            <div className={style.add_btn}>
                <HiUserAdd className={style.icon} />
                <span>Add User</span>
            </div>
          </div>
        </div>
        ))
      }
      </div>
      <p className={style.see_all}>See all</p>
    </div>
  )
}

export default PeopleYMK
