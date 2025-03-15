"use client";
import React from "react";
import style from "./GroupLeftCart.module.css";
import { IoIosAddCircle } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { useGlobalContext } from "../Context";
import Image from "next/image";
import { MdOutlinePublic } from "react-icons/md";

const GroupLeftbarCart = () => {
  const { loading, friends } = useGlobalContext();
  return (
    <div className={style.groupLeftbarCartContainer}>
      <div className={style.groupLeftbarCart}>
        <div className={style.header_fixed}>
          <div className={style.header}>
            <div className={style.headerImgName}>
              <Image
                className={style.headerImg}
                src="/empiregram-hero-bg.webp"
                sizes="100%"
                alt="Img"
                width={40}
                height={40}
              />
              <div>
                <p>Group name here</p>
                <span>
                  <MdOutlinePublic className={style.icon} /> Public group .40k
                  members
                </span>
              </div>
            </div>
            <BsThreeDotsVertical className={style.icon} />
          </div>
        </div>
        {loading ? (
          <div className={style.loading}>
            <h2>Loading...</h2>
          </div>
        ) : (
          <div className={style.users_list}>
            {friends.map((friend) => (
              <div className={style.users} key={friend.id}>
                <div className={style.left_side}>
                  <div className={style.img_Con}>
                    <Image src={friend.user_Img} fill alt="User" sizes="100%" />
                  </div>
                  <div className={style.addUser}>
                    <p>{friend.user_Name}</p>
                    <button>Add user</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupLeftbarCart;
