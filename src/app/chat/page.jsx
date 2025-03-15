"use client";
import React from "react";
import style from "./chat.module.css";
import LeftBar from "@/Component/LeftBar/LeftBar";
import ChatBox from "@/Component/ChatBox/ChatBox";
import { useGlobalContext } from "@/Component/Context";

const Page = () => {
  const { mobileChatClick } = useGlobalContext();
  return (
    <div className={style.chat}>
      <div className={style.chat_Con}>
        <div className={style.left_bar}>{ <LeftBar />}</div>
        <div className={style.chat_box}>{<ChatBox />}</div>
        <div className={style.right_bar}></div>
      </div>
    </div>
  );
};

export default Page;
