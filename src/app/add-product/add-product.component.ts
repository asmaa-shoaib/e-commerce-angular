import { Component, EventEmitter, Output } from '@angular/core';
import { product } from '../Models/Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  product:product={
    Name:'',
    Description:'',
    Price:0,
    Image:'1.jpg  '
  }

  @Output() ExportProduct=new EventEmitter();

  onAddproduct(){
    console.log(this.product);
    this.ExportProduct.emit(this.product);
    this.product={
      Name:'',
      Description:'',
      Price:0,
      Image:'1.jpg'
    }
  }


}
