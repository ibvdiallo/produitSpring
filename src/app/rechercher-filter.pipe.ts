import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rechercherFilter'
})
export class RechercherFilterPipe implements PipeTransform {

  transform(list: any[], filterText: string): any {
    return list ? list.filter(item => item.nomProduit.toLowerCase().includes(filterText)) : [];
  }
}
