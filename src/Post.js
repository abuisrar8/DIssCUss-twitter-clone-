import { Avatar } from '@material-ui/core';
import React from 'react'
import './Post.css';
import DP from './DP_disscuss.png' ;
import StarsIcon from '@material-ui/icons/Stars';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';



function Post({
    displayName,
userName,
verified,
text,
image,
avatar}) {
    return (
        <div className="post">
            <div className ="post__avatar">
                <Avatar src= {DP}/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post_headerText">
                        <h3>
                            Izrar Khan{" "}
                            <span className="post__headerSpecial">
                                <StarsIcon className="post__badge" fontSize="small"/>@izrarknan
                            </span>
                        </h3>

                    </div>
                    <div className="post__headerDescription">
                        <p>!oh YES .. I m building a Twitter Clone...</p>
                    </div>
                </div>
                <img src='https://media4.giphy.com/media/39sZJ5lu2ScnwGTJRK/giphy.gif?cid=ecf05e47z7p85rgg453qg595aoi5xrp4cl2j516icxx4xxlm&rid=giphy.gif&ct=g' alt="opps !!"/>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
            


        </div>
    )
}

export default Post
