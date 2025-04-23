import React from 'react'
import './ProfileCard.css'

function ProfileCard({ name, photo, bio }) {
  return (
    <div className="profile-card">
      <img src={photo} alt={`${name}'s photo`} />
      <h2></h2>
      <p>{bio}</p>
    </div>
  )
}

export default ProfileCard
