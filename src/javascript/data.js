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

  return [totalExpenses, totalGross, totalGross - totalExpenses];
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

// compute for total expenses, total gross and total net for the entire week
const getTotalExpensesAndGrossForWeek = (data) => {
  let entireWeekCategories = getEntireWeekCategories(data);
  const calculated = entireWeekCategories.map((elem) => {
    return elem.categories.map((el) => {
      return getTotalExpensesAndGross(el);
    });
  });

  const result = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  calculated.map((elem) => {
    for (let i = 0; i < 3; i++) {
      result[i][0] += elem[i][0];
      result[i][1] += elem[i][1];
      result[i][2] += elem[i][2];
    }
  });

  return result;
};

const availableBusinesses = ['One', 'Two', 'Three'];

export {
  categorizeData,
  getTotalExpensesAndGross,
  getEntireWeekCategories,
  getTotalExpensesAndGrossForWeek,
  availableBusinesses,
};
