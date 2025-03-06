"use client"
import React, { useState } from 'react';
import style from "./ReelComp.module.css"
import ReelVideo from '../ReelVideo/ReelVideo';
import { AiOutlineLike } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { TiArrowForward } from "react-icons/ti";
import Image from "next/image";
import { BsCameraReelsFill } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { CiPlay1 } from "react-icons/ci";
import { CiVolumeMute } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { CiVolumeHigh } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import { revalidateTag } from 'next/cache';
import LoadingSpinner from '../Navbar/LoadingSpinner/LoadingSpinner';

const ReelComp = ({reelData}) => {
  const [mute, setMute] = useState(true);
  const [play, setPlay] = useState(true);
  return reelData ? (
    <div className={style.container}>
      <div className={style.video}>
        <div className={style.topHeader}>
          <div className={style.calcel}>
            <LiaTimesSolid className={style.calcelIcon} />
            <h1>Reels</h1>
          </div>
          <div className={style.createReelBtn}>
            <BsCameraReelsFill className={style.createReelBtnIcon} />
            <p>Create reel</p>
          </div>
        </div>
        <div className={style.controlBtns}>
          {
            play ?<CiPause1 className={style.controlIcon} onClick={()=>setPlay(!play)}/>
            :
            <CiPlay1 className={style.controlIcon} onClick={()=>setPlay(!play)}/>
          }
          {
            mute ? <CiVolumeMute className={style.controlIcon} onClick={()=>setMute(!mute)}/>
            :
            <CiVolumeHigh className={style.controlIcon} onClick={()=>setMute(!mute)}/>
          }
          <BsThreeDots className={style.controlIcon} />
        </div>
        <div className={style.nextBtns}>
          <GrFormPrevious className={style.icon} />
          <MdNavigateNext className={style.icon} />
        </div>
        <ReelVideo reelVideo={reelData.video} mute={mute} play={play} setPlay={setPlay}/>
        <div className={style.userData}>
          <div className={style.header}>
            <Image src="/avatar_icon.png" alt="" width={30} height={30} sizes='100%' />
            <p>{reelData.authorName}</p>
          </div>
          <div className={style.bottom}>
            <p>{reelData.description} </p>
          </div>
        </div>
        <div className={style.reactions}>
          <div><AiOutlineLike className={style.icon} /> <p>{reelData.like}</p></div>
          <div><BiMessage className={style.icon} /> <p>{reelData.comment}</p></div>
          <div><TiArrowForward className={style.icon} /> <p>{reelData.share}</p></div>
        </div>
      </div>
    </div>
  )
  :
  <LoadingSpinner/>
}

export default ReelComp
