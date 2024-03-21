import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login';

const handleLogin = (email: string, password: string) => {
  console.log('Email:', email);
  console.log('Contraseña:', password);
  // Aquí puedes agregar la lógica para autenticar al usuario
};

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login onSubmit={handleLogin} />} />
    </Routes>
  );
};

export default PublicRoutes;