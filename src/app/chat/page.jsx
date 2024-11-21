import React from 'react';
import style from './chat.module.css'
import LeftBar from '@/component/LeftBar/LeftBar';
import ChatBox from '@/component/ChatBox/ChatBox';
import RightBar from '@/component/RightBar/RightBar';

const page = () => {
  return (
    <div className={style.chat}>
      <div className={style.chat_Con}>
        <div className={style.left_bar}><LeftBar /></div>
        <div className={style.chat_box}><ChatBox /></div>
        <div className={style.right_bar}><RightBar /></div>
      </div>
    </div>
  )
}

export default page
