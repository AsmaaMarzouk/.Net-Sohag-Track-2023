import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  currentProdID: number = 0;

  prod: Iproduct | undefined = undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private prdService: ProductService,
    private location:Location
  ) {}
  ngOnInit(): void {
    // let productId=this.activatedRoute.snapshot.paramMap.get('prodId');
    // console.log(productId);
    this.currentProdID = this.activatedRoute.snapshot.paramMap.get('prodId')
      ? Number(this.activatedRoute.snapshot.paramMap.get('prodId'))
      : 0;
    // console.log(this.currentProdID);

    //  console.log(this.prdService.getProductByID(this.currentProdID));

    let returnedPrd = this.prdService.getProductByID(this.currentProdID);
    if (returnedPrd) {
      this.prod = returnedPrd;
      // console.log(this.prod);

    }
    else{
      alert("product not found")
      this.location.back();
    }
  }
}
