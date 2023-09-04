import React from 'react';

const Expenses = ({ handleChange, formData, formErrors }) => {
  return (
    <fieldset className="border px-2 mt-4 shadow-lg rounded-lg w-100% ">
      <legend className="text-sm text-blue-700 px-1">Expenses</legend>

      <div className="expenses w- pt-4">
        <div className="shopping flex justify-between gap-1 ">
          <label htmlFor="shopping">Shopping: </label>
          <input
            type="number"
            className="py-1 mb-3 focus:border-pink-800 focus:border-2 focus:outline-none focus:ring-0 border-pink-700 w-[60%] placeholder:text-sm"
            placeholder="Shopping (ugx)"
            id="shopping"
            name="shopping"
            value={formData.shopping}
            onChange={handleChange}
          />
        </div>
        {formErrors.shopping && (
          <p className="error text-sm text-red-500 mb-1 mt-[-12px]">
            {formErrors.shopping}
          </p>
        )}

        <div className="wages flex justify-between">
          <label htmlFor="wages">Wages: </label>
          <input
            type="number"
            className="py-1 mb-3 focus:border-pink-800 focus:border-2 focus:outline-none focus:ring-0 border-pink-700 w-[60%] placeholder:text-sm"
            placeholder="Wages (ugx)"
            id="wages"
            name="wages"
            value={formData.wages}
            onChange={handleChange}
          />
        </div>
        {formErrors.wages && (
          <p className="error text-sm text-red-500 mb-1 mt-[-12px]">
            {formErrors.wages}
          </p>
        )}

        <div className="utilities flex justify-between">
          <label htmlFor="utilities">Utilities: </label>
          <input
            type="number"
            className="py-1 mb-3 focus:border-pink-800 focus:border-2 focus:outline-none focus:ring-0 border-pink-700 w-[60%] placeholder:text-sm"
            placeholder="Utilities (ugx)"
            id="utilities"
            name="utilities"
            value={formData.utilities}
            onChange={handleChange}
          />
        </div>
        {formErrors.utilities && (
          <p className="error text-sm text-red-500 mb-1 mt-[-12px] ">
            {formErrors.utilities}
          </p>
        )}
      </div>
    </fieldset>
  );
};

export default Expenses;
