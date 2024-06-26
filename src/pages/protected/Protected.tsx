import React from 'react';
import { Navigate } from 'react-router-dom';

type ProtectedProps = {
  children: React.ReactNode;
}

const Protected:React.FC<ProtectedProps> = ({children}) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate replace to={'/login'} />
  }
  return (
    <div>
      {children}
    </div>
  );
};

export default Protected;