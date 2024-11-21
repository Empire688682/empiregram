import React from 'react';
import style from'./StatusBar.mudule.css';
import Image from 'next/image';

const StatusBar = () => {
  return (
    <div className={style.status_bar}>
     <div className={style.status_bar_Con}>
      <div className={style.user}>
        <Image className={style.user_img} src='/avatar_icon.png' fill alt='IMG' sizes='100%'/>
        <div className={style.user_plus}>
          <p>+</p>
          <span>Create story</span>
        </div>
      </div>
     </div>
    </div>
  )
}

export default StatusBar
