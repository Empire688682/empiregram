"use client"
import React, { useEffect, useState } from 'react';
import style from './Reel.module.css'
import ReelComp from '@/component/ReelComp/ReelComp';
import { useGlobalContext } from '@/component/Context';

const Page = () => {
  const [reelData, setReelData] = useState({});
  const {
    fetchReels,
    reels
  } = useGlobalContext();
  const [index, setIndex] = useState(0);

  const nextVideo = () =>{
    setIndex((prevIndex)=>{
      if(prevIndex === reels.length){
        return reels.length
      }
      else{
        return prevIndex += 1
      }
    });
  }

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
  },[]);

  useEffect(()=>{
    setReelData(reels[index]);
  },[reels, nextBackVideo, nextVideo]);

  console.log("Index:", index);
  
  return (
    <div className={style.container}>
      <ReelComp reelData={reelData} nextVideo={nextVideo} nextBackVideo={nextBackVideo}/>
    </div>
  )
}

export default Page
