"use client";
import React, { useState } from "react";
import style from "./MenuBar.module.css";
import Image from "next/image";
import { IoMdHome } from "react-icons/io";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdGroups2 } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";
import Link from "next/link";
import RightBar from "../RightBar/RightBar";
import { IoIosArrowDown } from "react-icons/io";
import NotificationToggleCom from "../NotificationCom/NotificationToggleCom";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../Context";

const MenuBar = () => {
  const { setMobileChatClick, mobileChatClick } = useGlobalContext();
  const [showProfile, setShowProfile] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  function handleNotificationClick() {
    setShowNotification(!showNotification);
    setShowProfile(false);
  }

  function handleProfileClick() {
    setShowNotification(false);
    setShowProfile(!showProfile);
  }

  const router = useRouter();

  return (
    <div className={style.menu_bar}>
      <Image
        className={style.logo}
        src="/empiregram-logo.webp"
        width={50}
        height={50}
        sizes="100%"
        alt="Logo"
      />
      <div className={style.menu_icons}>
        <Link href="/chat" style={{ textDecoration: "none" }}>
          <IoMdHome className={style.icon} />
        </Link>
        <Link href="/video" style={{ textDecoration: "none" }}>
          <MdOutlineVideoLibrary className={style.icon} />
        </Link>
        <Link href="/group" style={{ textDecoration: "none" }}>
          <MdGroups2 className={style.icon} />
        </Link>
      </div>
      <div className={style.user_menus}>
        <Image
          className={style.user_img}
          onClick={() => setShowProfile(!showProfile)}
          src="/avatar_icon.png"
          width={40}
          height={40}
          sizes="100%"
          alt="Logo"
        />
        <IoNotifications
          className={style.icon}
          onClick={handleNotificationClick}
        />
        <FaFacebookMessenger
          className={style.icon}
          onClick={() => {
            router.push("/chat");
            setMobileChatClick(!mobileChatClick);
          }}
        />
        <IoIosArrowDown
          className={style.icon_arrow_down}
          onClick={handleProfileClick}
        />
      </div>
      {showProfile && !showNotification && (
        <div className={style.user_profile}>
          <RightBar />
        </div>
      )}
      {showNotification && !showProfile && (
        <div className={style.user_notification}>
          <NotificationToggleCom />
        </div>
      )}
    </div>
  );
};

export default MenuBar;


