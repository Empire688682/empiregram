"use client";
import React, { useState } from "react";
import style from "./group.module.css";
import GroupCom from "@/component/GroupCom/GroupCom";
import GroupLeftBar from "@/component/GroupLeftBar/GroupLeftBar";


const Page = () => {
  const [showGroups, setShowGroups] = useState("discover");
  return (
    <div className={style.group}>
      <div className={style.group_Con}>
        <div className={style.group_left_bar}>
          <GroupLeftBar setShowGroups={setShowGroups} />
        </div>
        <div className={style.group_Com}>
          <GroupCom showGroups={showGroups} />
        </div>
      </div>
    </div>
  );
};

export default Page;


