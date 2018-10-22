import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, args: string[]): string {
    return value && value.length > 20 ? value.substring(0, 20) + '...' : value;
  }
}
