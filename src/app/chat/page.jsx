"use client";
import React from "react";
import style from "./chat.module.css";
import LeftBar from "@/component/LeftBar/LeftBar";
import ChatBox from "@/component/ChatBox/ChatBox";
import MenuBar from "@/component/MenuBar/MenuBar";
import { useGlobalContext } from "@/component/Context";

const Page = () => {
  const { mobileChatClick } = useGlobalContext();
  return (
    <div className={style.chat}>
      <MenuBar />
      <div className={style.chat_Con}>
        <div className={style.left_bar}>
          {
            mobileChatClick && <LeftBar />
          }
        </div>
        <div className={style.chat_box}>
          {
            !mobileChatClick && <ChatBox />
          }
        </div>
        <div className={style.right_bar}></div>
      </div>
    </div>
  );
};

export default Page;
