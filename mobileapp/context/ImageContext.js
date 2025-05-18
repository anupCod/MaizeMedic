import React,{createContext, useContext, useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ImageContext = createContext()

export const ImageStateProvider = ({children}) => {
    const [imageUri,setImageUri] = useState(null);
    const [profileUri,setProfileUri] = useState(null)

    useEffect(() => {
        const loadProfileUri = async () => {
            try {
                const storedProfileUri = await AsyncStorage.getItem("profileUri");
                if (storedProfileUri) {
                    setProfileUri(storedProfileUri);
                }
            } catch (error) {
                console.error("Error loading profile image: ", error);
            }
        };
        loadProfileUri();
    }, []);

    const updateProfileUri = async (uri) => {
        try {
            if (uri) {
                await AsyncStorage.setItem("profileUri", uri);
                setProfileUri(uri);
            } else {
                await AsyncStorage.removeItem("profileUri");
                setProfileUri(null);
            }
        } catch (error) {
            console.error("Error saving profile image: ", error);
        }
    };

    return(
        <ImageContext.Provider value={{imageUri,setImageUri,profileUri,setProfileUri:updateProfileUri}}>
            {children}
        </ImageContext.Provider>
    )
}

export const useImage = () => useContext(ImageContext)