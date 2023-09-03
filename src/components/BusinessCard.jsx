import React from 'react';
import ExpensesRow from '../Card/ExpensesRow';
import ExpensesHeader from '../Card/ExpensesHeader';

const BusinessCard = ({ name, costs }) => {
  return (
    <div>
      <h3 className=" font-poppins text-sm text-cyan-700">{name}</h3>

      <table className=" font-roboto border border-pink-700 w-full">
        <thead>
          <ExpensesHeader />
        </thead>
        <tbody>
          {costs.map((cost) => {
            return (
              <ExpensesRow
                key={cost.id}
                shopping={cost.shopping}
                wages={cost.wages}
                utilities={cost.utilities}
                gross={cost.gross}
                id={cost.id}
              />
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default BusinessCard;
