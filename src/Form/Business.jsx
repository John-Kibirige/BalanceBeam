import React from 'react';

const Business = ({ handleChange, formData }) => {
  return (
    <fieldset className=" border p-3 px-6 shadow-md rounded-lg">
      <legend className=" text-sm px-1 text-blue-600">
        Please select the business name
      </legend>
      <div className=" cursor-">
        <input
          className=" focus:ring-0 transition ease-in mr-2 duration-75 cursor-pointer "
          type="radio"
          name="business"
          id="b1"
          onChange={handleChange}
          value="Beautiful One"
          checked={formData.business === 'Beautiful One'}
        />
        <label className=" cursor-pointer" htmlFor="b1">
          Beautiful One
        </label>
      </div>
      <div className=" cursor-pointer">
        <input
          className=" focus:ring-0 transition ease-in mr-2 duration-75 cursor-pointer "
          type="radio"
          name="business"
          id="b2"
          onChange={handleChange}
          value="Beautiful Two"
          checked={formData.business === 'Beautiful Two'}
        />
        <label className=" cursor-pointer" htmlFor="b2">
          Beautiful Two
        </label>
      </div>
      <div className=" cursor-pointer">
        <input
          className=" focus:ring-0 transition ease-in mr-2 duration-75 cursor-pointer"
          type="radio"
          name="business"
          id="b3"
          onChange={handleChange}
          value={'Beautiful Three'}
          checked={formData.business === 'Beautiful Three'}
        />
        <label className=" cursor-pointer" htmlFor="b3">
          Beautiful Three
        </label>
      </div>
    </fieldset>
  );
};

export default Business;
