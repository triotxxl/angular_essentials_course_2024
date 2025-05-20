import { Component, Input, input, signal, output } from '@angular/core';
import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  // @Input({ required: true }) data!: Ticket;

  // detailsVisible = false;
  data = input.required<Ticket>();
  close = output();
  detailsVisible = signal(false);

  onToggleDetails() {
    // this.detailsVisible = !this.detailsVisible;
    // this.detailsVisible.set(!this.detailsVisible());  --- Way 1 for Signals

    this.detailsVisible.update((oldValue) => !oldValue);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
