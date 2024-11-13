"use client"
import Hero from '@/component/Hero/Hero';
import Navbar from '@/component/Navbar/Navbar';
import React from 'react';
import style from './page.module.css';
import { useGlobalContext } from '@/component/Context';

const page = () => {
    const {showSignup, setShowSignup} = useGlobalContext()
    return (
        <div className={style.page}>
            <Navbar />
            <Hero />
            {
                !showSignup && <div className={style.page_hero}>
                <h1>Welcome to Empiregram</h1>
                <p>Your personal space for seamless communication. Connect, chat, and share effortlessly with friends and colleagues.</p>
                <p>Whether it's for business or casual conversations, Empiregram brings your messages to life with instant notifications, easy group chats, and much more.</p>
                <p>Join the Empiregram community today and elevate your messaging experience!</p>
                <button onClick={()=>setShowSignup(true)}>Get Started</button>
            </div>
            }
        </div>
    )
}

export default page
