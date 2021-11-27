import React, { createContext, useState} from 'react';

export  const bgImageContext = createContext();

const BgImageContextProvider = ({children}) => {
    
    const [bgImage, setBgImage] = useState({
        file: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwyMTkwNTR8MHwxfHNlYXJjaHw5fHxuYXR1cmV8ZW58MHx8fHwxNjM0NDU2Njkz&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
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

