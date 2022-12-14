import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  newProductForm: FormGroup;
  submitted = false;

  constructor() {
    this.newProductForm = new FormGroup(
      {
        'productId': new FormControl('', Validators.required),
        'productName': new FormControl('', Validators.required),
        'productManager': new FormControl(''),
        'salesDate': new FormControl('', Validators.required)
      }
    );
  }
  onSubmit() {

  }

  handleClick($event: any) {
    this.newProductForm.reset();
  }
}
