"use client"
import React, { useEffect, useState } from "react";
import style from "./ReelsId.module.css";
import ReelComp from "@/component/ReelComp/ReelComp";
import { useGlobalContext } from "@/component/Context";
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();
  const { fetchReels, reels } = useGlobalContext();
  const [index, setIndex] = useState(0);
  const [idReel, setIdReel] = useState({});

  // Function to find the video by ID
  const fetIdVideo = (id) => {
    const video = reels.find((reel) => reel.id === Number(id)) || {};
    setIdReel(video);
  };

  // Fetch the reels on component mount
  useEffect(() => {
    fetchReels();
  }, [fetchReels]);

  // Set the correct video when reels or id changes
  useEffect(() => {
    fetIdVideo(id);
    const videoIndex = reels.findIndex((reel) => reel.id === Number(id));
    if (videoIndex !== -1) setIndex(videoIndex);
  }, [id, reels]);

  // Next and Previous Video Logic
  const nextVideo = () => {
    setIndex((prevIndex) =>
      prevIndex === reels.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  const nextBackVideo = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  return (
    <div className={style.container}>
      <ReelComp
        reelData={idReel}
        reels={reels}
        index={index}
        nextVideo={nextVideo}
        nextBackVideo={nextBackVideo}
      />
    </div>
  );
};

export default Page;
