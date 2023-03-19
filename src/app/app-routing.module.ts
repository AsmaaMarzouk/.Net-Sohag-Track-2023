import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductComponent } from './Components/Admin/add-new-product/add-new-product.component';
import { HomeComponent } from './Components/home/home.component';
import { MainComponent } from './Components/main/main.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderParentComponent } from './Components/order-parent/order-parent.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';

// array of object
// pathes
// const routes: Routes = [
//   // first match wins
//   // {path:'',redirectTo:'/Home',pathMatch:'full'},//default path
//   // {path:'Home',component:HomeComponent},
//   // {path:'Order',component:OrderParentComponent},
//   // {path:'Products',component:ProductsComponent},
//   // {path:'**',component:NotFoundComponent}, //wildcard path

// ];

// const routes: Routes = [
//   {
//     path: 'main',
//     component: MainComponent,
//     children: [
//       { path: '', redirectTo: '/main/Home', pathMatch: 'full' }, //default path
//       { path: 'Home', component: HomeComponent, title: 'Home page' },
//       { path: 'Order', component: OrderParentComponent, title: 'Order Page' },
//       {
//         path: 'Products',
//         component: ProductsComponent,
//         title: 'Products Page',
//       },
//     ],
//   },

//   { path: '**', component: NotFoundComponent },
// ];
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: '/Home', pathMatch: 'full' }, //default path
      { path: 'Home', component: HomeComponent, title: 'Home page' },
      { path: 'Order', component: OrderParentComponent, title: 'Order Page' },
      {
        path: 'Products',
        component: ProductsComponent,
        title: 'Products Page',
      },
      {path:'productDetails/:prodId',component:ProductDetailsComponent},
      {path:'AdminNewPrd',component:AddNewProductComponent}
    ],
  },

  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
