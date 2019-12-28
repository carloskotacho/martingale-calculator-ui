import { DashboardComponent } from './../dashboard/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MartingaleCalculatorComponent } from './martingale-calculator/martingale-calculator.component';

import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ToastModule } from 'primeng/toast';
import { SpinnerModule } from 'primeng/spinner';

import { ClipboardModule } from 'ngx-clipboard';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    ScrollPanelModule,
    ToastModule,
    ClipboardModule,
    CurrencyMaskModule,
    SpinnerModule
  ],
  declarations: [
    MartingaleCalculatorComponent,
    DashboardComponent
  ],
  exports: [
    MartingaleCalculatorComponent,
    DashboardComponent
  ]
})
export class MartingaleModule { }
