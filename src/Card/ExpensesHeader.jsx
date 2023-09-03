import React from 'react';

const ExpensesHeader = () => {
  return (
    <tr className="border-b border-pink-700 w-[22.5%] text-center text-pink-800 font-semibold">
      <th className=" font-semi-bold ">Shopping</th>
      <th className="  border-l border-r border-pink-700 w-[22.5%] text-center text-pink-800 font-semibold">
        Wages
      </th>
      <th className=" border-r border-pink-700 w-[22.5%] text-center text-pink-800 font-semibold">
        Utilities
      </th>
      <th className="  border-r border-pink-700 w-[22.5%] text-center text-pink-800 font-semibold">
        Gross
      </th>
      <th className="w-[10%]"> </th>
    </tr>
  );
};

export default ExpensesHeader;
