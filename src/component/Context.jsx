'use client';

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [showSignup, setShowSignup] = useState(true);
    const [defaultMode, setDefaultMode] =  useState(localStorage.getItem("colorMode") || "light");
    const [friends, setFriends] = useState([]);

    const fetchFriends = async () =>{
        try {
            const response = await axios.get("https://randomuser.me/api/?results=30");
            if(response){
                setFriends(response.data.results);
                console.log(response.data.results);
            }
        } catch (error) {
            console.log("User-Error:", error);
        }
    };

    useEffect(()=>{
        fetchFriends()
    },[])
    
    useEffect(()=>{
        localStorage.setItem("colorMode", defaultMode);
      },[defaultMode])

    return <AppContext.Provider
        value={
            {
                showSignup,
                setShowSignup,
                defaultMode, 
                setDefaultMode
            }
        }>
        {children}
    </AppContext.Provider>
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

