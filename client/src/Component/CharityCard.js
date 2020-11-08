import React from 'react';
import Avatar from 'react-avatar';

export default function CharityCard({ name, location }) {
  return (
    <div className="avi">
      <Avatar name={name} maxInitials={3} size={150} />
      <div>
        Name : {name}
        <br />
        Location : {location}
      </div>
    </div>
  );
}
