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

import { ClipboardModule } from 'ngx-clipboard';

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
    ClipboardModule
  ],
  declarations: [
    MartingaleCalculatorComponent
  ],
  exports: [
    MartingaleCalculatorComponent
  ]
})
export class MartingaleModule { }
