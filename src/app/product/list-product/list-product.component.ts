import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor() {
  }

  products: Product[] = [{
    name: 'A8',
    price: 20000,
    description: 'Audi'
  }, {
    name: 'C300',
    price: 15000,
    description: 'Mercedes'
  }];

  isCheck = false;
  isUpdate = false;

  currentItem: Product;

  addItem(newProduct: Product) {
    this.products.push(newProduct);
  }

  onCreate() {
    this.isCheck = !this.isCheck;
  }

  onEdit() {
    this.isUpdate = !this.isUpdate;
  }

  ngOnInit() {
  }
}
