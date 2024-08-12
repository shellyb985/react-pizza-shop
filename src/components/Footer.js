import React from 'react'
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import X from '@mui/icons-material/X';
import LinkedIn from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Instagram/>
            <Facebook/>
            <X/>
            <LinkedIn/>
        </div>
        <p>&copy; 2024 pedrotechpizza.com</p>
    </div>
  )
}

export default Footer