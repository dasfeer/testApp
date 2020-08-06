import { Component, OnInit, Input } from '@angular/core';
import { EnumProuctItem } from '../interfaces';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.less']
})
export class ProductItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() product: EnumProuctItem;

  isMarked = false;

  Mark() {
    this.isMarked = !this.isMarked;
    this.product.selected = this.isMarked;
  }
}
