import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import './sidebar.css'
import SideElement from './sideElement/SideElement';
import InboxIcon from '@material-ui/icons/Inbox';
import NearMeIcon from '@material-ui/icons/NearMe';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StarIcon from '@material-ui/icons/Star';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';


const Sidebar = () => {
    const dispatch = useDispatch()
    return (
        <div className='sidebar-contain'>
            <Button 
            startIcon={<AddIcon />}
            className='sidebar-btn'
            onClick={()=>dispatch(openSendMessage())}
            >Compose</Button>
            <div className='element-contain'>
                <SideElement icon={<InboxIcon />} title='Inbox' number={156} />
                <SideElement icon={<StarIcon />} title='Starred' number={34} />
                <SideElement icon={<QueryBuilderIcon />} title='Snoozed' number={27} />
                <SideElement icon={<LabelImportantIcon />} title='Important' number={6} />
                <SideElement icon={<NearMeIcon />} title='Sent' number={56} />
                <SideElement icon={<InsertDriveFileIcon />} title='Draft' number={56} />
            </div>
        </div>
    );
};

export default Sidebar;