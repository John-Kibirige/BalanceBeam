import React from 'react';
import {
  getEntireMonthsCategories,
  getTotalExpensesAndGrossForMonth,
} from '../javascript/month';
import { useSelector } from 'react-redux';
import ForADay from '../week/ForADay';
import { v4 as randomId } from 'uuid';
import { availableBusinesses } from '../javascript/data';
import ResultHead from '../week/ResultHead';
import ResultRow from '../week/ResultRow';

const PerMonth = ({ month, data }) => {
  const { year } = useSelector((state) => state.year);
  return (
    <div className=" mt-4">
      <h1 className="font-semibold text-lg text-center font-poppins mb-3 text-blue-800 relative w-fit mx-auto">
        {month} - balancing
        <span className="absolute left-0 bottom-[-1px] w-full h-[2px] bg-pink-700"></span>
      </h1>
      <div className="summary font-roboto">
        <h2 className=" font-poppins text-cyan-800 text-lg text-center font-semibold tracking-wide">
          Summary
        </h2>
      </div>
      <div className=" overflow-x-auto shadow-lg sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
        <table className="border w-full mx-auto mt-3 bg-cyan-800 text-slate-100 font-roboto">
          <ResultHead />
          <tbody>
            {getTotalExpensesAndGrossForMonth(month, year, data).map(
              (elem, index) => {
                const [expenses, gross, net] = elem;
                return (
                  <ResultRow
                    expenses={expenses}
                    gross={gross}
                    net={net}
                    business={availableBusinesses[index]}
                    key={randomId()}
                  />
                );
              }
            )}
          </tbody>
        </table>
      </div>
      <h1 className=" text-lg transition-all text-center font-poppins text-pink-800 font-semibold mt-5">
        {month} - Breakdown
      </h1>
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
