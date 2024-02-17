import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strength',
  standalone: true,
})
export class StrengthPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 5) {
      return 'weak';
    } else if (value >= 5 && value < 10) {
      return 'stronger';
    } else {
      return 'strongest';
    }
  }
}
