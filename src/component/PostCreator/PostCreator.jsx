import React from 'react';
import style from './PostCreator.module.css'
import Image from 'next/image';

const PostCreator = () => {
  return (
    <div className={style.post_creator}>
      <h2>Create post</h2>
      <hr />
      <div className={style.content}>
        <div className={style.user_details}>
        <div className={style.img_Con}>
            <Image src='/avatar_icon.png' alt='User' fill sizes='100%' />
          </div>
          <div className={style.user_name}>
          <p>Daniel Juwon Asehinde</p>
          <select name="" id="">
            <option value="Public">Public</option>
            <option value="Friends">Friends</option>
            <option value="Friends except">Friends except</option>
          </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCreator
