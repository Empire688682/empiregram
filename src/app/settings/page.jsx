import React from 'react';
import style from './settimgs.module.css';
import Settings from '@/component/Settings/Settings';
import SettingsLeftBar from '@/component/SettingsLeftBar/SettingsLeftBar';

const page = () => {
  return (
    <div className={style.settings}>
      <Settings/>
    </div>
  )
}

export default page
