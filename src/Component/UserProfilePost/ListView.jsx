"use client";
import React from 'react';
import style from "./UserProfilePost.module.css"
import UserProfileSinglePost from './UserProfileSinglePost/UserProfileSinglePost';

const ListView = () => {
  return (
    <div className={style.listView}>
      <UserProfileSinglePost/>
    </div>
  )
}

export default ListView


