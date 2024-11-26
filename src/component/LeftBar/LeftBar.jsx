import React from 'react';
import style from './LeftBar.module.css';
import { IoIosAddCircle } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import ChatMenu from '../ChatMenu/ChatMenu';
import Image from 'next/image';
import { useGlobalContext } from '../Context';

const LeftBar = () => {
  const {friends} = useGlobalContext();
  return (
    <div className={style.left_bar}>
      <div className={style.left_bar_Con}>
        <div className={style.header_fixed}>
          <div className={style.header}>
            <h2>Chats</h2>
            <IoIosAddCircle className={style.icon} />
            <BsThreeDotsVertical className={style.icon} />
          </div>
          <div className={style.search_bar}>
            <label htmlFor="search">
              <IoSearchOutline className={style.search_bar_icon} />
            </label>
            <input type="text" id='search' placeholder='Search' name='search' required />
          </div>
          <ChatMenu />
        </div>
        <div className={style.users_list}>
        {
          friends.map((friend) => (
            <div className={style.users} key={friend.index}>
              <div className={style.left_side}>
                <div className={style.img_Con}>
                  <Image src={friend.user_Img} fill alt='User' />
                </div>
                <div className={style.name_msg}>
                  <p>{friend.user_Name}</p>
                  <span>{friend.currentMessage}</span>
                </div>
              </div>
              <div className={style.right_side}>
                <p>Today</p>
                <span>1</span>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default LeftBar
