import React from 'react';

import { TicketProps } from '../types/types.ts';
import { formatDate } from '../utils/formatDate.ts';
import { getDeclension } from '../utils/getDeclension.ts';

import '../styles/components/ticket.css';

const Ticket: React.FC<TicketProps> = ({ticket}) => {
  return (
    <div className='ticket'>
      <div className="ticket__buy">
        <img src="/logo.png" alt="turkish airlines" />
        <button>Купить <br /> за {ticket.price} &#8381;</button>
      </div>
      <div className="ticket__info">
        <div className="ticket__time">
          <span>{ticket.departure_time}</span>
          <div className="">{ticket.stops} {getDeclension(ticket.stops, ["ПЕРЕСАДКА", "ПЕРЕСАДКИ", "ПЕРЕСАДОК"])} <img src="/small__plane.png" alt="small__plane" className='small__plane' /> </div>
          <span>{ticket.arrival_time}</span>

        </div>
        <div className="ticket__date">
          <div>
            <span>{ticket.origin}, {ticket.origin_name}</span>
            <span>{formatDate(ticket.departure_date)}</span>
          </div>
          <div>
            <span>{ticket.destination_name}, {ticket.destination}</span>
            <span>{formatDate(ticket.arrival_date)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
