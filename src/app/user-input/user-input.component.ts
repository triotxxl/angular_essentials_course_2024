import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
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

    this.enteredAnnualInvestment = '0';
    this.enteredExpectedReturn = '0';
    this.enteredDuration = '0';
    this.enteredInitialInvestment = '0';
  }
}
