'use client'
import React, { useState } from 'react';
import style from './ChatBox.module.css';
import { IoMdHome } from "react-icons/io";
import Image from 'next/image';
import PostCreator from '../PostCreator/PostCreator';
import StatusBar from '../StatusBar/StatusBar';

const ChatBox = () => {
  const [createPost, setCreatePost] = useState(false);
  return (
    <div className={style.chat_box}>
      <div className={style.chat_box_Con}>
        <div className={style.header}>
          <IoMdHome className={style.icons} />
          <IoMdHome className={style.icons} />
          <IoMdHome className={style.icons} />
          <IoMdHome className={style.icons} />
        </div>
        <div className={style.home_M_Con}>
          {
            !createPost && <div className={style.home_user_post}>
              <div className={style.img_Con}>
                <Image src='/avatar_icon.png' alt='User' fill sizes='100%' />
              </div>
              <p onClick={() => setCreatePost(true)}>What it is in your mind?</p>
            </div>
          }
          {
            createPost && <PostCreator setCreatePost={setCreatePost} />
          }
        </div>
        <StatusBar/>
      </div>
    </div>
  )
}

export default ChatBox
