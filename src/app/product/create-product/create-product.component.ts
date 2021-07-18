import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor() {
  }

  product: Product = {};

  @Output() newProduct = new EventEmitter<Product>();

  addNewItem(value: Product) {
    this.newProduct.emit(value);
  }

  ngOnInit() {
  }

}
