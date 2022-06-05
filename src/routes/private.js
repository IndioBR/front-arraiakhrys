import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LoginContext } from '../contexts/loginContext';
import Loading from '../templates/Loading';

export const PrivateRoutes = () => {
  const { auth, loading } = useContext(LoginContext);

  if (loading) return <Loading />;

  if (!auth) return <Navigate to="/" />;

  return <Outlet />;
};
