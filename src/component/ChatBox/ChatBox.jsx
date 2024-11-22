'use client'
import React, { useState } from 'react';
import style from './ChatBox.module.css';
import { IoMdHome } from "react-icons/io";
import Image from 'next/image';
import PostCreator from '../PostCreator/PostCreator';
import StatusBar from '../StatusBar/StatusBar';
import SinglePost from '../SinglePost/SinglePost';
import PeopleYMK from '../PeopleYMK/PeopleYMK';
import GroupYML from '../GroupYML/GroupYML';
import { FaPhotoVideo  } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const ChatBox = () => {
  const [createPost, setCreatePost] = useState(false);
  const router = useRouter()
  return (
    <div className={style.chat_box}>
      <div className={style.chat_box_Con}>
        <div className={style.header}>
          <IoMdHome className={style.icons} />
          <FaPhotoVideo onClick={()=>router.push("/video")} className={style.icons} />
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
          <div className={style.status_page}>
            <StatusBar />
          </div>
          <div className={style.single_post}>
            <SinglePost/>
          </div>
          <div className={style.people_you_may_know}>
            <PeopleYMK/>
          </div>
          <div className={style.single_post}>
            <SinglePost/>
          </div>
          <div className={style.group_you_may_like}>
            <GroupYML/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatBox
