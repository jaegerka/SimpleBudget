import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  card = true;
  expenses = true;
  availablemoneyyearly = 0;
  availablemoneymonthly = 0;
  availablemoneyweekly = 0;
  availablemoneydaily = 0;

  rent = 0;
  carpayment = 0;
  carinsurance = 0;
  other = 0;

  totalexpenses = 0;

  openApplication() {
    this.card = false;
  }

  calculate(annualincome: number, monthlyexpenses: number) {
    this.availablemoneyyearly = annualincome - (monthlyexpenses*12)
    this.availablemoneymonthly = annualincome/12 - monthlyexpenses
    this.availablemoneyweekly = annualincome/52 - (monthlyexpenses*12/52)
    this.availablemoneydaily = annualincome/365 - (monthlyexpenses*12/365)
  }

  calculateexpenses() {
    this.expenses = false;
  }

  saveexpenses(rent: number, carpayment: number, carinsurance: number, other: number) {
    this.rent = rent;
    this.carpayment = carpayment;
    this.carinsurance = carinsurance;
    this.other = other;

    this.totalexpenses = rent*1 + carpayment*1 + carinsurance*1 + other*1;
  }

  closeexpenses() {
    this.expenses = true;
  }
}
