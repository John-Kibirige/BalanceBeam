import React from 'react';
import { getEntireWeekCategories } from '../javascript/data';
import ForADay from '../week/ForADay';

const Weekly = ({ data }) => {
  return (
    <section>
      <h1 className="font-semibold text-lg text-center font-poppins mb-3">
        Weekly balancing
      </h1>
      {getEntireWeekCategories(data).map((elem) => {
        return <ForADay date={elem.date} dailyCategories={elem.categories} />;
      })}
    </section>
  );
};

export default Weekly;
