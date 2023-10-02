import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
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
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
            type="email"
            id="email"
            placeholder="eg.email.com"
            autoComplete="off"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
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
