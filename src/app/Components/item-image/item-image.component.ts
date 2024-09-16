import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-image',
  templateUrl: './item-image.component.html',
  styleUrl: './item-image.component.scss'
})
export class ItemImageComponent {

@Input({required:true}) ImgUrl:string=''
}
