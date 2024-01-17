import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum'

function Header() {
  
  
  return (
    <div className="header">
        <IconButton>
            <PersonIcon>
            </PersonIcon>
        </IconButton>
        <img className='header_logo' src="images/heart-cat.png" alt="" />
      <IconButton>
        <ForumIcon className='header_icon' />
      </IconButton>
        
    </div>
  )
}

export default Header