"use client"
import React from 'react';
import style from "./user.module.css";
import { useParams } from 'next/navigation';
import Image from 'next/image';

const Page = () => {
    const user = useParams();
    console.log("user",user);
  return (
    <div className={style.user}>
      <div className={style.user_Con}>
        <div className={style.user_header}>
          <div className={style.user_img_con}>
            <Image className={style.user_img} src='/img1.jpg' alt='IMG' fill sizes='100%' />
          </div>
          <div className={style.user_text_all}>
            <p>{user}</p>
            <span>Active now</span>
          </div>
        </div>
        <div className={style.user_footer}>
          <div className={style.user_footer_item}>
            <i className="fa-solid fa-video"></i>
            <p>Video Call</p>
          </div>
          <div className={style.user_footer_item}>
            <i className="fa-solid fa-phone"></i>
            <p>Audio Call</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
