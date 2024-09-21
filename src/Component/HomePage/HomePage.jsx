import React from 'react'
import './HomePage.css'
import Home from '../Home/Home'
import DownCount from '../DownCount/DownCount'
import Visit from '../Visit/Visit'

const HomePage = () => {
  return (
    <div className='main'>
    <Home/>
    <DownCount/>
     <Visit/>
    </div>
  )
}

export default HomePage