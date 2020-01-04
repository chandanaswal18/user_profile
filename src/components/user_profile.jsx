import React from 'react';

const UserProfile = props => {
  const userDetail = props.location.userData.user;
  return (
    <div className="user-info">
      <img alt="image1" src={userDetail.avatar} className="user-info-image" />
      <div className="user-card-info">
        <div>First Name: {userDetail.first_name}</div>
        <div>Last Name: {userDetail.last_name}</div>
        <div>Email: {userDetail.email}</div>
      </div>
    </div>
  );
};

export default UserProfile;
