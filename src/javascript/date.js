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

export { getTodayDate };
