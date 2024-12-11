import React from 'react';
import style from './CreateGroupPrev.module.css';
import Image from 'next/image';
import { MdPublic } from "react-icons/md";
import { MdVisibility } from "react-icons/md";

const CreateGroupPrev = () => {
  return (
    <div className={style.create_group_prev}>
      <div className={style.group_prev_con}>
        <h2>Group preview</h2>
        <div className={style.group_prev_img_con}>
          <Image className={style.group_prev_img} src="/group_creation_placeholder.webp" alt='IMG' fill sizes='100%' />
        </div>
        <div className={style.group_prev_details}>
          <h3>Group name</h3>
          <p>Group description</p>
          <p>1 members</p>
          <span>Group privacy</span>
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
        <div  className={style.group_prev_about}>
          <h4>About</h4>
          <div className={style.group_about_cart}>
            <MdPublic className={style.icon}/>
            <div className={style.group_privacy}>
              <p>Public</p>
              <span>Any one can see what ever in going on in this group</span>
            </div>
          </div>
          <div className={style.group_about_cart}>
            <MdVisibility className={style.icon}/>
            <div className={style.group_privacy}>
              <p>Visible</p>
              <span>Anyone can find the group</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateGroupPrev
