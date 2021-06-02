import React, {useState} from 'react';
import './TweetBox.css';
import {Avatar, Button} from '@material-ui/core';
import DP from './DP_disscuss.png';
import db from './firebase';




function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Izrar Khan",
            userName: "israrkhan",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:"https://firebasestorage.googleapis.com/v0/b/disscuss-v0001.appspot.com/o/Izrar%20Khan%2FDP_disscuss.png?alt=media&token=228c4669-8a8e-4895-a6f6-140b6fc03a31"

        });
        setTweetMessage("");
        setTweetImage("");
    };
    return (
        <div className="tweetBox">
            <form >
                <div className= "tweetBox__input">
                <Avatar src={DP}></Avatar>
                <input
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage}
                
                
                placeholder ="Make a cause for DIssCUss .." type="text"
                 />
                
                 </div>
                 <input 
                 value ={tweetImage}
                 onChange = {(e) => setTweetImage(e.target.value)} 
                 className ="tweetBox__imageInput" 
                 placeholder ="Enter image URL " 
                 />
                <Button 
                onClick={sendTweet}
                type ="submit"
                className="tweet--tweetButton">Post</Button>
            </form>
        </div>
    )
}

export default TweetBox
