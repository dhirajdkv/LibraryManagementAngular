import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);
    if (value.length == 0 || args == "") {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      if (item['title'] == args) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
