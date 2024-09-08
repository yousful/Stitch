'use client'
import React, { createContext, useContext, useState } from 'react';

type DashboardContextType = {
  currentTitle: string;
  setCurrentTitle: (title: string) => void;
  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
};

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTitle, setCurrentTitle] = useState('Dashboard'); 
  const [isSidebarOpen, setSidebarOpen] = useState(false);


  return (
    <DashboardContext.Provider value={{ currentTitle, setCurrentTitle, isSidebarOpen, setSidebarOpen }}>
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
