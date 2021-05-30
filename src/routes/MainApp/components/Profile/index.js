import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_USER_PROFILE } from 'utils/graphql/schema'
import ProfileStyles from './Profile.styles.js'

const Profile = () => {
  const { loading, error, data } = useQuery(GET_USER_PROFILE)
  if (loading) return ''
  if (error) return `Error! ${error.message}`

  const { avatarUrl, login, name, bio, company, location } = data.viewer
  return (
    <ProfileStyles style={{ animation: `fadeIn 1s` }}>
    <h1 className="pageTitle">Github management</h1>
    <h2 className="boxTitle">User profile</h2>
    <div className="userBox">
      <div className="boxLeft">
        <div className="userThumb">
          <img src={avatarUrl} alt="" />
        </div>
      </div>
      <div className="boxRight">
        <ul className="userDetail">
          <li>
            <span>login:</span>
            {login}
          </li>
          <li>
            <span>name:</span>
            {name}
          </li>
          <li>
            <span>bio:</span>
            {bio}
          </li>
          <li>
            <span>company:</span>
            {company}
          </li>
          <li>
            <span>location:</span>
            {location}
          </li>
        </ul>
      </div>
    </div>
  </ProfileStyles>
  )
}

Profile.propTypes = {
}

export default Profile
