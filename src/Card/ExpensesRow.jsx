import React from 'react';
import DeleteIcon from '../svgs/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { showDeleteDialog } from '../redux/delete';
import DeleteDialog from './DeleteDialog';

const ExpensesRow = ({ shopping, wages, utilities, gross, id, showDelete }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(showDeleteDialog(id));
  };
  const { deleteDialog, itemToDelete } = useSelector((st) => st.delete);
  return (
    <>
      {' '}
      <tr className=" border-b border-pink-700 text-pink-700">
        <td className="px-1">{shopping}</td>
        <td className="border-r border-l border-pink-700 px-1">{wages}</td>
        <td className="border-r border-l border-pink-700 px-1">{utilities}</td>
        <td className="border-r border-l border-pink-700 px-1">{gross}</td>
        {showDelete && (
          <td className=" flex justify-center items-center">
            <button className="del" onClick={handleDelete}>
              <DeleteIcon />
            </button>
          </td>
        )}
      </tr>
      {itemToDelete === id && deleteDialog && <DeleteDialog />}
    </>
  );
};

export default ExpensesRow;
