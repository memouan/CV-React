import React from 'react'
import "./User.css"
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'


const User = () => {
    return (
        <div className='user'>
            <img src="./images/userPhoto.png" alt="" className="user__avatar"/>
            <h1 className='user__name'>Ouannassi Mehdi</h1>
            <p className='user__profession'>Junior Frontend Developer</p>
            <div className='user__infos'>
                <p className='user__info'>< LocationOnIcon />1000, Brussels</p>
                <p className='user__info'>< PhoneIphoneIcon /> <a href='tel:+32485055337'>0485055337</a></p>
                <p className='user__info'>< AlternateEmailIcon /><a href='mailto:mehdi.ouannassi.mo@gmail.com'>mehdi.ouannassi.mo@gmail.com</a></p>
            </div>
        </div>
    )
};

export default User;