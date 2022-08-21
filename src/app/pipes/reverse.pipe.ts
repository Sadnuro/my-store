import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    // string to array | reverse array | join items array to create string
    return value.split('').reverse().join('');
  }
}
