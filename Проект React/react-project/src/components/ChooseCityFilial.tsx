import React, { useState, useEffect } from "react";
import { useLocation } from "./LocationContext";

interface CityFilial {
  city: string;
  filials: string[];
}

interface ChooseCityFilialProps {
  onClose: (selectedCity: string, selectedFilial: string) => void;
  initialCity?: string;
  initialFilial?: string;
}

function ChooseCityFilial({ onClose, initialCity = '', initialFilial = '' }: ChooseCityFilialProps) {
  const { setSelectedCity, setSelectedFilial } = useLocation();
  const [cities, setCities] = useState<CityFilial[]>([]);
  const [selectedCity, setSelectedCityState] = useState(initialCity);
  const [selectedFilial, setSelectedFilialState] = useState(initialFilial);
  const [cityError, setCityError] = useState(false);
  const [filialError, setFilialError] = useState(false);

  useEffect(() => {
    fetch("/api/cities.json") // Загружаем данные из public/api/cities.json
      .then((response) => response.json())
      .then((data) => setCities(data))
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, []);

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCityState(e.target.value);
    setCityError(false); // Сбросить ошибку при изменении города
    setSelectedFilialState(""); // Сбросить выбранный филиал при смене города
  };

  const handleFilialChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilialState(e.target.value);
    setFilialError(false); // Сбросить ошибку при изменении филиала
  };

  const handleConfirm = () => {
    let hasErrors = false;
    if (!selectedCity) {
      setCityError(true);
      hasErrors = true;
    }
    if (!selectedFilial) {
      setFilialError(true);
      hasErrors = true;
    }

    if (!hasErrors) {
      setSelectedCity(selectedCity);
      setSelectedFilial(selectedFilial);
      onClose(selectedCity, selectedFilial);
    }
  };

  return (
    <div className="modal-overlay-filial">
      <div className="modal-filial">
        <h2>Выберите ваш город и филиал</h2>
        <form onSubmit={(e) => e.preventDefault()} className="formCityFilial">
          <div className="modal-content-filial">
            <div className="modal-field">
              <label htmlFor="city-select">Город:</label>
              <select
                id="city-select"
                value={selectedCity}
                onChange={handleCityChange}
                style={{ borderColor: cityError ? "red" : "" }}
              >
                <option value="">Город</option>
                {cities.map((city) => (
                  <option key={city.city} value={city.city}>
                    {city.city}
                  </option>
                ))}
              </select>
              {cityError && (
                <span className="modal-error-message">Выберите город из списка</span>
              )}
            </div>
            <div className="modal-field">
              <label htmlFor="filial-select">Филиал:</label>
              <select
                id="filial-select"
                value={selectedFilial}
                onChange={handleFilialChange}
                disabled={!selectedCity}
                style={{ borderColor: filialError ? "red" : "" }}
              >
                <option value="">Филиал</option>
                {selectedCity &&
                  cities
                    .find((city) => city.city === selectedCity)
                    ?.filials.map((filial) => (
                      <option key={filial} value={filial}>
                        {filial}
                      </option>
                    ))}
              </select>
              {filialError && (
                <span className="modal-error-message">Выберите филиал из списка</span>
              )}
            </div>
          </div>
          <div className="modal-actions">
            <button onClick={handleConfirm}>Подтвердить</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChooseCityFilial;