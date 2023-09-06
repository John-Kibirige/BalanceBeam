import React from 'react';
import { getEntireMonthsCategories } from '../javascript/month';
import { useSelector } from 'react-redux';
import ForADay from '../week/ForADay';
import { v4 as randomId } from 'uuid';

const PerMonth = ({ month, data }) => {
  const { year } = useSelector((state) => state.year);
  return (
    <div>
      <h1 className=" text-xl font-bold transition-all">{month}</h1>
      {getEntireMonthsCategories(month, year, data).map((elem) => {
        if (elem.categories.some((e) => e.length > 0)) {
          return (
            <ForADay
              date={elem.date}
              dailyCategories={elem.categories}
              key={randomId()}
            />
          );
        }
      })}
    </div>
  );
};

export default PerMonth;
