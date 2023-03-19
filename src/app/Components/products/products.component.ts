import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnChanges {
  // array of object => {}
  // productList: Iproduct[];
  date1: Date = new Date();

  // Day3
  // property decorator
  @Input() receivedCatID: number = 0;
  prdListOfCat: Iproduct[] = [];
  orderTotalPrice: number = 0;
  @Output() totalPriceEvent: EventEmitter<number>;

  // Day4
  // intailize , inject service
  constructor(
    private productService: ProductService,
    private router: Router,
    private productApi: ProductApiService
  ) {
    // Day3
    this.totalPriceEvent = new EventEmitter<number>();
    // ##################
    // intialize productList
    // category id =>
    // mobiles => 1 || laptop => 2 || tv => 3

    // this.productList = [
    //   {
    //     id: 1,
    //     name: 'Samsung',
    //     price: 12000,
    //     quantity: 2,
    //     catID: 1,
    //     imgURL:
    //       'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   },
    //   {
    //     id: 5,
    //     name: 'IPhone',
    //     price: 45000,
    //     quantity: 0,
    //     catID: 1,
    //     imgURL:
    //       'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   },
    //   {
    //     id: 14,
    //     name: 'Dell',
    //     price: 36200,
    //     quantity: 1,
    //     catID: 2,
    //     imgURL:
    //       'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   },
    //   {
    //     id: 33,
    //     name: 'HP',
    //     price: 45000,
    //     quantity: 0,
    //     catID: 2,
    //     imgURL:
    //       'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   },
    //   {
    //     id: 36,
    //     name: 'LG',
    //     price: 55000,
    //     quantity: 6,
    //     catID: 3,
    //     imgURL:
    //       'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   },
    //   {
    //     id: 24,
    //     name: 'Tornado',
    //     price: 13600,
    //     quantity: 4,
    //     catID: 3,
    //     imgURL:
    //       'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   },
    // ];
  }
  ngOnChanges(): void {
    // this.getProductsByCatID();
    // Day4
    //  this.prdListOfCat = this.productService.getProductsByCatID(this.receivedCatID);
    // Day5
    if(this.receivedCatID==0){

      this.productApi.getAllProducts().subscribe(data1=>{
        this.prdListOfCat=data1;
        // console.log(data1);

      })
    }
    else{
    this.productApi.getProductsByCatId(this.receivedCatID).subscribe(data => {
      this.prdListOfCat = data;
      // console.log(data);

    });
  }
  }
  ngOnInit(): void {
    // this.getProductsByCatID()
  }

  // Day3
  // getProductsByCatID(){
  //   if(this.receivedCatID==0){
  //     this.prdListOfCat=Array.from(this.productList);
  //     return;
  //   }
  //  this.prdListOfCat= this.productList.filter((prd)=>prd.catID==this.receivedCatID);

  // }

  updateTotalPrice(prdPrice: number, count: any) {
    // this.orderTotalPrice += prdPrice*count;

    // convert string to number
    // this.orderTotalPrice += (prdPrice* parseInt(count));
    // this.orderTotalPrice += (prdPrice* Number(count));
    // this.orderTotalPrice += (prdPrice* count as number);
    this.orderTotalPrice += prdPrice * +count;

    // to fire event use emit
    this.totalPriceEvent.emit(this.orderTotalPrice);
  }

  // Day4
  prdDetails(prdID: number) {
    // path , parameters
    this.router.navigate(['productDetails', prdID]);
  }

  // #######################
}
