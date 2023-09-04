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
    <section className={`${formDialog && 'pb-[600px]'}`}>
      <h1 className=" font-semibold text-lg text-center font-poppins mb-3">
        Today's balancing
      </h1>
      {categorizeData(data, getTodayDate()).map((elem) => {
        if (elem.length !== 0) {
          return <BusinessCard name={elem[0].business} costs={elem} />;
        }
      })}

      <button className="add bg-pink-600" onClick={handleClick}>
        <AddIcon />
      </button>

      {formDialog && <Form />}
      {formDialog && (
        <div className="popup w-screen bg-gray-400 opacity-60 absolute top-0 left-0 bottom-0 z-10 backdrop-blur-lg my-auto"></div>
      )}
    </section>
  );
};

export default Daily;
