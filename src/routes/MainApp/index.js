import React from 'react'
import Profile from './components/Profile'
import Repositories from './components/Repositories'
import MainAppStyles from './MainApp.styles'

const MainApp = () => {
  return (
    <MainAppStyles>
      {/* <h1 className="pageTitle">Github graphql app</h1> */}
      <div className="mainAppRow">
        <div className="profileCol">
          <Profile />
        </div>
        <div className="repositoriesCol">
          <Repositories />
        </div>
      </div>
    </MainAppStyles>
  )
}

MainApp.propTypes = {}

export default MainApp
