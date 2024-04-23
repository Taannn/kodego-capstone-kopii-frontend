// import React, { useEffect } from 'react';

const isTokenExpired = () => {
  const expirationTime = localStorage.getItem('tokenExpiration');
  if (!expirationTime) {
    return true;
  }
  return new Date().getTime() > parseInt(expirationTime, 10);
};

type TokenExpireProps = {
  children: React.ReactNode;
};

const TokenExpire: React.FC<TokenExpireProps> = ({ children }) => {
  const expired = isTokenExpired();
  if (expired) {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
  }

  return (
    <div>
      { children }
    </div>
  );
};

export default TokenExpire;
