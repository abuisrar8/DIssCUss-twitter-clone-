import React from 'react';
import './TweetBox.css';
import {Avatar, Button} from '@material-ui/core';
import DP from './DP_disscuss.png';


function TweetBox() {
    return (
        <div className="tweetBox">
            <form className="form" >
                <div className= " tweetBox__input">
                <Avatar src={DP}></Avatar>
                <input placeholder ="Make a cause for DIssCUss .." type="text"
                 />
                
                 </div>
                 <input  className ="tweetBox__imageInput" placeholder ="Enter image URL " 
                 />
                <Button className="tweet--tweetButton">Post</Button>
            </form>
        </div>
    )
}

export default TweetBox
