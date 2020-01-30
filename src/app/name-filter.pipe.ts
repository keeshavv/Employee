import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeStruct } from './EmployeeStruct';

@Pipe({
  name: 'Filter'
})
export class NameFilterPipe implements PipeTransform {

  transform(param1:EmployeeStruct[] , param2:string) : EmployeeStruct[]  {
    if (!param1) return null;
    if (!param2) return param1;
    var search = param2.toLowerCase();
    return param1.filter((a) => {
     return a.name.toLowerCase().startsWith(search);
   } );
 }

}
