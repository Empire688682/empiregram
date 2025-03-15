"use client";
import React, { useState } from "react";
import style from "./video.module.css";
import VideoLeftBar from "@/Component/VideoLeftBar/VideoLeftBar";
import Video from "@/Component/Video/Video";
import SavedVideo from "@/Component/SavedVideo/SavedVideo";

const Page = () => {
  const [videoTag, setVideoTag] = useState("savedVideos");
  return (
    <div className={style.video}>
      <div className={style.video_Con}>
        <div className={style.left_bar}>
          <VideoLeftBar videoTag={videoTag} setVideoTag={setVideoTag} />
        </div>
        {videoTag === "home" && (
          <div className={style.video_box}>
            <Video videoTag={videoTag} setVideoTag={setVideoTag} />
          </div>
        )}
        {videoTag === "savedVideos" && (
          <div className={style.video_box}>
            <SavedVideo videoTag={videoTag} setVideoTag={setVideoTag} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
