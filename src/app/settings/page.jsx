"use client";
import React from "react";
import style from "./settings.module.css";
import Settings from "@/component/Settings/Settings";

const page = () => {
  return (
    <div className={style.settings}>
      <Settings />
    </div>
  );
};

export default page;


