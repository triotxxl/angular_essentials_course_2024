import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './tickets.model';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, CommonModule, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  trackById(index: number, ticket: any): any {
    return ticket.id;
  }

  onAdd(ticketData: { title: string; text: string }) {
    const ticket: Ticket = {
      title: ticketData.title,
      text: ticketData.text,
      status: 'open',
      id: Math.random().toString(),
    };

    this.tickets.push(ticket);
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id)
        return {
          ...ticket,
          status: 'closed',
        };
      return ticket;
    });
  }
}
