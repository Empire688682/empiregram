'use client'
import React, { useState } from 'react';
import style from './ChatBox.module.css';
import Image from 'next/image';
import PostCreator from '../PostCreator/PostCreator';
import StatusBar from '../StatusBar/StatusBar';
import SinglePost from '../SinglePost/SinglePost';
import PeopleYMK from '../PeopleYMK/PeopleYMK';
import GroupYML from '../GroupYML/GroupYML';
import { IoMdHome } from "react-icons/io";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { MdNotifications   } from "react-icons/md";
import Link from 'next/link'

const ChatBox = () => {
  const [createPost, setCreatePost] = useState(false);
  return (
    <div className={style.chat_box}>
      <div className={style.chat_box_Con}>
        <div className={style.header}>
        <Link href='/chat' style={{textDecoration:'none'}}>
          <IoMdHome className={style.icon} />
          </Link>
          <Link href='/video' style={{textDecoration:'none'}}>
          <MdOutlineVideoLibrary className={style.icon} />
          </Link>
          <Link href='/chat' style={{textDecoration:'none'}}>
          <FaUserGroup className={style.icon} />
          </Link>
          <MdNotifications className={style.icon} />
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
