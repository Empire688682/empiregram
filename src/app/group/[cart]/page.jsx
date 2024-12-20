"use client"
import React from 'react';
import style from './cart.module.css';
import { IoIosAddCircle } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import Image from 'next/image';
import MenuBar from '@/component/MenuBar/MenuBar';
import { useGlobalContext } from '@/component/Context';

const Page = () => {
    const {friends, loading} = useGlobalContext();
    return (
        <div className={style.groupCartContainer}>
            <MenuBar />
            <div className={style.groupCart}>
               <div className={style.groupLeftCart}>

               </div>
               <div className={style.groupCentralCart}>

               </div>
               <div className={style.groupRightCart}>

               </div>
            </div>
        </div>
    )
}

export default Page
