import React from 'react';
import style from './Hero.module.css';
import Signup from '../Signup/Signup';

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.signup_Con}>
        <Signup/>
      </div>
    </div>
  )
}

export default Hero
