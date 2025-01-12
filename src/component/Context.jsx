"use client";

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [showSignup, setShowSignup] = useState(true);
  const [defaultMode, setDefaultMode] = useState("light");
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
          allMessages: [
            {
              sender: "user",
              text: "hello how are you",
              timestamp: "2025-01-07T12:00:00Z",
            },
            {
              sender: "friend",
              text: "Hello",
              timestamp: "2025-01-07T12:02:00Z",
            },
            {
              sender: "user",
              text: "when are you coming",
              timestamp: "2025-01-07T12:05:00Z",
            },
            {
              sender: "friend",
              text: "later today",
              timestamp: "2025-01-07T12:10:00Z",
            },
            {
              sender: "user",
              text: "hello how are you",
              timestamp: "2025-01-07T12:00:00Z",
            },
            {
              sender: "friend",
              text: "Hello",
              timestamp: "2025-01-07T12:02:00Z",
            },
            {
              sender: "user",
              text: "when are you coming",
              timestamp: "2025-01-07T12:05:00Z",
            },
            {
              sender: "friend",
              text: "later today",
              timestamp: "2025-01-07T12:10:00Z",
            },
          ],
          newMessages: 2,
          seenMessages: 0,
          lastMessage: "Say hi",
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
    if (typeof window !== "undefined") {
      localStorage.setItem("colorMode", JSON.stringify(defaultMode));
    }
  }, [defaultMode]);

  useEffect(() => {
    const storedMode = localStorage.getItem("colorMode");
    if (storedMode) {
      setDefaultMode(JSON.parse(storedMode));
    }
    console.log("storedMode:", storedMode);
  }, []);

  console.log("defaultMode:", defaultMode)


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
