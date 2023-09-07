import React, { useState } from 'react';
import DownIcon from '../svgs/DownIcon';
import UpIcon from '../svgs/UpIcon';
import PerMonth from './PerMonth';

const MonthComp = ({ month, data }) => {
  const [minimize, setMinimize] = useState(false);
  const handleClick = () => {
    setMinimize(!minimize);
  };

  return (
    <section className="mb-3 bg-teal-50 mx-1 sm:mx-3 lg:mx-6">
      <button
        className=" flex justify-between w-full py-2 px-3 font-poppins font-semibold text-pink-700 shadow bg-gray-50"
        id={`${month}`}
        onClick={handleClick}
      >
        {month}
        <div className="div transition-all">
          {minimize ? <UpIcon /> : <DownIcon />}
        </div>
      </button>
      {minimize && <PerMonth month={month} data={data} />}
    </section>
  );
};

export default MonthComp;
