import React from 'react';

const ComputedRow = ({ totalExpenses, totalGross, net }) => {
  return (
    <table className=" w-full border-cyan-700 border mt-4 mx-auto font-roboto">
      <thead>
        <tr className=" border-b border-cyan-700">
          <th className=" font-normal text-cyan-800">Total Expenses</th>
          <th className=" font-normal text-cyan-800 border-r border-l border-cyan-700">
            Total Gross
          </th>
          <th className=" font-normal text-cyan-800">Net</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className=" text-center">{totalExpenses.toLocaleString()}</td>
          <td className="border-r border-l border-cyan-700 text-center">
            {totalGross.toLocaleString()}
          </td>
          <td className=" text-center">{net.toLocaleString()}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ComputedRow;
