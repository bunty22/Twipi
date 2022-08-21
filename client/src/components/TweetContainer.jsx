import React, {useState} from 'react';
import TweetImage from './TweetImage';

function TweetContainer() {
	const [url, setUrl] = useState("");
	const [tweetDetails, setTweetDetails] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const tweetUrl = new URL(url);
		let pathElements = tweetUrl.pathname.split('/');
		let tweetId = pathElements[3];

		fetch('/api/tweets', {
			method: "POST",
			body: JSON.stringify({ tweetId }),
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			}
		})
			.then((res) => res.json())
			.then((data) => setTweetDetails([data]))
			.catch((error) => console.log(error));
			
		setUrl("")
	}

    return (
        <div className="tweet-container">
            <form  onSubmit={handleSubmit} className="my-4 form--tweet">
				<div className="input-group tweet-link-input">
					<input
						type="text"
						id="tweeturl"
						required
						value={url}
						className="form-control border-dark"
						placeholder="Paste tweet link"
						onChange={(e) => setUrl(e.target.value)}
					/>
					<button className="btn btn-outline-primary btn-bg ml-2 border-dark secondary-text-color " type="submit">
						Create
					</button>
				</div>
			</form>
            <TweetImage tweets={tweetDetails}/>
        </div>
    )
}

export default TweetContainer


