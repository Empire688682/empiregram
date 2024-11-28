'use client';
import React from 'react';
import style from './MenuBar.module.css';
import Image from 'next/image';
import { IoMdHome } from "react-icons/io";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";
import Link from 'next/link';

const MenuBar = () => {
  return (
    <div className={style.menu_bar}>
      <div className={style.video_nav}>
        <Image className={style.logo} src='/empiregram-logo.webp' width={50} height={50} sizes='100%' alt='Logo' />
        <div className={style.menu_icons}>
          <Link href='/chat' style={{textDecoration:'none'}}>
          <IoMdHome className={style.icon} />
          </Link>
          <Link href='/video' style={{textDecoration:'none'}}>
          <MdOutlineVideoLibrary className={style.icon} />
          </Link>
          <Link href='/chat' style={{textDecoration:'none'}}>
          <FaUserGroup className={style.icon} />
          </Link>
        </div>
        <div className={style.user_menus}>
        <Image className={style.user_img} src='/avatar_icon.png' width={50} height={50} sizes='100%' alt='Logo' />
        <IoNotifications className={style.icon}/>
        <FaFacebookMessenger className={style.icon}/>
        </div>
      </div>
    </div>
  )
}

export default MenuBar
