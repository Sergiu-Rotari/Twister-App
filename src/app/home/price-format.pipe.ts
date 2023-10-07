import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat'
})
export class PriceFormatPipe implements PipeTransform {
  transform(value: { amount: number, currency: string }): string {
    return `${value.amount} ${value.currency}`;
  }
}