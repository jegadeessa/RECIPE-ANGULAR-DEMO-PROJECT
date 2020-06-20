import { Pipe, PipeTransform } from '@angular/core';
import { ShopResponse } from '../../modals/modal';

@Pipe({
  name: 'billCalculator',
})
export class BillCalculatorPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let totalBill = 0;
    value.map((ele) => {
      if (ele.price) {
        totalBill += ele.quantity * ele.price;
      }
    });
    return totalBill;
  }
}
