import React from 'react';
import BusinessCard from '../components/BusinessCard';
import { formatDateToCustomString } from '../javascript/date';

const ForADay = ({ dailyCategories, date }) => {
  return (
    <section className="text-sm px-2 shadow-2xl py-4 my-3 bg-cyan-50 border-t border-cyan-100">
      <h3 className="font-bold text-center font-poppins text-base text-blue-700">
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
              />
            );
          }
        })}
      </article>
    </section>
  );
};

export default ForADay;
