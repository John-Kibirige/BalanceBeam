import React from 'react';

const ExpensesHeader = () => {
  return (
    <tr className="border-b border-pink-700 w-[22.5%] text-center text-slate-500 font-semibold">
      <th className=" font-normal  ">Shopping</th>
      <th className="  border-l border-r border-pink-700 w-[22.5%] text-center text-slate-500 font-normal ">
        Wages
      </th>
      <th className=" border-r border-pink-700 w-[22.5%] text-center text-slate-500 font-normal ">
        Utilities
      </th>
      <th className="  border-r border-pink-700 w-[22.5%] text-center text-slate-500 font-normal ">
        Gross
      </th>
      <th className="w-[10%]"> </th>
    </tr>
  );
};

export default ExpensesHeader;
