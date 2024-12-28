import React, { useState } from 'react';
import style from './GroupMedia.module.css';
import { FaPlus } from "react-icons/fa6";

const GroupMedia = () => {
  const [displayMenu, setDisplayMenu] = useState("photos");
  return (
    <div className={style.groupMediaContainer}>
      <div className={style.groupMedia}>
        <div className={style.header}>
          <h2>Media</h2>
          <ul>
            <li><FaPlus /> <span>Create album</span></li>
            <li>Add photos/video</li>
          </ul>
        </div>
        <div className={style.displayMenu}>
          <li>Photos</li>
          <li>Videos</li>
          <li>Albums</li>
        </div>
      </div>
    </div>
  )
}

export default GroupMedia
