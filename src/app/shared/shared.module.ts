import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from './Header/Header.component';
import { CardComponent } from './Card/Card.component';
import { ListComponent } from './List/List.component';
import { RouterModule } from '@angular/router';
import { Route } from './routing';
import { PriceFormatPipe } from './pipe/pricepipe/priceFormat.pipe';
import { BillCalculatorPipe } from './pipe/billCalculator/billCalculator.pipe';

@NgModule({
   imports: [
      CommonModule,
      RouterModule.forChild(Route)
   ],
   declarations: [
      SharedComponent,
      HeaderComponent,
      CardComponent,
      ListComponent,
      PriceFormatPipe,
      BillCalculatorPipe
   ],
   exports: [
      HeaderComponent,
      CardComponent,
      ListComponent,
      PriceFormatPipe,
      BillCalculatorPipe
   ]
})
export class SharedModule { }
