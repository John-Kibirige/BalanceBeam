import { categorizeData, getTotalExpensesAndGross } from './data';

const getPresentYears = (data) => {
  const result = new Set();
  Object.keys(data).forEach((element) => {
    result.add(element.slice(0, 4));
  });
  return Array.from(result);
};

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// get all the viable months in the year
const getViableMonths = (data, year) => {
  const viableMonths = new Set();
  Object.keys(data).forEach((elem) => {
    if (elem.slice(0, 4) === year) viableMonths.add(elem.slice(5, 7));
  });
  return Array.from(viableMonths).map((elem) => MONTHS[parseInt(elem) - 1]);
};

const daysInMonth = (month, year) => {
  const date = new Date(year, month, 1);
  date.setHours(date.getHours() - 1);
  return date.getDate();
};

const getMonthDates = (month, year) => {
  const monthIndex = MONTHS.indexOf(month);
  const days = daysInMonth(monthIndex, year);
  const datesInMonth = [];
  for (let i = 1; i <= days; i++) {
    datesInMonth.push(
      `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(i).padStart(
        2,
        '0'
      )}`
    );
  }
  return datesInMonth;
};

const getEntireMonthsCategories = (month, year, data) => {
  const monthDates = getMonthDates(month, year);
  return monthDates.map((date) => ({
    date: new Date(date),
    categories: categorizeData(data, date),
  }));
};

// compute for total expenses, gross and net for entire month
const getTotalExpensesAndGrossForMonth = (month, year, data) => {
  let entireMonthCategories = getEntireMonthsCategories(month, year, data);
  const calculated = entireMonthCategories.map((elem) => {
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

export {
  getPresentYears,
  getViableMonths,
  getEntireMonthsCategories,
  getTotalExpensesAndGrossForMonth,
};
