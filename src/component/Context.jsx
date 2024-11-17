'use client';

import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [showSignup, setShowSignup] = useState(true);
    const [defaultMode, setDefaultMode] =  useState(typeof window !== "undefined" ? localStorage.getItem("colorMode"):"light");

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

