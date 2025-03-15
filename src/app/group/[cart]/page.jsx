"use client";
import React from "react";
import style from "./cart.module.css";
import { useGlobalContext } from "@/Component/Context";
import GroupLeftbarCart from "@/Component/GroupLeftbarCart/GroupLeftCart";
import GroupMainCart from "@/Component/GroupMainCart/GroupMainCart";

const Page = () => {
  const { friends, loading } = useGlobalContext();
  return (
    <div className={style.groupCartContainer}>
      <div className={style.groupCart}>
        <div className={style.groupLeftCart}>
          <GroupLeftbarCart />
        </div>
        <div className={style.groupMainCart}>
          <GroupMainCart />
        </div>
      </div>
    </div>
  );
};

export default Page;
