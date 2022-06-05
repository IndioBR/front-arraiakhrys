import { api } from '.';

export const handleSignUp = async (
  username,
  email,
  password,
  first_name,
  last_name,
) => {
  return api.post('arraiakhrys/signup/api/', {
    username: username,
    email: email,
    password: password,
    first_name: first_name,
    last_name: last_name,
  });
};
