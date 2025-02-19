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
            }
        };
        fetchUserData();
    }, []);

    return(
        <AuthContext.Provider value={{loginStatus,setLoginStatus,user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)