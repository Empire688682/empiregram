import React from "react";
import style from "./Username.module.css";
import UserData from "@/component/UserData/UserData";
import MenuBar from "@/component/MenuBar/MenuBar";

const page = () => {
  return (
    <div className={style.username}>
      <MenuBar />
      <div className={style.userData}>
        <UserData />
      </div>
    </div>
  );
};

export default page;
