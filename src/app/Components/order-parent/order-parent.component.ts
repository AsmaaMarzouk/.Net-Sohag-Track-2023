import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.css'],
})
export class OrderParentComponent implements AfterViewInit {
  selectedCatID: number = 0;
  catList: Icategory[];
  totalPriceChanged: number = 0;

  // document.getEle
  // ###########
  // @ViewChild('userName') usrName: ElementRef|undefined=undefined;
  // @ViewChild('userName') usrName: ElementRef|null=null;

  // safe navigation operator
  // optianal
  // @ViewChild('userName') usrName?: ElementRef;

  // non null assertion operator
  @ViewChild('userName') usrName!:ElementRef;

  //

  @ViewChild(ProductsComponent) productCom!:ProductsComponent;
  // ###########

  constructor() {
    this.catList = [
      { id: 1, name: 'Mobiles' },
      { id: 2, name: 'LapTop' },
      { id: 3, name: 'TV' },
    ];
  }
  ngAfterViewInit(): void {
    // if(this.usrName)
    this.usrName.nativeElement.value = 'Hello Value from ts class';
    console.log(this.productCom.prdListOfCat);

  }
  totalPrice(total: number) {
    this.totalPriceChanged = total;
  }

  getPrd(){

    console.log(this.productCom.prdListOfCat);

  }
}
