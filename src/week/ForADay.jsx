import React from 'react';
import BusinessCard from '../components/BusinessCard';
import { formatDateToCustomString } from '../javascript/date';
import { v4 as randomId } from 'uuid';

const ForADay = ({ dailyCategories, date }) => {
  return (
    <section className="text-sm px-2 shadow-2xl py-4 my-3 ">
      <h3 className="font-bold text-center font-poppins text-base text-white bg-pink-700 py-1 rounded">
        {formatDateToCustomString(date)}
      </h3>

      <article>
        {dailyCategories.map((elem) => {
          if (elem.length !== 0) {
            return (
              <BusinessCard
                name={elem[0].business}
                costs={elem}
                showDelete={false}
                key={randomId()}
              />
            );
          }
        })}
      </article>
    </section>
  );
};

export default ForADay;
