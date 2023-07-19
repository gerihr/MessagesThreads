import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value);
    const monthAbbreviation =  this.datePipe.transform(date, 'MMM');
    const day = date.getDate();
    const suffix = this.getSuffix(day);

    return `${monthAbbreviation} ${day}${suffix}`;
  }

  private getSuffix(day: number): string {
    if (day >= 11 && day <= 13) {
      return 'th';
    }

    const lastDigit = day % 10;
    switch (lastDigit) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

  constructor(private datePipe: DatePipe){}
}