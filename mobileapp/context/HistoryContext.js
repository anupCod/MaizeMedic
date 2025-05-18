import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "./AuthContext";

const HistoryContext = createContext();

export const useHistory = () => useContext(HistoryContext);

export const HistoryProvider = ({ children }) => {
    const [history, setHistory] = useState([]);
    const { user } = useAuth(); 

    useEffect(() => {
        if (user) {
            loadHistory(user.email); // Load history for logged-in user
        } else {
            setHistory([]); // Clear history when user logs out
        }
    }, [user]); // Runs every time user changes

    const loadHistory = async (email) => {
        try {
            const storedHistory = await AsyncStorage.getItem(`history_${email}`);
            setHistory(storedHistory ? JSON.parse(storedHistory) : []);
        } catch (error) {
            console.error("Error loading history:", error);
        }
    };

    const addHistory = async (prediction) => {
        if (!user) return;  // Ensure user is logged in

        const updatedHistory = [...history, prediction];
        setHistory(updatedHistory);

        try {
            await AsyncStorage.setItem(`history_${user.email}`, JSON.stringify(updatedHistory));
        } catch (error) {
            console.error("Error saving history:", error);
        }
    };

    const clearHistory = async () => {
        if (!user) return;

        try {
            await AsyncStorage.removeItem(`history_${user.email}`);
            setHistory([]);
        } catch (error) {
            console.error("Error clearing history:", error);
        }
    };

    return (
        <HistoryContext.Provider value={{ history, addHistory, clearHistory }}>
            {children}
        </HistoryContext.Provider>
    );
};


