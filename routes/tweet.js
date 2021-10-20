const express = require("express");
const OAuth2 = require("oauth").OAuth2;
const https = require("https");

const router = express.Router();

router.post("/tweets", (req, res) => {
	const { tweetId } = req.body;

	//parameters
    const expansions = 'author_id,attachments.poll_ids,referenced_tweets.id,attachments.media_keys';
    const mediaFields = 'preview_image_url';
    const tweetFields = 'created_at';
    const userFields = 'created_at,profile_image_url,verified';

    var options = {
        method: "GET",
        hostname: "api.twitter.com",
        path: `/2/tweets/${tweetId}?expansions=${expansions}&media.fields=${mediaFields}&tweet.fields=${tweetFields}&user.fields=${userFields}`,
        headers: {
            Authorization: "Bearer " + process.env.BEARER_TOKEN
        }
    };

    https.get(options, (result) => {
        var buffer = "";
        result.setEncoding('utf8');
        result.on('data', (data) => {
            buffer += data;
        });

        result.on('end', () => {
            var tweet = JSON.parse(buffer);
            res.status(200).send(tweet);
        })
    });
});
module.exports = router;