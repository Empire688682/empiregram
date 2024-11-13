"use client"
import React, { useState } from 'react';
import style from './ChatMenu.module.css';

const ChatMenu = () => {
    const [chatMenuState, setChatMenuState] = useState("All")
  return (
    <div className={style.chat_menu}>
      <div onClick={()=>setChatMenuState("All")} className={chatMenuState === "All"? `${style.menu} ${style.active}`: style.menu}>All</div>
      <div onClick={()=>setChatMenuState("Unread")} className={chatMenuState === "Unread"? `${style.menu} ${style.active}`: style.menu}>Unread</div>
      <div onClick={()=>setChatMenuState("Favourite")} className={chatMenuState === "Favourite"? `${style.menu} ${style.active}`: style.menu}>Favourite</div>
      <div onClick={()=>setChatMenuState("Group")} className={chatMenuState === "Group"? `${style.menu} ${style.active}`: style.menu}>Groups</div>
    </div>
  )
}

export default ChatMenu
