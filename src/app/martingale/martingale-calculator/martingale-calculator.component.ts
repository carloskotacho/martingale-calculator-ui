import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ClipboardService } from 'ngx-clipboard';

class ValuesForm {
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
    this.valuesForm.investment = form.value.investment;
    this.valuesForm.payout = form.value.payout;
    this.valuesForm.martingale = form.value.martingale;

    // TODO: Preencher vetor
  }

  copiedSuccess() {
    this.messageService.add({severity: 'success', summary: 'Copiado!', detail: 'R$ ' + this.valueCopied });
  }

  copy(value: string) {
    this.valueCopied = value;
    this.clipboardService.copyFromContent(value);
  }
}
