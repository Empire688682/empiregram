"use client";
import React, { useState } from "react";
import style from "./GroupMainCart.module.css";
import Image from "next/image";
import { MdOutlinePublic } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { IoIosShareAlt } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { RiUserUnfollowLine } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import { IoMdArrowDropup } from "react-icons/io";
import GroupPost from "../GroupPost/GroupPost";


const GroupMainCart = () => {
  const [showChildrenBtn, setShowChildrenBtn] = useState(false);
  const [inviteShareMenus, setInviteShareMenus] = useState("discussion")
  return (
    <div className={style.groupMainCartContainer}>
      <div className={style.groupMainCart}>
        <div className={style.groupMainCart}>
          <div className={style.hero}>
            <div className={style.heroImgCon}>
              <Image className={style.heroImg} src="/empiregram-hero-bg.webp" alt="Img" sizes="100%" fill />
            </div>
            <div className={style.groupAdmin}>
              <p>Group by Juwon Asehinde</p>
            </div>
          </div>
          <div className={style.inviteShareCon}>
            <div className={style.groupName}>
              <h2>Ibafo connect</h2>
              <span><MdOutlinePublic className={style.icon} /> Public group .40k members</span>
            </div>
            <div className={style.inviteShareBtns}>
              <li className={style.btn}><FaPlus className={style.icon} /> <span>Invite</span> </li>
              <li className={style.btn}><IoIosShareAlt className={style.icon} /> <span>Share</span></li>
              <div className={style.parentBtn}>
              <li className={style.btn} onClick={()=>setShowChildrenBtn(!showChildrenBtn)}><MdGroups2 className={style.icon} /> <span>Joined</span>{showChildrenBtn? <IoMdArrowDropup className={style.icon}/> : <IoMdArrowDropdown className={style.icon} />}</li>
              {
               showChildrenBtn && <div className={style.childrenBtn}>
                              <li className={style.btn}><IoIosNotifications className={style.icon} /> <span>Manage notificatiuon</span></li>
                              <li className={style.btn}><RiUserUnfollowLine className={style.icon} /> <span>Unfollow group</span></li>
                              <li className={style.btn}><AiOutlineLogout className={style.icon} /> <span>Leave group</span></li>
               </div>
              }
              </div>
              <li className={style.btn}><CiSearch className={style.icon} /></li>
              <li className={style.btn}><BsThreeDots className={style.icon} /></li>
              <li className={style.btn}><IoMdArrowDropdown className={style.icon} /></li>
            </div>
            <ul className={style.inviteShareMenus}>
              <li className={inviteShareMenus === "discussion" ? `${style.menu} ${style.active}`: style.menu} onClick={()=>setInviteShareMenus("discussion")}>Discussion </li>
              <li className={inviteShareMenus === "people" ? `${style.menu} ${style.active}`: style.menu} onClick={()=>setInviteShareMenus("people")}>People</li>
              <li className={inviteShareMenus === "event" ? `${style.menu} ${style.active}`: style.menu} onClick={()=>setInviteShareMenus("event")}>Events</li>
              <li className={inviteShareMenus === "media" ? `${style.menu} ${style.active}`: style.menu} onClick={()=>setInviteShareMenus("media")}>Media</li>
              <li className={inviteShareMenus === "file" ? `${style.menu} ${style.active}`: style.menu} onClick={()=>setInviteShareMenus("file")}>Files</li>
            </ul>
            {
              inviteShareMenus === "discussion" && <GroupPost/>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupMainCart
