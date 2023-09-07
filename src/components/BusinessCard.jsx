import React from 'react';
import ExpensesRow from '../Card/ExpensesRow';
import ExpensesHeader from '../Card/ExpensesHeader';
import { getTotalExpensesAndGross } from '../javascript/data';
import ComputedRow from '../Form/ComputedRow';

const BusinessCard = ({ name, costs }) => {
  const [totalExpenses, totalGross, net] = getTotalExpensesAndGross(costs);
  return (
    <div className=" px-1 rounded-lg shadow-xl relative w-full ">
      <h3 className=" font-poppins text-cyan-700 font-semibold mb-1 text-center">
        {name}
      </h3>
      <div className=" overflow-x-auto ">
        <table className=" font-roboto border border-pink-700 w-full">
          <thead>
            <ExpensesHeader />
          </thead>
          <tbody>
            {costs.map((cost) => {
              return (
                <ExpensesRow
                  key={cost.id}
                  shopping={parseInt(cost.shopping).toLocaleString()}
                  wages={parseInt(cost.wages).toLocaleString()}
                  utilities={parseInt(cost.utilities).toLocaleString()}
                  gross={parseInt(cost.gross).toLocaleString()}
                  id={cost.id}
                />
              );
            })}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>

      <div className="overflow-x-auto">
        <ComputedRow
          totalExpenses={totalExpenses}
          totalGross={totalGross}
          net={net}
        />
      </div>
    </div>
  );
};

export default BusinessCard;
