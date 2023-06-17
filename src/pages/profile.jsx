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

    </main>
  );
};

export default Profile;
