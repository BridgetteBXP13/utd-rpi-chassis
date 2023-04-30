import React from 'react'
//import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className='footer'>
            <h2>Thank you for visiting our website!</h2>
            
            {/* <div className='socialMedia'>
                <EmailIcon /> <p>1234567@yahoo.com</p> <EmailIcon /> <p>1234567@yahoo.com</p><EmailIcon /> <p>1234567@yahoo.com</p>
                <EmailIcon /> <p>1234567@yahoo.com</p>
                <EmailIcon /> <p>1234567@yahoo.com</p>
            </div> */}
            
            <p className='copy'>&copy; 2023 UTD Senior Design</p>
        </div>
    )
}

export default Footer