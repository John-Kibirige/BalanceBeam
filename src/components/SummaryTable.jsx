import React from 'react';
import ResultHead from '../week/ResultHead';
import ResultRow from '../week/ResultRow';
import { v4 as randomId } from 'uuid';
import { availableBusinesses } from '../javascript/data';

const SummaryTable = ({ title, fun, year, data }) => {
  return (
    <div className="article sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
      <div className="summary font-roboto">
        <h2 className=" font-poppins text-cyan-800 text-lg text-center font-semibold tracking-wide">
          {title}
        </h2>
      </div>
      <div className=" overflow-x-auto shadow-lg">
        <table className="border w-full mx-auto mt-3 bg-cyan-800 text-slate-100 font-roboto">
          <ResultHead />
          <tbody>
            {fun(year, data).map((elem, index) => {
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
  );
};

export default SummaryTable;
