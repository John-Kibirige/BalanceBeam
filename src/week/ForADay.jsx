import React from 'react';
import BusinessCard from '../components/BusinessCard';
import { formatDateToCustomString } from '../javascript/date';
import { v4 as randomId } from 'uuid';

const ForADay = ({ dailyCategories, date }) => {
  return (
    <section className="text-sm px-2 shadow-2xl py-4 my-3 ">
      <h3 className="font-bold text-center font-poppins text-base text-white bg-pink-700 py-1 rounded sm:max-w-md mx-auto">
        {formatDateToCustomString(date)}
      </h3>

      <article className="article mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:mx-6 gap-4 md:gap-2 mt-5">
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
