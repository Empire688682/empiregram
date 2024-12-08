'use client'
import React from 'react';
import style from './SavedVideo.module.css';
import Image from 'next/image';
import { AiOutlineLike } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { allVideoPost } from '../data';

const SavedVideo = () => {
  return (
    <div className={style.saved_video_Con}>
        {
            allVideoPost.map((video, id)=>(
                <div className={style.saved_video} key={id}>
        <div className={style.left_side}>
            <video src={video.video} controls ></video>
        </div>
        <div className={style.right_side}>
            <div className={style.right_author_info}>
                <div className={style.author_img_Con}>
                    <Image src={video.user_Img} width={50} height={50} alt="Avatar" sizes='100%' />
                </div>
                <div className={style.author_name_date_Con}>
                    <p>{video.user_Img}</p>
                    <p>{video.date}</p>
                </div>
            </div>
            <span>{video.text}</span>
            <div className={style.saved_video_reactions}>
            <MdFavorite />
            <AiOutlineLike />
            <p>You and 2k others . {video.comment_No} comments . {video.comment_No} views</p>
            </div>
        </div>
      </div>
            ))
        }
    </div>
  )
}

export default SavedVideo
