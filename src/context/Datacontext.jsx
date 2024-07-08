
import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    username: 'Guest',
    isLoggedIn: false,
  });
  const [lng, setLng] = useState('en'); // Default language

  const changeDir = (language) => {
    setLng(language);
  };

  return (
    <DataContext.Provider value={{ userData, setUserData, lng, changeDir }}>
      {children}
    </DataContext.Provider>
  );
};
