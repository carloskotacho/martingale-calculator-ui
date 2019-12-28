import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class ValuesForm {
  investment: string;
  payout: string;
  martingale: string;
}

@Component({
  selector: 'app-martingale-calculator',
  templateUrl: './martingale-calculator.component.html',
  styleUrls: ['./martingale-calculator.component.css']
})
export class MartingaleCalculatorComponent implements OnInit {

  valuesForm;
  martingaleList;

  constructor() { }

  ngOnInit() {
    this.valuesForm = new ValuesForm();
    this.martingaleList = [];
  }

  calculator(form: NgForm) {
    this.valuesForm.investment = form.value.investment;
    this.valuesForm.payout = form.value.payout;
    this.valuesForm.martingale = form.value.martingale;

    // Preencher vetor
  }
}
