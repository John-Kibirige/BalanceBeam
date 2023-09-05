import React from 'react';
import DeleteIcon from '../svgs/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { showDeleteDialog } from '../redux/delete';
import DeleteDialog from './DeleteDialog';

const ExpensesRow = ({ shopping, wages, utilities, gross, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(showDeleteDialog(id));
  };
  const { deleteDialog, itemToDelete } = useSelector((st) => st.delete);
  const { currentWindow } = useSelector((st) => st.navbar);
  return (
    <>
      {' '}
      <tr className=" border-b border-pink-700 text-pink-700 text-center">
        <td className="px-2">{shopping}</td>
        <td className="border-r border-l border-pink-700 px-2">{wages}</td>
        <td className="border-r border-l border-pink-700 px-2">{utilities}</td>
        <td className="border-r border-l border-pink-700 px-2">{gross}</td>
        {currentWindow === 'daily' && (
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
