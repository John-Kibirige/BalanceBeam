import React, { useEffect, useState } from 'react';
import AddIcon from '../svgs/Add';
import Form from './Form';
import BusinessCard from './BusinessCard';
import { categorizeData } from '../javascript/data';
import { getTodayDate } from '../javascript/date';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFormDisplay } from '../redux/popup';

const Daily = ({ data }) => {
  const { formDialog } = useSelector((st) => st.popup);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleFormDisplay());
  };
  return (
    <section>
      <h1 className=" font-semibold text-lg text-center font-poppins mb-3">
        Today's balancing
      </h1>
      {categorizeData(data, getTodayDate()).map((elem) => {
        if (elem.length !== 0) {
          return <BusinessCard name={elem[0].business} costs={elem} />;
        }
      })}

      <button
        className="add ml-auto block mr-4 mt-6 active:scale-110 transition duration-75"
        onClick={handleClick}
      >
        <AddIcon />{' '}
      </button>

      {formDialog && <Form />}
    </section>
  );
};

export default Daily;
