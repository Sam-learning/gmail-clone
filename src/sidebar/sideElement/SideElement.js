import React from 'react';
import './SideElement.css'

const SideElement = ({icon, title, number}) => {
    return (
        <div className='SideElement-contain'> 
            {icon} 
            <p className='SideElement-title'>{title}</p>        
            <p className='SideElement-number'>{number}</p>
        </div>
    );
};

export default SideElement;