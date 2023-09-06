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
    <section className="mb-3">
      <button
        className=" flex justify-between w-full py-[6px] px-2 font-poppins font-semibold text-pink-700 shadow"
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
