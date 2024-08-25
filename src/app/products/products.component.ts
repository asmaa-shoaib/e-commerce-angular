import { Component } from '@angular/core';
import { product } from '../Models/Product';

@Component({
  selector: 'app-products',
  templateUrl:'./products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products:product[]=[
    { Name :'p0',
      Image :'1.jpg',
      Price :0,
      Description :'p0 Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length'},
    { Name :'p1',
      Image :'1.jpg',
      Price :1,
      Description :'p1 Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length'},
    { Name :'p2',
      Image :'1.jpg',
      Price :2,
      Description :'p2 Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length'},
    { Name :'p3',
      Image :'1.jpg',
      Price :3,
      Description :'p3 Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length'},
    { Name :'p4',
      Image :'1.jpg',
      Price :4,
      Description :'p4 Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length'}]
  constructor(){}

  AddProduct(prod:product){
    this.products.push(prod);
  }
}
