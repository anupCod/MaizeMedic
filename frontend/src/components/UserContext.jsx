import React, { createContext, useContext, useState, useEffect } from "react";

// Create the UserContext
const UserContext = createContext();

// Custom hook to use UserContext
export const useUser = () => {
  return useContext(UserContext);
};

// UserContext Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // Initialize user as null
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("accessToken");
  
    console.log("Stored user from localStorage: ", storedUser);  // Debugging
    console.log("Stored token from localStorage: ", storedToken);  // Debugging
  
    if (storedUser && storedToken) {
      try {
        const parsedUser = JSON.parse(storedUser);  // Safely parse the user data
        setUser(parsedUser);  // Set user state
        setAccessToken(storedToken);  // Set accessToken state
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
        // Handle the case when parsing fails (you may need to clear localStorage in such cases)
      }
    } else {
      console.log("No user or token found in localStorage.");
    }
  }, []);
   // Only run this effect once when the component mounts

  return (
    <UserContext.Provider value={{ user, accessToken, setUser, setAccessToken }}>
      {children}
    </UserContext.Provider>
  );
};
