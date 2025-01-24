"use client";
import React, { useState } from "react";
import style from "./Signup.module.css";
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import axios from "axios";

const Signup = () => {
  const [currentState, setCurrentState] = useState("Create acct");
  const [loading, setLoading] = useState(false);
  const [userResponse, setUserResponse] = useState(null);
  const [userData, setUserData] = useState({
    firstname:"",
    lastname:"",
    password: "",
    passwordRepeat: "",
    username: "",
    email: "",
    phone: "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const createUser = async () => {
    setLoading(true)
    try {
      const response = await axios.post("api/auth/register", userData);
      if (response.data.success) {
        setUserResponse(response.data.user);
        setUserData({
          firstname: "",
          lastname: "",
          password: "",
          passwordRepeat: "",
          username: "",
          email: "",
          phone: "",
        })
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false)
    }
    console.log("userResponse:", userResponse);
  };

  const handleFormSubmision = (e) => {
    e.preventDefault();
    createUser();
  };

  return (
    <div className={style.signup}>
      <div className={style.form_Con}>
        <h2>{currentState === "Create acct" ? "Create account" : "Login"}</h2>
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
        <form onSubmit={handleFormSubmision}>
          {
            currentState === "Create acct" && (
              <>
                <input
                  type="text"
                  onChange={handleOnchange}
                  value={userData.firstname}
                  name="firstname"
                  placeholder="Firstname"
                  required
                />
                <input
                  type="text"
                  onChange={handleOnchange}
                  value={userData.lastname}
                  name="lastname"
                  placeholder="Lastname"
                  required
                />
              </>
            )
          }
          <input
            type="text"
            onChange={handleOnchange}
            value={userData.username}
            name="username"
            placeholder="Username"
            required
          />
          <input
            type="password"
            onChange={handleOnchange}
            value={userData.password}
            name="password"
            placeholder="Password"
            required
          />
          {currentState === "Create acct" ? (
            <input
              type="password"
              name="passwordRepeat"
              onChange={handleOnchange}
              value={userData.passwordRepeat}
              placeholder="Repeat password"
              required
            />
          ) : (
            ""
          )}
          {currentState === "Create acct" ? (
            <input
              type="email"
              name="email"
              onChange={handleOnchange}
              value={userData.email}
              placeholder="Email"
              required
            />
          ) : (
            ""
          )}
          {currentState === "Create acct" ? (
            <input
              type="text"
              name="phone"
              onChange={handleOnchange}
              value={userData.phone}
              placeholder="Phone"
              required
            />
          ) : (
            ""
          )}
          <button type="submit">
            {
              loading ? "Loading....."
                :
                <>
                  {currentState === "Create acct" ? "Register" : "Login"}
                </>
            }
          </button>
          {currentState === "Login" && (
            <p style={{ cursor: "pointer", textDecoration: "underline" }}>
              Forgotten password?
            </p>
          )}
          <hr />
          {currentState === "Create acct" ? (
            <p>
              Already have an account?{" "}
              <strong onClick={() => setCurrentState("Login")}>Login</strong>
            </p>
          ) : (
            <p>
              Don&apos;t have an account?{" "}
              <strong onClick={() => setCurrentState("Create acct")}>
                Sign up
              </strong>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
