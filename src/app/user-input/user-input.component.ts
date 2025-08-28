import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../../investment.input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '0';
  enteredDuration = '0';

  onSubmit() {
    console.log('Form submitted with values:');
    console.log('Initial Investment:', this.enteredInitialInvestment);
    console.log('Annual Investment:', this.enteredAnnualInvestment);
    console.log('Expected Return:', this.enteredExpectedReturn);
    console.log('Duration:', this.enteredDuration);

    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment, // + converts string to number
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration,
    });
  }
}
