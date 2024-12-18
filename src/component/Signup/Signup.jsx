'use client'
import React, { useState } from 'react';
import style from './Signup.module.css';
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useGlobalContext } from '../Context';
import { useRouter } from 'next/navigation';


const Signup = () => {
    const {setShowSignup} = useGlobalContext();
    const [currentState, setCurrentState] = useState("Create acct");
    const router = useRouter()
  return (
    <div className={style.signup}>
        <div className={style.form_Con}>
            <h2>{currentState === "Create acct" ? "Create account" :"Login"}</h2>
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
                {
                    currentState === "Create acct" ? <input type="password" name="Rpwd" placeholder='Confirm Password' required /> : ""
                }
                {
                    currentState === "Create acct" ? <input type="email" name="email" placeholder='Email' required /> : ""
                }
                {
                    currentState === "Create acct" ? <input type="text" name="phone" placeholder='Phone' required /> : ""
                }
                <button onClick={()=>router.push("/chat")} type="submit">{currentState === "Create acct"? "Register":"Login"}</button>
                {
                    currentState === "Login" && <p style={{cursor: "pointer", textDecoration: "underline"}}>Forgotten password?</p>
                }
                <hr />
                {
                    currentState === "Create acct" ? <p>Already have an account? <strong onClick={() => setCurrentState("Login")}>Login</strong></p> : <p>Don&apos;t have an account? <strong onClick={() => setCurrentState("Create acct")}>Sign up</strong></p>
                }
            </form>
        </div>
    </div>
  )
}

export default Signup
