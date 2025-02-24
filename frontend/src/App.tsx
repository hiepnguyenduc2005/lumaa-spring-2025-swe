import React from 'react';
import { Navigate } from 'react-router-dom';
import { Login, Register, Task } from './pages';
import { JSX } from '@emotion/react/jsx-runtime';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';

interface ProtectedRouteProps {
  element: JSX.Element;
}

// Protected Route
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/login" />;
  return element;
};

// Routes
const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<Task />} />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;