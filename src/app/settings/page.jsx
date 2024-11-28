';use client'
import React from 'react';
import style from './settimgs.module.css';
import Settings from '@/component/Settings/Settings';
import Image from 'next/image';
import { IoMdHome } from "react-icons/io";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";
import Link from 'next/link';

const page = () => {
  return (
    <div className={style.settings}>
      <Settings/>
    </div>
  )
}

export default page
