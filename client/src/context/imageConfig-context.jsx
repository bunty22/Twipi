import React, { createContext, useState} from 'react';

export  const bgImageContext = createContext();

const BgImageContextProvider = ({children}) => {
    const [imgConfig, setImgConfig] = useState({
        bgOpacity: "1",
        borderRadius: "5"
    });
    const [bgImage, setBgImage] = useState({
        file: "",
        link: "",
        color: "",
        search: ""
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
