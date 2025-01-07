"use client";
import React, { useEffect } from "react";
import style from "./RightBar.module.css";
import Image from "next/image";
import { IoSettingsOutline } from "react-icons/io5";
import { MdVideoLibrary } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { IoMoon } from "react-icons/io5";
import { BsArchive } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineStop } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import { AiOutlineCloud } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";
import { useGlobalContext } from "../Context";
import { useRouter } from "next/navigation";

const RightBar = () => {
  const { defaultMode, setDefaultMode } = useGlobalContext();
  const handleModeClick = () => {
    setDefaultMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const router = useRouter();

  return (
    <div className={style.right_bar}>
      <div className={style.right_bar_Con}>
        <div className={style.header}>
          <div className={style.img_Con}>
            <Image src="/avatar_icon.png" alt="User" fill sizes="100%" />
          </div>
          <p>Daniel Juwon Asehinde</p>
        </div>
        <div className={style.user_cart_Con}>
          <div
            className={style.user_cart}
            onClick={() => router.push("/settings")}
          >
            <IoSettingsOutline className={style.icons} />
            <p>Settings</p>
          </div>
          <div className={style.user_cart}>
            <MdVideoLibrary className={style.icons} />
            <p>Videos</p>
          </div>
          <div className={style.user_cart}>
            <FaPhotoVideo className={style.icons} />
            <p>Memories</p>
          </div>
          <div className={`${style.user_cart} ${style.mode}`}>
            <div className={style.mode_left}>
              {defaultMode === "light" ? (
                <BsSun className={style.icons} />
              ) : (
                <IoMoon className={style.icons} />
              )}
              <p>Display Mode</p>
            </div>
            <div className={style.mode_right} onClick={handleModeClick}>
              <span
                className={
                  defaultMode === "light"
                    ? `${style.mode_motor}`
                    : `${style.mode_motor} ${style.dark}`
                }
              ></span>
            </div>
          </div>
          <div className={style.user_cart}>
            <BsArchive className={style.icons} />
            <p>Archived Chats</p>
          </div>
          <div className={style.user_cart}>
            <AiOutlineStar className={style.icons} />
            <p>Starred Messages</p>
          </div>
          <div className={style.user_cart}>
            <MdNotifications className={style.icons} />
            <p>Notification Control</p>
          </div>
          <div className={style.user_cart}>
            <MdSecurity className={style.icons} />
            <p>Privacy & Security</p>
          </div>
          <div className={style.user_cart}>
            <AiOutlineCloud className={style.icons} />
            <p>Data & Storage</p>
          </div>
          <div className={style.user_cart}>
            <MdHelpOutline className={style.icons} />
            <p>Help & Support</p>
          </div>
          <div className={style.user_cart}>
            <AiOutlineStop className={style.icons} />
            <p>Blocked Contacts</p>
          </div>
          <div className={style.user_cart}>
            <AiOutlineInfoCircle className={style.icons} />
            <p>About</p>
          </div>
          <div className={style.user_cart}>
            <IoLogOut className={style.icons} />
            <p>Sign out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
