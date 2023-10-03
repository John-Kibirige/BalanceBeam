import React, { useState } from 'react';
import getFormErrors from '../../javascript/signUp';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(getFormErrors(formData));
    if (Object.values(formErrors).some((elem) => elem !== '')) return;
    // createUserWithEmailAndPassword()
  };

  return (
    <section className="px-4 py-5 max-w-sm mx-auto">
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
      </form>
    </section>
  );
};

export default SignUp;
