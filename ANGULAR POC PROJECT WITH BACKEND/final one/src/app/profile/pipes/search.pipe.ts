import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    // value the array which we want to filter it.
    // args
    if (typeof args[0] === 'undefined') return value;

    return value.filter((profile) => {
      return profile.status.toUpperCase().indexOf(args[0].toUpperCase()) > -1;
    });
  }
}
// diff between unknown and any.
