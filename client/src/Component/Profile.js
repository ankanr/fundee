import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Profile(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async (e) => {
    const url = 'http://localhost:3000/user/profile';

    await axios
      .get(url, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        setName(response.data.username);
        setEmail(response.data.email);
        setAge(response.data.age);
        setDonations(response.data.donations);
      })
      .catch((e) => console.log(e));
  };

  let number = 0;

  return (
    <div className="profile-wrapper">
      <div className="title">Your Profile</div>
      <div className="profile-main">
        <div className="name">Name: {name}</div>
        <div className="age">Age: {age}</div>
        <div className="email">Email: {email}</div>
        <div className="donations">
          <div>
            Donations:
            {donations.length !== 0 ? (
              donations.map((donation) => (
                <div key={donation._id}>
                  {++number}) {donation.donation}
                </div>
              ))
            ) : (
              <div>No Donations Made</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
