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

export { categorizeData };
