import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ClipboardService } from 'ngx-clipboard';

class ValuesForm {
  factor: string;
  investment: string;
  payout: string;
  martingale: string;
}

@Component({
  selector: 'app-martingale-calculator',
  templateUrl: './martingale-calculator.component.html',
  styleUrls: ['./martingale-calculator.component.css'],
  providers: [MessageService]
})
export class MartingaleCalculatorComponent implements OnInit {

  valuesForm;
  martingaleList;
  valueCopied;

  constructor(private messageService: MessageService, private clipboardService: ClipboardService) {}

  ngOnInit() {
    this.valuesForm = new ValuesForm();
    this.martingaleList = [];
    this.valueCopied = '';
  }

  calculator(form: NgForm) {
    this.martingaleList = [];
    this.valuesForm.factor  = form.value.factor;
    this.valuesForm.investment = form.value.investment;
    this.valuesForm.payout = form.value.payout;
    this.valuesForm.martingale = form.value.martingale;

    for (let i = 0; i < this.valuesForm.martingale; i++) {
      this.martingaleList.push({ value: Math.round(this.valuesForm.investment) });
      this.valuesForm.investment *= this.valuesForm.factor;
    }
  }

  copiedSuccess() {
    this.messageService.add({severity: 'success', summary: 'Copiado!', detail: 'R$ ' + this.valueCopied });
  }

  copy(value: string) {
    this.valueCopied = value;
    this.clipboardService.copyFromContent(value);
  }
}
