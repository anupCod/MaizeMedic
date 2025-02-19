import React,{createContext, useContext, useState} from 'react'

const ImageContext = createContext()

export const ImageStateProvider = ({children}) => {
    const [imageUri,setImageUri] = useState(null);

    return(
        <ImageContext.Provider value={{imageUri,setImageUri}}>
            {children}
        </ImageContext.Provider>
    )
}

export const useImage = () => useContext(ImageContext)