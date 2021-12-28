import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const ResultProducts = [];
    for(const product of value)
    {
      if(product.name.toLowerCase().indexOf(arg.toLowerCase()) > -1)
      {
        ResultProducts.push(product);

      }
    }
    return ResultProducts;
  }

}
