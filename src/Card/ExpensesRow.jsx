import React from 'react';
import DeleteIcon from '../svgs/Delete';
import { ref, remove, database } from '../../firebasae';
import { getTodayDate } from '../javascript/date';

const ExpensesRow = ({ shopping, wages, utilities, gross, id }) => {
  const handleDelete = () => {
    const path = `balance-beam/${getTodayDate()}/${id}`;
    const itemLocation = ref(database, path);
    remove(itemLocation);
  };

  return (
    <tr className=" border-b border-pink-700 text-pink-700">
      <td className="px-1">{shopping}</td>
      <td className="border-r border-l border-pink-700 px-1">{wages}</td>
      <td className="border-r border-l border-pink-700 px-1">{utilities}</td>
      <td className="border-r border-l border-pink-700 px-1">{gross}</td>
      <td className=" flex justify-center items-center">
        <button className="del" onClick={handleDelete}>
          <DeleteIcon />
        </button>
      </td>
    </tr>
  );
};

export default ExpensesRow;
