import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Data } from '@angular/router';

@Component({
  selector: 'app-prodct-details',
  templateUrl: './prodct-details.component.html',
  styleUrls: ['./prodct-details.component.css']
})
export class ProdctDetailsComponent implements OnInit {

  products:any=[
    {
      id:1,
      name:'Nokia 5.1 Plus',
      price: 8999,
      description:'Nokia 3GB/32GB',
      image:'../assets/img/nokia51.jpg'
    },
    {
      id:2,
      name:'Samsung A10s',
      price: 10999,
      description:'Samsung 4GB/32GB',
      image:'../assets/img/samsungA10.jpg'
    },
    {
      id:3,
      name:'Redmi Mi note 5 pro',
      price: 12999,
      description:'MI 4GB/64GB',
      image:'../assets/img/RedmiNote5.jpg'
    },
    {
      id:4,
      name:'Vivo Y2',
      price: 9500,
      description:'Vivo 3GB/32GB',
      image:'../assets/img/vivou10.jpg'
    }
  ];

  product:any= this.products[0];
  productId:any;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.products.forEach((p) => {
        if (p.id == params.id) {
          this.product = p;
        } 
      });
    });

  }

}
