import React from 'react';
import style from './LeftBar.module.css';
import { IoIosAddCircle } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";

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
        <IoSearchOutline className={style.search_bar_icon}  />
        <input type="text" placeholder='Search' name='search' required />
        </div>
      </div>
    </div>
  )
}

export default LeftBar
