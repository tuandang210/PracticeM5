import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product: Product = {};
  @Input() currentProduct: Product;


  constructor() {
  }

  editProduct(value: Product) {
    this.product = value;
  }

  ngOnInit() {
  }

}
