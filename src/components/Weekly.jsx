import React from 'react';
import {
  getEntireWeekCategories,
  getTotalExpensesAndGrossForWeek,
  availableBusinesses,
} from '../javascript/data';
import ForADay from '../week/ForADay';
import ResultRow from '../week/ResultRow';
import ResultHead from '../week/ResultHead';
import { v4 as randomId } from 'uuid';

const Weekly = ({ data }) => {
  console.log('the entire week categories ', getEntireWeekCategories(data));
  return (
    <section>
      <h1 className="font-semibold text-lg text-center font-poppins mb-3">
        Weekly balancing
      </h1>
      <div className="summary font-roboto">
        <h2 className=" font-poppins text-cyan-800 text-lg text-center font-semibold tracking-wide">
          Summary
        </h2>
        <div className=" overflow-x-auto shadow-lg">
          <table className="border w-full mx-auto mt-3 bg-cyan-800 text-slate-100 font-roboto">
            <ResultHead />
            <tbody>
              {getTotalExpensesAndGrossForWeek(data).map((elem, index) => {
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
              })}
            </tbody>
          </table>
        </div>
      </div>
      <h2 className=" font-poppins text-cyan-800 text-lg text-center font-semibold tracking-wide mt-5">
        Breakdown
      </h2>
      {getEntireWeekCategories(data).map((elem) => {
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
    </section>
  );
};

export default Weekly;
