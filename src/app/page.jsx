import Hero from '@/component/Hero/Hero';
import Navbar from '@/component/Navbar/Navbar';
import React from 'react';
import style from './page.module.css';

const page = () => {
    return (
        <div className={style.page}>
            <Navbar />
            <Hero />
        </div>
    )
}

export default page
