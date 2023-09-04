const getTodayDate = () => {
  const date = new Date();
  return formattedTodayDate(date);
};

const formattedTodayDate = (date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  const finalString = `${day}-${month}-${year}`;
  return finalString.split('-').reverse().join('-');
};

// decrement days from a given date
function decrementDaysFromDate(date, daysToDecrement) {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() - daysToDecrement);
  return newDate;
}

// get how many days we decrement based on the day of the week
const getDays = (currentDate) => {
  const dayOfWeek = currentDate.getDay();
  return dayOfWeek === 0 ? 6 : dayOfWeek - 1;
};

const getAllDatesForWeek = () => {
  const days = getDays(new Date());
  const dates = [];
  for (let i = 0; i <= days; i++) {
    const date = decrementDaysFromDate(new Date(), i);
    dates.push(formattedTodayDate(date));
  }
  return dates;
};

const formatDateToCustomString = (date) => {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = date.getFullYear();

  return `${dayOfWeek}, ${day}/${month}/${year}`;
};

export { getTodayDate, getAllDatesForWeek, formatDateToCustomString };
