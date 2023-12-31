import React from 'react';
import SelectYearForm from './SelectYearForm';

const Introduction = ({ data }) => {
  return (
    <div className="sm:w-[60%] mx-auto">
      <div className="mt-8 text-center py-4 rounded shadow-md">
        <h3 className="leading-10 text-teal-700 mb-3">
          Please select the year of interest
        </h3>
        <SelectYearForm data={data} />
      </div>
    </div>
  );
};

export default Introduction;
