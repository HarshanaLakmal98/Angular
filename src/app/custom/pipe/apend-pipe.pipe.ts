import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apendPipe'
})
export class ApendPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
