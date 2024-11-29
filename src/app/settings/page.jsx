'use client';
import React from 'react';
import style from './settings.module.css';
import Settings from '@/component/Settings/Settings';
import MenuBar from '@/component/MenuBar/MenuBar';

const page = () => {
  return (
    <div className={style.settings}>
      <MenuBar/>
      <Settings/>
    </div>
  )
}

export default page
