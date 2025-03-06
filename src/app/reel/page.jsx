"use client"
import React, { useState } from 'react';
import style from './Reel.module.css'
import ReelComp from '@/component/ReelComp/ReelComp';
import { useGlobalContext } from '@/component/Context';

const Page = () => {
  const {
    fetchReels,
    reels
  } = useGlobalContext();
  
  return (
    <div className={style.container}>
      <ReelComp reels={reels}/>
    </div>
  )
}

export default Page
