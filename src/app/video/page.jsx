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

const page = () => {
  return (
    <div className={style.video}>
      <div className={style.video_nav}>
        <Image className={style.logo} src='/empiregram-logo.webp' width={50} height={50} sizes='100%' alt='Logo' />
        <div className={style.menu_icons}>
          <IoMdHome className={style.icon} />
          <MdOutlineVideoLibrary onClick={()=>router.push("/video")} className={style.icon} />
          <FaUserGroup className={style.icon} />
        </div>
        <div className={style.user_menus}>
        <Image className={style.user_img} src='/avatar_icon.png' width={50} height={50} sizes='100%' alt='Logo' />
        <IoNotifications className={style.icon}/>
        <FaFacebookMessenger className={style.icon}/>
        </div>
      </div>
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
