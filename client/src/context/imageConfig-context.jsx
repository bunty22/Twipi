import React, { createContext, useState} from 'react';

export  const bgImageContext = createContext();

const BgImageContextProvider = ({children}) => {
    
    const [bgImage, setBgImage] = useState({
        file: "",
        link: "",
        color: "",
        search: ""
    });

    const [imgConfig, setImgConfig] = useState({
        bgOpacity: "1",
        borderRadius: "5"
    });

    return (
        <bgImageContext.Provider
            value={[imgConfig, setImgConfig, bgImage, setBgImage]}
        >
            {children}
        </bgImageContext.Provider>
    )
}

export default BgImageContextProvider

