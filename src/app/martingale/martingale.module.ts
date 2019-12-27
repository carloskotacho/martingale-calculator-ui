import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MartingaleCalculatorComponent } from './martingale-calculator/martingale-calculator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MartingaleCalculatorComponent
  ],
  exports: [
    MartingaleCalculatorComponent
  ]
})
export class MartingaleModule { }
