import React from 'react';

const ResultHead = () => {
  return (
    <thead className="bg-slate-200 text-blue-900 tracking-wide border border-teal-600">
      <tr >
        <th className=" px-1 py-1 font-normal border-r border-teal-500">Business</th>
        <th className=" px-1 font-normal border-r border-teal-500">Expenses</th>
        <th className=" px-1 font-normal border-r border-teal-500">Gross</th>
        <th className=" px-1 font-normal">Net</th>
      </tr>
    </thead>
  );
};

export default ResultHead;
