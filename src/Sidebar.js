import React from 'react';
import SidebarOption from './SidebarOption.js';
import './Sidebar.css';

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import {Button} from "@material-ui/core"





function Sidebar() {
    return (
        <div className="sidebar">
            {/* {Twitter icon} */}
            <TwitterIcon className="sidebar__twitterIcon"/>


            <SidebarOption  active Icon={HomeIcon} text ="Home" />
            <SidebarOption Icon={SearchIcon} text ="Explore"/>
            <SidebarOption Icon={NotificationsNoneIcon}text ="Notification"/>
            <SidebarOption Icon={MailOutlineIcon}text ="Message"/>
            <SidebarOption Icon={BookmarkBorderIcon}text ="Bookmark"/>
            <SidebarOption Icon={ListAltIcon}text ="List"/>
            <SidebarOption Icon={PersonOutlineIcon}text ="Profile"/>
            <SidebarOption Icon={MoreHorizRoundedIcon}text ="More"/>


            


            {/* {Button} */}

            <Button variant="outlined" className="sidebar__tweet">Tweet</Button>

            
        </div>
    );
}

export default Sidebar;
