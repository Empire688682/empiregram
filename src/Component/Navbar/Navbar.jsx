"use client";
import React from "react";
import style from "./Navbar.module.css";
import Image from "next/image";
import logo from "../../../public/empiregram-logo.webp";
import { useGlobalContext } from "../Context";

const Navbar = () => {
  const { setShowSignup } = useGlobalContext();
  return (
    <div className={style.navbar}>
      <div className={style.logo_Con}>
        <div className={style.logo}>
          <Image src={logo} alt="logo" sizes="100vw" fill />
        </div>
        <p>Empiregram</p>
      </div>
      <div className={style.login} onClick={() => setShowSignup(true)}>
        <p>Signup</p>
      </div>
    </div>
  );
};

export default Navbar;


