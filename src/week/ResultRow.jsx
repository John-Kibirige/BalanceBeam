import React from 'react';

const ResultRow = ({ business, expenses, gross, net }) => {
  return (
    <tr
      className={` bg-white border border-teal-600 ${
        business === 'Two' && 'bg-slate-100'
      } text-gray-600`}
    >
      <td className=" py-1 px-1 border-r border-teal-600">{business}</td>
      <td className=" text-center px-1 border-r border-teal-600">
        {expenses.toLocaleString()}
      </td>
      <td className="text-center px-1 border-r border-teal-600">
        {gross.toLocaleString()}
      </td>
      <td className=" text-center px-1">{net.toLocaleString()}</td>
    </tr>
  );
};

export default ResultRow;
