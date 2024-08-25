import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
@Input() Name :string='';
@Input() Image :string='';
@Input() Price :number=0;
@Input() Description :string='';
}
