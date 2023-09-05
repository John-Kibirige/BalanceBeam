import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackIcon from '../svgs/BackIcon';
import { unSetYear } from '../redux/year';

const MonthlyDetails = () => {
  const { year } = useSelector((st) => st.year);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(unSetYear());
  };
  return (
    <div>
      <div className="title flex items-center justify-between mx-3 border py-1 px-2 shadow-md ">
        <h1 className=" font-semibold text-xl text-teal-800">
          {year}
        </h1>
        <button className=" shadow-md active:scale-110" onClick={handleClick}>
          <BackIcon />
        </button>
      </div>
    </div>
  );
};

export default MonthlyDetails;
