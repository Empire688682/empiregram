"use client";
import React, { useState } from "react";
import style from "./ChatBox.module.css";
import Image from "next/image";
import PostCreator from "../PostCreator/PostCreator";
import StatusBar from "../StatusBar/StatusBar";
import SinglePost from "../SinglePost/SinglePost";
import PeopleYMK from "../PeopleYMK/PeopleYMK";
import GroupYML from "../GroupYML/GroupYML";
import PostDisplay from "../PostDisplay/PostDisplay";
import { useGlobalContext } from "../Context";

const ChatBox = () => {
  const { posts } = useGlobalContext();
  const [createPost, setCreatePost] = useState(false);
  const [postDisplayData, setPostDisplayData] = useState(null);

  const handleGetPostId = (id) => {
    if (id) {
      const updatedPostData = posts.find((post) => post.login.uuid === id);
      setPostDisplayData(updatedPostData);
    }
  };
  return (
    <div className={style.chat_box}>
      <div className={style.chat_box_Con}>
        <div className={style.home_M_Con}>
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
          <div className={style.post_creator}>
          {createPost && <PostCreator setCreatePost={setCreatePost} />}
          </div>
          <div className={style.status_page}>
            <StatusBar handleGetPostId={handleGetPostId} />
          </div>
          <div className={style.single_post}>
            <SinglePost />
          </div>
          <div className={style.people_you_may_know}>
              <PeopleYMK />
          </div>
          <div className={style.single_post}>
            <SinglePost />
          </div>
          <div className={style.group_you_may_like}>
            {
              //<GroupYML />
            }
          </div>
        </div>
      </div>
      {postDisplayData && (
        <PostDisplay
          postDisplayData={postDisplayData}
          setPostDisplayData={setPostDisplayData}
        />
      )}
    </div>
  );
};

export default ChatBox;
