import React, { useState } from 'react';
import Business from '../Form/Business';
import Expenses from '../Form/Expenses';
import Gross from '../Form/Gross';
import errors from '../javascript/formErrors';
import originalFormState from '../javascript/formStateReset';
import { getTodayDate } from '../javascript/date';
import { database, ref, push } from '../../firebasae';

const Form = ({ removeFormWindow: displayFormWindow }) => {
  const [formData, setFormData] = useState(originalFormState);
  const [formErrors, setFormErrors] = useState(originalFormState);

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
    const filtered = Object.entries(formData).filter((elem) => elem[1] === '');

    filtered.forEach((elem) => {
      setFormErrors((prev) => ({
        ...prev,
        [elem[0]]: errors[elem[0]],
      }));
    });

    if (filtered.length !== 0) return;
    push(ref(database, `balance-beam/${getTodayDate()}`), formData);
    displayFormWindow(false);
  };

  return (
    <form
      className="font-roboto shadow-lg w-[95%] mx-auto bg-pink rounded-lg pb-2 mt-3"
      onSubmit={handleSubmit}
    >
      <div className="article">
        <Business formData={formData} handleChange={handleChange} />
        {formErrors.business && (
          <p className="error text-sm text-red-500 mt-1">
            {formErrors.business}
          </p>
        )}
      </div>
      <div>
        <Expenses
          formData={formData}
          handleChange={handleChange}
          formErrors={formErrors}
        />
      </div>
      <div>
        <Gross formData={formData} handleChange={handleChange} />
        {formErrors.gross && (
          <p className="error text-sm text-red-500 mt-1">{formErrors.gross}</p>
        )}
      </div>

      <button className=" rounded px-3 py-[5px] ml-auto block mr-3 mt-5 text-white bg-pink-700 active:scale-110 transition duration-75 ease-in-out">
        submit
      </button>
    </form>
  );
};

export default Form;
