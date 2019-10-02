import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Iproduct[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductList().subscribe(data => (this.product = data));
  }

}
