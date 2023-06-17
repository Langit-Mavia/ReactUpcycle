import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const apikey = import.meta.env.VITE_API_KEY;

const Profile = ({user, setUser}) => {

  useEffect(() => {
    fetch(apikey)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const updatedUser = {
      ...user,
      name: form.name.value,
      email: form.email.value,
      gender: form.gender.value,
    };

    if (form.password.value !== "") {
      // Perform API call to update the password
      if (form.password.value !== form.passwordConfirmation.value) {
        toast.error('Password confirmation does not match', { position: toast.POSITION.TOP_CENTER });
        return;
      }
      else{
        fetch(apikey, {
          method: 'PUT',
          body: JSON.stringify({ password: form.password.value }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data => {
          toast.success('You have successfully logged in', { position: toast.POSITION.TOP_CENTER });
        })
        .catch(error => console.log(error));
      }
    }

    // Perform API call to update the user data
    fetch(apikey, {
      method: 'PUT',
      body: JSON.stringify(updatedUser),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setUser(data);
      toast.success('You have successfully logged in', { position: toast.POSITION.TOP_CENTER });
    })
    .catch(error => console.log(error));

    setUser(updatedUser);
  };

  return (
    <main className="main">
      {/*==================== PROFILE ====================*/}
      <section className="profile__profile">
        <div className="profile__container">
          <div className="profile__card profile__card-left">
            <img
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1.jpg"
              alt="Foto profil"
              className="profile__img"
            />
          </div>
          <div className="profile__card profile__card-right profile__card-big">
            <h2 className="center">Update Profile</h2>
            <form onSubmit={handleFormSubmit} id="updatedata__form">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={user? user.username: ''}
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={user? user.email: ''}
              />
              <label htmlFor="password">New Password:</label>
              <input
                type="password"
                className="password"
                name="password"
              />
              <label htmlFor="confirm-password">Confirm Password:</label>
              <input
                type="password"
                className="confirm-password"
                name="confirm-password"
              />
              <label htmlFor="gender">Gender:</label>
              <select id="gender" name="gender" defaultValue={user? user.gender: ''}>
                <option value="male">Laki-laki</option>
                <option value="female">Perempuan</option>
              </select>
              <button id="save-btn" type="submit">Save</button>
            </form>
          </div>
          <div className="profile__card">
            <button
              className="profile__button"
              onClick={() => console.log("Navigate to UpWallet")}
            >
              UpWallet.
            </button>
            <button
              className="profile__button"
              onClick={() => console.log("Navigate to UpChallenge")}
            >
              UpChallenge
            </button>
            <button
              className="profile__button button1"
              onClick={() => console.log("Sign Out")}
            >
              Sign Out
            </button>
          </div>
        </div>
        <div className="maps__overlay" />
      </section>
    </main>
  );
};

export default Profile;
