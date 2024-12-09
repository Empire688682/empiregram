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
                    <Signup/>
            </div>
        </div>
    )
}

export default page
