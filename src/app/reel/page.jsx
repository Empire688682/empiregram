import React from 'react';
import style from "./reel.module.css";
import ReelComp from '@/component/ReelComp/ReelComp';

const Page = () => {
  return (
    <div className={style.container}>
      <ReelComp/>
    </div>
  )
}

export default Page
