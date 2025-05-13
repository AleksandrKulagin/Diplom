import React, { createContext, useContext, useState } from 'react';

interface LocationContextType {
  selectedCity: string;
  selectedFilial: string;
  setSelectedCity: (city: string) => void;
  setSelectedFilial: (filial: string) => void;
  isLocationSelected: () => boolean;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [selectedCity, setSelectedCityState] = useState(() => {
    const savedCity = localStorage.getItem('selectedCity');
    return savedCity || '';
  });

  const [selectedFilial, setSelectedFilialState] = useState(() => {
    const savedFilial = localStorage.getItem('selectedFilial');
    return savedFilial || '';
  });

  const setSelectedCity = (city: string) => {
    setSelectedCityState(city);
    localStorage.setItem('selectedCity', city);
  };

  const setSelectedFilial = (filial: string) => {
    setSelectedFilialState(filial);
    localStorage.setItem('selectedFilial', filial);
  };

  const isLocationSelected = () => {
    return Boolean(selectedCity && selectedFilial);
  };

  return (
    <LocationContext.Provider
      value={{
        selectedCity,
        selectedFilial,
        setSelectedCity,
        setSelectedFilial,
        isLocationSelected,
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