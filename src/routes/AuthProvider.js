import { LoginContext } from '../contexts/loginContext';
import P from 'prop-types';

export const AuthProvider = ({ children }) => {
  return (
    <LoginContext.Provider value={{ auth: false }}>
      {children}
    </LoginContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: P.node.isRequired,
};
