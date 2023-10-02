const isValidPassword = (password, confirmPassword) => {
  const conditionOne = password.trim().length >= 6;
  const conditionTwo = password === confirmPassword;
  return conditionOne && conditionTwo;
};
const isValidEmail = (email) => {
  // Regular expression pattern for a valid email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

const isValidFormData = (formData) => {
  const { email, password, confirmPassword } = formData;
  return isValidEmail(email) && isValidPassword(password, confirmPassword);
};

export default isValidFormData;
