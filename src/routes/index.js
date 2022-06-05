import { Route, Routes } from 'react-router-dom';
import Home from '../templates/App/App';
import { AuthProvider } from './AuthProvider';

const MyRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AuthProvider>
  );
};

export default MyRoutes;
