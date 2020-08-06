import { Component } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [ProductsService]
})
export class AppComponent {
  products = [];
  groups = [];
  inCart = [];
  filterCategory = 'default';
  sortByABC = 'default';
  sortByPrice = 'default';
  productsInCard = [];
  summ = 0;
  amount = 0;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getData().subscribe(data => {
      this.products = data.products;
      this.groups = data.groups;
    });
  }

  // Перенести в корзину
  moveToCart() {
    let products = [];

    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].selected) {
        this.productsInCard.push(this.products[i]);
        this.summ += this.products[i].price;
      } else {
        products.push(this.products[i]);
      }
    }
    this.products = products;
    this.amount = this.productsInCard.length;
  }
}
