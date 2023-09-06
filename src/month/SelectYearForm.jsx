import React from 'react';
import { getPresentYears } from '../javascript/month';
import { useDispatch, useSelector } from 'react-redux';
import { setYear } from '../redux/year';

const SelectYearForm = ({ data }) => {
  const { year } = useSelector((st) => st.year);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setYear(e.target.id));
  };

  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {getPresentYears(data).map((yr) => {
        return (
          <button
            key={yr}
            id={`${yr}`}
            className={`px-5 py-2 rounded shadow  transition ease-in-out duration-75 active:bg-pink-700 active:text-white ${
              year === yr ? 'bg-pink-700 text-white' : 'hover:bg-gray-100'
            }`}
            onClick={handleClick}
          >
            {yr}
          </button>
        );
      })}
    </div>
  );
};

export default SelectYearForm;
