'use client;'
import React from 'react';
import style from "./SettingsLeftBar.module.css";
import { IoSettingsOutline } from "react-icons/io5";
import { MdVideoLibrary } from "react-icons/md";
import { FaPhotoVideo  } from "react-icons/fa";
const SettingsLeftBar = () => {
  return (
    <div className={style.settings_left_bar}>
     <div className={style.settings_left_bar_Con}>
        <div className={style.header}>
          <h3>Settings & privacy</h3>
        </div>
        <div className={style.settings_cart_Con}>
        <div className={style.settings_cart}>
          <MdVideoLibrary className={style.icons} />
          <p>Notification settings</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsLeftBar
