import React, { useRef, useEffect } from 'react';
import style from "./ReelVideo.module.css";

const ReelVideo = ({ mute, setPlay, play, reelVideo }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            if (play) {
                videoRef.current.play();  // Play video when `play` is true
            } else {
                videoRef.current.pause(); // Pause video when `play` is false
            }
        }
    }, [play]); // Runs whenever `play` state changes

    useEffect(()=>{
        if(videoRef.current){
            videoRef.current.play();
            setPlay(true);
        }
    },[reelVideo])

    return (
        <div className={style.container}>
            <div className={style.videoCom}>
                <video
                    ref={videoRef}
                    onClick={() => setPlay(!play)}
                    className={style.video}
                    src={reelVideo}
                    muted={mute}
                    playsInline
                    loop
                ></video>
            </div>
        </div>
    );
};

export default ReelVideo;


