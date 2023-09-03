import React from 'react';
import DeleteIcon from '../svgs/Delete';

const ExpensesRow = ({ shopping, wages, utilities, gross, id }) => {
  return (
    <tr className=" border-b border-pink-700 text-pink-700">
      <td className="px-1">{shopping}</td>
      <td className="border-r border-l border-pink-700 px-1">{wages}</td>
      <td className="border-r border-l border-pink-700 px-1">{utilities}</td>
      <td className="border-r border-l border-pink-700 px-1">{gross}</td>
      <td className=" flex justify-center items-center">
        <DeleteIcon />
      </td>
    </tr>
  );
};

export default ExpensesRow;
