import React from 'react';
import './EmailRow.css'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import StarIcon from '@material-ui/icons/Star';
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router';

const EmailRow = ({title, subject, description}) => {
    // useHistory 會回傳一個物件, 裡面包含許多 navigation 方法, 例如: goBack 返回上一頁, push 到某一頁…等
    const history = useHistory()
    
    return (
        <div onClick={()=>history.push('/mail')} className='outside'>
            <div className='EmailRow-contain'>
                <IconButton>
                    <CheckBoxOutlineBlankIcon />
                </IconButton>
                <IconButton>
                    <StarIcon />
                </IconButton>
                <h3 className='title'>{title} </h3>
                <h4 className='subject'>{subject} </h4>
                <h4 className='description'>{description} </h4>
            </div>
        </div>
    );
};

export default EmailRow;