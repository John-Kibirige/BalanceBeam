const isValidPassword = (password) => password.trim().length >= 6;
const isMatchingPasswords = (password, confirmPassword) =>
  password === confirmPassword;
const isValidEmail = (email) => {
  // Regular expression pattern for a valid email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

const getFormErrors = (formData) => {
  const { email, password, confirmPassword } = formData;
  let response = { email: '', password: '', confirmPassword: '' };
  if (!isValidEmail(email)) response.email = 'Please provide a valid email!';

  if (!isValidPassword(password)) {
    response.password = 'Password must be 6 characters or longer!';
  }

  if (!isMatchingPasswords(password, confirmPassword)) {
    response.confirmPassword = 'Passwords do not match!';
  }
  return response;
};
export { isValidEmail, isValidPassword };
export default getFormErrors;
