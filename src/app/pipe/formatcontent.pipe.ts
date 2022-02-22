import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatcontent'
})
export class FormatcontentPipe implements PipeTransform {

  transform(value: string, start: number, end: number): unknown {
    return value.substr(start, end)+ ' ...';
  }

}
