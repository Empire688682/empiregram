import React from 'react';
import style from "./MediaVideo.module.css";

const MediaVideo = () => {
  return (
    <div className={style.mediaVideoCon}>
      <div className={style.mediaVideo}>
        {
            Array.from({length:30}).map((_, id)=>(
                <video src="/video.3.mp4" controls key={id} className={style.video}></video>
            ))
        }
      </div>
    </div>
  )
}

export default MediaVideo
