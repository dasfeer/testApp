import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { EnumProuctItem, EnumGroupItem } from './interfaces';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  constructor(private http: HttpClient) {}

  // Получаем список товаров с группами, возвращаем объект с группами и товарами
  getData() {
    return this.http.get('http://ssdev.superagent.ru/TestApp/Values/GetWithParent')
      .pipe(
        map((response: any[]) => {
          const products: EnumProuctItem[] = [];
          const groups: EnumGroupItem[] = [];

          for (let i = 0; i < response.length; i++) {
            groups.push(response[i].group);
          }

          for (let i = 0; i < response.length; i++) {
            let groupItem = response[i].group;

            for (let j = 0; j < response[i].skus.length; j++) {
              let product = response[i].skus[j];
              
              product.id_group = groupItem.id;
              product.group_name = groupItem.name;
              product.selected = false;

              products.push(product);
            }
          }
          return {
            products: products,
            groups: groups
          };
        })
      );
  }
}
