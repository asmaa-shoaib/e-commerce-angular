import { Component } from '@angular/core';
import { item } from '../../Models/item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss'
})
export class ItemsListComponent {
  items:item[]=[
    {
      id:0,
      title :'title0',
      imgUrl :'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      subtitle :'subtitle0',
      Description :'Description0',
      link :'link0'
    },
    {
      id:1,
      title :'title1',
      imgUrl :'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      subtitle :'subtitle1',
      Description :'Description0',
      link :'link1'
    },
    {
      id:2,
      title :'title2',
      imgUrl :'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      subtitle :'subtitle2',
      Description :'Description2',
      link :'link2'
    },
    {
      id:3,
      title :'title3',
      imgUrl :'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      subtitle :'subtitle3',
      Description :'Description3',
      link :'link3'
    }
  ]
}
