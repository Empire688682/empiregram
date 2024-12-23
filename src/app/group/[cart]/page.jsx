"use client"
import React from 'react';
import style from './cart.module.css';
import MenuBar from '@/component/MenuBar/MenuBar';
import { useGlobalContext } from '@/component/Context';
import GroupLeftbarCart from '@/component/GroupLeftbarCart/GroupLeftCart';
import GroupMainCart from '@/component/GroupMainCart/GroupMainCart';

const Page = () => {
    const {friends, loading} = useGlobalContext();
    return (
        <div className={style.groupCartContainer}>
            <MenuBar />
            <div className={style.groupCart}>
               <div className={style.groupLeftCart}>
                <GroupLeftbarCart/>
               </div>
               <div className={style.groupMainCart}>
                <GroupMainCart/>
               </div>
            </div>
        </div>
    )
}

export default Page
