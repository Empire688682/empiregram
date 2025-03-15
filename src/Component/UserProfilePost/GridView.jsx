"use client";
import React, { useState } from 'react';
import style from "./UserProfilePost.module.css";
import Image from "next/image";
import { FaLock } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { MdOutlinePublic } from "react-icons/md";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { allPosts } from "@/component/data";
import SingleGridDisplay from './SingleGridDisplay/SingleGridDisplay';

const GridView = () => {
  const [singleGridId, setSingleGridId] = useState(null);
  console.log("singleGridId:",singleGridId);
  return (
    <div className={style.gridViewCon}>
      {
        allPosts.map((post) => (
          <div className={style.gridView} key={post.id} onClick={()=>setSingleGridId(post.id)}>
            <div className={style.imgCon}>
              <Image
                src={post.big_Img}
                alt="Img"
                fill
                sizes='100%'
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={style.gridViewContent}>
              <Image
                className={style.gridViewContentImg}
                src={post.user_Img}
                alt="Img"
                width={40}
                height={40}
                sizes='100%'
              />
              <div className={style.gridViewContentText}>
                <p>{post.user_Name}</p>
                <span>{post.date}</span>
                {post.privacy === "public" ? (
                    <MdOutlinePublic className={style.icon} />
                  ) : (
                    <LiaUserFriendsSolid className={style.icon} />
                  )}
              </div>
            </div>
          </div>
        ))
      }
      {
        singleGridId && (
          <div className={style.singleGridDisplay}>
            <SingleGridDisplay id={singleGridId} setSingleGridId={setSingleGridId}/>
          </div>
        )
      }
    </div>
  )
}

export default GridView
