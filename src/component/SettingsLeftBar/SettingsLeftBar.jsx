'use client;'
import React from 'react';
import style from "./SettingsLeftBar.module.css";
import { IoNotifications } from "react-icons/io5";
import { FaTags } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdPostAdd } from "react-icons/md";
import { GiThreeFriends } from "react-icons/gi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { BsCameraReels } from "react-icons/bs";

const SettingsLeftBar = () => {
  return (
    <div className={style.settings_left_bar}>
     <div className={style.settings_left_bar_Con}>
        <div className={style.header}>
          <h3>Settings & privacy</h3>
        </div>
        <div className={style.settings_cart_Con}>
        <div className={style.settings_cart_Conheader}>
        <h4>Preferences</h4>
        <p>Customise your experience</p>
      </div>
        <div className={style.settings_cart}>
          <IoNotifications className={style.icons} />
          <p>Notification settings</p>
        </div>
        <div className={style.settings_cart}>
          <FaTags className={style.icons} />
          <p>Tags</p>
        </div>
        <div className={style.settings_cart}>
          <CgProfile className={style.icons} />
          <p>Profile details</p>
        </div>
        <div className={style.settings_cart}>
          <MdPostAdd className={style.icons} />
          <p>Post</p>
        </div>
        <div className={style.settings_cart}>
          <GiThreeFriends className={style.icons} />
          <p>Friends Requests</p>
        </div>
        <div className={style.settings_cart}>
          <LiaBirthdayCakeSolid className={style.icons} />
          <p>Birthdays</p>
        </div>
        <div className={style.settings_cart}>
          <BsCameraReels className={style.icons} />
          <p>Reels</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsLeftBar
