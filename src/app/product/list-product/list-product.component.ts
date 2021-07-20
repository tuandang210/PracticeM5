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
    id: 1,
    name: 'A8',
    price: 20000,
    description: 'Audi'
  }, {
    id: 2,
    name: 'C300',
    price: 15000,
    description: 'Mercedes'
  }];

  isCheck = false;
  isUpdate = false;
  productCurrentIndex = -1;

  addItem(newProduct: Product) {
    this.products.push(newProduct);
  }

  onCreate() {
    this.isCheck = !this.isCheck;
  }

  onEdit(index) {
    this.isUpdate = !this.isUpdate;
    if (this.isUpdate) {
      this.productCurrentIndex = index;
    } else {
      this.productCurrentIndex = -1;
    }
  }

  deleteProduct(product) {
    const index: number = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
  ngOnInit() {
  }
}
