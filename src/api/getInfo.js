import { api } from '.';

export const handleGetInfo = async () => {
  return api.get('/');
};
