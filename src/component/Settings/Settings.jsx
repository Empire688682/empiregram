'use client'
import React from 'react';
import style from './Settings.module.css';
import Link from 'next/link';
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { MdNotifications   } from "react-icons/md";
import { IoMdHome } from "react-icons/io";

const Settings = () => {
  return (
    <div className={style.settings}>
      <div  className={style.settings_Con}>
      <div className={style.header}>
        <Link href='/chat' style={{textDecoration:'none'}}>
          <IoMdHome className={style.icon} />
          </Link>
          <Link href='/video' style={{textDecoration:'none'}}>
          <MdOutlineVideoLibrary className={style.icon} />
          </Link>
          <Link href='/chat' style={{textDecoration:'none'}}>
          <FaUserGroup className={style.icon} />
          </Link>
          <MdNotifications className={style.icon} />
        </div>
      </div>
    </div>
  )
}

export default Settings
