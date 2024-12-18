import { useState } from 'react';
import Ticket from '../components/Ticket.tsx';
import Filtering from '../components/Filtering.tsx';

import { ITicket } from '../types/types.ts';
import ticketsJson from '../utils/tickets.json';

import "../styles/App.css";

const App = () => {
  const sortedTickets = ticketsJson.tickets.sort((a, b) => a.price - b.price);
  const [ticketsData] = useState<ITicket[]>(sortedTickets);
  const [filteredTickets, setFilteredTickets] = useState<ITicket[]>(ticketsData);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredBySearchQuery = filteredTickets.filter((ticket) =>
    ticket.origin_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.destination_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="page">
      <img src="/airplane.png" alt="logo" className="page__logo" />

      <div className="search">
        <svg className="search__icon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.0833 16.3333H17.1617L16.835 16.0183C17.9783 14.6883 18.6667 12.9617 18.6667 11.0833C18.6667 6.895 15.2717 3.5 11.0833 3.5C6.895 3.5 3.5 6.895 3.5 11.0833C3.5 15.2717 6.895 18.6667 11.0833 18.6667C12.9617 18.6667 14.6883 17.9783 16.0183 16.835L16.3333 17.1617V18.0833L22.1667 23.905L23.905 22.1667L18.0833 16.3333V16.3333ZM11.0833 16.3333C8.17833 16.3333 5.83333 13.9883 5.83333 11.0833C5.83333 8.17833 8.17833 5.83333 11.0833 5.83333C13.9883 5.83333 16.3333 8.17833 16.3333 11.0833C16.3333 13.9883 13.9883 16.3333 11.0833 16.3333Z" fill="#525252" />
        </svg>

        <input
          type="text"
          placeholder="Поиск по городам..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="page__content">
        <Filtering ticketsData={ticketsData} onFilterChange={setFilteredTickets} />

        <div className="list">
          {filteredBySearchQuery.map((ticket, index) => (
            <Ticket key={index} ticket={ticket} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
