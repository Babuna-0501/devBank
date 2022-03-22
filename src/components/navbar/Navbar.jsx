import React from 'react'
import { SocialIcon } from 'react-social-icons';
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src="https://www.dbm.mn/assets/images/main-logo.png" alt="" />
        <div>
          <SocialIcon className='scl' network="twitter" bgColor="#00acee"  style={{ height: 30, width: 30 }}/>
          <SocialIcon className='scl' network="facebook" bgColor="#3b5998" style={{ height: 30, width: 30 }} />
          <SocialIcon className='scl' network="youtube" bgColor="#c4302b"  style={{ height: 30, width: 30 }}/>
          <SocialIcon className='scl' url="https://linkedin.com/in/jaketrent"  style={{ height: 30, width: 30 }}/>
        </div>
    </div>
  )
}

export default Navbar