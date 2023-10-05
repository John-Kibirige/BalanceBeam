import React from 'react';
import { ref, remove, database } from '../firebase';
import { getTodayDate } from '../javascript/date';
import { useDispatch, useSelector } from 'react-redux';
import { removeDeleteDialog } from '../redux/delete';

const DeleteDialog = () => {
  const { itemToDelete } = useSelector((st) => st.delete);
  const dispatch = useDispatch();

  const handleDelete = () => {
    const path = `balance-beam/${getTodayDate()}/${itemToDelete}`;
    const itemLocation = ref(database, path);
    remove(itemLocation);
    dispatch(removeDeleteDialog());
  };

  const handleCancelDelete = () => {
    dispatch(removeDeleteDialog());
  };

  return (
    <tr className="delete-popup absolute w-[70%] left-1/2 transform -translate-x-1/2 text-center py-4 rounded shadow-lg top-16 px-3 text-normal bg-slate-100 z-30">
      <td className="text-sm">Are you sure you want to remove this row?</td>
      <td className="buttons flex mt-4 font-poppins text-sm mb-3 justify-center gap-4  ">
        <button
          className="no-delete bg-slate-500 text-white px-4 rounded-[4px] py-1 active:scale-105 transition duration-75 ease-in w-[40%] "
          onClick={handleCancelDelete}
        >
          Cancel
        </button>
        <button
          className="yes-delete  bg-red-500 text-white px-4 rounded-[4px] py-[2px] active:scale-105 transition duration-75 ease-in w-[40%] "
          onClick={handleDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DeleteDialog;
