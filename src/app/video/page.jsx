'use client'
import React from 'react';
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

const page = () => {
  return (
    <div className={style.video}>
      <MenuBar/>
      <div className={style.video_Con}>
        <div className={style.left_bar}>
        <VideoLeftBar/>
        </div>
        <div className={style.video_box}>
        <Video/>
        </div>
      </div>
    </div>
  )
}

export default page
