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
        return 
      }
      else{
        return prevIndex += 1
      }
    });
  }
  const nextBackVideo = () =>{
    setIndex((prevIndex)=>{
      if(prevIndex === 0){
        return 
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
    setReelData(reels[0]);
  },[reels])
  
  return (
    <div className={style.container}>
      <ReelComp reelData={reelData}/>
    </div>
  )
}

export default Page
