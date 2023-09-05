const getPresentYears = (data) => {
  const result = new Set();
  Object.keys(data).forEach((element) => {
    result.add(element.slice(0, 4));
  });
  return Array.from(result);
};

export { getPresentYears };
