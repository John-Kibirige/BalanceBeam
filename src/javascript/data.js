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

export { categorizeData, getTotalExpensesAndGross };
