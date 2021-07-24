import React from 'react';
import './header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, Avatar } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='left-box' >
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Logo_Gmail_%282015-2020%29.svg/1280px-Logo_Gmail_%282015-2020%29.svg.png' />
                <h3>Gmail</h3>
            </div>
            <div className='middle-box' >
                <SearchIcon />
                <input placeholder='Search mail' />
                
            </div>
            <div className='right-box' >
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <Avatar />
                </IconButton>
                
            </div>
            
        </div>
    );
};

export default Header;