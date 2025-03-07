"use client"
import React, { useEffect, useState } from 'react';
import style from './Reel.module.css'
import ReelComp from '@/component/ReelComp/ReelComp';
import { useGlobalContext } from '@/component/Context';

const Page = () => {
  const {
    fetchReels,
    reels
  } = useGlobalContext();
  const [index, setIndex] = useState(0);

  const nextVideo = () => {
    setIndex((prevIndex) => 
      (prevIndex === reels.length - 1 ? prevIndex 
        : prevIndex + 1
      ));

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
  
  return (
    <div className={style.container}>
      <ReelComp reelData={reels[index]} reels={reels} index={index} nextVideo={nextVideo} nextBackVideo={nextBackVideo}/>
    </div>
  )
}

export default Page
