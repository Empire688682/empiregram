'use client';

import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [showSignup, setShowSignup] = useState(true);
    const [mode, setMode] = useState("light")
    return <AppContext.Provider
        value={
            {
                showSignup,
                setShowSignup,
                mode, 
                setMode
            }
        }>
        {children}
    </AppContext.Provider>
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

