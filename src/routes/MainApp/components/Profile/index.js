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
    <div className="userBox">
      <div className="boxLeft">
        <div className="userThumb">
          <img src={avatarUrl} alt="" />
        </div>
      </div>
      <div className="boxRight">
        <ul className="userDetail">
          <li>
            <strong>{name}</strong>
          </li>
          <li>
            {bio}
          </li>
          <li>
            {company}
          </li>
          <li>
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
