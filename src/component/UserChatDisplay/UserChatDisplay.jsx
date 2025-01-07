"use client"
import React from 'react';
import style from "./UserChatDisplay.module.css";
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { FaVideo } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";

const UserChatDisplay = () => {
    const user = useParams();
    console.log("user", user);
    return (
        <div className={style.user}>
            <div className={style.userCon}>
                <div className={style.userHeader}>
                    <div className={style.headerImgCon}>
                        <Image className={style.userImg} src='/img1.jpg' alt='IMG' width={50} height={50} sizes='100%' />
                        <div className={style.headerText}>
                            <p>{user.user}</p>
                            <span>Active now</span>
                        </div>
                    </div>
                    <div className={style.headerIconsCon}>
                        <FiMinus className={style.icon} />
                        <LiaTimesSolid className={style.icon} />
                        <IoCall className={style.icon} />
                        <FaVideo className={style.icon} />
                    </div>
                </div>
                <div className={style.userCenter}>
                    <Image className={style.userImg} src='/img1.jpg' alt='IMG' width={80} height={80} sizes='100%' />
                    <div className={style.headerText}>
                        <p>{user.user}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserChatDisplay
