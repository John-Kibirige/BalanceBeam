import React from 'react';

function Gross({ handleChange, formData }) {
  return (
    <div className="daily-gross mt-3 ml-3">
      <label htmlFor="daily-gross" className="text-sm text-blue-600 block mb-1">
        Daily Gross Income
      </label>
      <input
        type="number"
        id="daily-gross"
        className="py-1 border-pink-700 focus:border-pink-800 focus:border-2 focus:outline-none focus:ring-0 placeholder:text-sm"
        placeholder="daily gross income (ugx)  "
        name="gross"
        value={formData.gross}
        onChange={handleChange}
      />
    </div>
  );
}

export default Gross;
