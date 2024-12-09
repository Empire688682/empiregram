import React from 'react';
import style from './GroupLeftBar.module.css';
import { IoMdSettings } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import Image from 'next/image';
import { MdGroups2 } from "react-icons/md";

const GroupLeftBar = () => {
  return (
    <div className={style.group_left_bar}>
      <div className={style.group_left_bar_header}>
        <h3>Group</h3>
        <IoMdSettings className={style.icons} />
      </div>
      <div className={style.search_bar}>
        <label htmlFor="search">
          <IoSearchSharp className={style.search_bar_icon} />
        </label>
        <input type="text" id='search' placeholder='Search groups' name='search' required />
      </div>
      <button className={style.user_group_btn}> <MdGroups2/> Your groups</button>
      <button> <FaCirclePlus />Create new group</button>
      <div className={style.group_you_manage}>
      <div className={style.group_you_manage_header}>
          <h4>Groups you manage</h4>
          <span>See all</span>
        </div>
        <div className={style.group_you_manage_cart}>
          <div className={style.group_you_manage_img}>
            <Image src='/empiregram-hero-bg.webp' alt='IMG' fill />
          </div>
          <div className={style.group_you_manage_text_all}>
            <p>Amazon kindle group</p>
            <span>Last active 2 years ago</span>
          </div>
        </div>
      </div>
      <div className={style.group_you_joined}>
        <div className={style.group_you_joined_header}>
          <h4>Groups you have joined</h4>
          <span>See all</span>
        </div>
        <div className={style.group_you_joined_cart}>
          <div className={style.group_you_joined_img}>
            <Image src='/empiregram-hero-bg.webp' alt='IMG' fill />
          </div>
          <div className={style.group_you_joined_text_all}>
            <p>Amazon kindle group</p>
            <span>Last active 2 years ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupLeftBar
