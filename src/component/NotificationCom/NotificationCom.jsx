"use client";
import React, { useState } from 'react';
import style from "./NotificationCom.module.css";
import { BsThreeDots } from "react-icons/bs";


const NotificationCom = () => {
    const [btn, setBtn] =useState("unread")
  return (
    <div className={style.notificationComCon}>
      <div className={style.notificationCom}>
        <div className={style.header}>
            <h2>Notifications</h2>
            <BsThreeDots className={style.icon}/>
        </div>
        <div className={style.btns}>
           <li className={btn === "all"? `${style.active}`:""} onClick={()=>setBtn("all")}>All</li>
           <li className={btn === "unread"? `${style.active}`:""} onClick={()=>setBtn("unread")}>Unread</li>
        </div>
      </div>
    </div>
  )
}

export default NotificationCom
