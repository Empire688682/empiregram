import React from 'react';
import style from './StatusBar.module.css';
import Image from 'next/image';

const StatusBar = () => {
  return (
    <div className={style.status_bar}>
      <div className={style.status_bar_Con}>
        <div className={style.user}>
          <Image className={style.user_img} src='/avatar_icon.png' fill alt='IMG' sizes='100%' />
          <div className={style.user_plus}>
            <p>+</p>
            <span>Create story</span>
          </div>
        </div>
       {
        Array(10).fill('').map((item, id) => (
          <div className={style.friends} key={id}>
          <Image className={style.friends_img} src='/profile_enrique.png' fill alt='IMG' sizes='100%' />
          <div className={style.friends_post_Con}>
            <Image className={style.secondary_friends_img} src='/img1.jpg' width={50} height={50} alt='IMG' sizes='100%' />
          </div>
          <p className={style.friends_name}>Simba Rossie</p>
        </div>
        ))
       }
      </div>
    </div>
  );
}

export default StatusBar;
