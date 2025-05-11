import React, { createContext, useContext, useState, useEffect } from 'react';

interface LocationContextType {
  selectedCity: string;
  selectedFilial: string;
  setSelectedCity: (city: string) => void;
  setSelectedFilial: (filial: string) => void;
  resetCity: () => void;
  resetFilial: () => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [selectedCity, setSelectedCity] = useState(() => {
    return localStorage.getItem('selectedCity') || '';
  });
  const [selectedFilial, setSelectedFilial] = useState(() => {
    return localStorage.getItem('selectedFilial') || '';
  });

  useEffect(() => {
    localStorage.setItem('selectedCity', selectedCity);
  }, [selectedCity]);

  useEffect(() => {
    localStorage.setItem('selectedFilial', selectedFilial);
  }, [selectedFilial]);

  const resetCity = () => {
    setSelectedCity('');
    setSelectedFilial('');
  };

  const resetFilial = () => {
    setSelectedFilial('');
  };

  return (
    <LocationContext.Provider
      value={{
        selectedCity,
        selectedFilial,
        setSelectedCity,
        setSelectedFilial,
        resetCity,
        resetFilial,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
} 