import React, { useState } from 'react';
import style from './GroupMedia.module.css';
import { FaPlus } from "react-icons/fa6";
import MediaPhotos from './MediaPhotos/MediaPhotos';
import MediaVideo from './MediaVideo/MediaVideo';

const GroupMedia = () => {
  const [displayMenu, setDisplayMenu] = useState("photos");
  return (
    <div className={style.groupMediaContainer}>
      <div className={style.groupMedia}>
        <div className={style.header}>
          <h2>Media</h2>
          <ul>
            <li><FaPlus /> Create album</li>
            <li>Add photos/video</li>
          </ul>
        </div>
        <div className={style.displayMenu}>
          <li className={displayMenu === "photos"? `${style.active}` : ""} onClick={()=> setDisplayMenu("photos")}>Photos</li>
          <li className={displayMenu === "videos"? `${style.active}` :""}  onClick={()=> setDisplayMenu("videos")}>Videos</li>
          <li className={displayMenu === "albums"? `${style.active}` :""} onClick={()=> setDisplayMenu("albums")}>Albums</li>
        </div>
        <div className={style.displayContent}>
          {
            displayMenu === "photos" && <MediaPhotos/>
          }
          {
             displayMenu === "videos" && <MediaVideo/>
          }
        </div>
      </div>
    </div>
  )
}

export default GroupMedia
