import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackIcon from '../svgs/BackIcon';
import { unSetYear } from '../redux/year';
import { getViableMonths } from '../javascript/month';
import MonthComp from './MonthComp';
import { v4 as randomId } from 'uuid';

const MonthlyDetails = ({ data }) => {
  const { year } = useSelector((st) => st.year);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(unSetYear());
  };

  return (
    <section>
      <div className="title flex items-center justify-between mx-3 py-1 px-2 shadow-md">
        <h1 className=" font-semibold text-xl text-teal-800">{year}</h1>
        <button className=" shadow-md active:scale-110" onClick={handleClick}>
          <BackIcon />
        </button>
      </div>

      <div className="all-months mt-6">
        {getViableMonths(data, year).map((month) => (
          <MonthComp month={month} key={randomId()} data={data} />
        ))}
      </div>
    </section>
  );
};

export default MonthlyDetails;
