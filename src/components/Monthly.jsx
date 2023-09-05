import React from 'react';
import { getPresentYears } from '../javascript/month';
import Introduction from '../month/Introduction';
import { useSelector } from 'react-redux';
import MonthlyDetails from '../month/MonthlyDetails';

const Monthly = ({ data }) => {
  const { year } = useSelector((st) => st.year);
  return <>{year ? <MonthlyDetails /> : <Introduction data={data} />}</>;
};

export default Monthly;
