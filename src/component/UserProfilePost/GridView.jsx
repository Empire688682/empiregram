"use client";
import React from 'react';
import style from "./UserProfilePost.module.css";
import Image from "next/image";
import { FaUserFriends } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

const GridView = () => {
  return (
    <div className={style.gridViewCon}>
      <div className={style.gridView}>
        <div className={style.imgCon}>
          <Image
          src="/pic1.png"
          alt="Img"
          fill
          sizes='100%'
          style={{objectFit:"cover"}}
          />
        </div>
        <div className={style.gridViewContent}>
        <Image
          className={style.gridViewContentImg}
          src="/pic1.png"
          alt="Img"
          width={40}
          height={40}
          sizes='100%'
          />
          <div className={style.gridViewContentText}>
            <p>Juwon Asehinde</p>
            <span>June 27, 2023</span>
            <MdGroups />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GridView
