import { isValidEmail, isValidPassword } from './signUp';

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
