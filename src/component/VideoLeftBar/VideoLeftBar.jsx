import React from 'react';
import style from './VideoLeftBar.module.css';
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { RiFolderVideoFill } from "react-icons/ri";
import { IoMdVideocam } from "react-icons/io";
import { FaPhotoVideo } from "react-icons/fa";
import { PiVideoFill } from "react-icons/pi";
import { MdSaveAlt } from "react-icons/md";

const VideoLeftBar = ({videoTag, setVideoTag}) => {
  return (
    <div className={style.video_left_bar}>
      <div className={style.video_left_bar_Con}>
        <div className={style.header_fixed}>
          <div className={style.header}>
            <h2>Video</h2>
            <BsThreeDotsVertical className={style.icon} />
          </div>
          <div className={style.search_bar}>
            <label htmlFor="search">
              <IoSearchOutline className={style.search_bar_icon} />
            </label>
            <input type="text" id='search' placeholder='Search' name='search' required />
          </div>
        </div>
        <div className={style.menus}>
          <div className={style.menu} onClick={()=>setVideoTag("home")}>
            <RiFolderVideoFill className={style.icon} />
            <p>Home</p>
          </div>
          <div className={style.menu}>
            <IoMdVideocam className={style.icon} />
            <p>Live</p>
          </div>
          <div className={style.menu}>
            <FaPhotoVideo className={style.icon} />
            <p>Reels</p>
          </div>
          <div className={style.menu}>
            <PiVideoFill className={style.icon} />
            <p>Shows</p>
          </div>
          <div className={style.menu} onClick={()=>setVideoTag("savedVideos")}>
            <MdSaveAlt className={style.icon} />
            <p>Saved Videos</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoLeftBar
