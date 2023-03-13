import { Component } from '@angular/core';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  // array of object => {}
productList:Iproduct[];
date1:Date=new Date();

constructor(){

  // intialize productList
  // category id =>
  // mobiles => 1 || laptop => 2 || tv => 3

  this.productList=[
    {id:1,name: "Samsung",price:12000,quantity:2,catID:1,imgURL:"https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id:5,name: "IPhone",price:45000,quantity:0,catID:1,imgURL:"https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id:14,name: "Dell",price:36200,quantity:1,catID:2,imgURL:"https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id:33,name: "HP",price:45000,quantity:0,catID:2,imgURL:"https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id:36,name: "LG",price:55000,quantity:6,catID:3,imgURL:"https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id:24,name: "Tornado",price:13600,quantity:4,catID:3,imgURL:"https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
  ]
}


}
