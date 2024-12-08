'use client'
import React from 'react';
import style from './SavedVideo.module.css';
import Image from 'next/image';
import { AiOutlineLike } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";

const SavedVideo = () => {
  return (
    <div className={style.saved_video_Con}>
      <div className={style.saved_video}>
        <div className={style.left_side}>
            <video src="/video.2.mp4"></video>
        </div>
        <div className={style.right_side}>
            <div className={style.right_author_info}>
                <div className={style.author_img_Con}>
                    <Image src="/avatar_icon.png" width={50} height={50} alt="Avatar" sizes='100%' />
                </div>
                <div className={style.author_name_date_Con}>
                    <p>John Doe</p>
                    <p>1 hour ago</p>
                </div>
            </div>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio a exercitationem quo rem sed harum dolorem eveniet quis ipsum, incidunt soluta maxi</span>
            <div className={style.saved_video_reactions}>
            <MdFavorite />
            <AiOutlineLike />
            <p>You aand 2k others . 73 comments . 23.9k views</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SavedVideo
