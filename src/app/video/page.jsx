'use client'
import React, { useState } from 'react';
import style from './video.module.css';
import VideoLeftBar from '@/component/VideoLeftBar/VideoLeftBar';
import Video from '@/component/Video/Video';
import Image from 'next/image';
import { IoMdHome } from "react-icons/io";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";
import Link from 'next/link';
import MenuBar from '@/component/MenuBar/MenuBar';
import SavedVideo from '@/component/SavedVideo/SavedVideo';

const page = () => {
  const [videoTag, setVideoTag] = useState("Home");
  return (
    <div className={style.video}>
      <MenuBar/>
      <div className={style.video_Con}>
        <div className={style.left_bar}>
          <VideoLeftBar videoTag={videoTag} setVideoTag={setVideoTag}/>
        </div>
        {
          videoTag === "home" && (
            <div className={style.video_box}>
        <Video videoTag={videoTag} setVideoTag={setVideoTag}/>
        </div>
          )
        }
        {
          videoTag === "savedVideo" && (
            <div className={style.video_box}>
        <SavedVideo videoTag={videoTag} setVideoTag={setVideoTag}/>
        </div>
          )
        }
      </div>
    </div>
  )
}

export default page
