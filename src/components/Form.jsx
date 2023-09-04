import React, { useState } from 'react';
import Business from '../Form/Business';
import Expenses from '../Form/Expenses';
import Gross from '../Form/Gross';
import errors from '../javascript/formErrors';
import originalFormState from '../javascript/formStateReset';
import { getTodayDate } from '../javascript/date';
import { database, ref, push } from '../../firebasae';
import { toggleFormDisplay } from '../redux/popup';
import { useDispatch } from 'react-redux';
import CloseIcon from '../svgs/CloseIcon';

const Form = () => {
  const [formData, setFormData] = useState(originalFormState);
  const [formErrors, setFormErrors] = useState(originalFormState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      setFormErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = Object.entries(formData).filter(
      (elem) => elem[1].trim() === ''
    );

    filtered.forEach((elem) => {
      setFormErrors((prev) => ({
        ...prev,
        [elem[0]]: errors[elem[0]],
      }));
    });

    if (filtered.length !== 0) return;
    push(ref(database, `balance-beam/${getTodayDate()}`), formData);
    // also update state to remove form
    dispatch(toggleFormDisplay());
  };

  return (
    <form
      className="font-roboto shadow-lg w-[90%] mx-auto bg-pink rounded-lg my-auto absolute bg-white z-30  py-3 pb-5 left-1/2 transform -translate-x-1/2 mt-2"
      onSubmit={handleSubmit}
    >
      <button
        className="close mb-2 px-3 cursor-pointer block ml-auto"
        onClick={() => dispatch(toggleFormDisplay())}
      >
        <CloseIcon />
      </button>
      <div className="article px-3">
        <Business formData={formData} handleChange={handleChange} />
        {formErrors.business && (
          <p className="error text-sm text-red-500 mt-1">
            {formErrors.business}
          </p>
        )}
      </div>
      <div className="w-full px-3">
        <Expenses
          formData={formData}
          handleChange={handleChange}
          formErrors={formErrors}
        />
      </div>
      <div>
        <Gross formData={formData} handleChange={handleChange} />
        {formErrors.gross && (
          <p className="error text-sm text-red-500 mt-1 mx-3">
            {formErrors.gross}
          </p>
        )}
      </div>

      <button className=" rounded px-3 py-[5px] ml-auto block mr-3 mt-5 text-white bg-pink-700 active:scale-110 transition duration-75 ease-in-out">
        submit
      </button>
    </form>
  );
};

export default Form;
