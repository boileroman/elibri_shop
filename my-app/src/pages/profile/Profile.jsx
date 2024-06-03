import React from 'react'
import UserProfile from '../../redux/features/user/UserProfile'
import style from './Profile.module.css'

const Profile = () => {
  return (
    <div className={style.profile}>
      <UserProfile/>
    </div>
  )
}

export default Profile
