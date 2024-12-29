import React from 'react';
import style from "./notification.module.css";
import NotificationCom from '@/component/NotificationCom/NotificationCom';
import MenuBar from '@/component/MenuBar/MenuBar';

const Page = () => {
  return (
    <div className={style.notification}>
        <MenuBar/>
      <NotificationCom/>
    </div>
  )
}

export default Page
