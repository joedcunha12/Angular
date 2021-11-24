import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:any=[
    {
      id:1,
      name:'Nokia 5.1 Plus',
      price: 8999,
      description:'Nokia 3GB/32GB',
      image:'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiH-JzRm73mAhUHwTgGHVJlDwAQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.techspot.com%2Fproducts%2Fsmartphones%2Fnokia-51-plus.187677%2F&psig=AOvVaw1TP1V9-GD3sF34SEPJOdWw&ust=1576690337548403'
    },
    {
      id:2,
      name:'Samsung A10s',
      price: 10999,
      description:'Samsung 4GB/32GB'
    },
    {
      id:3,
      name:'Redmi Mi note 5 pro',
      price: 12999,
      description:'MI 4GB/64GB'
    },
    {
      id:4,
      name:'Vivo Y2',
      price: 9500,
      description:'Vivo 3GB/32GB'
    }
  ];
  constructor() { }

  ngOnInit() {


  }



}
