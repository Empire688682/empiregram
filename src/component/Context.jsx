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
                console.log(response.data.results);
                const data = response.data.results;
                const friends = data.map((user, index)=>({
                    user_Name: `${user.name.first} ${user.name.last}`,
                    user_Img: user.picture.thumbnail,
                    id: index +1,
                    currentMessage: "Hello bro",
                    allMessages:{},
                    date:Date.now(),
                }));
                setFriends(friends);
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
                setDefaultMode,
                friends
            }
        }>
        {children}
    </AppContext.Provider>
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

