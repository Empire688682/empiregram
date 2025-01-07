"use client";

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [showSignup, setShowSignup] = useState(true);
  const [defaultMode, setDefaultMode] = useState(
    localStorage.getItem("colorMode") || "light",
  );
  const [friends, setFriends] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFriends = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://randomuser.me/api/?results=30");
      if (response) {
        const data = response.data.results;
        setPosts(data);
        setLoading(false);
        const friends = data.map((user) => ({
          user_Name: `${user.name.first} ${user.name.last}`,
          user_Img: user.picture.thumbnail,
          currentMessage: "Hello",
          id: user.login.uuid,
          allMessages: {},
          newMessages: 0,
          seenMessages: 0,
          lastMessage: "",
          date: Date.now(),
        }));
        setFriends(friends);
      }
    } catch (error) {
      console.log("User-Error:", error);
    }
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  useEffect(() => {
    localStorage.setItem("colorMode", defaultMode);
  }, [defaultMode]);

  return (
    <AppContext.Provider
      value={{
        showSignup,
        setShowSignup,
        defaultMode,
        setDefaultMode,
        friends,
        posts,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
