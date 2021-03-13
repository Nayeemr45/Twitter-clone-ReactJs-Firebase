import React from 'react';
import '../asset/css/sidebar.css'
import SidebarOption from './SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/List';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core'

function Sidebar() {
    return (
        <div className='sidebar'>
            <TwitterIcon className='sidebar-twitter-icon'/>
            <SidebarOption active Icon={HomeIcon}  text="Home" />            
            <SidebarOption text="Explore" Icon={ExploreIcon}/>            
            <SidebarOption text="Notifications" Icon={NotificationsNoneIcon}/>            
            <SidebarOption text="Messeges" Icon={MailOutlineIcon}/>            
            <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon}/>            
            <SidebarOption text="List" Icon={ListIcon}/>            
            <SidebarOption text="Profile" Icon={PersonOutlineIcon}/>            
            <SidebarOption text="More" Icon={MoreHorizIcon}/>            

            <Button variant="outlined" className="tweet-button" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
