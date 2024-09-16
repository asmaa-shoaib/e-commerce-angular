import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-link',
  templateUrl: './item-link.component.html',
  styleUrl: './item-link.component.scss'
})
export class ItemLinkComponent {
@Input({required:true}) linkTitle:string=''
@Input({required:true}) itemLink:string=''
}
