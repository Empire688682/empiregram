import React from 'react';
import style from './Signup.module.css';
import Image from 'next/image';
import logo from '../../../public/empiregram-logo.webp';
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Signup = () => {
  return (
    <div className={style.signup}>
        <div className={style.logo}>
            <Image src={logo} alt='logo' sizes='100vw' fill/>
        </div>
        <div className={style.form_Con}>
            <h2>Create account</h2>
            <p>Continue with</p>
            <div className={style.login_options}>
                <div className={style.login_option}>
                    <FaGithub className={style.icon} size={20} />
                    <span>Continue with Github</span>
                </div>
                <div className={style.login_option}>
                    <FaGoogle className={style.icon} size={20} />
                    <span>Continue with Google</span>
                </div>
                <div className={style.login_option}>
                    <FaFacebookF className={style.icon} size={20} />
                    <span>Continue with Facebook</span>
                </div>
            </div>
            <p>or</p>
            <form>
                <input type="text" name="name" placeholder='Username' required />
                <input type="password" name="pwd" placeholder='Password' required />
                <input type="password" name="Rpwd" placeholder='Confirm password' required />
                <input type="email" name="email" placeholder='Email' required />
                <span>Add an email to be able to reset your password. Use email to optionally be discoverable by existing contacts.</span>
                <button type="submit">Register</button>
                <hr />
                <small>Already have an account? <strong>Sign in here</strong></small>
            </form>
        </div>
    </div>
  )
}

export default Signup
