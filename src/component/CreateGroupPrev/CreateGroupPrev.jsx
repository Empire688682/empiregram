'use client'
import React from 'react';
import style from './CreateGroupPrev.module.css';
import Image from 'next/image';
import { MdPublic } from "react-icons/md";
import { MdVisibility } from "react-icons/md";

const CreateGroupPrev = ({ groupData }) => {
  return (
    <div className={style.create_group_prev}>
      <div className={style.group_prev_con}>
        <h2>Group preview</h2>
        <div className={style.group_prev_img_con}>
          <Image 
            className={style.group_prev_img} 
            src={groupData.group_image || "/group_creation_placeholder.webp"} 
            alt='Group Image' 
            fill 
            sizes='100%' 
          />
        </div>
        <div className={style.group_prev_details}>
          <h3>{groupData.group_name || "Group name"}</h3>
          <p>{groupData.group_description || "Group description"}</p>
          <p>1 member</p>
          <span>{groupData.group_privacy || "Group privacy"}</span>
        </div>
        <hr />
        <div className={style.group_prev_menu}>
          <ul>
            <li>About</li>
            <li>Posts</li>
            <li>Members</li>
            <li>Events</li>
          </ul>
        </div>
        <div className={style.group_prev_about}>
          <h4>About</h4>
          <div className={style.group_about_cart}>
            <MdPublic className={style.icon} />
            <div className={style.group_privacy}>
              <p>{groupData.group_privacy || "Public"}</p>
              {groupData.group_privacy === "Public" && (
                <span>Anyone can see whatever is going on in this group.</span>
              )}
              {groupData.group_privacy === "Private" && (
                <span>Only the members can see whatever is going on in this group.</span>
              )}
              {!groupData.group_privacy && (
                <span>Anyone can see whatever is going on in this group.</span>
              )}
            </div>
          </div>
          <div className={style.group_about_cart}>
            <MdVisibility className={style.icon} />
            <div className={style.group_privacy}>
              <p>Visible</p>
              <span>Anyone can find the group.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupPrev;
