import React from 'react'
import Profile from './components/Profile'
import Repositories from './components/Repositories'

const MainApp = () => {
  return (
    <div>
      <Profile />
      <Repositories />
    </div>
  )
}

MainApp.propTypes = {}

export default MainApp
