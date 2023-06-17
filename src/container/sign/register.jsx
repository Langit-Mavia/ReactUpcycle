import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDataToLocal } from './../localstorage/localstorages';

const apikey = import.meta.env.VITE_API_KEY;

const RegisterForm = ({ isOpen, onClose, setUser }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkpassword, setCheckPassword] = useState('');
  const [gender, setGender] = useState('');
  const [response, setResponse] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const errors = {};
    if (!username) {
      errors.username = 'Username is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    if (!checkpassword) {
      errors.checkpassword = 'Repeat password is required';
    }
    if (!gender) {
      errors.gender = 'Gender is required';
    }
    if (password !== checkpassword) {
      errors.checkpassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    axios
      .get(apikey)
      .then((res) => {
        const users = res.data;
        const foundUser = users.find((user) => user.username === username || user.email === email);

        if (foundUser) {
          toast.error('Your username or email already exists', { position: toast.POSITION.TOP_CENTER });
        } else {
          axios
            .post(apikey, { username, email, password, gender })
            .then((res) => {
              const userData = {
                username: foundUser.username,
                email: foundUser.email,
                gender: foundUser.gender,
              };
              setResponse(res.data);
              saveDataToLocal(userData);
              setUser(userData);
              setUsername('');
              setEmail('');
              setPassword('');
              setCheckPassword('');
              setGender('');
              setFormErrors({});
              toast.success('You have successfully registered', { position: toast.POSITION.TOP_CENTER });
              saveDataToLocal(userData); 
            })
            .catch((err) => console.log(err));
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
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="formModal">
        <label className="formLabel">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="forminput"
          />
          {formErrors.username && <span className="error">{formErrors.username}<br /></span>}
        </label>
        <label className="formLabel">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="forminput"
          />
          {formErrors.email && <span className="error">{formErrors.email}<br /></span>}
        </label>
        <label className="formLabel">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="forminput"
          />
          {formErrors.password && <span className="error">{formErrors.password}<br /></span>}
        </label>
        <label className="formLabel">
          Repeat Password:
          <input
            type="password"
            value={checkpassword}
            onChange={(e) => setCheckPassword(e.target.value)}
            className="forminput"
          />
          {formErrors.checkpassword && <span className="error">{formErrors.checkpassword}<br /></span>}
        </label>
        <label className="formLabel">
          Gender:
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="optionform"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {formErrors.gender && <span className="error">{formErrors.gender}</span>}
        </label>
        <button type="submit" className="button__form">
          Register
        </button>
      </form>
    </Modal>
  );
};

export default RegisterForm;