import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductApiService } from 'src/app/Services/product-api.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css'],
})
export class AddNewProductComponent {
  prd: Iproduct = {} as Iproduct;
  catList:Icategory[];
  constructor(private prdApi: ProductApiService,private router:Router) {
    this.catList = [
      { id: 1, name: 'Mobiles' },
      { id: 2, name: 'LapTop' },
      { id: 3, name: 'TV' },
    ];
  }
  addNew() {
    // let prd: Iproduct = {
    //   id: 123,
    //   name: 'new product',
    //   price: 1235,
    //   quantity: 2,
    //   catID: 1,
    //   imgURL:
    //     'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    // };

    // this.prdApi.addNewProduct(prd).subscribe({
    //   next: (prd) => {
    //     console.log(prd);
    //   },
    //   error: (err) => {
    //     console.log(err.message);
    //   },
    // });

    this.prdApi.addNewProduct(this.prd).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.router.navigate(['/Order'])
        },
        error: (err) => {
          console.log(err.message);
        },
      }

      // data=>{
      //   console.log(data);

      // }
    );
  }
}
