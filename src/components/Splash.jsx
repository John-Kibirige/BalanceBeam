import React from 'react';
import EddyIcon from '../svgs/EddyIcon';
import { useDispatch } from 'react-redux';
import { setSignInScreen, setSplashScreen } from '../redux/screens';

const Splash = () => {
  const dispatch = useDispatch();

  const handleLoginClicked = () => {
    dispatch(setSignInScreen(true));
    dispatch(setSplashScreen(false));
  };

  return (
    <div className="px-5 py-6 flex justify-center items-center h-screen">
      <div className="container my-auto">
        <h1 className=" text-2xl font-bold font-poppins text-cyan-600 text-center">
          Balance Beam
        </h1>
        <div className="logo border border-slate-100 w-fit rounded-full px-5 py-5 mx-auto mt-10 shadow-lg">
          <EddyIcon />
        </div>
        <div className="buttons mt-10">
          <div className="signin mt-6 max-w-sm mx-auto">
            <p className="text-center text-slate-500 mb-1">
              You have an account already?
            </p>
            <button
              className="btn py-2 bg-pink-700 text-white rounded active:bg-pink-700 active:scale-105 transition-all duration-75 w-2/3 mx-auto block text-lg"
              onClick={handleLoginClicked}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
