"use client"
import React, { useEffect, useState } from 'react';
import style from "./ReelsId.module.css"
import ReelComp from '@/component/ReelComp/ReelComp';
import { useGlobalContext } from '@/component/Context';
import { useParams } from 'next/navigation';

const Page = () => {
  const {id} = useParams();
  const {
    fetchReels,
    reels
  } = useGlobalContext();
  const [index, setIndex] = useState(0);
  const [idReel, setIdReel] = useState({});

  const fetIdVideo = (id) =>{
    const video = reels.find((reel) => reel.id === Number(id));
    setIdReel(video);
  }

  console.log("idReel:", idReel);
  console.log("ID:", id);

  useEffect(()=>{
    fetIdVideo();
  },[id])

  const nextVideo = () => {
    setIndex((prevIndex) => (prevIndex === reels.length - 1 ? prevIndex : prevIndex + 1));
  };
  

  const nextBackVideo = () =>{
    setIndex((prevIndex)=>{
      if(prevIndex === 0){
        return 0
      }
      else{
        return prevIndex - 1
      }
    });
  }

  useEffect(()=>{
    fetchReels();
  },[fetchReels]);

  console.log("Index:", index);
  
  return (
    <div className={style.container}>
      <ReelComp reelData={idReel} reels={reels} index={index} nextVideo={nextVideo} nextBackVideo={nextBackVideo}/>
    </div>
  )
}

export default Page
