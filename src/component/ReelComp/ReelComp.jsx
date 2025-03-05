import React from 'react';
import style from "./ReelComp.module.css";

const ReelComp = () => {
    return (
        <div className={style.container}>
            <div className={style.videoCom}>
                <video
                    className={style.video}
                    src="/video.3.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                ></video>
            </div>
        </div>
    )
}

export default ReelComp
