'use client';

import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [showSignup, setShowSignup] = useState(true);
    return <AppContext.Provider
        value={
            {
                showSignup,
                setShowSignup
            }
        }>
        {children}
    </AppContext.Provider>
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

