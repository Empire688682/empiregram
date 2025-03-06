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
