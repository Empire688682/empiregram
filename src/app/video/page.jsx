import React from 'react';
import style from './video.module.css';
import VideoLeftBar from '@/component/VideoLeftBar/VideoLeftBar';
import Video from '@/component/Video/Video';

const page = () => {
  return (
    <div className={style.video}>
      <div className={style.video_nav}>
        NAVBAR HERE
      </div>
      <div className={style.video_Con}>
        <div className={style.left_bar}>
        <VideoLeftBar/>
        </div>
        <div className={style.video_box}>
        <Video/>
        </div>
      </div>
    </div>
  )
}

export default page
