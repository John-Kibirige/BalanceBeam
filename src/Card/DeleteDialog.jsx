import React from 'react';
import { ref, remove, database } from '../../firebasae';
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
    <div className="delete-popup absolute border w-[70%] left-1/2 transform -translate-x-1/2 text-center py-4 rounded shadow-lg top-16 px-3 text-normal bg-slate-50 z-30">
      <h5>Are you sure you want to remove this row? </h5>
      <div className="buttons flex justify-center gap-5 mt-3 font-poppins text-sm mb-3">
        <button
          className="no-delete bg-red-600 text-white px-4 rounded-sm py-[2px] active:scale-110 transition duration-75 ease-in"
          onClick={handleCancelDelete}
        >
          No
        </button>
        <button
          className="yes-delete  bg-green-600 text-white px-4 rounded-sm py-[2px] active:scale-110 transition duration-75 ease-in"
          onClick={handleDelete}
        >
          yes
        </button>
      </div>
    </div>
  );
};

export default DeleteDialog;
