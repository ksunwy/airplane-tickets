import React, { useEffect, useState } from 'react';
import Checkbox from '../components/Checkbox.tsx';
import { FilteringProps } from '../types/types.ts';

import '../styles/components/filtering.css';

const Filtering: React.FC<FilteringProps> = ({ ticketsData, onFilterChange }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>('RUB');
  const [selectedStops, setSelectedStops] = useState<number[]>([]);

  const handleCurrencyClick = (currency: string) => {
    setSelectedCurrency(currency);
  };

  const handleStopsChange = (stops: number) => {
    if (stops === -1) {
      setSelectedStops([]);
    } else {
      setSelectedStops((prev) =>
        prev.includes(stops)
          ? prev.filter((s) => s !== stops)
          : [...prev.filter((s) => s !== -1), stops]
      );
    }
  };

  useEffect(() => {
    const filteredTickets = selectedStops.length
      ? ticketsData.filter((ticket) => selectedStops.includes(ticket.stops))
      : ticketsData;

    onFilterChange(filteredTickets);
  }, [selectedStops, ticketsData, onFilterChange]);

  return (
    <div className="filtering">
      <div>
        <h3>ВАЛЮТА</h3>
        <div>
          {['RUB', 'USD', 'EUR'].map((currency, i) => (
            <button key={currency} onClick={() => handleCurrencyClick(currency)} className={`button-${i} ${selectedCurrency === currency ? 'active' : ''}`}>
              {currency}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
        <div className="filtering__stops">
          {[{ label: 'Все', value: -1 }, { label: 'Без пересадок', value: 0 }, { label: '1 пересадка', value: 1 }, { label: '2 пересадки', value: 2 }, { label: '3 пересадки', value: 3 }].map(({ label, value }) => (
            <button key={value} className="filtering__stops-item"
             onClick={() => handleStopsChange(value)}
             >
              <Checkbox checked={value === -1 ? selectedStops.length === 0 : selectedStops.includes(value)}
              //  onChange={() => handleStopsChange(value)} 
               />
              <span>{label}</span>
              {/* <span className='filtering__stops-only'>только</span> */}
            </button>
          ))}
        </div>
      </div>
      <div className="">
        <h3>КОЛИЧЕСТВО БИЛЕТОВ</h3>
        <div className="filtering__stops">
          <div className="filtering__stops-item">
            <span>Всего билетов: {ticketsData.length !== 0 ? ticketsData.length : 0}</span>
          </div>
          <div className="filtering__stops-item">
            <span>Средняя цена билетов: {ticketsData.length !== 0 ? (
              (ticketsData.reduce((total, ticket) => total + ticket.price, 0) / ticketsData.length).toFixed(2)
            ) : 0}&#8381;
            </span>
          </div>
          <div className="filtering__stops-item">
            <span>
              Самый дешевый билет: {ticketsData.length !== 0 ? (
                ticketsData.reduce((min, ticket) => ticket.price < min ? ticket.price : min, ticketsData[0].price)
              ) : 0}&#8381;
            </span>
          </div>

          <div className="filtering__stops-item">
            <span>
              Самый дорогой билет: {ticketsData.length !== 0 ? (
                ticketsData.reduce((max, ticket) => ticket.price > max ? ticket.price : max, ticketsData[0].price)
              ) : 0}&#8381;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filtering;
