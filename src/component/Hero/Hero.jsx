'use client'
import React from 'react';
import style from './Hero.module.css';
import Signup from '../Signup/Signup';
import { useGlobalContext } from '../Context';

const Hero = () => {
    const {showSignup} = useGlobalContext()
  return (
    <div className={style.hero}>
        
      <div className={style.signup_Con}>
        {
            showSignup ? <Signup/> : null
        }
      </div>
    </div>
  )
}

export default Hero
