import React, { useState } from 'react';
import AddIcon from '../svgs/Add';
import Form from './Form';

const Daily = () => {
  const [addBtnClicked, setAddBtnClicked] = useState(false);
  const handleClick = () => setAddBtnClicked(!addBtnClicked);
  const displayFormWindow = (state) => {
    setAddBtnClicked(state);
  };

  return (
    <section>
      <h1 className=" font-semibold text-lg text-center font-poppins">
        Today's balancing
      </h1>
      <button
        className="add ml-auto block mr-4 mt-4 active:scale-110 transition ease-in duration-75"
        onClick={handleClick}
      >
        <AddIcon />{' '}
      </button>

      {addBtnClicked && <Form displayFormWindow={displayFormWindow} />}
    </section>
  );
};

export default Daily;
