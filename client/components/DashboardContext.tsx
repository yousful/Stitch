'use client'
import React, { createContext, useContext, useState } from 'react';

type DashboardContextType = {
  currentTitle: string;
  setCurrentTitle: (title: string) => void;
};

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTitle, setCurrentTitle] = useState('Dashboard');

  return (
    <DashboardContext.Provider value={{ currentTitle, setCurrentTitle }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
