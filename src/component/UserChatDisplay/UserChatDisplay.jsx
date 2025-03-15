"use client";
import React from "react";
import style from "./UserChatDisplay.module.css";
import Image from "next/image";
import { FaVideo } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";

const UserChatDisplay = ({
  user,
  setSelectedUser,
  setMinimizeUsers,
  handleMinimizeChats,
}) => {
  return (
    <div className={style.user}>
      <div className={style.userCon}>
        <div className={style.userHeader}>
          <div className={style.headerImgCon}>
            <Image
              className={style.userImg}
              src={user.user_Img}
              alt="IMG"
              width={40}
              height={40}
              sizes="100%"
            />
            <div className={style.headerText}>
              <p>{user.user_Name}</p>
              <span>Active now</span>
            </div>
          </div>
          <div className={style.headerIconsCon}>
            <FiMinus
              className={style.icon}
              onClick={() => handleMinimizeChats(user.user_Img)}
            />
            <LiaTimesSolid
              className={style.icon}
              onClick={() => setSelectedUser(null)}
            />
            <IoCall className={style.icon} />
            <FaVideo className={style.icon} />
          </div>
        </div>
        <div className={style.userCenter}>
          <Image
            className={style.userImg}
            src={user.user_Img}
            alt="IMG"
            width={50}
            height={50}
            sizes="100%"
          />
          <div className={style.headerText}>
            <p>{user.user_Name}</p>
          </div>
          <div className={style.userChatBox}>
            {user.allMessages.map((msg, index) => (
              <React.Fragment key={index}>
                <div
                  className={
                    msg.sender === "user"
                      ? style.userMessage
                      : style.friendMessage
                  }
                >
                  <p
                    className={
                      msg.sender === "user" ? style.usertext : style.friendText
                    }
                  >
                    {msg.text}
                  </p>
                  <span className={style.timestamp}>
                    {new Date(msg.timestamp).toLocaleString()}{" "}
                    {/* Format timestamp */}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChatDisplay;


