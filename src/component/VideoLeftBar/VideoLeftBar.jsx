import React from 'react';
import style from './VideoLeftBar.module.css';
import { IoIosAddCircle } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import ChatMenu from '../ChatMenu/ChatMenu';
import Image from 'next/image';

const VideoLeftBar = () => {
  return (
    <div className={style.video_left_bar}>
      <div className={style.video_left_bar_Con}>
        <div className={style.header_fixed}>
          <div className={style.header}>
            <h2>Video</h2>
            <IoIosAddCircle className={style.icon} />
            <BsThreeDotsVertical className={style.icon} />
          </div>
          <div className={style.search_bar}>
            <label htmlFor="search">
              <IoSearchOutline className={style.search_bar_icon} />
            </label>
            <input type="text" id='search' placeholder='Search' name='search' required />
          </div>
        </div>
        <div className={style.users_list}>
        {
          Array(100).fill('').map((item, id) => (
            <div className={style.users} key={id}>
              <div className={style.left_side}>
                <div className={style.img_Con}>
                  <Image src='/profile_marco.png' fill alt='User' />
                </div>
                <div className={style.name_msg}>
                  <p>Jayempire</p>
                  <span>Hello world</span>
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

export default VideoLeftBar
