import React from 'react';
import './Mail.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router';

const Mail = () => {
    const history = useHistory()
    return (
        <div className='Mail-container'>
            <div className='mail-btn'>
                <IconButton onClick={()=>history.push('/')}>
                    <ArrowBackIcon />
                </IconButton>
                <IconButton><DeleteIcon /></IconButton> 
            </div>
            <div className='mail-body'>
                <div className='mail-paper'>
                    <h2>Subject</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
            </div>
        </div>
    );
};

export default Mail;