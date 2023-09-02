import React, { useState } from 'react';

const Expenses = () => {
  const [expensesData, setExpensesData] = useState({
    shopping: '',
    wages: '',
    utilities: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpensesData((previousExpensesData) => {
      return {
        ...previousExpensesData,
        [name]: value,
      };
    });
  };

  console.log('the expenses at the moment are ', expensesData);

  return (
    <div>
      <input
        type="text"
        name="shopping"
        onChange={handleChange}
        className=" border"
        placeholder="shopping (ugx)"
        value={expensesData.shopping}
      />
      <input
        type="text"
        name="wages"
        onChange={handleChange}
        className=" border"
        placeholder="wages (ugx)"
        value={expensesData.wages}
      />
      <input
        type="text"
        name="utilities"
        onChange={handleChange}
        className=" border"
        placeholder="utilities (ugx)"
        value={expensesData.utilities}
      />
    </div>
  );
};

export default Expenses;
