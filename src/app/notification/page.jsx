import React from "react";
import style from "./notification.module.css";
import NotificationCom from "@/component/NotificationCom/NotificationCom";

const Page = () => {
  return (
    <div className={style.notification}>
      <NotificationCom />
    </div>
  );
};

export default Page;


