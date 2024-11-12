'use client'
import React from 'react';
import style from './Hero.module.css';
import Signup from '../Signup/Signup';
import { useGlobalContext } from '../Context';

const Hero = () => {
    const { showSignup } = useGlobalContext();

    return (
        <div className={style.hero}>
            <div className={style.signup_Con}>
                {
                    showSignup ? <Signup /> : <div>
                        <h1>Welcome to Empiregram</h1>
                        <p>Your personal space for seamless communication. Connect, chat, and share effortlessly with friends and colleagues.</p>
                        <p>Whether it's for business or casual conversations, Empiregram brings your messages to life with instant notifications, easy group chats, and much more.</p>
                        <p>Join the Empiregram community today and elevate your messaging experience!</p>
                    </div>
                }
            </div>
        </div>
    );
}

export default Hero;
