import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDataToLocal } from './../localstorage/localstorages';

const apikey = import.meta.env.VITE_API_KEY;

const LoginForm = ({ isOpen, onClose, setUser}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(apikey)
      .then((res) => {
        const users = res.data;
        const foundUser = users.find((user) => user.username === username && user.password === password);

        if (foundUser) {
          const userData = {
            username: foundUser.username,
            email: foundUser.email,
            gender: foundUser.gender,
            avatar: foundUser.avatar,
          };
          saveDataToLocal(userData);
          setUsername('');
          setPassword('');
          toast.success('You have successfully logged in', { position: toast.POSITION.TOP_CENTER });
          setUser(userData);
          saveDataToLocal(userData); 
        } else {
          toast.error('Incorrect username or password', { position: toast.POSITION.TOP_CENTER });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <h2 className="section__title">Login</h2>
      <form onSubmit={handleSubmit} className="formModal">
        <label className="formLabel">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="forminput"
          />
        </label>
        <label className="formLabel">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="forminput"
          />
        </label>
        <button type="submit" className="button__form">
          Login
        </button>
      </form>
    </Modal>
  );
};

export default LoginForm;