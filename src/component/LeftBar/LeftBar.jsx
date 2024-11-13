import React from 'react';
import style from './LeftBar.module.css';
import { IoIosAddCircle } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import ChatMenu from '../ChatMenu/ChatMenu';

const LeftBar = () => {
  return (
    <div className={style.left_bar}>
      <div className={style.left_bar_Con}>
        <div className={style.header}>
          <h2>Chats</h2>
          <IoIosAddCircle className={style.icon} />
          <BsThreeDotsVertical className={style.icon} />
        </div>
        <div className={style.search_bar}>
        <label htmlFor="search">
        <IoSearchOutline className={style.search_bar_icon}  />
        </label>
        <input type="text" id='search' placeholder='Search' name='search' required />
        </div>
        <ChatMenu/>
      </div>
    </div>
  )
}

export default LeftBar
