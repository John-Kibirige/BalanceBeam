import React, { useState } from 'react';
import getFormErrors from '../../javascript/signUp';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { setSignedInUpUser } from '../../redux/signedInUpUser';
import BackArrow from '../../svgs/BackArrow';
import {
  setSignInScreen,
  setSignUpScreen,
  setSplashScreen,
} from '../../redux/screens';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    setFormErrors((prev) => {
      return {
        ...prev,
        [name]: '',
      };
    });

    setFormErrors(getFormErrors(formData));
  };

  const [firebaseError, setFirebaseError] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const cond1 = Object.values(formData).every((elem) => elem !== '');
    const cond2 = Object.values(formErrors).some((elem) => elem !== '');
    setFormErrors(getFormErrors(formData));
    if (!(cond1 && cond2)) return;
    setFormErrors({ email: '', password: '', confirmPassword: '' });

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredentials) => {
        dispatch(setSignedInUpUser(userCredentials.user.email));
        dispatch(setSignUpScreen(false));
      })
      .catch((error) => {
        if (error.message.length > 0)
          setFirebaseError('This email is already taken');
      });
  };

  // handling the back arrow
  const handleBackArrowClicked = () => {
    dispatch(setSignUpScreen(false));
    dispatch(setSplashScreen(true));
  };

  return (
    <section className="px-4 py-5 max-w-sm mx-auto">
      <div
        className="back-arrow-cont border w-fit px-[3px] py-[3px] rounded-full cursor-pointer shadow-lg border-slate-100 active:scale-110 transition-all duration-75 mb-6 "
        onClick={handleBackArrowClicked}
      >
        <BackArrow />
      </div>

      <h1 className="font-bold text-2xl text-pink-600 text-center">
        Create a new account
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="email mt-4">
          <label className=" block text-slate-600" htmlFor="email">
            Email
          </label>
          <input
            className='"py-1 border-pink-700 focus:border-pink-900 focus:border-2 focus:outline-none focus:ring-0 placeholder:text-sm w-full focus:bg-pink-50 font-poppins text-purple-900'
            type="text"
            id="email"
            placeholder="eg.email.com"
            autoComplete="off"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email.length > 0 && (
            <p className="error text-sm text-blue-600 mt-[2px]">
              {formErrors.email}
            </p>
          )}
        </div>
        <div className="password mt-4">
          <label className=" block text-slate-600" htmlFor="password">
            Password
          </label>
          <input
            className='"py-1 border-pink-700 focus:border-pink-900 focus:border-2 focus:outline-none focus:ring-0 placeholder:text-sm w-full focus:bg-pink-50 font-poppins text-purple-900'
            type="password"
            id="password"
            placeholder="eg.password"
            autoComplete="new-password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {formErrors.password.length > 0 && (
            <p className="error text-sm text-blue-600 mt-[2px]">
              {formErrors.password}
            </p>
          )}
        </div>
        <div className="confirm-password mt-4">
          <label className=" block text-slate-600" htmlFor="password">
            Confirm Password
          </label>
          <input
            className='"py-1 border-pink-700 focus:border-pink-900 focus:border-2 focus:outline-none focus:ring-0 placeholder:text-sm w-full focus:bg-pink-50 font-poppins text-purple-900'
            type="password"
            id="password"
            placeholder="eg.password"
            autoComplete="new-password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {formErrors.confirmPassword.length > 0 && (
            <p className="error text-sm text-blue-600 mt-[2px]">
              {formErrors.confirmPassword}
            </p>
          )}
        </div>
        <div className="submit mt-6 w-1/2 mx-auto">
          <button className="btn w-full py-2 bg-pink-700 text-white rounded active:bg-pink-700 active:scale-105 transition-all duration-75">
            Sign Up
          </button>
        </div>

        {firebaseError && (
          <p className="firebase-error text-green-600 text-xl text-center mt-5">
            {firebaseError}
          </p>
        )}
      </form>
    </section>
  );
};

export default SignUp;
