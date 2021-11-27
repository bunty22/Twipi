import React, { useContext } from 'react';
import verifiedBadge from '../assets/verified.svg';
import { bgImageContext } from '../context/imageConfig-context';
import { themeContext } from '../context/theme-context';
import html2canvas from 'html2canvas';

function TweetImage({tweets = []}) {
    const { themes } = useContext(themeContext);
    const [imgConfig] = useContext(bgImageContext);

    let theme = themes.isLightTheme ? themes.light : themes.dark;

    const downloadImg = () => {
        const tweetImage = document.getElementById("download-image");

        html2canvas(tweetImage,
            { useCORS: true }
        ).then(function(canvas){
            const d = document.createElement("a");
            d.href = canvas.toDataURL("image/png");
            d.download = "Twipi-mage.png";
            d.click();
        });
    };

    const changeTheme = () => {
        if(theme.bgColor === "#ffffff"){
            return `rgba(255,255,255,${imgConfig.bgOpacity})`
        }else{
            return `rgba(0,0,0,${imgConfig.bgOpacity})`
        }
    }

    const changeBackgroundImage = () => {
		if (imgConfig.file) {
			return `url(${imgConfig.file})`;
		} else if (imgConfig.link) {
			return `url(${imgConfig.link})`;
		} else if (imgConfig.color) {
			return `${imgConfig.color}`;
		} else if (imgConfig.search) {
			return `url(${imgConfig.search})`;
		}
	};
    
    return (
        <div className="tweet-image-group">
            <div 
                className="tweet-image" 
                id="download-image"
                style={{
                    background: `${changeBackgroundImage()} no-repeat center/cover`
                }}
            >
                {tweets.map((tweet) => (
                    <div 
                        className="tweet-content"
                        key={tweet.data.id}
                        style={{
                            color: theme.text,
                            borderRadius: `${imgConfig.borderRadius}px`,
                            backgroundColor: changeTheme()
                        }}
                    >
                        <div className="profile-group">
                            <img src={tweet.includes.users[0].profile_image_url} 
                                 alt="profile-img" 
                                 className="profile-img"
                            />
                            <div className="user-details">
                                <p className="name mb-0">
                                {tweet.includes.users[0].name}
                                    <span className="verified-badge">
                                        {tweet.includes.users[0].verified ? (
                                            <img 
                                                    src={verifiedBadge}
                                                    alt="verified-badge"
                                                    className="verified-badge"
                                            />
                                        ): (
                                            ""
                                        )}
                                    </span>
                                </p>
                                
                                <p className="username mt-1 mb-0">@{tweet.includes.users[0].username}</p>
                            </div>
                        </div>
                        <p className="tweet-text mb-0">
                            {tweet.data.text}
                        </p>
                    </div>
                ))}
            </div>
            <button  className="btn btn-primary btn-md my-4" onClick={() => downloadImg()} >
                DOWNLOAD
            </button>
        </div>
    )
}

export default TweetImage
