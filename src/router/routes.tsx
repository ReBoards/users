import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoutes from './private';
import PublicRoutes from './public';

const AppRoutes = () => {
  const isAuthenticated = false;

  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <Route path="/*" element={<PrivateRoutes />} />
        ) : (
          <Route path="/*" element={<PublicRoutes />} />
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;