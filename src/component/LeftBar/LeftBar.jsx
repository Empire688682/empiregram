import React from 'react';
import style from './LeftBar.module.css';
import { IoIosAddCircle } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

const LeftBar = () => {
  return (
    <div className={style.left_bar}>
      <div className={style.left_bar_Con}>
        <div className={style.header}>
          <h2>Chats</h2>
          <IoIosAddCircle />
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>
  )
}

export default LeftBar
