import React from 'react';
import ExpensesRow from '../Card/ExpensesRow';
import ExpensesHeader from '../Card/ExpensesHeader';
import { getTotalExpensesAndGross } from '../javascript/data';
import ComputedRow from '../Form/ComputedRow';
import { parse } from 'postcss';

const BusinessCard = ({ name, costs }) => {
  const [totalExpenses, totalGross] = getTotalExpensesAndGross(costs);
  return (
    <div className=" mb-5 px-1 py-3 rounded-lg shadow-xl">
      <h3 className=" font-poppins text-cyan-700 font-semibold mb-1">{name}</h3>
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

      <ComputedRow
        totalExpenses={totalExpenses}
        totalGross={totalGross}
        net={totalGross - totalExpenses}
      />
    </div>
  );
};

export default BusinessCard;
