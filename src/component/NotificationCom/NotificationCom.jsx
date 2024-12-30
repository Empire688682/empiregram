"use client";
import React, { useState } from 'react';
import style from "./NotificationCom.module.css";
import { BsThreeDots } from "react-icons/bs";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";


const NotificationCom = () => {
    const [btn, setBtn] = useState("unread")
    return (
        <div className={style.notificationComCon}>
            <div className={style.notificationCom}>
                <div className={style.header}>
                    <h2>Notifications</h2>
                    <BsThreeDots className={style.icon} />
                </div>
                <div className={style.btns}>
                    <li className={btn === "all" ? `${style.active}` : ""} onClick={() => setBtn("all")}>All</li>
                    <li className={btn === "unread" ? `${style.active}` : ""} onClick={() => setBtn("unread")}>Unread</li>
                </div>
                <div className={style.notifications}>
                    <h3>New</h3>
                    {
                        Array.from({ length: 10 }).map((_, id) => (
                            <div className={style.notificationsCart} key={id}>
                                <div className={style.imgCon}>
                                    <Image alt='' src="/img1.jpg" fill />
                                </div>
                                <div className={style.details}>
                                    <p>You have a memory to look back on today</p>
                                    <span>4 hours ago</span>
                                </div>
                                <GoDotFill className={style.icon} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default NotificationCom