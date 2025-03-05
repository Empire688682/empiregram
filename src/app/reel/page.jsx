import React from 'react';
import style from './Reel.module.css'
import ReelComp from '@/component/ReelComp/ReelComp';
import { AiOutlineLike } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { TiArrowForward } from "react-icons/ti";

const Page = () => {
  return (
    <div className={style.container}>
      <ReelComp/>
      <div className={style.reactions}>
        <div><AiOutlineLike/> <p>200</p></div>
        <div><BiMessage/> <p>20</p></div>
        <p>Share</p>
      </div>
    </div>
  )
}

export default Page
