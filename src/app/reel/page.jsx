import React from 'react';
import style from './Reel.module.css'
import ReelComp from '@/component/ReelComp/ReelComp';
import { AiOutlineLike } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { TiArrowForward } from "react-icons/ti";
import Image from "next/image";
import { BsCameraReelsFill } from "react-icons/bs";

const Page = () => {
  return (
    <div className={style.container}>
      <div className={style.video}>
        <ReelComp />
        <div className={style.userData}>
          <div className={style.header}>
            <Image src="/avatar_icon.png" alt="" width={30} height={30} sizes='100%'/>
            <p>Juwon Asehinde</p>
          </div>
          <div className={style.bottom}>
            <p>This is a lady walking lol </p>
          </div>
        </div>
        <div className={style.createReelBtn}>
          <BsCameraReelsFill className={style.icon}/>
          <p>Create reel</p>
        </div>
        <div className={style.reactions}>
        <div><AiOutlineLike className={style.icon} /> <p>200</p></div>
        <div><BiMessage className={style.icon} /> <p>20</p></div>
        <div><TiArrowForward className={style.icon} /> <p>10</p></div>
      </div>
      </div>
    </div>
  )
}

export default Page
