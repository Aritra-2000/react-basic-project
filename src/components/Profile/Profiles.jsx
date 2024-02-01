import React from 'react'
import pic from '../image/profile-1.png'
import "./profile.css"

export const Profile = () => {
  return (
    <div>
      <div className='header'></div>
      <div className='profile'>
        <img src={pic} alt="profile-picture" />
      </div>

      <div className='lower'>
        <h4 className='name'> Aritra Paul <span>23</span></h4>
        <p className='place'>India</p>
        <hr></hr>
        <div className='follower'>
          <div className='check'>
            <h4>80k</h4>
            <p>Followers</p>
          </div>
          <div className='check'>
            <h4>803k</h4>
            <p>Likes</p>
          </div>
          <div className='check'>
            <h4>1.4k</h4>
            <p>Photos</p>
          </div>
        </div>
      </div>
    </div>
  )
}
