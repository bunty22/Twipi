import React from 'react';
import TweetContainer from './TweetContainer';
import ImageController from './ImageController';
import BgImageContextProvider from '../context/imageConfig-context';
import ThemeProvider from '../context/theme-context';

function MainContainer() {
    return (
        <div className="grid-layout container-center">
            <ThemeProvider>
                <BgImageContextProvider>
                    <TweetContainer/>
                    <ImageController/>
                </BgImageContextProvider>
            </ThemeProvider>
        </div>
    )
}

export default MainContainer
