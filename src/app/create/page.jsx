"use client";
import React, { useState } from "react";
import style from "./create.module.css";
import CreateGroupLeftbar from "@/component/CreateGroupLeftbar/CreateGroupLeftbar";
import MenuBar from "@/component/MenuBar/MenuBar";
import CreateGroupPrev from "@/component/CreateGroupPrev/CreateGroupPrev";

const Page = () => {
  const [groupData, setGroupData] = useState({
    group_name: "",
    group_description: "",
    group_image: "",
    group_privacy: "",
  });
  return (
    <div className={style.create}>
      <MenuBar />
      <div className={style.create_leftbar}>
        <CreateGroupLeftbar groupData={groupData} setGroupData={setGroupData} />
      </div>
      <div className={style.create_Container}>
        <CreateGroupPrev groupData={groupData} setGroupData={setGroupData} />
      </div>
    </div>
  );
};

export default Page;
