import { categorizeData, getTotalExpensesAndGross } from './data';

const getAllDaysInYear = (year, data) => {
  const keys = Object.keys(data);
  return keys.filter((date) => {
    const yr = date.slice(0, 4);
    return parseInt(yr) === parseInt(year);
  });
};

const getTotalExpensesAndGrossForYear = (year, data) => {
  const entireYearCategories = getAllDaysInYear(year, data).map((date) => ({
    date: new Date(date),
    categories: categorizeData(data, date),
  }));

  const calculatedForYear = entireYearCategories.map((elem) => {
    return elem.categories.map((el) => getTotalExpensesAndGross(el));
  });

  const result = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  calculatedForYear.map((elem) => {
    for (let i = 0; i < 3; i++) {
      result[i][0] += elem[i][0];
      result[i][1] += elem[i][1];
      result[i][2] += elem[i][2];
    }
  });

  return result;
};

export { getTotalExpensesAndGrossForYear };
