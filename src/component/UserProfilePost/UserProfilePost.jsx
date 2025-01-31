"use client";
import React, {useState} from 'react'
import style from "./UserProfilePost.module.css"
import Image from "next/image";
import PostCreator from '../PostCreator/PostCreator';
import GridView from './GridView';
import ListView from './ListView';

const UserProfilePost = () => {
    const [createPost, setCreatePost] = useState(false);
    const [postDisplayData, setPostDisplayData] = useState(null);
    const [postView, setPostView] = useState("list");
  return (
    <div className={style.userProfilePost}>
      {!createPost && (
            <div className={style.home_user_post}>
              <div className={style.img_Con}>
                <Image src="/avatar_icon.png" alt="User" fill sizes="100%" />
              </div>
              <p onClick={() => setCreatePost(true)}>
                What it is in your mind?
              </p>
            </div>
          )}
          {createPost && <PostCreator setCreatePost={setCreatePost} />}
          <div className={style.postView}>
            <p className={postView === "grid" ? `${style.active}` : ""} onClick={() => setPostView("grid")}>Grid</p>
            <p className={postView === "list" ? `${style.active}` : ""} onClick={() => setPostView("list")}>List</p>
          </div>
          {
            postView === "grid" && (
                <GridView />
            )
          }
          {
            postView === "list" && (
                <ListView />
            )
          }
    </div>
  )
}

export default UserProfilePost
