"use client";
import React, { useState } from "react";
import style from "./LeftBar.module.css";
import { IoIosAddCircle } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import ChatMenu from "../ChatMenu/ChatMenu";
import Image from "next/image";
import { useGlobalContext } from "../Context";
import UserChatDisplay from "../UserChatDisplay/UserChatDisplay";

const LeftBar = () => {
  const { friends, loading } = useGlobalContext();
  const [selectedUser, setSelectedUser] = useState(null);
  const [minimizeUser, setMinimizeUsers] = useState({});

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleMinimizeClick = (img) => {
    const updatedUser = friends.find((data)=> data.user_Img === img);
    console.log(":", updatedUser);
  };

  console.log("minimizeUser:", minimizeUser);

  const handleMinimizeChats = (user) => {
    setSelectedUser(null);
    setMinimizeUsers((prev) => {
      if (!prev[user]) {
        return { ...prev, [user]: true };
      } else {
        const { [user]: removed, ...rest } = prev;
        return rest;
      }
    });
  };

  return (
    <div className={style.left_bar}>
      <div className={style.left_bar_Con}>
        <div className={style.header_fixed}>
          <div className={style.header}>
            <h2>Chats</h2>
            <IoIosAddCircle className={style.icon} />
            <BsThreeDotsVertical className={style.icon} />
          </div>
          <div className={style.search_bar}>
            <label htmlFor="search">
              <IoSearchOutline className={style.search_bar_icon} />
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search"
              name="search"
              required
            />
          </div>
          <ChatMenu />
        </div>
        {loading ? (
          <div className={style.loading}>
            <h2>Loading...</h2>
          </div>
        ) : (
          <div className={style.users_list}>
            {friends.map((friend) => (
              <div
                onClick={() => handleUserClick(friend)}
                className={style.users}
                key={friend.id}
              >
                <div className={style.left_side}>
                  <div className={style.img_Con}>
                    <Image src={friend.user_Img} fill alt="User" sizes="100%" />
                  </div>
                  <div className={style.name_msg}>
                    <p>{friend.user_Name}</p>
                    <span>{friend.currentMessage}</span>
                  </div>
                </div>
                <div className={style.right_side}>
                  <p>Today</p>
                  <span>1</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={style.usersChatDisplay}>
        {selectedUser && (
          <UserChatDisplay
            handleMinimizeChats={handleMinimizeChats}
            setSelectedUser={setSelectedUser}
            user={selectedUser}
          />
        )}
        {Object.keys(minimizeUser).length > 0 && (
          <div className={style.usersChatMinimized}>
           {
            Object.keys(minimizeUser).map((img) => (
              <Image
              key={img}
              onClick={()=>handleMinimizeClick(img)}
              className={style.img}
              src={img}
              width={50}
              height={50}
              alt="User"
              sizes="100%"
            />
            ))
           }
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftBar;
