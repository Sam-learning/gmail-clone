import React from 'react';
import './MailList.css'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow/EmailRow';

const MailList = () => {
    return (
        <div className='MailList-container'>
            <div className='MailList-top-container'>
                <div className='right-element'>
                    <IconButton><CheckBoxOutlineBlankIcon /></IconButton>
                    <IconButton><ArrowDropDownIcon /></IconButton>
                    <IconButton><RedoIcon /></IconButton>
                    <IconButton><MoreVertIcon /></IconButton>
                </div>
                <div className='left-element'>
                    <IconButton><ChevronLeftIcon /></IconButton>
                    <IconButton><ChevronRightIcon /></IconButton>
                    <IconButton><KeyboardHideIcon /></IconButton>
                    <IconButton><SettingsIcon /></IconButton>
                </div>
            </div>
            <div className='section'>
                <div className='section-element'>
                    <InboxIcon />
                    <span>Primary</span>
                </div>
                <div className='section-element'>
                    <PeopleIcon />
                    <span>Social</span>
                </div >
                <div className='section-element'>
                    <LocalOfferIcon />
                    <span>Promotions</span>
                </div>
            </div>
            <div className='eamilList'>
                <EmailRow title='Twitch' subject='aa' description='Hello World' />
                <EmailRow title='Twitch' subject='aa' description='Hello World' />
            </div>
        </div>
    );
};

export default MailList;