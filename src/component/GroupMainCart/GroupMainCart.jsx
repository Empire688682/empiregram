import React from "react";
import style from "./GroupMainCart.module.css";
import Image from "next/image";
import { MdOutlinePublic } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { IoIosShareAlt } from "react-icons/io";

const GroupMainCart = () => {
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
            <ul className={style.inviteShareBtns}>
              <li className={style.btn}><FaPlus className={style.icon} /> <span>Invite</span> </li>
              <li className={style.btn}><IoIosShareAlt className={style.icon} /> <span>Joined</span></li>
              <li className={style.btn}><MdGroups2 className={style.icon} /> <span>Joined</span> <IoMdArrowDropdown className={style.icon} /></li>
              <li className={style.btn}><CiSearch className={style.icon} /></li>
              <li className={style.btn}><BsThreeDots className={style.icon} /></li>
              <li className={style.btn}><IoMdArrowDropdown className={style.icon} /></li>
            </ul>
          </div>
          <div className={style.groupMainCart}>
            <ul className={style.inviteShareMenus}>
              <li className={style.menu}>Discussion </li>
              <li className={style.menu}>People</li>
              <li className={style.menu}>Events</li>
              <li className={style.menu}>Media</li>
              <li className={style.menu}>Files</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupMainCart
