import { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Axios from 'axios';

const PrivateRoutes = () => {


  const [isAuthenticated, setIsAuthenticated] = useState(true);

  

  return isAuthenticated ? <Outlet /> : <Navigate to='/' />;

};

export default PrivateRoutes
