import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcTax'
})
export class CalcTaxPipe implements PipeTransform {

  transform(value: number,tax:number=10): number {
    return value*tax;
  }

}
