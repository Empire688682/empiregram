'use client';
import React, { useState } from 'react';
import style from './MenuBar.module.css';
import Image from 'next/image';
import { IoMdHome } from "react-icons/io";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdGroups2 } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";
import Link from 'next/link';
import RightBar from '../RightBar/RightBar';

const MenuBar = () => {
    const [showProfile, setShowProfile] = useState(false)
    return (
        <div className={style.menu_bar}>
            <Image className={style.logo} src='/empiregram-logo.webp' width={50} height={50} sizes='100%' alt='Logo' />
            <div className={style.menu_icons}>
                <Link href='/chat' style={{ textDecoration: 'none' }}>
                    <IoMdHome className={style.icon} />
                </Link>
                <Link href='/video' style={{ textDecoration: 'none' }}>
                    <MdOutlineVideoLibrary className={style.icon} />
                </Link>
                <Link href='/group' style={{ textDecoration: 'none' }}>
                    <MdGroups2 className={style.icon} />
                </Link>
            </div>
            <div className={style.user_menus}>
                <Image className={style.user_img} onClick={()=> setShowProfile(!showProfile)} src='/avatar_icon.png' width={40} height={40} sizes='100%' alt='Logo' />
                <IoNotifications className={style.icon} />
                <FaFacebookMessenger className={style.icon} />
            </div>
            {
                showProfile && (
                    <div className={style.user_profile}>
                <RightBar/>
            </div>
                )
            }
        </div>
    )
}

export default MenuBar
