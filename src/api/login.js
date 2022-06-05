import { api } from '.';

export const handleLogin = async (username, password) => {
  return api.post('signin/', { username: username, password: password });
};
