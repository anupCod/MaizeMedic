import { createContext, useContext, useState,useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [loginStatus,setLoginStatus] = useState(false)
    const [user,setUser] = useState(null)
    useEffect(() => {
        const fetchUserData = async () => {
            const storedUser = await AsyncStorage.getItem("user");
            
            if (storedUser) {
                setUser(JSON.parse(storedUser));
                setLoginStatus(true)
            }
        };
        fetchUserData();
    }, []);

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem("user");
            setUser(null);
            setLoginStatus(false);
        } catch (error) {
            console.error("Error clearing user data:", error);
        }
    };

    return(
        <AuthContext.Provider value={{loginStatus,setLoginStatus,user,setUser,handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)