const isValidPassword = (password) => password.trim().length >= 6;
const isValidEmail = (email) => {
  // Regular expression pattern for a valid email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

const getSignInFormErrors = (FormData) => {
  const { email, password } = FormData;
  let response = { email: '', password: '' };
  if (!isValidEmail(email)) response.email = 'Please provide a valid email!';
  if (!isValidPassword(password)) {
    response.password = 'Password must be at least 6 characters long!';
  }
  return response;
};

export default getSignInFormErrors;
