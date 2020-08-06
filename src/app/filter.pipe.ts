import { Pipe, PipeTransform } from '@angular/core';
import { EnumProuctItem } from './interfaces';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  lastSortByABC = 'default';
  lastSortByPrice = 'default';

  transform(products: EnumProuctItem[], value: string): EnumProuctItem[] {
    let groupBy: number | string = value[0];
    let sortByABC: string = value[1];
    let sortByPrice: string = value[2];
    let items: EnumProuctItem[] = products;

    // Фильтруем по группе
    if (groupBy !== 'default') {
      items = items.filter(product => {
        return product.id_group == groupBy
      });
    }

    // Сортируем по цене
    if (sortByPrice !== 'default' && this.lastSortByPrice !== sortByPrice) {
      if (sortByPrice === 'ASC') {
        items = items.sort((a, b) => {
          return a.price - b.price;
        })
      } else {
        items = items.sort((a, b) => {
          return a.price - b.price;
        });
        items.reverse();
      }
    }

    // Сортируем по алфавиту
    if (sortByABC !== 'default' && this.lastSortByABC !== sortByABC) {
      items = items.sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();

        if (nameA < nameB) {
          return sortByABC === 'ASC' ? -1 : 1;
        }

        if (nameA > nameB) {
          return sortByABC === 'ASC' ? 1 : -1;
        }

        return 0;
      })
    }

    this.lastSortByABC = sortByABC;
    this.lastSortByPrice = sortByPrice

    return items;
  }

}
