import { getAllDatesForWeek } from './date';

const categorizeData = (data, date) => {
  const categorized = {
    'Beautiful One': [],
    'Beautiful Two': [],
    'Beautiful Three': [],
  };

  const retrievedData = data[`${date}`] || {};
  Object.entries(retrievedData).forEach(([key, val]) => {
    categorized[val.business].push({ ...val, id: key });
  });

  return Object.values(categorized);
};

// total expenses and gross for a given business in a day
const getTotalExpensesAndGross = (costs) => {
  let totalExpenses = 0;
  let totalGross = 0;

  costs.forEach((cost) => {
    let { shopping, wages, utilities, gross } = cost;

    totalExpenses += parseInt(shopping) + parseInt(wages) + parseInt(utilities);
    totalGross += parseInt(gross);
  });

  return [totalExpenses, totalGross];
};

// for each date of the week depending on the day we are currently on,
// return the different categories on each day

const getEntireWeekCategories = (data) => {
  const datesForWeek = getAllDatesForWeek();
  return datesForWeek.map((date) => ({
    date: new Date(date),
    categories: categorizeData(data, date),
  }));
};

export { categorizeData, getTotalExpensesAndGross, getEntireWeekCategories };
