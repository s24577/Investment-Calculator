import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InvestmentInput} from "../investment-input.model";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {

 @Output() calculatedResults = new EventEmitter<InvestmentInput>();

  enteredInitialInvestment = '0';
  enteredAnnualInvestment= '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit() {
    this.calculatedResults.emit({
      initialInvestment: parseFloat(this.enteredInitialInvestment),
      annualInvestment: parseFloat(this.enteredAnnualInvestment),
      expectedReturn: parseFloat(this.enteredExpectedReturn),
      duration: parseFloat(this.enteredDuration)
    });
  }
}
