"use client";
import Navbar from '@/component/Navbar/Navbar';
import React from 'react';
import style from './page.module.css';
import Image from 'next/image';
import IMG from '../../public/empiregram-hero-bg.webp';
import { useGlobalContext } from '@/component/Context';
import Signup from '@/component/Signup/Signup';

const page = () => {
    return (
        <div className={style.page}>
            <Navbar/>
            <div className={style.col_Con}>
                <div className={style.left_col}>
                    <div className={style.img_Con}>
                    <Image src={IMG} alt="Img" fill />
                    </div>
                </div>
                <div className={style.right_col}>
                    <Signup/>
                </div>
            </div>
        </div>
    )
}

export default page
