import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    private productService:ProductService,
    private router: Router

    ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      product: '',
      code: '',
      available: '',
      price:'',
      rating:''
    });
  }

  onSubmit() {
    console.log(this.productForm.value);
    this.productService.createProduct(this.productForm.value).subscribe( product => {
      alert('Thêm thành công !');
      this.router.navigate(['/productList']);
    },
    error => {
      alert('Chưa thêm được!');
    }
    );
  }

}
