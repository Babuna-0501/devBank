import React from 'react'
import "./home.scss";
import Navbar from "../../components/navbar/Navbar"
import Subnav from '../../components/subnav/Subnav';
import News from '../../components/news/News';
import Remain from '../../components/remain/Remain';

const home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Subnav/>
      <News/>
      <Remain/>
    </div>
  )
}

export default home;