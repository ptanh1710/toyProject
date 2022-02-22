import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatnumber'
})
export class FormatnumberPipe implements PipeTransform {

  transform(value: number): unknown {
    return new Intl.NumberFormat().format(value);
  }

}
